const express = require("express");
const router = express.Router();
const logControllers = require("../controllers/logControllers")

router.get("/logs", logControllers.index);

router.get("/logs/new", logControllers.newLog);
    
router.post("/logs/", logControllers.create);

router.get("/logs/:id", logControllers.show);

router.get("/logs/:id/edit", logControllers.edit);

router.put("/logs/:id", logControllers.update);

router.delete("/logs/:id", logControllers.destroy);


module.exports = router;