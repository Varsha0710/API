import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { Router } from "express";

const swaggerRouter = Router();

swaggerRouter.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default swaggerRouter;