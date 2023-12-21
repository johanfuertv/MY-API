import Joi from "joi";

const id = Joi.string().uuid();
const name = Joi.string();
const price = Joi.number();  // Agrega paréntesis para llamar a la función

export const schemaProductCreate = Joi.object({
    name: name.required(),
    price: price.required(),
});

export const updateShemaProduct = Joi.object({
    name: name,
    price: price,
});

export const getProductSchema = Joi.object({
    id: id.required(),
});