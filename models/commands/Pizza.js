const fs = require("fs");
module.exports.config = {
	name: "Pizza",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐒𝐚𝐮𝐫𝐚𝐛𝐡 𝐓𝐡𝐚𝐤𝐮𝐫", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Pizza",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Pizza")==0 || event.body.indexOf("daru")==0 || event.body.indexOf("Drink")==0 || event.body.indexOf("drink")==0) {
		var msg = {
				body: "Aajao milke khate hai 🍻🍕",
				attachment: fs.createReadStream(__dirname + `/noprefix/Pizza.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
