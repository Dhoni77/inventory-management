export async function getItems() {
    const response = await fetch(`api/items`, {
        method: 'GET',
    });

    if (!response.ok) {
        return Promise.reject("Items not found");
    }

    return response.json();
}
