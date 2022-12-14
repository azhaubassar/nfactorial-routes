import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

export default function Movie(){
    const [movie, setMovie] = useState({})
    const { id } = useParams();

    useEffect(()=>{
        const dataFromAPI = { id: id, name: 'Wednsday' }
        setMovie(dataFromAPI)
    }, [])

    return <h1> Movie id - {id}, name - {movie.name}</h1>
}