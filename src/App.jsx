import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import Homepage from './pages/Homepage.jsx'
import About from './pages/About.jsx'
import Pokemon, { loader as PokemonLoader } from './pages/Pokemon.jsx'
import SinglePokemon, { loader as SinglePokemonLoader } from './pages/SinglePokemon.jsx'
import Err404 from './pages/Err404.jsx'
import Error from './pages/Error.jsx'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: 'true',
          element: <Homepage />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "pokemon",
          element: <Outlet />,
          children: [
            {
              index: 'true',
              element: <Pokemon />,
              errorElement: <Error />,
              loader: PokemonLoader
            },
            {
              path: ":id",
              element: <SinglePokemon />,
              errorElement: <Error />,
              loader: SinglePokemonLoader
            }
          ]
        },
        {
          path: '*',
          element: <Err404 />
        }
      ]
    }
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
