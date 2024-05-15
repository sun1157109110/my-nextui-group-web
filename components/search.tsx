"use client";
import { Button, ButtonProps } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { ChevronRightLinearIcon, CloseIcon, SearchLinearIcon } from "./icons";
import { useRouter } from "next/navigation";
import { isAppleDevice, isWebKit } from "@react-aria/utils";
import { Command } from "cmdk";
import { cn } from "@/lib/utils";
import { Modal, ModalContent } from "@nextui-org/modal";
import { intersectionBy, isEmpty, result } from "lodash";
import { tv } from "tailwind-variants";
import { siteConfig } from "@/config/site";
import { writeStorage, useLocalStorage } from "@rehooks/local-storage";

type Props = {};
interface SearchResultItem {
  content: string;
  objectID: string;
  url: string;
  type: "lvl1" | "lvl2" | "lvl3";
  hierarchy: {
    lvl1: string | null;
    lvl2?: string | null;
    lvl3?: string | null;
  };
}
const cmdk = tv({
  slots: {
    base: "max-h-full overflow-y-auto",
    header: [
      "flex",
      "items-center",
      "w-full",
      "px-4",
      "border-b",
      "border-default-400/50",
      "dark:border-default-100",
    ],
    searchIcon: "text-default-400 text-lg",
    input: [
      "w-full",
      "px-2",
      "h-14",
      "font-sans",
      "text-lg",
      "outline-none",
      "rounded-none",
      "bg-transparent",
      "text-default-700",
      "placeholder-default-500",
      "dark:text-default-500",
      "dark:placeholder:text-default-300",
    ],
    list: ["px-4", "mt-2", "pb-4", "overflow-y-auto", "max-h-[50vh]"],
    itemWrapper: [
      "px-4",
      "mt-2",
      "group",
      "flex",
      "h-16",
      "justify-between",
      "items-center",
      "rounded-lg",
      "shadow",
      "bg-content2/50",
      "active:opacity-70",
      "cursor-pointer",
      "transition-opacity",
      "aria-selected:bg-indigo",
      "aria-selected:text-primary-foreground",
    ],
    leftWrapper: ["flex", "gap-3", "items-center", "w-full", "max-w-full"],
    leftIcon: [
      "text-default-500 dark:text-default-300",
      "group-data-[selected=true]:text-primary-foreground",
    ],
    itemContent: ["flex", "flex-col", "gap-0", "justify-center", "max-w-[80%]"],
    itemParentTitle: [
      "text-default-400",
      "text-xs",
      "group-data-[selected=true]:text-primary-foreground",
      "select-none",
      "line-clamp-1",
    ],
    itemTitle: [
      "truncate",
      "text-default-500",
      "group-data-[selected=true]:text-primary-foreground",
      "select-none",
      "line-clamp-2",
    ],
    emptyWrapper: [
      "flex",
      "flex-col",
      "text-center",
      "items-center",
      "justify-center",
      "h-32",
    ],
  },
});
const MATCH_KEYS = [];
const RECENT_SEARCHES_KEY = "recent-searches";
const MAX_RECENT_SEARCHES = 10;
const MAX_RESULTS = 30;

