import express from "express";
import { sequelize } from "./config/database";
import swaggerRouter from "./swagger/swagger";
import staffRoutes from "./routes/staffRoutes";

const app = express();

app.use(express.json());
app.use('/api',staffRoutes);

app.use(swaggerRouter);

const port = 4000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('unable to connect the database:',err));