import {post as customPost} from './customs';
import axios from 'axios';

export function getPost(title, onSuccess) {
    // axios.get(`/posts/${title}`)
    // .then(onSuccess)
    // .catch(function (error) {
    //     // handle error
    //     console.log(error);
    // })

    setTimeout(() => {
        onSuccess(customPost);
    }, 200)
}

export function getContactInfos(onSuccess) {
    axios.get(`https://website-constructor.firebaseio.com/contacts.json`)
    .then(onSuccess)
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

export function getSiteBaseInfo(onSuccess) {
    axios.get(`https://website-constructor.firebaseio.com/nav-bar.json`)
    .then(onSuccess)
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

export function getEventsInfo(onSuccess) {
    axios.get(`https://website-constructor.firebaseio.com/events.json`)
    .then(onSuccess)
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}