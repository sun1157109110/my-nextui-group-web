import { siteConfig } from "@/config/site";
import { Icons, IconsKeys } from "./icons";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";

export default function News() {
  return (
    <div className="flex basis-1/2 flex-col ">
      <div className="flex items-center gap-2 py-2 sm:gap-4">
        <Divider
          orientation="vertical"
          className="h-4 w-0.5 bg-indigo sm:h-7 sm:w-1"
        />
        <div className="text-base font-semibold sm:text-xl">新闻动态</div>
      </div>
      <Divider className=" bg-indigo" />
      {siteConfig.news.map((item) => (
        <>
          <div className="flex items-center gap-4 py-2">
            {Icons[item.icon as IconsKeys]({
              className: "w-6 h-6 sm:w-8 sm:h-8 shrink-0",
            })}
            <Link
              href={""}
              className="text-sm font-semibold text-muted-foreground  hover:text-indigo sm:text-base"
            >
              {item.label}
            </Link>
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
}
