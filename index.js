const Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("|bot en cour de codage|");
    console.log("Le bot a bien ete connecte")
});

	bot.login(process.env.TOKEN);