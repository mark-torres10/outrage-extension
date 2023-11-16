export default async function classifyText(text) {
    try {
        const response = await fetch(
            `http://localhost:5000/api/classify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({text: text}),
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`error: ${error}`);
    }
}
