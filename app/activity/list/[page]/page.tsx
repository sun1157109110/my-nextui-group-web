import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import ClientPagination from "@/components/pagination";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Suspense } from "react";
import { Skeleton } from "@nextui-org/skeleton";
import NextImage from "next/image";

interface Props {
  params: { page: string };
}
export default function PricingPage({ params }: Props) {
  const { page } = params;
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
      <div className="flex flex-col ">
        <div className="flex gap-4 py-2 items-center">
          <Divider orientation="vertical" className="w-1 h-7 bg-indigo" />
          <div className="text-xl font-semibold">Recent Publications</div>
        </div>
        <Divider className="mb-3 bg-indigo" />
        <div className="grid gap-4 grid-cols-3 grid-rows-3 my-3">
          {siteConfig.publish.map((item) => (
            <Card isHoverable={true} isPressable={true}>
              <CardHeader className="relative">
                <Link href={""}>
                  <Image
                    as={NextImage}
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
                  className=" transition-colors line-clamp-2 font-semibold sm:text-sm md:text-base 2xl:text-lg hover:text-indigo"
                >
                  {item.title}
                </Link>
              </CardBody>
              <CardFooter className=" font-light text-sm">
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
        total={10}
        page={Number(page)}
        size="lg"
        radius="sm"
      />
    </section>
  );
}
