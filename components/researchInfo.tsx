import { siteConfig } from "@/config/site";
import { Divider } from "@nextui-org/divider";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import {type Dictionary,type Locale } from "@/dictionaries";
type Props = {
  dict: Dictionary;
  lang: Locale;
};
export default function ResearchInfo({ dict, lang }: Props) {
  return (
    <div className="flex basis-1/2 flex-col ">
      <div className="flex items-center gap-2 py-2 sm:gap-4">
        <Divider
          orientation="vertical"
          className="h-4 w-0.5 bg-indigo sm:h-7 sm:w-1"
        />
        <div className="text-base font-semibold sm:text-xl">{dict.researchInfo.title}</div>
      </div>
      <Divider className="mb-3 bg-indigo" />
      <Link
        href={siteConfig.navItems[3].href}
        className=" mb-2 flex h-36 cursor-pointer items-center justify-around rounded-lg border-2 border-dashed border-indigo bg-muted p-4"
      >
        <Image
          isZoomed
          as={NextImage}
          loading="eager"
          src="/researchInfoTitle.png"
          alt=""
          width={215}
          height={114}
        />
        <span className="shrink-0 font-extrabold  sm:text-xl">
          分子聚集态调控
        </span>
      </Link>
      <div className=" xl:bg-[url('/researchList/researchListBgc.jpg')] xl:bg-[length:6.5rem] xl:bg-left xl:bg-no-repeat xl:pl-24">
        {siteConfig.researchList.map((item) => (
          <>
            <div className="flex items-center gap-2 py-2 sm:gap-4">
              <Link
                href={siteConfig.navItems[3].href}
                className=" flex shrink-0"
              >
                <Image
                  as={NextImage}
                  isZoomed
                  // className=" shrink-0 flex"
                  src={item.imgSrc}
                  alt=""
                  width={120}
                  height={77}
                />
              </Link>
              <Link
                href={siteConfig.navItems[3].href}
                className="text-sm font-semibold  hover:text-indigo sm:text-base"
              >
                {item.label}
              </Link>
            </div>
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
}
