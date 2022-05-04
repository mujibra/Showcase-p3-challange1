const express = require("express");
const ProductController = require("../controllers/productController");
const authentication = require("../middlewares/auth");
const { getAccess } = require("../middlewares/authorization");
const router = express.Router();

router.use(authentication);

// READ FOOD
router.get("/", ProductController.list);

// CREATE FOOD
router.post("/", ProductController.create);

// CATEGORY
router.get("/categories", ProductController.categoryList);
router.post("/categories", ProductController.categoryCreate);
router.delete("/categories/:id", ProductController.deleteCategory);

// GET FOOD BY ID
router.get("/:id", ProductController.productId);

// UPDATE FOOD
router.put("/:id", getAccess, ProductController.editFood);

router.delete("/:id", ProductController.delete);

module.exports = router;
