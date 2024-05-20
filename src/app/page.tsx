import CarouselBanner from "@/components/CarouselBanner";
import MovieContainer from "@/components/MovieContainer";
import {
	getNowPlayingMovies,
	getPopularMovies,
	getTopRatedMovies,
	getUpcomingMovies,
} from "@/lib/getMovies";
import React from "react";

const Home = async () => {
	const nowPlayingMovies = await getNowPlayingMovies();
	const upcomingMovies = await getUpcomingMovies();
	const topRatedMovies = await getTopRatedMovies();
	const popularMovies = await getPopularMovies();
	return (
		<div>
			<CarouselBanner />
			<div className="flex flex-col space-y-2">
				<MovieContainer movies={nowPlayingMovies} title="Now Playing" />
				<MovieContainer movies={upcomingMovies} title="Upcoming" />
				<MovieContainer movies={topRatedMovies} title="Top Rated" />
				<MovieContainer movies={popularMovies} title="Popular" />
			</div>
		</div>
	);
};

export default Home;
