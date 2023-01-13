// const employees = [
//   { id: 1, name: "Mamed", age: 32 },
//   { id: 2, name: "Hasan", age: 34 },
//   { id: 3, name: "Sara", age: 25 },
// ];

const fs = require("fs");
const express = require("express");
const app = express();

fs.readFile("./employees.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const employees = JSON.parse(data);

    app.get("/:id", (req, res) => {
      employees.length >= req.params.id && req.params.id > 0
        ? res
            .status(200)
            .send(
              `Name: ${employees[req.params.id - 1].name},  age: ${
                employees[req.params.id - 1].age
              }`
            )
        : res.status(404).send(`Error: employee "${req.params.id}" not found`);
    });

    app.listen(3000, () => {
      console.log("Server is running");
    });
  }
});
