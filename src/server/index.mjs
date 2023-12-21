import express from "express";
import productRouter from "../routes/products.mjs"; // Importa el módulo usando import
import usersRouter from "../routes/users.mjs";

function apiRouter(app) {
    const router = express.Router();
    
    app.use("/api/v1", router);

    // Utiliza el método use() correctamente y ajusta las rutas
    router.use("/products", productRouter);
    router.use("/users", usersRouter);
}

export default apiRouter; // Utiliza export default para exportar la función