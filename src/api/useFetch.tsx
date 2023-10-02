import { useEffect, useState } from "react";

export function useFetchGet(url: string, mockFile: string) {

    const [data, setData] = useState<object | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();
    const [controller, setController] = useState<AbortController>();


    useEffect(() => {
        const abortController = new AbortController();
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer  ${import.meta.env.VITE_API_KEY}`
            }
        };
        url = `${url}&api_key=${import.meta.env.VITE_API_KEY}`

        setController(abortController);
        setLoading(true);
        if (import.meta.env.VITE_MOCKS) {
            fetch(url, options)
                .then(response => response.json())
                .then(json => setData(json))
                .catch(error => setError(error))
                .finally(() => setLoading(false));
        } else {
            /* @vite-ignore */
            import(`../mocks/${mockFile}.json`)
                .then(mock => setData(mock.default))
                .catch(error => setError(error))
                .finally(() => setLoading(false));
        }

    }, [url, mockFile]);

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError('Request canceled');
        }
    }

    return { data, loading, error, handleCancelRequest };
}