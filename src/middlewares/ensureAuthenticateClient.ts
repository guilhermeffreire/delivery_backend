import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(
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
      "b91160d8ba7beb57f53b24d33f472ef9"
    ) as IPayload;

    request.id_client = sub;

    return next();
  } catch (e) {
    return response.status(401).json({ message: "Token invalid." });
  }
}
