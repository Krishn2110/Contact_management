// import express from "express";
// import Contact from "../models/Contacts.js";

// const router = express.Router();

// // POST contact
// router.post("/", async (req, res) => {
//   try {
//     const contact = await Contact.create(req.body);
//     res.status(201).json(contact);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // GET all contacts
// router.get("/", async (req, res) => {
//   const contacts = await Contact.find().sort({ createdAt: -1 });
//   res.json(contacts);
// });

// // DELETE contact
// router.delete("/:id", async (req, res) => {
//   await Contact.findByIdAndDelete(req.params.id);
//   res.json({ message: "Contact deleted" });
// });

// export default router;






import express from "express";
import Contact from "../models/Contacts.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE CONTACT (Protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const contact = await Contact.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
      user: req.user._id,   // ✅ ATTACHED SECURELY
    });

    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET USER CONTACTS ONLY (Protected)
router.get("/", authMiddleware, async (req, res) => {
  const contacts = await Contact.find({ user: req.user._id })
    .sort({ createdAt: -1 });

  res.json(contacts);
});

// DELETE CONTACT (Protected)
router.delete("/:id", authMiddleware, async (req, res) => {
  const contact = await Contact.findOne({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }

  await contact.deleteOne();
  res.json({ message: "Contact deleted" });
});

export default router;
