import './App.css';
import Home from './routes/Home';
import { Link, NavLink, Route, Routes, useRoutes } from 'react-router-dom'
import MovieList from './routes/MoviesList';
import Movie from './routes/Movie';
import NotFound from './routes/NotFound';
import NewMovie from './routes/NewMovie';
import MoviesNav from './routes/MoviesNav';

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/movies",
      element: <MoviesNav/>,
      children: [
        {
          index: true,
          element: <MovieList/>,
        },
        {
          path:':id',
          element: <Movie/>,
        },
      ],
    },
    {
      path:'*',
      element: <NotFound/>
    }
  ])

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink style={({isActive})=>{
              return isActive ? {color:'red'} : {}
            }} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink  style={({isActive})=>{
              return isActive ? {color:'red'} : {}
            }} to="/movies" state={{movies:[ {id:0}, {id:1}]}}> Movies </NavLink>
          </li>
        </ul>
      </nav>

      {element}
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<MoviesNav/>} >
          <Route index element={ <MovieList/> }/>
          <Route path=':id' element={ <Movie/>} />
          <Route path='new' element={ <NewMovie/>}/>
        </Route>
        <Route path='/about' element={<><h1>About</h1></>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes> */}
   </>
  );
}

export default App;
