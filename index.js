const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("|Dev By [V8] GForce|");
    console.log("Bot en cours de codage")
});

const PREFIX = "////";

const EVERYONE = "@";

bot.on('guildMemberAdd', member => {

    let serverTag = member.guild.name
    const welcomechannel = member.guild.channels.find('id', '653838454978904064')
    const role = member.guild.roles.find("name", "New")    
    member.addRole(role)
    var embed = new Discord.RichEmbed()
    .setColor("#38ad15")
    .setDescription(`:white_check_mark: **Bienvenue** sur le discord ''** ${serverTag} **'' **<@${member.user.id}>**`)
    return welcomechannel.send({embed})
});

bot.on('guildMemberAdd', member => {

    let serverTag = member.guild.name
    const role = member.guild.roles.find("name", "New")    
    member.addRole(role)
    var embed = new Discord.RichEmbed()
});

bot.on('guildMemberRemove', member => {

    let serverTag = member.guild.name
    const welcomechannel = member.guild.channels.find('id', '653838454978904064')
    var embed = new Discord.RichEmbed()
    .setColor("#0078bd")
    .setDescription(`:wave: **<@${member.user.id}>** viens de quitté le serveur, bye bye !!!`)
    return welcomechannel.send({embed})
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args2.slice(1).join(" ");
    
    var reasontimed = args2.slice(2).join(' ')

    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;

    var roleJoueur= member.guild.roles.find("name", "Membre")
    
    var roleMute = member.guild.roles.find("name", "Mute")
    
    var modlog = member.guild.channels.find("name", "log")
    
    var user = message.mentions.users.first();

            case "v8-bot":
            message.channel.sendMessage("Le [V8]-[BOT] est en ligne.");
            message.delete();
            break;
		    
            case "membres":
            message.reply("Nous sommes actuellement " + (bot.users.size - 2) + " membres sur le **Discord** !");
            message.delete();
            break;
		    
            case "ping":
            message.channel.sendMessage("[V8]-[BOT] a actuellement un ping de `" + bot.ping + " ms` ! ");
            message.delete();
            break;
		    
            default:
            message.channel.sendMessage(":x: Commande invalide. Fait !aide pour voir toutes les commandes disponibles !")
            message.delete();
        }
    });


	bot.login(process.env.TOKEN);
