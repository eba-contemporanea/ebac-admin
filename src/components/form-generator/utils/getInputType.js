const getInputType = (input) => {
    const isArray = Array.isArray(input);
    if(isArray) {
        return 'array';
    }

    if(input == null) {
        return 'string';
    }

    return typeof input;
};

export { getInputType };