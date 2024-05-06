// import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import Carousel from "@/components/carousel/carousel";
import { faker } from "@faker-js/faker";
import ResearchInfo from "@/components/researchInfo";
import News from "@/components/news";

const imgs = Array(5)
  .fill(0)
  .map(() => faker.image.urlLoremFlickr({ category: "people", width: 1500 }));
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
      <Carousel slides={imgs} options={{ loop: true }} />
      <div className="flex w-full gap-6">
        <ResearchInfo />
        <News />
      </div>
    </section>
  );
}
