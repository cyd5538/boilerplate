const express = require("express");
const router = express.Router();
const {
  registerUser,
  LoginUser,
  GetLoginUser,
} = require("../controller/userController");
const { protect } = require('../middlewear/authMiddlewear')

router.post("/register", registerUser);
router.post("/login", LoginUser);
router.post("/me", protect, GetLoginUser);

module.exports = router;