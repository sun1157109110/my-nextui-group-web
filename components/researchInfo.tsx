import { siteConfig } from "@/config/site";
import { Divider } from "@nextui-org/divider";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import Link from "next/link";

export default function ResearchInfo() {
  return (
    <div className="flex basis-1/2 flex-col ">
      <div className="flex items-center gap-2 sm:gap-4 py-2">
        <Divider orientation="vertical" className="w-0.5 sm:w-1 h-4 sm:h-7 bg-indigo" />
        <div className="text-base sm:text-xl font-semibold">代表性研究</div>
      </div>
      <Divider className="mb-3 bg-indigo" />
      <Link
        href={siteConfig.navItems[3].href}
        className=" bg-muted mb-2 flex h-36 cursor-pointer items-center justify-around rounded-lg border-2 border-dashed border-indigo p-4"
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
        <span className="shrink-0 sm:text-xl  font-extrabold">分子聚集态调控</span>
      </Link>
      <div className=" xl:bg-[url('/researchList/researchListBgc.jpg')] xl:bg-[length:6.5rem] xl:bg-left xl:bg-no-repeat xl:pl-24">
        {siteConfig.researchList.map((item) => (
          <>
            <div className="flex items-center gap-2 sm:gap-4 py-2">
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
                className="text-sm sm:text-base text-muted-foreground  font-semibold hover:text-indigo"
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
