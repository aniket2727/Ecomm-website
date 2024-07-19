


const fetchProtectedData = async () => {
    const token = localStorage.getItem('authToken');

    try {
        const response = await fetch('http://localhost:9009/app/protected-route', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Include the token in the Authorization header
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Protected data:", result);

    } catch (error) {
        console.error("Error fetching protected data", error);
    }
};

export {fetchProtectedData}
