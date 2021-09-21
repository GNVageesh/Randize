const userRouter = require("express").Router();
const prisma = require("../lib/prisma");

// GET: All Users
userRouter.get("/", async (req, res) => {
  const all_users = await prisma.users.findMany();
  res.status(200).json(all_users);
});

// GET: User by an ID
userRouter.get("/:id", async (req, res) => {
  const id_user = await prisma.users.findMany({
    where: { id: parseInt(req.params.id) },
  });
  res.status(200).json(id_user);
});

// GET: User by gender
userRouter.get("/gender/:gender", async (req, res) => {
  const gender = req.params.gender.toLowerCase();
  if (gender === "male" || gender === "female" || gender === "other") {
    const gender_user = await prisma.users.findMany({
      where: { gender: gender },
    });
    res.status(200).json(gender_user);
  } else {
    res.status(404).json({
      message: `Gender should be male|female|other but provided ${gender}`,
    });
  }
});

// GET: User by username
userRouter.get("/uname/:uname", async (req, res) => {
  const uname_user = await prisma.users.findMany({
    where: { username: req.params.uname },
  });
  res.status(200).json(uname_user);
});

// GET: User by qualification
userRouter.get("/qual/:qual", async (req, res) => {
  const qual_user = await prisma.users
    .findMany({
      where: { qualification: req.params.qual },
    })
    .catch((e) => res.json({ error: e }));
  res.status(200).json(qual_user);
});

module.exports = userRouter;
