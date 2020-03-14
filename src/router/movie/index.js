export default {
    path: '/movie',
    name:'movie',
    component: () => import('@/views/Movie'),
    children:[
        {
            path: 'nowplaying',
            name: 'nowplayiing',
            component: () => import('@/components/NowPlaying')
        },
        {
            path: 'search',
            name: 'search',
            component: () => import('@/components/Search')
        },
        {
            path: 'commingsoon',
            name: 'commingsoon',
            component: () => import('@/components/CommingSoon')
        },
        {
            path: 'city',
            name: 'city',
            component: () => import('@/components/City')
        },
        {
            path: 'detail/1/:movieId',
            components: {
                default: () => import('@/components/NowPlaying'),
                detail: () => import('@/views/Movie/detail')
            },
            props:{
                detail: true
            }
        },
        {
            path: 'detail/2/:movieId',
            components: {
                default: () => import('@/components/CommingSoon'),
                detail: () => import('@/views/Movie/detail')
            },
            props:{
                detail: true
            }
        },
        {
            path: '/movie',
            redirect: 'nowplaying'
        }
    ]
}