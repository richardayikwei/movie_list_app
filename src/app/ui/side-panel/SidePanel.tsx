import Image from "next/image";
import { inter } from "../fonts";
import { newfeed } from "@/app/lib/data";

function SidePanel() {
  return (
    <aside className="w-[14.3125rem] flex-col  bg-[#151515]">
      <h2 className="ml-8 mt-7 text-xl">
        DXX.<span className="text-[#FF0000]">MOVIES</span>
      </h2>
      <section className="w-[7.3125rem] h-[9.4375rem] mt-[7.375rem]">
        <p className="ml-8">New feed</p>
        <nav
          className={`ml-7 text-xs ${inter.variable} antialiased mt-[1.125rem] flex flex-col h-[7.1875rem] justify-between `}
        >
          {newfeed.map((feed) => {
            return (
              <a href="" className="flex items-center" key={feed.title}>
                <Image
                  src={feed.image}
                  width={feed.dim}
                  height={feed.dim}
                  alt={feed.title}
                />
                <span className="ml-[0.8125rem]">{feed.title}</span>
              </a>
            );
          })}
        </nav>
      </section>
      <section className="h-[19.5rem] w-[8.625rem] mt-9 ml-[1.625rem] ">
        <p>Categories</p>
        <nav></nav>
      </section>
    </aside>
  );
}

export default SidePanel;
