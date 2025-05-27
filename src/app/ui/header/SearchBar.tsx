import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-[21.6875rem] h-[2.5625rem] pl-[3.25rem] rounded-xl bg-[var(--search-bar)] shadow-xl "
        placeholder="search any movies...."
      />
      <MagnifyingGlassIcon className="absolute top-3 left-3  h-5 w-5 text-gray-500" />
    </div>
  );
};

export default SearchBar;
