import { useState } from "react";
import List from "../../components/list/list";

function Home() {
    const [url, setUrl] = useState('https://api.themoviedb.org/3/movie/popular?');
    return (
        <>
            <List url={url}></List>
        </>
    )
}

export default Home