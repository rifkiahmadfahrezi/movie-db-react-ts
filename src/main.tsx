import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'

const Main = lazy(() => import('./Components/Layout/Main'))
const Root = lazy(() => import('./Pages/Root'))
const Detail = lazy(() => import('./Pages/Detail'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Suspense fallback="loading...">
                     <Main />
                </Suspense>
      },
      {
        path: 'detail/:movieID',
        element: <Suspense fallback="loading...">
                    <Detail />
                </Suspense>
      },

    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
