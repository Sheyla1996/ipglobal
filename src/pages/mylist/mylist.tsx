import List from "../../components/list/list";
import { useSelector } from 'react-redux';

function MyList() {
    const movies = useSelector((state) => state.vote.movies);
    return (
        <>
            <List list={movies}></List>
        </>
    )
}

export default MyList