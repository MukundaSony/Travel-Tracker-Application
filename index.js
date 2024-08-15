import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Your_database_name",
  password: "database_password",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

let users = [
  // { id: 1, name: "Angela", color: "teal" },
  // { id: 2, name: "Jack", color: "powderblue" },
];

// it is returning the array of all the visited countries as = countries[.......]
async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  const userdetails = await db.query("SELECT * FROM users");
  users = userdetails.rows;
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  // const countries = await checkVisisted();
    const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id=1;");
    const resultcolor = await db.query("SELECT color from users WHERE id=1;");
    const color = resultcolor.rows[0].color;
    const data= result.rows;
    let countries=[];
    data.forEach((country) =>{
      countries.push(country.country_code);
    })
    const userdetails = await db.query("SELECT * FROM users");
    users = userdetails.rows;
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      users: users,
      color: color,
    });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code,user_id) VALUES ($1,$2)",
        [countryCode,userid]
      );
      const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id=$1;",[userid]);
      let countries = [];
      result.rows.forEach((country) => {
        countries.push(country.country_code);
      });
      const resultcolor = await db.query("SELECT color from users WHERE id=$1;",[userid]);
      const color = resultcolor.rows[0].color;
      res.render("index.ejs",{
        countries: countries,
        total: countries.length,
        users: users,
        color: color,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

let userid = '';
app.post("/user", async (req, res) => {
  const clicked = req.body;
  if(clicked.add == "new"){
    res.render("new.ejs");
  }
  else{
    userid = req.body.user;
    const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id=$1;",[req.body.user])
    const resultcolor = await db.query("SELECT color from users WHERE id=$1;",[req.body.user]);
    const color = resultcolor.rows[0].color;
    const data= result.rows;
    let countries=[];
    data.forEach((country) =>{
      countries.push(country.country_code);
    })
    res.render("index.ejs",{
      countries: countries,
      total: countries.length,
      users: users,
      color: color,
    })
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html

  const name= req.body.name;
  const color = req.body.color;
  await db.query("INSERT INTO users(name,color) VALUES($1,$2)",[name,color]);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
