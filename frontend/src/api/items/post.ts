import { IInventory } from "@/models/IInventory";

export async function addItem(item: IInventory): Promise<void> {
    const response = await fetch(`api/items`, {
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
