import { FC } from "react"
import { useFetchGet } from "../../api/useFetch";
import FilmCard from "../film-card/film-card";
import { Movie } from "../../shared/types";
import Loading from "../loading/loading";
import Error from "../../components/error/error";

interface ListProps {
    url?: string,
    list?: Array<Movie>
}
const List: FC<ListProps> = ({ url, list }) => {
    let data = {};
    let loading = true;
    let error = null;

    if (list) {
        data = { results: list };
        loading = false;
    } else {
        ({ data, loading, error } = useFetchGet(
            url,
            'search'
        ))
    }

    return (<>
        {loading && <Loading />}
        {error && <Error />}
        {data && data.results && data.results.length > 0 && <div className="grid grid-cols-8 gap-4" data-testid="list-movies">
            {data.results.map((item: Movie) => <FilmCard key={item.id} movie={item}></FilmCard>)}
        </div>}
    </>)
}

export default List