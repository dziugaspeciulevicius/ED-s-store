import bcrypt from "bcryptjs";

const users = [
  {
    name: "Džiugas Pečiulevičius",
    email: "dziugaspeciulevicius@gmail.com",
    password: bcrypt.hashSync("admin", 10), // plain password and number of rounds to hash
    isAdmin: true,
    loyaltyPoints: 144,
  },
  {
    name: "Sample user",
    email: "sample1@gmail.com",
    password: bcrypt.hashSync("sample", 10),
    loyaltyPoints: 0,
  },
  {
    name: "Sample user 2",
    email: "sample2@mail.com",
    password: bcrypt.hashSync("sample", 10),
    loyaltyPoints: 0,
  },
];

export default users;
