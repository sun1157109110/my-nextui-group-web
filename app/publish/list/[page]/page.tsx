import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import ClientPagination from "@/components/pagination";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { redirect } from "next/navigation";
import { isMobile } from "@/lib/utils";

interface Props {
  params: { page: string };
}
export default function PricingPage({ params }: Props) {
  const ismob = isMobile()
  const page = Number(params.page);
  const totalNum = siteConfig.publish.length;

  const pageSize = 12;
  const colSize = ismob?1:4;
  const total = Math.ceil(totalNum / pageSize);
  if (page > total) {
    throw new Error("Page not found");
  }
  let nowRow = 3;
  //最后一页并且不是刚好满数
  if (page >= total && total % pageSize !== 0) {
    nowRow = Math.ceil((total % pageSize) / colSize);
  }
  const start = (page - 1 < 0 ? 0 : page - 1) * pageSize;
  const end = start + pageSize;
  const data = siteConfig.publish.slice(start, end);
  
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
      <div className="flex flex-col ">
        <div className="flex items-center gap-4 py-2">
          <Divider orientation="vertical" className="h-7 w-1 bg-indigo" />
          <div className="text-xl font-semibold">Recent Publications</div>
        </div>
        <Divider className="mb-3 bg-indigo" />
        <div className={`grid grid-cols-1 sm:grid-cols-4 gap-4 grid-rows-${nowRow} my-3`}>
          {data.map((item,index) => (
            <Card isHoverable={true} isPressable={true} key={item.title+index}>
              <CardHeader className="relative">
                <Link href={""} className="h-full w-full">
                  <Image
                    // as={NextImage}
                    isZoomed={true}
                    src={item.img}
                    alt=""
                    width={480}
                    height={360}
                  />
                </Link>
              </CardHeader>
              <CardBody>
                <Link
                  href={""}
                  className="line-clamp-2 font-semibold hover:text-indigo sm:text-xs md:text-sm 2xl:text-base"
                >
                  {item.title}
                </Link>
              </CardBody>
              <CardFooter className=" text-sm font-light">
                {item.date}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <ClientPagination
        loop={true}
        disableAnimation={true}
        showControls
        total={total}
        page={page}
        size="lg"
        radius="sm"
        prefix="/publish/list/"
      />
    </section>
  );
}
