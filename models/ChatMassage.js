
const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema({
clientId: {
type: mongoose.Schema.Types.ObjectId,
ref: "Client",
required: true
},
from: {
type: String,
enum: ["client", "support", "bot"],
required: true
},
message: { type: String, required: true },
timestamp: { type: Date, default: Date.now }
});


module.exports = mongoose.model("ChatMessage", chatMessageSchema);