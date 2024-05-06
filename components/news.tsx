import { siteConfig } from "@/config/site";
import { Icons, IconsKeys } from "./icons";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";

export default function News() {
  return (
    <div className="flex basis-1/2 flex-col ">
      <div className="flex items-center gap-4 py-2">
        <Divider orientation="vertical" className="w-1 bg-indigo" />
        <div className="text-xl font-semibold">新闻动态</div>
      </div>
      <Divider className=" bg-indigo" />
      {siteConfig.news.map((item) => (
        <>
          <div className="flex items-center gap-4 py-2">
            {Icons[item.icon as IconsKeys]({ className: "w-8 h-8 shrink-0" })}
            <Link
              href={""}
              className="text-md text-muted-foreground font-semibold hover:text-indigo"
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