const Search = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [commandKey, setCommandKey] = useState<"ctrl" | "command">("command");
  const slots = useMemo(() => cmdk(), []);
  const [recentSearches] = useLocalStorage<any[]>(RECENT_SEARCHES_KEY);
  const inputLock = useRef(false);

  const addToRecentSearches = (item: any) => {
    let searches = recentSearches ?? [];

    // Avoid adding the same search again
    if (!searches.find((i) => i.title === item.title)) {
      writeStorage(
        RECENT_SEARCHES_KEY,
        [item, ...searches].slice(0, MAX_RECENT_SEARCHES),
      );
    } else {
      // Move the search to the top
      searches = searches.filter((i) => i.title !== item.title);
      writeStorage(
        RECENT_SEARCHES_KEY,
        [item, ...searches].slice(0, MAX_RECENT_SEARCHES),
      );
    }
  };

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const res: any = [];
    siteConfig.news.forEach(
      (i: (typeof siteConfig.news)[number] & { content?: string }) => {
        if (i.label.includes(query))
          res.push({
            title: i.label,
            content: i?.content || "内容详情待添加.........",
            url: "/publish/list/1",
          });
      },
    );
    siteConfig.researchList.forEach(
      (i: (typeof siteConfig.researchList)[number] & { content?: string }) => {
        if (i.label.includes(query))
          res.push({
            title: i.label,
            content: i?.content || "内容详情待添加.........",
            url: "/research",
          });
      },
    );
    siteConfig.publish.forEach((i: (typeof siteConfig.publish)[number]) => {
      if (i.title.includes(query))
        res.push({
          title: i.title,
          url: "/publish/list/1",
        });
    });
    siteConfig.members.forEach(
      (i: (typeof siteConfig.members)[number] & { description?: string }) => {
        if (i.label.includes(query))
          res.push({
            title: i.name,
            content: i?.description || "人物详情.........",
            url: "/members",
          });
      },
    );
    return res.slice(0, MAX_RESULTS);
  }, [query]);

  const items: any[] = results;
  useEffect(() => {
    setCommandKey(isAppleDevice() ? "command" : "ctrl");
  }, []);
  // Toggle the menu when ⌘K / CTRL K is pressed
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const hotkey = isAppleDevice() ? "metaKey" : "ctrlKey";

      if (e?.key?.toLowerCase() === "k" && e[hotkey]) {
        e.preventDefault();
        setOpen(open ? false : true);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);
  const CloseButton = useCallback(
    ({
      onPress,
      className,
    }: {
      onPress?: ButtonProps["onPress"];
      className?: ButtonProps["className"];
    }) => {
      return (
        <Button
          isIconOnly
          className={cn(
            "border border-default-400 data-[hover=true]:bg-content2 dark:border-default-100",
            className,
          )}
          radius="full"
          size="sm"
          variant="bordered"
          onPress={onPress}
        >
          <CloseIcon />
        </Button>
      );
    },
    [],
  );
  const searchButton = (
    <Button
      aria-label="Quick search"
      className="bg-default-400/20 text-sm font-normal text-default-500 dark:bg-default-500/20"
      endContent={
        <Kbd className="hidden px-2 py-0.5 lg:inline-block" keys={commandKey}>
          K
        </Kbd>
      }
      startContent={
        <SearchLinearIcon
          className="pointer-events-none flex-shrink-0 text-base text-default-400"
          size={18}
          strokeWidth={2}
        />
      }
      onPress={() => {
        setOpen(true);
      }}
    >
      Quick Search...
    </Button>
  );
  // const handleComposition = (e: React.CompositionEvent) => {
  //   if (e.type === "compositionend") {
  //     inputLock.current = false;

  //     // webkit：compositionstart onChange compositionend
  //     // firefox：compositionstart compositionend onChange
  //     if (navigator.userAgent.indexOf("WebKit") > -1) {
  //       setQuery(query+e.data)
  //     }
  //     return;
  //   }
  //   inputLock.current = true;
  // };

  const renderItem = useCallback(
    (item: any, index: number, isRecent = false) => {
      const mainIcon = (
        <SearchLinearIcon
          className={slots.leftIcon()}
          size={20}
          strokeWidth={2}
        />
      );

      return (
        <Command.Item
          key={item.objectID}
          className={slots.itemWrapper()}
          value={`${item.title}${item.content}${index}`}
          onSelect={() => {
            setOpen(false);
            router.push(item.url);
            addToRecentSearches(item);
          }}
        >
          <div className={slots.leftWrapper()}>
            {mainIcon}
            <div className={slots.itemContent()}>
              <span className={slots.itemParentTitle()}>{item.title}</span>
              <p className={slots.itemTitle()}>{item.content}</p>
            </div>
          </div>
          <ChevronRightLinearIcon size={14} />
        </Command.Item>
      );
    },
    [CloseButton, slots],
  );
  return (
    <>
      {searchButton}
      <Modal
        isOpen={open}
        hideCloseButton
        backdrop="opaque"
        classNames={{
          base: [
            "mt-[20vh]",
            "border-small",
            "dark:border-default-100",
            "supports-[backdrop-filter]:bg-background/80",
            "dark:supports-[backdrop-filter]:bg-background/30",
            "supports-[backdrop-filter]:backdrop-blur-md",
            "supports-[backdrop-filter]:backdrop-saturate-150",
          ],
          backdrop: ["bg-black/80"],
        }}
        motionProps={{
          onAnimationComplete: () => {
            if (!open) {
              setQuery("");
            }
          },
        }}
        placement="top-center"
        scrollBehavior="inside"
        size="xl"
        onClose={() => {
          setOpen(false);
        }}
      >
        <ModalContent>
          <Command className={slots.base()} label="Quick search command" loop>
            <div className={slots.header()}>
              <SearchLinearIcon
                className={slots.searchIcon()}
                strokeWidth={2}
              />
              <Command.Input
                autoFocus={!isWebKit()}
                className={slots.input()}
                placeholder="Search documentation"
                value={query}
                // onCompositionStart={handleComposition}
                // onCompositionEnd={handleComposition}
                // onValueChange={(v)=>{if(!inputLock.current)setQuery(v)}}
                onValueChange={setQuery}
              />
              {query.length > 0 && <CloseButton onPress={() => setQuery("")} />}
              <Kbd className="ml-2 hidden border-none px-2 py-1 text-[0.6rem] font-medium md:block">
                ESC
              </Kbd>
            </div>
            <Command.List className={slots.list()} role="listbox">
              <Command.Empty>
                {query.length > 0 && (
                  <div className={slots.emptyWrapper()}>
                    <div>
                      <p>No results for &quot;{query}&quot;</p>
                      {query.length === 1 ? (
                        <p className="text-default-400">
                          Try adding more characters to your search term.
                        </p>
                      ) : (
                        <p className="text-default-400">
                          Try searching for something else.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </Command.Empty>

              {isEmpty(query) &&
                (isEmpty(recentSearches) ? (
                  <div className={slots.emptyWrapper()}>
                    <p className="text-default-400">No recent searches</p>
                  </div>
                ) : (
                  recentSearches &&
                  recentSearches.length > 0 && (
                    <Command.Group
                      heading={
                        <div className="flex items-center justify-between">
                          <p className="text-default-600">Recent</p>
                        </div>
                      }
                    >
                      {recentSearches.map((item, index) =>
                        renderItem(item, index, true),
                      )}
                    </Command.Group>
                  )
                ))}

              {results.map((item: any, index: number) =>
                renderItem(item, index),
              )}
            </Command.List>
          </Command>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Search;
