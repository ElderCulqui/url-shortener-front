import { useEffect, useState } from 'react'
import List from './List'
import { ShortenedUrl } from '../../schemas/shortenedUrlSchema'
import axios from 'axios'

type Props = {}

function Index({}: Props) {
    const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrl[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const url = 'http://url-shortener-backend.test/api/shortener-url';
                const token = localStorage.getItem('token');
                const response = await axios.get(url, {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  });
                
                const data = response.data.data;
                setShortenedUrls(data);
                // console.log('Data:', response.data);
            } catch (error) {
                console.error('Error:', error);
            }
            
            setLoading(false);
        };

        fetchData();
    }, [])

    if (loading) {
        return <p>Cargando...</p>
    }

    return (
        <div className="container mt-4">
            <List shortenedUrls={shortenedUrls} />
        </div>
    )
}

export default Index