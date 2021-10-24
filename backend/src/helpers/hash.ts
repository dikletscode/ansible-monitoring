import bcrypt from "bcrypt";
import { Document } from "mongoose";
import { UserTypes } from "../models/user";

const hash = (password: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) reject("an error accured");
      resolve(hash);
    });
  });
};

export const dataCredential = (password: string, data: UserTypes) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, data.password, (err, same) => {
      if (err || !same) {
        reject({ error: true });
      } else {
        const dataClient = {
          _id: data.id,
          name: data.name,
          email: data.email,
          country: data.country,
        };
        resolve(dataClient);
      }
    });
  });
};

export default hash;
