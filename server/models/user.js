import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, reuired: true },
  id: { type: String },
  role: { type: String, default: "user" },
});

export default mongoose.model("User", userSchema);
