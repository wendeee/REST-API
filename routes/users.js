const router = require('express').Router();


const database = [
    
    {
        name: "john",
        email: "john@gmail.com",
        id: 1
    },

     {
        name: "smith",
        email: "smith@yahoo.com",
        id: 2
    },
    {
        name: "doe",
        email: "doe@gmail.com",
        id: 3
    },
    {
        name: "denish",
        email: "denish@gmail.com",
        id: 4
    },

]

// READ request handler
router.get('/', (req, res) => {
res.send('Express router');
})


router.get('/users', (req, res) => {
res.json({database});
})

router.get('/users/:id', (req, res) => {
const users = database.find(user => user.id ===parseInt(req.params.id));

if(!users){
    res.status(404).send("user not found");
    return;
}

res.json({users});

})


//create request handler
router.post('/users/adduser', (req, res) => {
if(!req.body.name || !req.body.email){
    res.status(400).json("Enter body parameters.");
    return;
}

const { name, email, id } = req.body;

const newuser = {
    name: name,
    email: email,
    id: database.length+1
};
database.push(newuser);
res.json({newuser});
})

//update request handler

router.put('/users/:id', (req, res) => {
const user = database.find(user => user.id===parseInt(req.params.id));
if(!user){
    res.status(404).send("user not found");
    return;

}
if(!req.body.name){
    res.status(400).json("Invalid body parameters.");
    return;
}
user.name = req.body.name;
res.json({user});
})


//delete a user from the database and return deleted user

router.delete('/users/:id', (req, res) => {
let user = database.find(user => user.id ===parseInt(req.params.id));
if(!user){
    res.status(404).send("User not found");
    return;
}
let index = database.indexOf(user);
user = database.splice(index, 1);
res.json({user});
})



module.exports = router;