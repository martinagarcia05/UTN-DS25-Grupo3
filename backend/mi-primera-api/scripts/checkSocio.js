"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
(async () => {
    const p = new client_1.PrismaClient();
    try {
        console.log(await p.socio.findFirst({ where: { dni: 45895295 } }));
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await p.$disconnect();
    }
})();
