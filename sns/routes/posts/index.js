const express = require('express');
const router = express.Router();

router.get("/upload", async (req, res) => {
  res.render("upload");
})

router.get("/:id", async (req, res) => {
  res.render("detail");
})

router.get("/update/:id", async (req, res) => {
  res.render("update");
})

module.exports = router;