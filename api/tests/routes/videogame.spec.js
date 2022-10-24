/* eslint-disable import/no-extraneous-dependencies */

const session = require("supertest-session");
const app = require("../../src/app.js");
const { Videogame, conn } = require("../../src/db.js");

const agent = session(app);
const videogame = {
  name: " Existen tantos juegos",
  description: "Pero vos elegiste jugar conmigo",
  released: "1997-06-04",
  rating: 5,
  platforms: ["Steam", "Pc"],
  background_image:
    "https://img1.ak.crunchyroll.com/i/spire2/a6e36e575f9d9d38d1cf40d6769980a31651739960_main.jpg",
  createdInDb: true,
  genres: ["Action", "RPG"],
};

describe("Videogame routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Videogame.sync({ force: true }).then(() => Videogame.create(videogame))
  );
  describe("GET /videogames", () => {
    it("should get 200 in the /videogames route", () => agent.get("/videogames").expect(200));
  });

  

});
