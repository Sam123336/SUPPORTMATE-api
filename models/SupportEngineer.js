const mongoose = require("mongoose");

const supportEngineerSchema = new mongoose.Schema({
name: { type: String, required: true },
capacity: { type: Number, default: 2 }, 
currentClients: [{
type: mongoose.Schema.Types.ObjectId,
ref: "Client"
}],
socketId: { type: String, default: null }
});
module.exports = mongoose.model("SupportEngineer", supportEngineerSchema);