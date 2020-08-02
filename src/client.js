import axios from 'axios';

export function getPosts(onSuccess) {
    axios.get(`https://website-constructor.firebaseio.com/posts.json`)
    .then(onSuccess)
    .catch(function (error) {
        console.log(error);
    });
}

export function getContactInfos(onSuccess) {
    axios.get(`https://website-constructor.firebaseio.com/contacts.json`)
    .then(onSuccess)
    .catch(function (error) {
        console.log(error);
    })
}

export function getSiteBaseInfo(onSuccess) {
    axios.get(`https://website-constructor.firebaseio.com/nav-bar.json`)
    .then(onSuccess)
    .catch(function (error) {
        console.log(error);
    })
}

export function getEvents(onSuccess) {
    axios.get(`https://website-constructor.firebaseio.com/events.json`)
    .then(onSuccess)
    .catch(function (error) {
        console.log(error);
    })
}
