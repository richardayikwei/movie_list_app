import Image from "next/image";
import SearchBar from "./ui/header/SearchBar";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="w-full">
      <header className="mt-7 flex flex-row items-center justify-between">
        <div className="flex">
          <a href="">
            <ChevronLeftIcon className="h-[1.75rem] w-[3rem]" />
          </a>
          <a href="">
            <ChevronRightIcon className="h-[1.75rem] w-[3rem]" />
          </a>
        </div>
        <SearchBar />
        <div className="flex justify-around w-full max-w-64">
          <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-7" />
          <div className="w-[1.875rem] h-[1.625rem] rounded-full bg-white"></div>
          <Bars3Icon className="w-8 h-7" />
        </div>
      </header>
    </div>
  );
}
