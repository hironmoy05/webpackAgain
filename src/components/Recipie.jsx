const users = {
  name: "Hironmoy Dhar",
  age: 32,
  job: "Web Developer",
};

const newUser = {
  ...users,
  name: "Gaurav Dhar",
  age: 22,
  job: "Full Stack Developer",
};

console.log(users);
console.log(newUser);
