const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();
const authentication = require("../middlewares/auth");

router.use(authentication);

// READ USER
router.get("/", UserController.list);

// UPDATE USER
router.put("/:id", UserController.update);

module.exports = router;
