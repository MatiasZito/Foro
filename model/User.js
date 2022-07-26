/**var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    mail: {type:String, required: true, max:100},
    password: {type:String, required: true, max:100},
});



module.exports = mongoose.model('User', UserSchema);
**/


let User = {}

User.auth = function (email, password) {
    if (email == 'paolo@somoscoders.org' && password == '123456') {
        return 123;
    }else {
        return false;
    }
}

module.exports = User