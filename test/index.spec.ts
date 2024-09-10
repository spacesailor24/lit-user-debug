import fs from "fs";

import { runExample } from "../src";

describe("Testing specific functionality", () => {
  it("should test for a specific thing", async () => {
    const litActionCode = fs.readFileSync("./src/litAction.txt", "utf-8");
    await runExample(litActionCode);
  }).timeout(120_000);
});
