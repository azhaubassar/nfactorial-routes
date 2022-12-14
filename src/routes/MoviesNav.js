import { Link, Outlet } from 'react-router-dom'

export default function MoviesNav(){
    
    return ( 
        <>
        <nav>
            <ul>
              <li>
                <Link to="/movies/new"> New Moview </Link>
              </li>
              <li>
                <Link to="/movies/1"> Movie 1</Link>
              </li>
              <li>
                <Link to="/movies/2"> Movie 2</Link>
              </li>
            </ul>
          </nav>
          <Outlet context={{data: "Hello world"}}/>
        </>
    )
}