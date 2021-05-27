const fastify = require("fastify")({ logger: true });

fastify.get("/pets", async (request, response) => {
  return {
    pets: [
      {
        id: "9923us-189231siqo",
        kind: "dog",
        name: "Buster",
        breed: "bulldog",
      },
      {
        id: "9912wsad-1392932",
        kind: "cat",
        name: "Tom",
        breed: "ragdoll",
      },
    ],
  };
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
