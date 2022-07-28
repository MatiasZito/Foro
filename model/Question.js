var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    type: {type:String, required: true, max:100},
    user_id: {type:Number, required: true, max:100},
    question_id: {type:Number, required: true, max:100},
    title: {type:String, required: true, max:100},
    question_date : {type:String, required:false, max: 2000},
    question_content: {type:String, required: true, max:100},
    question_views: {type:Number, required: false, max:100}
});



module.exports = mongoose.model('questions', QuestionSchema);