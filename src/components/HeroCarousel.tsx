"use client";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
import { Movie } from "../../types/type";
import { getImagePath } from "@/lib/getImagePath";

interface Props {
	movies: Movie[];
}

const HeroCarousel = ({ movies }: Props) => {
	const [emblaRef] = useEmblaCarousel({ loop: false }, [AutoPlay()]);
	return (
		<div className="overflow-hidden cursor-pointer relative" ref={emblaRef}>
			<div className="flex">
				{movies.map((movie) => (
					<div key={movie?.id} className="flex-full min-w-0 relative">
						<Image
							src={getImagePath(movie?.backdrop_path, true)}
							alt={movie?.title}
							width={1920}
							height={1080}
						/>
						<div className="hidden lg:inline absolute top-0 pt-40 xl:pt-72 left-0 z-20 h-full w-full p-10 space-y-5 text-white">
							<h2 className="text-5xl font-bold max-w-xl">{movie?.title}</h2>
							<p className="max-w-xl line-clamp-3">{movie?.overview}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HeroCarousel;
