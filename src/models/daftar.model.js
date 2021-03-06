const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DaftarSchema = new Schema({
    nama: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100, unique: true},
    instansi: {type: String, required: true, max: 100},
    kelas: {type: Number, required: true},
    telp: {type: String, required: true, max: 15, unique: true},
    id_tele: {type: String, max: 100, unique: true},
    bukti: {type: String},
    status: {type: Number}
}, {timestamps: true})

// let handleError = (err, res, next) => {
//     if(err) {
//         console.log(err)
//         // next(new Error('Error'))
//     } else {
//         next()
//     }
// }
// DaftarSchema.pre('updateOne', handleError);
module.exports = mongoose.model('Daftar', DaftarSchema);