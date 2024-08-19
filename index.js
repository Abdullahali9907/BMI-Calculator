import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */

app.get("/", (req, res)=>{
 res.render("index.ejs");
});
app.get("/about", (req, res)=>{
 res.render("about.ejs");
});
app.get("/contact", (req, res)=>{
 res.render("contact.ejs");
});

app.post("/submit", (req,res)=>{

const weight = req.body["weight"]; 
const height = req.body["height"]; 
// console.log("The value of weight is :- ",(weight));
// console.log("The value of height is :- ",(height));

 const BMIResult = parseFloat(weight / (height * height)).toFixed(2);

 res.render("index.ejs", {
  BMIResult : BMIResult
 } );
});


app.post("/submitContact", (req,res)=>{
//  console.log("Conatct form has been clicked.");
const contactUserName = req.body["name"];
const contactUserEmail = req.body["email"];
const contactUserComment = req.body["text"];
console.log("The value of name is : - ", contactUserName);
console.log("The value of Email is : - ", contactUserEmail);
console.log("The value of comment is : - ", contactUserComment);


res.render("contact.ejs", {
  contactUserName : (contactUserName),
  contactUserEmail : contactUserEmail,
  contactUserComment : contactUserComment
})

 
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
