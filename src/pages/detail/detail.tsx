import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useFetchGet } from "../../api/useFetch";
import { addVote } from '../../redux/voteSlice';
import Loading from "../../components/loading/loading";
import Error from "../../components/error/error";

function Detail() {

    const { id } = useParams();
    const [inputValue, setInputValue] = useState<number | ''>('');
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.vote.movies);

    useEffect(() => {
        if (movies && movies.length > 0 && movies.filter(item => item.id == id).length > 0) {
            setInputValue(movies.filter(item => item.id == id)[0].vote);
        }
    }, [ id, movies ]);

    const { data, loading, error } = useFetchGet(
        `https://api.themoviedb.org/3/movie/${id}?`,
        'detail'
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value !== '' ? parseInt(value) : '');
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputValue !== '') {
            dispatch(addVote({movie: data, vote: inputValue}));
            setInputValue('');
        }
    };

    return (
        <>
            {loading && <Loading />}
            {error && <Error />}
            {data && <div className="flex">
                 <img
                    className="w-48 rounded-lg"
                    src={`${import.meta.env.VITE_TMDB_IMAGE_URL}${data.poster_path}`}
                    alt={data.title}/>
                <div className="px-8">
                    <h1 className="text-2xl font-bold pb-4">{data.title} ({data.original_title})</h1>
                    <p><b>Sipnosis:</b> {data.overview}</p>
                    <p><b>Release date:</b> {data.release_date}</p>
                    <p><b>Genres:</b> {data.genres.map(genre => genre.name).join(', ')}</p>
                    <p><b>Languages:</b> {data.spoken_languages.map(lng => lng.name).join(',')}</p>
                    <p><b>Production companies:</b> {data.production_companies.map(company => company.name).join(', ')}</p>
                    <form className="my-4" onSubmit={handleSubmit}>
                        <label>
                            Voto:
                            <input
                                type="number"
                                min="0"
                                max="10"
                                className="w-16 ml-3 rounded-md border bg-transparent border-gray-300/80 shadow-lg text-right"
                                value={inputValue}
                                onChange={handleInputChange} />
                        </label>
                        <button
                            type="submit"
                            className="rounded-lg bg-slate-500 text-white px-3 py-1 ml-3">
                            Votar
                        </button>
                    </form>
                </div>
            </div>}
        </>
    )
}

export default Detail