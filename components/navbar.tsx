"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { NextUILogo, SearchLinearIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import  LanguageSwitch  from "./langueage-switch";
import React from "react";
import { usePathname } from "next/navigation";
import Search from "./search";
import { Dictionary, Locale } from "@/dictionaries";


type Props = {
  dict: Dictionary;
  lang: Locale;
};
export const Navbar = ({ dict, lang }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean | undefined>(
    false,
  );
  const pathname = usePathname();
  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <Link className="flex items-center justify-start space-x-2" href="/">
            <NextUILogo className="h-8 w-8 text-indigo" />
            <p className="font-bold text-muted-foreground">Niu Group</p>
          </Link>
        </NavbarBrand>
        <ul className="ml-2 hidden justify-start gap-4  md:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={cn(
                  linkStyles({ isBlock: true, color: "secondary" }),
                  "hover:after:z-[-1] hover:after:rounded hover:after:bg-secondary/90 ",
                  "data-[active=true]:font-medium data-[active=true]:text-primary",
                  "text-base text-muted-foreground",
                )}
                href={`/${lang}${item.href}`}
              >
                {dict.menu[item.label as keyof typeof dict.menu]}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">
          <Search />
        </NavbarItem>
        <NavbarItem className="hidden gap-2 sm:flex">
          <LanguageSwitch />
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        <LanguageSwitch />
        <ThemeSwitch />
        <Search
          type="icon"
          handleCloseMenu={() => {
            setIsMenuOpen(false);
          }}
        />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                // as={Link}
                className={cn(
                  item.href === pathname
                    ? "text-xl font-medium text-indigo dark:text-foreground"
                    : "opacity-80 dark:opacity-60",
                )}
                href={`/${lang}${item.href}`}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {dict.menu[item.label as keyof typeof dict.menu]}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
