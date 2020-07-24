import {componentTypes as type} from '../../constants'

const customRes = {
    headerPages: [
        {
            id: 1,
            title: 'Home',
            url: '/'
        },
        {
            id: 2,
            title: 'Posts',
            url: '/posts'
        },
        {
            id: 3,
            title: 'Events',
            url: '/events'
        },
        {
            id: 4,
            title: 'Contact us',
            url: '/contact'
        },
        {
            id: 4,
            title: 'About',
            url: '/about'
        }
    ],
    pages: [
        {
            page: 'Home',
            components: [
                {
                    type: type.SLIDE,
                    imgUrl: ''
                },
                {
                    type: type.POST,
                    imgUrl: '',
                    title: 'About React',
                    description: 'This article speaks about React js'
                },
                {
                    type: type.QUOTE,
                    text: 'Be yourself; everyone else is already taken.'
                },
                {
                    type: type.POST,
                    imgUrl: '',
                    title: 'About React',
                    description: 'This article speaks about React js'
                }
            ]
        }
    ]
}

export default customRes;