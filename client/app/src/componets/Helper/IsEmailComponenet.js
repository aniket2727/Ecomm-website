// utils.js or a similar helper file
export const isValidEmail = (email) => {
    // Regex pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email matches the pattern
    return emailPattern.test(email);
};
