"use client";
import { siteConfig } from "@/config/site";
import { TypographyDemo } from "@/components/text";
import { Divider } from "@nextui-org/divider";
import { Tabs, Tab } from "@nextui-org/tabs";
import { isMobile } from "@/lib/utils";
export default function ResearchTabs() {
  const ismob = isMobile();
  console.log(ismob);

  return (
    <Tabs
      aria-label="Dynamic tabs"
      items={siteConfig.researchList}
      defaultSelectedKey={siteConfig.researchList[0].label}
    >
      {(item) => (
        <Tab key={item.label} title={`研究方向`}>
          {/* <div className="flex items-center  gap-4 ">
            <Divider orientation="vertical" className="h-7 w-1 bg-indigo" />
            <div className="text-xl font-semibold">Research</div>
          </div>
          <Divider className="mb-4 mt-2 bg-indigo" /> */}
          <TypographyDemo />
        </Tab>
      )}
    </Tabs>
  );
}
