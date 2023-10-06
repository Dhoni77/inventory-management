export interface IInventory {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
}