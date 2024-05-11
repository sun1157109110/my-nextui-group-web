import { title } from "@/components/primitives";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import ClientPagination from "@/components/pagination";
interface Props {
  params: { page: string };
}
export default function PricingPage({ params }: Props) {
  const { page } = params;
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
      <div className="flex flex-col ">
        <div className="flex items-center gap-4 py-2">
          <Divider orientation="vertical" className="h-7 w-1 bg-indigo" />
          <div className="text-xl font-semibold">Recent Publications</div>
        </div>
        <Divider className="mb-3 bg-indigo" />
        <div className="">
          {siteConfig.researchList.map((item) => (
            <>
              <div className="flex items-center gap-4 py-2">
                <Link href={""}>
                  <Image
                    className=" flex shrink-0"
                    src={item.imgSrc}
                    alt=""
                    width={120}
                    height={77}
                  />
                </Link>
                <span className="text-md  font-semibold text-muted-foreground">
                  <Link className=" hover:text-indigo" href={""}>
                    {item.label}
                  </Link>
                </span>
              </div>
              <Divider />
            </>
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
        prefix="/publish/list/"
      />
    </section>
  );
}
