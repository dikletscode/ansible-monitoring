import moongose, { Schema } from "mongoose";

export default interface AppTypes {
  id?: string;
  name: string;
  serverId: string;
}

const schema = new Schema({
  name: String,
  serverId: String,
});
const AppSchema = moongose.model("Apps", schema);

export { AppSchema, AppTypes };
