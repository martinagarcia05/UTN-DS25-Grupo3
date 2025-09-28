<<<<<<< HEAD
import { PrismaClient } from "@prisma/client";

=======
import { PrismaClient } from "../generated/prisma";
>>>>>>> aca704036acca949e92e3ebb0a699bff9bd7bab5
const prisma = new PrismaClient({
  log: ["query", "warn", "error"],
});

export default prisma;

