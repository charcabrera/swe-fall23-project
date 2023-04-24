const save = require("./Save");
const api = require("./Api");
var assert = require("chai").assert;

describe("Storage testing", () =>{
    it("loads the same data as was generated with a save key", () => {
        var tester = save.saveStorage(1000, "This is a test");
        assert(tester == JSON.stringify(save.loadStorage(1000)));
        
    });
});

describe("API testing", () =>{
    it("actually creates something", () => {
        var thing = api.doThing();
        assert.isDefined(thing);
    });
});