import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Locale, getDictionary } from "@/dictionaries";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <html suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex h-screen flex-col">
            <Navbar dict={dict} lang={params.lang} />
            <main className="container mx-auto max-w-7xl flex-grow px-6">
              {children}
            </main>
            <footer className="flex w-full flex-col items-center justify-center py-3">
              <span className="text-sm text-default-400">@2024</span>
              <p className="text-primary">develop by NiuGroup</p>
              {/* <iframe
                className="hidden md:block md:h-[500px] md:w-[500px]"
                src="https://m.amap.com/navi/?dest=121.427288,31.143561&destName=华东理工大学徐汇校区实验十五楼&hideRouteIcon=1&key=09aff3a270f1d29a7f4f1877ff46a63d"
                loading="lazy"
              ></iframe> */}
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d390.4176628127436!2d121.42682583782079!3d31.143259912119888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDA4JzM2LjYiTiAxMjHCsDI1JzM3LjgiRQ!5e0!3m2!1szh-CN!2shk!4v1715583605887!5m2!1szh-CN!2shk" width="600" height="450"  loading="lazy" ></iframe> */}
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
