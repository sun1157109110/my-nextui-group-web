// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResearchTabs from "@/components/researchTabs";
export default function ResearchPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 pt-4 md:pb-10">
      <ResearchTabs />
    </section>
  );
}
