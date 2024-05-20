import { siteConfig } from "@/config/site";
import { groupBy } from "@/lib/utils";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { Avatar } from "@nextui-org/avatar";

export default function Members() {
  let membersData = groupBy(siteConfig.members);
  type memObjType = (typeof siteConfig.members)[number];
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
      <div>
        {Object.keys(membersData).map((item) => (
          <>
            <div className="pt-4" key={item}>
              <h2 className="scroll-m-20 pb-4 text-lg font-semibold tracking-tight first:mt-0 sm:text-2xl">
                {item}
              </h2>
              <ul className="flex flex-wrap items-center sm:gap-6">
                {membersData[item].map((memObj: memObjType, index: number) => (
                  <li
                    key={memObj.name + index}
                    className="flex  basis-1/2 flex-col items-center justify-center p-2 sm:basis-auto"
                  >
                    <Avatar
                      isBordered
                      as={Link}
                      href={""}
                      showFallback
                      src={memObj.avatar}
                      className="h-20 w-20 sm:h-48 sm:w-48"
                    ></Avatar>
                    <Link
                      href={""}
                      className=" py-3 text-center text-sm font-semibold text-muted-foreground hover:text-indigo sm:text-xl"
                    >
                      {memObj.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Divider />
          </>
        ))}
      </div>
    </section>
  );
}
