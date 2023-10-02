import { FC } from "react"
import { Movie } from "../../shared/types"
import { Link } from 'react-router-dom';
import moment from 'moment';

interface FilmCardProps {
    movie: Movie
}
const FilmCard: FC<FilmCardProps> = ({movie}) =>  {

    moment.locale('es');
    const releaseDate = moment(movie.release_date).format('DD MMMM');

    return (<>
        <Link to={'/detail/' + movie.id} relative="path">
            <div className="rounded-lg border border-gray-100/50 shadow-lg relative" data-testid="film-card">
                <p className="absolute top-0 right-0 px-3 py-1 bg-gray-500/75 rounded-tr-lg rounded-bl-lg text-white">{releaseDate}</p>
                <img
                    className="w-full rounded-t-lg"
                    src={`${import.meta.env.VITE_TMDB_IMAGE_URL}${movie.poster_path}`}
                    alt={movie.title}/>
                <div className="p-4">
                    <p className="text-lg">{movie.title}</p>
                </div>
            </div>
        </Link>
    </>)
}

export default FilmCard;