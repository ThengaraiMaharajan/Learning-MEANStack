const mongoose = require('mongoose');
const loanSchema = mongoose.Schema({
    loanName:String,
    loanType:String,
    loanAmount:String,
    loanIssueDate:String,
    loanStatus:String
})

const loanModel = mongoose.model('Loans', loanSchema);

module.exports = loanModel;