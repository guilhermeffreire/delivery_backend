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

    const token = sign({ username }, "b91160d8ba7beb59f53b24d33f472ef9", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return { token };
  }
}
