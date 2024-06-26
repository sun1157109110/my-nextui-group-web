import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { nanoid } from "nanoid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function isMobile() {
  if (typeof document !== "undefined") {
    // 客户端代码，可以安全使用 document
    return "ontouchstart" in document?.documentElement;
  } else {
    // 服务器端或其他环境的代码
    return false;
  }
  // return "ontouchstart" in document?.documentElement;
}
export function groupBy(objs: any[]) {
  let res: any = {};
  for (let o of objs) {
    if (res[o.role]) {
      res[o.role].push(o);
    } else {
      res[o.role] = [o];
    }
  }
  return res;
}
export const uuid = () => {
  return nanoid();
};
