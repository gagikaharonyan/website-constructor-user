export const cutText = (text, cutTo) => {
    if(typeof text === 'undefined' || !text) {
        return ''
    }
    return text.length > cutTo ? text.substring(0, cutTo) + '...' : text
}

