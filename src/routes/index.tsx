import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import PostsContainer from '../views/Posts'
import PostOneContainer from '../views/Posts/Single'

export const publicRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <PostsContainer />
      },
      {
        path: '/posts/:id',
        element: <PostOneContainer />
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
