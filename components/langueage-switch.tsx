"use client";

import { FC, useEffect} from "react";

import { ChineseIcon, EnglishIcon } from "@/components/icons";
import {  useLocalStorage } from "@rehooks/local-storage";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useIsSSR } from "@react-aria/ssr";
import { defaultLocale } from "@/dictionaries";

export interface LanguageSwitchProps {}

const LanguageSwitch: FC<LanguageSwitchProps> = () => {
  const params = useParams();
  const [lang, setLang] = useLocalStorage("lang", defaultLocale );
  const isSSR = useIsSSR();

  // const pathname = usePathname().replace(`/${lang}`, "");

  const pathname = usePathname();
  const router = useRouter();
  // console.log(params.lang);
  // console.log("------");
  // console.log(lang);

  useEffect(() => {
    if (!lang) return;
    document.documentElement.lang = lang || defaultLocale ;
    // if (params.lang === lang || !lang) {
    //   setLang(params.lang as string)
    //   return;
    // }
    if (params.lang === lang) return;
    // setLang(params.lang as string)
    router.replace(pathname.replace(params.lang as string, lang));
  }, [params.lang, pathname, router, lang]);
  const handleChange = () => {
    if (!lang) return;
    setLang(lang === "zh-Hans" ? "en" : "zh-Hans");
  };
  const isSelected = lang === "en" || isSSR;
  // console.log( isSSR ,typeof window);
  return (
    <div className="cursor-pointer !text-default-500" onClick={handleChange}>
      {!isSelected || isSSR ? (
        <EnglishIcon size={22} />
      ) : (
        <ChineseIcon size={22} />
      )}
    </div>
  );
};

export default LanguageSwitch;
