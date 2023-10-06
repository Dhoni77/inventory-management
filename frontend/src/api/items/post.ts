import { IInventory } from "@/models/IInventory";
import { API_URL } from "..";

export async function addItem(item: IInventory): Promise<void> {
    const response = await fetch(`${API_URL}/items`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        return Promise.reject("Item not added");
    }

    return Promise.resolve();
}
