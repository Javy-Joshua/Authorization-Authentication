const express = require("express");
const globalMiddlewares = require("../middlewares/global.middleware");
const middleware = require("./items.middleware");
const controller = require("./items.controller");

const router = express.Router();

// router.use (globalMiddlewares.basicAuth)
router.use(globalMiddlewares.apiKeyAuth);

router.post(
  "/",
  globalMiddlewares.checkAdmin,
  middleware.checkSize,
  controller.createItems
);

router.get("/", controller.getItems);

router.get("/:id", controller.getOneItem);

router.patch("/:id", globalMiddlewares.checkAdmin, controller.updateItem);

router.delete("/:id", globalMiddlewares.checkAdmin, controller.deleteItem);

module.exports = router;
