
/* eslint-disable import/no-extraneous-dependencies */

const session = require("supertest-session");
const app = require("../../src/app.js");
const {  conn } = require("../../src/db.js");

const agent = session(app);


describe("Genres routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("GET /genres", () => {
    it("should get 200 in the /genres route", () => agent.get("/genres").expect(200));
  });

  

});


