import { saveStorage, loadStorage } from "./Save.js";
import defaultExport from "./Api.js";
import pkg from "../../node_modules/chai/lib/chai.js";
const {assert} = pkg;


describe("Storage testing", () =>{
    it("loads the same data as was generated with a save key", () => {
        var tester = saveStorage(1000, "This is a test");
        assert(tester == JSON.stringify(loadStorage(1000)));
        
    });
});

describe("API testing", () =>{
    it("actually creates something", () => {
        assert.isDefined(defaultExport);
    });
});