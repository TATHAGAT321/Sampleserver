const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());



database = {
	users : [
	  {
	  	id :121,
	  	name : 'Tathagat',
	  	emailid : 'tathagat@gmail.com',
	  	password: 'hello',
	  	joined : new Date()
	  },
	  {
        id :122,
	  	name : 'Shyam',
	  	emailid : 'shyam@gmail.com',
	  	password: 'shyamram',
	  	joined : new Date()
	  }
	]
}


  
app.post('/signin',(req,res)=>{

	var c=0;
	for(var i=0;i<database.users.length;i++){
         
        if(req.body.email === database.users[i].emailid && 
		 req.body.password === database.users[i].password)
		{
			res.json(database.users[i]);
			break;
		}
		c = c + 1;

	}
	if(c === database.users.length){
		res.status('400').json('Wrong username or password');
	}

})

app.post('/register',(req,res)=>{
	const {email,name,password} = req.body;
	database.users.push({
		id : Number(database.users[database.users.length-1].id) + 1,
		name : name,
		emailid : email,
		password : password,
		joined : new Date()
	})
	res.json(database.users[database.users.length-1]);
})







app.listen(process.env.PORT||3100,()=>{
	console.log(`app is running on port ${process.env.PORT} `)
})

