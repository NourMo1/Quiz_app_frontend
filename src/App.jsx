import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import Error from './pages/Error'
import Layout from './layout/Layout'
import store from './redux/store'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/quiz",
          element: <Quiz />,
        },
        {
          path: "/result",
          element: <Result />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
    
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App