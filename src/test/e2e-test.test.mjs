import chai from "chai"
import app from "../index.mjs"
import chaiHttp from "chai-http"

chai.use(chaitHttp);

describe ("Suite de pruebas e2e para el cursos", ()=>{
    it("should enter a hello world", (done)=>{
        chai.request(app)
        .get("/")
        .end((err,res)=>{
            console.log("A")
            chai.assert.equal(res.text,"Hello World")
            done()
        })
        console.log("B")
    })
})
