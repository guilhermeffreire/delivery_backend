import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import * as dotenv from "dotenv";
dotenv.config();

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUserUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({ where: { username } });

    if (!client) {
      throw new Error("Username or Password incorrect!");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or Password incorrect!");
    }

    const token = sign({ username }, "b91160d8ba7beb57f53b24d33f472ef9", {
      subject: client.id,
      expiresIn: "1d",
    });

    return { token };
  }
}
