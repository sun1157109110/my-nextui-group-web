'use client'
import { siteConfig } from "@/config/site";
import { TypographyDemo } from "@/components/text";
import { Divider } from "@nextui-org/divider";
import { Tabs, Tab } from "@nextui-org/tabs";
export default function ResearchTabs() {
  return (
      <Tabs aria-label="Dynamic tabs" isVertical={true} items={siteConfig.researchList}>
        {(item) => (
          <Tab key={item.label} title={`研究方向`}>
            <div className="flex gap-4  items-center ">
              <Divider orientation="vertical" className="w-1 h-7 bg-indigo" />
              <div className="text-xl font-semibold">Research</div>
            </div>
            <Divider className="mb-4 mt-2 bg-indigo" />
            <TypographyDemo />
          </Tab>
        )}
      </Tabs>
  );
}
