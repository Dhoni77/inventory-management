import { IDiscount } from "@/models/IDiscount";

export async function addDiscount(item: IDiscount): Promise<void> {
    const response = await fetch(`api/discounts`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        return Promise.reject("Discount not added");
    }

    return Promise.resolve();
}
