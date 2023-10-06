import { Request, Response } from 'express';
import Item from '../models/items'


export const getItems = async function (req: Request, res: Response) {
    try {
        const items = await Item.find();
        return res.json(items);
    }
    catch (error: unknown) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const addItem = async function (req: Request, res: Response) {
    try {

        if (!req.body) {
            return res.status(400).json({ error: 'body cannot be empty' })
        }

        const newItem = new Item({ ...req.body })
        await newItem.save();
        return res.status(201).send("Item created successfully");
    }
    catch (error) {
        if (error?.name === "ValidationError") {
            let errors = {};

            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            });

            return res.status(400).send(errors);
        }
        console.log(error);
        res.status(500).send({ error: 'Internal server error' });
    }
}

