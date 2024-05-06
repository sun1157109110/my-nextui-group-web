import { siteConfig } from "@/config/site";
import { Divider } from "@nextui-org/divider";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";
import Link from "next/link";

export default function ResearchInfo() {
  return (
    <div className="flex flex-col basis-1/2 ">
      <div className="flex gap-4 py-2 items-center">
        <Divider orientation="vertical" className="w-1 bg-indigo" />
        <div className="text-xl font-semibold">代表性研究</div>
      </div>
      <Divider className="mb-3 bg-indigo" />
      <Link href={siteConfig.navItems[3].href} className=" bg-muted p-4 h-36 border-dashed border-2 border-indigo rounded-lg flex justify-around items-center cursor-pointer mb-2">
        <Image isZoomed as={NextImage} loading="eager"  src="/researchInfoTitle.png" alt="" width={215} height={114} />
        <span className="text-xl  font-extrabold">分子聚集态调控</span>
      </Link>
      <div className=" xl:pl-24 xl:bg-[url('/researchList/researchListBgc.jpg')] xl:bg-no-repeat xl:bg-[length:6.5rem] xl:bg-left">
        {siteConfig.researchList.map((item) => (
          <>
            <div className="flex items-center gap-4 py-2">
              <Link href={siteConfig.navItems[3].href} className=" shrink-0 flex">
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
              <Link href={siteConfig.navItems[3].href} className="text-md hover:text-indigo  text-muted-foreground font-semibold">
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
