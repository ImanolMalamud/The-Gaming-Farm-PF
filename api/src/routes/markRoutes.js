const { Router } = require("express")
const { getMarks, createMarksJSON } = require("../controllers/markControllers")

const router = Router()

router.post("/db", createMarksJSON)

router.get("/", getMarks)

module.exports = router
