import { assert } from "chai";

function addValue(num1, num2) {
    return num1 + num2
}

describe("Suite de pruebas para nuestra api", ()=>{
    it("Esperamos un 10",()=>{
        let data = addValue(5,5)
        assert.equal(data, 10)
    })
})

