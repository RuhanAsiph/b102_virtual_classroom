const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    roleId: String, 
    contactno: String,
    password: String, 
    image: String
})

module.exports = mongoose.model('users', userSchema)


// <div *ngIf="inputName.invalid && (inputName.dirty || inputName.touched || dummyForm.submitted)" class="alert alert-danger"> <div *ngIf="inputName.errors.required"> <div>Name is required.</div> </div> </div> 