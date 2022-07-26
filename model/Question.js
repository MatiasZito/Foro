var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    user_id: {type:String, required: true, max:100},
    question_id: {type:String, required: true, max:100},
    type: {type:String, required: true, max:100},
    title: {type:String},
    question_date : {type:String, required:false, max: 2000},
    question_content: {type:String, required: true, max:100},
    question_views: {type:String, required: false, max:100},

});



module.exports = mongoose.model('Question', QuestionSchema);