//C0743947_Joyce De Moura
import express from "express";
import mongoose from "mongoose";//conection to my database
import cors from 'cors';
const app = express();
mongoose.connect("mongodb://admin:myappmypass@3.96.106.9:27017/?authSource=admin");//conection to my database


//setting pug as my engine for views
app.set('view engine', 'pug');
app.set('views', './views');


//middleware 
app.use(express.json({limit: '5mb'})); //for parsing json
app.use(express.urlencoded({ extended: true,limit: '5mb' })); //for parsing x-ww-form- urlencoded request bodies
app.use(express.static('./views'));//parsing all my static files, in this case, my styles.css file.
app.use(cors());//it will be use before defining my routes


//my user model schema
const userSchema = new mongoose.Schema(
{LastName: String,
 FirstName: String, 
 DateOfBirth: String, 
 Address1: String, 
 Address2: String, 
 City: String, 
 PostalCode: String,
 Country: String,
 Phone: String, 
 Email: String, 
 UserNotes: String});
 
const user = mongoose.model('user', userSchema);


//Using Get Method to display the user form.
app.get('/create-user', (req, res) => {
	res.render("form");
	});

//Using Post Method in the same root(/create-user) to insert data in my database
app.post('/create-user', async(req, res) => {
	try{
		const newUser = new user({
			LastName: req.body.LastName,
			FirstName: req.body.FirstName,
			DateOfBirth: req.body.DateOfBirth,
			Address1: req.body.Address1,
			Address2: req.body.Address2,
			City: req.body.City,
			PostalCode: req.body.PostalCode,
			Country: req.body.Country,
			Phone: req.body.Phone,
			Email: req.body.Email,
			UserNotes: req.body.UserNotes			
		});
		await newUser.save();
		 res.status(201).json({ status: 'success', user: newUser });
		}
	catch (err){
		console.error(err);
	res.status(500).send('error! User was not created.');
	}

});



//Using Get Method to display all the users in a table
app.get('/Users', async(req, res)=>{
	try {
		const allUsersT = await user.find({});
		res.status(200).json(allUsersT);
	} catch (err) {
		res.status(500).json({message:error.message});
	}

});



//Using get Method to get an ID of a user, find it in the database and display their information on the form. 
app.get('/update-user/:id', async(req, res) => {
		try{
			const oneUser = await user.findOne({_id: req.params.id});
		res.status(200).render('formUpdate',{user:oneUser});
		}
		catch (err){
		console.error(err);
		res.status(500).send('error! User was not Updated.');
	}
});
//Using Post Method to update the user.
app.post('/update-user/:id', async(req, res) => {
		try{
			const userId = req.params.id;
			const updatedUser = {
			LastName: req.body.LastName,
			FirstName: req.body.FirstName,
			DateOfBirth: req.body.DateOfBirth,
			Address1: req.body.Address1,
			Address2: req.body.Address2,
			City: req.body.City,
			PostalCode: req.body.PostalCode,
			Country: req.body.Country,
			Phone: req.body.Phone,
			Email: req.body.Email,
			UserNotes: req.body.UserNotes			
		};
		
		await user.findOneAndUpdate({_id:userId},updatedUser,{new: true});	
		 res.status(201).json({ status: 'success', user: updatedUser });
		}
		catch (err){
		console.error(err);
		return res.status(500).json({status: 'error! User was not Updated.'});
	}
});

//get Method to find the user and delete it.
app.get('/delete-user/:id', async(req,res)=>{
	try{
		const userDeleted = await user.findByIdAndDelete({_id: req.params.id});
		if(!userDeleted){
			return res.status(404).json({ status: 'User not found'});	
		}
	return res.status(201).json({ status: 'success', user: userDeleted});
	} catch(err){
		console.error('Error - User was not deleted: ', err);
		return res.status(500).json({status: 'Error - User was not deleted'});
	}
	
});


//hours model schema


/*const hoursSchema = new mongoose.Schema(
{RegisterDate: String,
 StartDate: String, 
 StartHour: String,
 EndDate: String,	
 EndHour: String,	
 UserNotes: String});
 
const hours = mongoose.model('hours', userSchema);


//Using Get Method to display the user form.
app.get('/add-hours', (req, res) => {
	res.render("hours");
	});

//Using Post Method in the same root(/create-user) to insert data in my database
app.post('/add-hours', async(req, res) => {
	try{
		const timeElapsed = Date.now();
		const today = new Date(timeElapsed);
		const newHour = new hours({
			RegisterDate: today.toUTCString(),
			StartDate: req.body.StartDate,
			StartHour: req.body.StartHour,
			EndDate: req.body.EndDate,
			EndHour: req.body.EndHour,
			UserNotes: req.body.UserNotes			
		});
		await newHour.save();
			res.status(201).redirect('/hours');
		 //res.status(201).json({ status: 'success', hours: newHour });
		}
	catch (err){
		console.error(err);
	res.status(500).send('error! User was not created.');
	}

});



//Using Get Method to display all the users in a table
app.get('/hours', async(req, res)=>{
	try {
		const allhoursT = await hours.find({});//res.status(200).json(allhoursT);
		res.render('hourstableview', {allHours:allhours});
	} catch (err) {
		res.status(500).send('error.message');
	}

});*/



	
app.listen(8080);


		




		


