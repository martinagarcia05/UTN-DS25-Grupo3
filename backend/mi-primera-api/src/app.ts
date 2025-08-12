import express from "express";
import router from "./routes/RutasSocio";
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

app.use("/api/socio", router);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});