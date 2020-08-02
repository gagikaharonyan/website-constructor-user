export const cutText = (text, cutTo) => {
    return text.length > cutTo ? text.substring(0, cutTo) + '...' : text
}

