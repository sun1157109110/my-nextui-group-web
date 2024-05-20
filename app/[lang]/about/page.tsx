import { title } from "@/components/primitives";
import Search from "@/components/search";

export default function AboutPage() {

 
  return (
    <div className="flex flex-col">
      <h1 className={title()}>About</h1>
      <Search />
    </div>
  );
}
