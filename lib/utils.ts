import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function isMobile() {
  return "ontouchstart" in document.documentElement;
}
export function groupBy(objs:any[]){
  let res:any = {};
  for(let o of objs){
    if(res[o.role]){
      res[o.role].push(o)
    }else{
      res[o.role] = [o]
    }
  }
  return res
}