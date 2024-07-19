/* eslint-disable no-unused-vars */

// API for login
const LoginApi = async (data) => {
    const { email, password } = data;

    try {
        const response = await fetch('http://localhost:9009/app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.status === 'successful') {
            // Store token in local storage
            localStorage.setItem('authToken', result.token);

            return {
                status: 'successful',
                data: result
            };
        } else {
            return {
                status: 'failed',
                error: result.message || 'An unexpected error occurred'
            };
        }
    } catch (error) {
        console.log("Error:", error);
        return {
            status: 'failed',
            error: error.message
        };
    }
};
// API for register
const RegisterApi = async (data) => {
    const { name, email, password } = data;

    try {
        const response = await fetch('http://localhost:9009/app/register', { // Ensure the correct endpoint URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        if (!response.ok) {
            // If the response is not OK, throw an error with the status code
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return {
            status: 'successful',
            data: result
        };
    } catch (error) {
        // Log the error and return it
        console.log("Error:", error);
        return {
            status: 'failed',
            error: error.message
        };
    }
}

export { RegisterApi, LoginApi };
