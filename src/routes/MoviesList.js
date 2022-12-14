import { useOutletContext,useLocation } from "react-router-dom"

export default function MovieList(){

    const context = useOutletContext();
    console.log(context)

    const location = useLocation(); 
    console.log(location.state)

    return <h1>Movie List</h1>
}