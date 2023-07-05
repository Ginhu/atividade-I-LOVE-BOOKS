import pg from "pg";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;