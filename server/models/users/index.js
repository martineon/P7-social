const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


let UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: {type: String, required: true, unique: true},
  password: { type: String, required: true }
  
});

UserSchema.pre('save', function(next) {
	let user = this;
	// hash password only if it has been changed or user is new
	if (!user.isModified('password')) return next();
	console.log(JSON.stringify(user));
	//generate the Hash
	bcrypt.hash(user.password, null, null, function(err, hash) {
		if(err) return next(err);
		//change the password to the hashed version
		user.password = hash;
		next();
	});
})

// Method to compare a given password with the database hash
UserSchema.methods.comparePassword = function(password) {
	var user = this;
	return bcrypt.compareSync(password, user.password);
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
