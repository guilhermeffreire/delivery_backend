import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import * as dotenv from "dotenv";
dotenv.config();

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: { username },
    });

    if (!deliveryman) {
      throw new Error("Username or Password incorrect!");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or Password incorrect!");
    }

    const token = sign({ username }, "98d7fc1c47596c741f869d874ee37980", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return { token };
  }
}
