"use client";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { Movie } from "../../types/type";

const MovieCard = ({ movie }: { movie: Movie }) => {
	const router = useRouter();
	const handleRoute = () => {
		router.push(`/movie/${movie?.id}`);
	};
	return (
		<div
			onClick={handleRoute}
			className="relative tet-black flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg"
		>
			<div className="absolute inset-0  z-10" />
			<p className="absolute z-20 bottom-5 left-5">{movie?.title}</p>
			<Image
				src={getImagePath(movie?.backdrop_path || movie?.poster_path)}
				alt={movie?.title}
				width={1920}
				height={1080}
				className="w-fit lg:min-w-[400px] h-56 object-cover shadow-md shadow-gray-900 drop-shadow-xl"
			/>
		</div>
	);
};

export default MovieCard;
