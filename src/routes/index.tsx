import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import NewsContainer from '../views/News'
import NewsOneContainer from '../views/News/Single'

export const publicRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <NewsContainer />
      },
      {
        path: '/news/:id',
        element: <NewsOneContainer />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
]

export default function PublicRoutes() {
  let element = useRoutes(publicRoutes)
  return element
}
