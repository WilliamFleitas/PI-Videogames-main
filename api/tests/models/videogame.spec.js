const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');




    
    describe("Validators", () => {
        beforeEach(() => Videogame.sync({ force: true }));
        describe("name", () => {
          it("should throw an error if name is null", (a) => {
            Videogame.create({
                
                description: "Pero vos elegiste jugar conmigo",
                released: "1997-06-04",
                rating: 5,
                platforms: ["Steam", "Pc"],
                background_image: "https://img1.ak.crunchyroll.com/i/spire2/a6e36e575f9d9d38d1cf40d6769980a31651739960_main.jpg",
                createdInDb: true,
                genres: ["Action", "RPG"]
            })
              .then(() => a(new Error("It requires a valid name")))
              .catch(() => a());
          });
          it("should work with correct values(name, description, released, rating, platforms, background_image, createInDb, genres)", () => {
            Videogame.create({ 
                name: " Existen tantos juegos",
                description: "Pero vos elegiste jugar conmigo",
                released: "1997-06-04",
                rating: 5,
                platforms: ["Steam", "Pc"],
                background_image: "https://img1.ak.crunchyroll.com/i/spire2/a6e36e575f9d9d38d1cf40d6769980a31651739960_main.jpg",
                createdInDb: true,
                genres: ["Action", "RPG"]

        });
          });
          it("should throw an error if description is null", (a) => {
            Videogame.create({
                name: " Existen tantos juegos",
                
                released: "1997-06-04",
                rating: 5,
                platforms: ["Steam", "Pc"],
                background_image: "https://img1.ak.crunchyroll.com/i/spire2/a6e36e575f9d9d38d1cf40d6769980a31651739960_main.jpg",
                createdInDb: true,
                genres: ["Action", "RPG"]
            })
              .then(() => a(new Error("It requires a valid name")))
              .catch(() => a());
          });
          it("should throw an error if background_image is null", (a) => {
            Videogame.create({
                name: " Existen tantos juegos",
                
                released: "1997-06-04",
                rating: 5,
                platforms: ["Steam", "Pc"],
                createdInDb: true,
                genres: ["Action", "RPG"]
            })
              .then(() => a(new Error("It requires a valid name")))
              .catch(() => a());
          });
        });
      });
