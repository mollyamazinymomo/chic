import { lazy } from 'react'

const HomePage = lazy(() => import('../view/home/home.js'));
const UserHome = lazy(() => import('../view/user/user-home.js'));
const NoMatch = lazy(() => import('../view/no-match/no-match'))

// 这里可以优化成自动根据view目录生成router

export const router = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/homepage',
        element: <HomePage />,
    },
    {
        path: '/userHome',
        element: <UserHome />
    },
    {
        path: '*',
        element: <NoMatch />
    }
]
