import multer from "multer";
import path from "path";

// Carpeta donde se guardarán los comprobantes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // crear carpeta uploads si no existe
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Filtro opcional de archivos (solo imágenes/pdf)
const fileFilter = (req: any, file: any, cb: any) => {
  const allowed = [".png", ".jpg", ".jpeg", ".pdf"];
  if (allowed.includes(path.extname(file.originalname).toLowerCase())) {
    cb(null, true);
  } else {
    cb(new Error("Formato de archivo no permitido"), false);
  }
};

export const upload = multer({ storage, fileFilter });
