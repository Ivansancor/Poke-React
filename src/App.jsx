import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import Homepage from './pages/Homepage.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: 'true',
          element: <Homepage />
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
