const index = require("./index")
// @ponicode
describe("index.fetchData", () => {
    test("0", async () => {
        await index.fetchData("FR")
    })

    test("1", async () => {
        await index.fetchData("GB")
    })

    test("2", async () => {
        await index.fetchData("US")
    })

    test("3", async () => {
        await index.fetchData("France")
    })

    test("4", async () => {
        await index.fetchData("United States")
    })

    test("5", async () => {
        await index.fetchData(undefined)
    })
})

// @ponicode
describe("index.fetchCountries", () => {
    test("0", async () => {
        await index.fetchCountries()
    })
})
