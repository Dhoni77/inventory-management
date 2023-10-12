export async function getDiscounts() {
    const response = await fetch(`api/discounts`, {
        method: 'GET',
    });

    if (!response.ok) {
        return Promise.reject("Discounts not found");
    }

    return response.json();
}
