const updateData = async (url, index, newData) => {
    try {
        const response = await fetch(url + index, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
        });
        const data = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
};

export default updateData;
