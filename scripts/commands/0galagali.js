const fs = require("fs");
module.exports.config = {
	name: "sad096",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("xhudanir pot") ||
	   react.includes("Xoda") ||
	   react.includes("magi") ||
	   react.includes("bessa") || 
react.includes("à¦–à¦¾à¦¨à¦•à¦¿ à¦®à¦¾à¦—à¦¿") || 
react.includes("à¦šà§à¦¦à¦¾à¦¨à¦¿") ||
react.includes("à¦šà§à¦¦à¦¾") ||
react.includes("à¦šà§à¦¦") ||
react.includes("à¦­à§à¦¦à¦¾") || 
react.includes("buda") || 
react.includes("gali") ||
react.includes("galibaz") ||
react.includes("à¦¸à¦¾à¦“à¦¯à¦¼à¦¾") || 
react.includes("khanki") ||
react.includes("maderxud") ||
react.includes("xud") || 
react.includes("xuda") || 
react.includes("xudi") ||
react.includes("cuda") ||
react.includes("cudi") ||
react.includes("mgi") ||
react.includes("nodi") || 
react.includes("à¦¨à¦¡à¦¿") ||
react.includes("à¦®à¦¾à¦—à¦¿") ||
react.includes("à¦®à¦¾à¦¦à¦¾à¦°à¦šà§à¦¦") ||
react.includes("à¦šà§à¦¦") ||
react.includes("à¦šà§à¦¦à¦¾") ||
react.includes("à¦šà§à¦¦à¦¿") || 
react.includes("à¦·à§à¦¦à¦¾") ||
react.includes("à¦·à§à¦¦à¦¿") ||
react.includes("bal") ||
react.includes("à¦–à¦¾à¦‚à¦•à¦¿à¦° à¦ªà§‹à¦²à¦¾") ||
react.includes("à¦–à¦¾à¦¨à¦•à¦¿ à¦®à¦¾à¦•à¦¿") ||
react.includes("à¦–à¦¾à¦¨à¦•à¦¿ à¦®à¦¾à¦—à¦¿") || 
react.includes("SawYa") || 
react.includes("Sawya") || 
react.includes("tor mare xudi") ||
react.includes("vuda") || 
react.includes("heda") || 
react.includes("bap")) {
		var msg = {
				body: "à¦—à¦¾à¦²à¦¾à¦—à¦¾à¦²à¦¿ à¦•à¦°à¦²à§‡ à¦œà¦¿à¦¬à§à¦¬à¦¾à¦¹ à¦•à§‡à¦Ÿà§‡ à¦¦à¦¿à¦¬à§‹ à¦•à¦¿à¦¨à§à¦¤à§  -!!ðŸ˜¤ðŸ‘ŠðŸ”ª"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("ðŸ¤¬", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	   } 
