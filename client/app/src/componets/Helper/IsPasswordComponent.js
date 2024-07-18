// valid password

// utils.js or a similar helper file
export const isValidPassword = (password) => {
    // Regex pattern for password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if the password matches the pattern
    return passwordPattern.test(password);
};
