import express from "express";
import router from "./routes/RutasSocio";

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/api/socio", router);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});