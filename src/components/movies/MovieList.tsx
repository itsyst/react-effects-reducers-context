import Register from '../admin/Register';
import MoviePage from './MoviePage';
import MovieRow from './MovieRow';
import { MovieType } from './MovieType';
import useMovieStore from './store';

interface MovieListProps {
	title: string;
}

const MovieList = ({ title }: MovieListProps) => {
	const { user, movies, handleSelectedMovie } = useMovieStore();

	return (
		<div className="row pb-4">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<h1 className="text-left mb-4 text-uppercase text-light">{title}</h1>
						{user ? (
							<div className="row row-cols-1 row-cols-md-3 g-4">
								{movies.map((movie: MovieType) => (
									<MovieRow
										movie={movie}
										key={movie.id}
										onSelect={() => handleSelectedMovie(movie)}
									/>
								))}
							</div>
						) : (
							<div className="alert alert-warning text-center" role="alert">
								Please log in to view the movie list.
							</div>
						)}
					</div>

					<div className="col-md-4">
						<Register />
						<MoviePage />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieList;
