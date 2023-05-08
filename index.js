const express = require('express');
const path  = require('path');
const port = 8000;

const app = express();

var contactList = [
    {
        name:"Rahul",
        phone:"8468456801"
    },
    {
        name:"Yash",
        phone:"8669655455"
    },
    {
        name:"Shub",
        phone:"8155541082"
    }
]
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());

app.listen(port, function(err){
    if(err){
        console.log("ERROR..", err);
    }


    console.log("Server is up and running on port:", port);
})

app.get('/', function (req, res){
    return res.render('home', {
        title: "Contacts List...",
        contact_list: contactList
    });
});

app.get('/practice', function (req, res){
    return res.render('practice',{
        title:"Practice page"
    })
});

app.post('/create-contact', function(req, res){

    contactList.push({
        name:req.body.name,
        phone:req.body.phone
    });
    return res.redirect('/');
})

// app.get('/profile', function(req, res){
//     res.send("Heyy this is your profile page");
// })