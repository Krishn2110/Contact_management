import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },
    phone: { type: String, required: true },
    message: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
