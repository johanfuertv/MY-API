/* eslint-disable no-unused-vars */
import express from "express";
import faker from "faker";
import productsService from "../services/servicesProducts.mjs"
const router = express.Router();
import validatorHendler from "../middleware/validator.hendler.mjs"
import {schemaProductCreate,updateShemaProduct,getProductSchema} from "../schema/schemaProduct.mjs"

router.get('/',
async (req, res) => {
    const products = await productsService.getAllProducts(req, res);
    res.json(products);
    return products;
});

// Funcion Post
router.post('/', validatorHendler(schemaProductCreate, "body"),
async (req, res) => {
   const newProduct = await productsService.createnewProduct(req, res);
   return newProduct;
});

router.patch("/:id",validatorHendler(getProductSchema, "params"),
validatorHendler(updateShemaProduct, "body"),
 async (req, res) => {
    const updateProduct = await productsService.updateProduct(req, res);
    res.json(updateProduct);
    return updateProduct;
});

router.delete('/:id',async  (req, res) => {
  const deleteProduct = await productsService.deleteProduct(req, res);
  return deleteProduct;
});

router.get("/:id",validatorHendler(getProductSchema, "params"),
async (req, res) => {
  const getOneProduct = await productsService.getOneProduct(req, res);
  return getOneProduct;
});

export default router;