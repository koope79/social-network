export const requiredField = (value) => {
    if (value) return undefined;
    return 'Required';
}

export const maxLength = (max) => {
    return function (value) {
        if (value && value.length > max) return `Max length ${max} symbols!`;
        return undefined;
    }
}

export const email = value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'Invalid email address';
    return undefined;
}


