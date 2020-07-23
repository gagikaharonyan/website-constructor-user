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
            title: 'Page2',
            url: '/page2'
        },
        {
            id: 3,
            title: 'page3',
            url: '/page3'
        },
        {
            id: 4,
            title: 'Page4',
            url: '/page4'
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