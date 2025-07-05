const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
name: { type: String, required: true },
status: {
type: String,
enum: ["waiting", "bot", "assigned", "done"],
default: "waiting"
},
joinedAt: { type: Date, default: Date.now },
assignedEngineer: {
type: mongoose.Schema.Types.ObjectId,
ref: "SupportEngineer",
default: null
},
socketId: { type: String, default: null }
});

module.exports = mongoose.model("Client", clientSchema);

