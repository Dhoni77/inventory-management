import { Request, Response } from 'express';
import Discount from '../models/discount'


export const getDiscounts = async function (req: Request, res: Response) {
    try {
        const discounts = await Discount.find();
        return res.json(discounts);
    }
    catch (error: unknown) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const addDiscount = async function (req: Request, res: Response) {
    try {

        if (!req.body) {
            return res.status(400).json({ error: 'body cannot be empty' })
        }

        console.log("discount ", req.body)

        const newDiscount = new Discount({ ...req.body })
        await newDiscount.save();
        return res.status(201).send("Discount created successfully");
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

