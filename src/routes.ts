import {Router} from "express";
import {AuthenticatedUser, Login, Logout, MyArena, Refresh, Register} from "./controller/auth.controller";
import {Forgot, ResetPassword} from "./controller/forgot.controller";

export const routes = (router:Router) => {
router.post("/api/register",Register)
router.post("/api/arena",MyArena)
router.post("/api/login",Login)
router.get("/api/user",AuthenticatedUser)
router.post("/api/refresh",Refresh)
router.post("/api/logout",Logout)
router.post("/api/forgot",Forgot)
router.post("/api/reset",ResetPassword)
router.post("/api/arena",ResetPassword)
}