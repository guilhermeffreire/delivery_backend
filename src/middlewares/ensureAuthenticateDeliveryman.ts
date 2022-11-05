import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: "Unauthorized." });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "98d7fc1c47596c741f869d874ee37980"
    ) as IPayload;

    request.id_deliveryman = sub;

    return next();
  } catch (e) {
    return response.status(401).json({ message: "Token invalid." });
  }
}
