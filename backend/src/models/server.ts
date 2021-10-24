import moongose, { Schema } from "mongoose";

export default interface ServersTypes {
  id?: string;
  ip: string;
  username: string;
  sshKey: string;
  userId: string;
}

const schema = new Schema({
  ip: String,
  username: String,
  sshKey: String,
  userId: String,
});
const Servers = moongose.model("Servers", schema);

export { Servers, ServersTypes };
