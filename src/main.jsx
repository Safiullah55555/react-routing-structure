import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<div>Ops page not found</div>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/team',
        element:<Team/>
      },
      {
        path:'/about',
        element:<About/>
      }

    ]
  }
], {
  // this solve warnings
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod:true,
    v7_partialHydration:true,
    v7_relativeSplatPath:true,
    v7_skipActionErrorRevalidation:true,
    
  },
})

import App from './App.jsx'
import Home from './home.jsx'
import Team from './team.jsx'
import About from './about.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* adding future=... solve last warning */}
    <RouterProvider router={router} future={{
    v7_startTransition: true,
  }}/>
  </StrictMode>,
)
