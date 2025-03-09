const url = "http://localhost:8000/api/";
export async function getTasks() {
    try {
        const res = await fetch(`${url}getTask`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Data:", data);
        return data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching tasks:", error.message);
        }
        else {
            console.error("An unknown error occurred.");
        }
    }
}
