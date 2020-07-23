import React from 'react';

import {useParams} from 'react-router-dom';

function Post () {
    const params = useParams()

    return params.title;
}

export default Post;