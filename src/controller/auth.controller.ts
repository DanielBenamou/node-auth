import { Response, Request } from "express";
import { getRepository ,getConnection} from "typeorm";
import { User } from "../entity/user.entity";
import { sign, verify } from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import express from "express"


export const Register = async (req: Request, res: Response) => {
  const body = req.body;
  if (body.password !== body.password_confirm) {
    return res.status(400).send({
      message: "password dont match !",
    });
  }
  const user = await getRepository(User).save({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    password: await bcryptjs.hash(body.password, 12),
  });
  res.send(user);
};


export const Login = async (req: Request, res: Response) => {
  const user = await getRepository(User).findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send({ message: "invalid credentials" });
  }
  if (!(await bcryptjs.compare(req.body.password, user.password))) {
    return res.status(400).send({
      message: "invalid credentials",
    });
  }

  const accessToken = sign({ id: user.id }, process.env.ACCESS_SECRET || "", {
    expiresIn: "30m",
  });
  const refreshToken = sign({ id: user.id }, process.env.REFRESH_SECRET || "", {
    expiresIn: "1w",
  });


  res.cookie("access_token", accessToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  res.send({ message: "success" });
};
 


export const AuthenticatedUser = async (req: Request, res: Response) => {
  try {
    const cookie = req.cookies["access_token"];
    const payload: any = verify(cookie, process.env.ACCESS_SECRET || "");
    const user = await getRepository(User).findOne(payload.id);

    if (!payload) {
      res.status(401).send({
        message: "unauthenticated",
      });
    }

    if (!user) {
      res.status(401).send({
        message: "unauthenticated",
      });
    }
    res.send(user);
  } catch (e) {
    res.status(401).send({
      message: "unauthenticated",
    });
  }
};

export const Refresh = async (req: Request, res: Response) => {
  try {
    const cookie = req.cookies["refresh_token"];
    const payload: any = verify(cookie, process.env.REFRESH_SECRET || "");
    if (!payload) {
      res.status(401).send({
        message: "unauthenticated",
      });
    }
    const accessToken = sign(
      { id: payload.id },
      process.env.ACCESS_SECRET || "",
      { expiresIn: "30s" }
    );
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.send({
      message: "success",
    });
  } catch (e) {
    res.status(401).send({
      message: "unauthenticated",
    });
  }
};
export const Logout = async (req: Request, res: Response) => {
  res.cookie("access_token", "", { maxAge: 0 });
  res.cookie("refresh_token", "", { maxAge: 0 });
  res.send({
    message: "success",
  });
};
