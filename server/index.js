import { prisma } from "./prisma/index.js";
console.log("Hello World");

async function main() {
  const actor = await prisma.actor.create({
    data: {
      name: "Bilal Ahmed",
    },
  });
  console.log(actor);
}
main();
