const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    C_id: Number,
    C_adhar: Number,
    C_pancard: String,
    C_dob: Number,
   
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('customer', UserSchema);