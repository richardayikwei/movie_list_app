import Image from "next/image";
import { inter } from "../fonts";
import { newfeed } from "@/app/lib/data";
import genres from "@/app/lib/placeholder-data-genre.json";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function SidePanel() {
  return (
    <aside className="w-[14.3125rem] bg-[var(--side-panel)] min-h-screen pb-3">
      <h2 className="ml-8 mt-9 text-xl">
        DXX.<span className="text-[#FF0000]">MOVIES</span>
      </h2>
      <section className="w-[7.3125rem] h-[9.4375rem] mt-[7.375rem]">
        <p className="ml-8">New feed</p>
        <nav
          className={`ml-7 text-xs ${inter.variable} antialiased mt-[1.125rem] flex flex-col h-[7.1875rem] justify-between `}
        >
          {newfeed.map((feed) => {
            return (
              <a
                href=""
                className="flex items-center dark:hover:text-slate-400 hover:text-white"
                key={feed.title}
              >
                <feed.icon width={feed.dim} height={feed.dim} />
                <span className="ml-[0.8125rem]">{feed.title}</span>
              </a>
            );
          })}
        </nav>
      </section>
      <section className="h-[19.5rem] w-[8.625rem] mt-9 ml-[1.625rem]">
        <p>Categories</p>
        <nav className="flex flex-col mt-[1.9375rem] h-[14.4375rem] justify-between">
          {genres.genres.slice(0, 10).map((genre) => {
            return (
              <a
                href=""
                key={genre.id}
                className="dark:hover:text-slate-400 hover:text-white"
              >
                {genre.name}
              </a>
            );
          })}
        </nav>
        <button
          type="button"
          className="mt-[1.4375rem] dark:hover:text-slate-400 hover:text-white flex items-center text-xs "
        >
          View more
          <span>
            <ChevronRightIcon className="h-[0.75rem] w-[1.333125rem]" />
          </span>
        </button>
      </section>
    </aside>
  );
}

export default SidePanel;
