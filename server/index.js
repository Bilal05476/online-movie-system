import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { prisma } from "./prisma/index.js";

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;
dotenv.config();

app.use(
  bodyParser.json({
    limit: "250mb",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "250mb",
    parameterLimit: 100000,
    extended: true,
  })
);

app.use("/", (req, res) => {
  res.status(200).json({
    message: `Server Running!`,
  });
});
let variable;
async function main() {
  variable = await prisma.actor.create({
    data: {
      name: "Bilal Ahmed",
    },
  });
}
main();

app.listen(port, () => {
  console.log(`${variable}\nServer Running at port: ${port}`);
});
