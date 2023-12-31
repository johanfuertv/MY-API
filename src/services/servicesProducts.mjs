import faker from "faker";
import boom from "@hapi/boom";

const getAllProducts = (req, res, next) => {
    try {
        const products = [];
        const { size } = req.query;
        const limit = size || 5;

        for (let index = 0; index < limit; index++) {
            products.push({
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
            });
        }

        return products;
    } catch (error) {
        next(error);
    }
};

const createnewProduct = (req, res) => {
    try {
        const body = req.body;
        res.json({
            ok: true,
            data: body,
        });
    } catch (error) {
        console.log(error);
    }
};

const updateUser = (req, res) => {
    try {
        const { id } = req.params;
        if (id != 1) {
            throw boom.notFound("product not found");
        }
        const body = req.body;

        res.json({
            message: 'success',
            product: body,
            id,
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteProduct = (req, res) => {
    try {
        const { id } = req.params;
        res.json({
            message: 'delete',
            id,
        });
    } catch (error) {
        console.log(error);
    }
};

const getOneProduct = (req, res) => {
    try {
        const { id } = req.params;
        res.json({
            "id": id,
            "name": "Keyboard",
            price: 2000,
            "category": "technology",
        });
    } catch (error) {
        console.log(error);
    }
};

export default {
    getAllProducts,
    createnewProduct,
    updateUser,
    deleteProduct,
    getOneProduct
};