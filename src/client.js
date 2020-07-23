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