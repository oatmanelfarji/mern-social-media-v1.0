import express from "express";
import { updateSittings, getUsersettings, } from "../controllers/Settings.js";
import { verifyToken } from "../middleware/auth.js";

{/*getAddHobby,*/}

const router = express.Router();

/* READ */
router.get("/:userId/settings", verifyToken, getUsersettings);

/* UPDATE */
router.patch("/:userId/settings", verifyToken, updateSittings );


export default router;
