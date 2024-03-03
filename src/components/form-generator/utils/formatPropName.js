const formatPropName = (name) => {
    const formatArray = name.split(/(?=[A-Z])/);
    const uncapitalizedString = formatArray.join(' ');
    const capitalizedFirstLetter = uncapitalizedString.charAt(0).toUpperCase();
    const finalString = capitalizedFirstLetter + uncapitalizedString.slice(1);
     
    return finalString.replace(',', '');
};

export { formatPropName };