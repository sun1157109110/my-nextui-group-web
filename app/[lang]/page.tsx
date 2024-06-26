import Carousel from "@/components/carousel/carousel";
import { faker } from "@faker-js/faker";
import ResearchInfo from "@/components/researchInfo";
import News from "@/components/news";
import { Locale, getDictionary } from "@/dictionaries";


const imgs = Array(5)
  .fill(0)
  .map(() =>
    faker.image.urlLoremFlickr({ category: "city", width: 1600, height: 384 }),
  );

export default async function Home({
  params,
}: {
  params: { page: string; lang: Locale };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <section className="flex flex-col items-center justify-center gap-2 pb-8 sm:gap-4 md:pb-10">
      <Carousel slides={imgs} options={{ loop: true }} />
      <div className="flex w-full  flex-col gap-2 sm:flex-row sm:gap-6">
        <ResearchInfo dict={dict} lang={params.lang} />
        <News dict={dict} lang={params.lang} />
      </div>
    </section>
  );
}
