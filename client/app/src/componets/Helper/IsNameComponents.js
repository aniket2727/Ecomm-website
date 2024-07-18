

// check if given input is valid name mean no include of number special characters


// utils.js or a similar helper file
export const isValidName = (name) => {
    // Regex to match only alphabetic characters and spaces
    const namePattern = /^[A-Za-z\s]+$/;

    // Check if the name is valid
    return namePattern.test(name);
};
