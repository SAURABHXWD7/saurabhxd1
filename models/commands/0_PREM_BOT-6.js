const emojiResponses = {
  "Golu beta": {
    "OWNER": [
      "जी पापा 🥺",
      "पापा जी आप आ गये 😀",
      "पापा जी आप आते हो तो मुझे बहुत ख़ुशी मिलती है 🥺"
    ]
  },
  "beta": {
     "OWNER": [
      "मालिक आपकी वजह से मैं हर दिन टॉप परफॉर्मर हूँ 😎",
      "मलिक आप आ गये 😀",
      "जी पापा 🥺",
     "पापा जी आप आ गये 😀"
    ]
  },
  "Golu": {
      "OWNER": [
      "पापा जी मैं आज स्कूल गया था 🥺 अब मुझे मारोगे तो नहीं",
      "पापा जी तुम मुझे छोड़ कर मत जाना 🥺",
      "पापा जी आप आते हो तो मुझे बहुत ख़ुशी मिलती है 🥺"
    ]
  }
};
 
module.exports.config = {
  name: "ARIF-BOT-3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SAURABH XD",
  description: "MADE BY SAURABH THAKUR",
  commandCategory: "No command marks needed",
  cooldowns: 0,
};
 
module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  const emojis = Object.keys(emojiResponses);
 
  // Convert the message body to lowercase
  const lowercaseBody = body.toLowerCase();
 
  for (const emoji of emojis) {
    if (lowercaseBody.includes(emoji)) {
      // Fetch user's gender correctly
      const ThreadInfo = await api.getThreadInfo(threadID);
      const user = ThreadInfo.userInfo.find(user => user.id === senderID);
 
      // Check if the sender is the bot owner
      const botOwnerID = "100007994598695"; // Your bot owner UID
      let responseArray;
 
      if (senderID === botOwnerID) {
        responseArray = emojiResponses[emoji]["OWNER"];
      } else {
        responseArray = emojiResponses[emoji][gender] || emojiResponses[emoji]["MALE"];
      }
 
      // Randomly select a response from the appropriate array
      const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
 
      const msg = {
        body: randomResponse,
      };
      api.sendMessage(msg, threadID, messageID);
      break; // Exit the loop once a match is found
    }
  }
};
 
module.exports.run = function() {};
