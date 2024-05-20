import Image from "next/image";
import Link from "next/link";
import GenreDropdown from "./GenreDropdown";
import SearchInput from "./SearchInput";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
	return (
		<header className="w-full items-center backdrop-blur-2xl transition-colors justify-between p-5 bg-mainColor rounded-lg flex gap-4 md:gap-0 sticky z-50 top-0 ">
			<Link href="/">
				<h1 className="bg-amber-200 max-w-11 cursor-pointer">
					<span className="text-[#7ABA78]  bg-black ">Movie</span> <br />{" "}
					<span className="text-[#0A6847]  font-semibold bg-teal-400 ">
						{" "}
						Studio
					</span>
				</h1>
			</Link>
			<div className="text-black flex gap-1 items-center">
				<GenreDropdown />
				<SearchInput />
				<ThemeToggler />
			</div>
		</header>
	);
};

export default Header;
