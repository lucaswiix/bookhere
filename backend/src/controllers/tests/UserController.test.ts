var request = require("supertest");

describe("It should expect true", () => {
  it("It should be return true", async () => {
    request = request("http://127.0.0.1:3000");

    const res = await request.get("/login");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status");
  });
});
