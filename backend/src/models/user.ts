import mongoose, { Schema } from "mongoose";

interface UserTypes {
  id?: string;
  name: string;
  email: string;
  country: string;
  password: string;
}
const schema = new Schema<UserTypes>({
  name: String,
  email: { type: String, unique: true },
  country: String,
  password: String,
});

const User = mongoose.model("users", schema);

export { User, UserTypes };
