const Command = require("../../modules/Command.js");
const { RichEmbed } = require('discord.js');

class Reboot extends Command {
    constructor(client) {
        super(client, {
            name: "allroles",
            description: "Afficher tous les rôles dispo avec des réactions."
            usage: "allroles"
            category: "Systèmes"
            permLevel: "[V8]-[ROLES]"
        });
}

async run(message) {
    try {
        MessageChannel.delete();
        const valoRole = message.guild.roles.cache("730641078029647924");
        const hypeRole = message.guild.roles.cache("730641079287939153");
        const mwRole = message.guild.roles.cache("730641080097177650");
        const r6Role = message.guild.roles.cache("730641081141559307");
        const crossRole = message.guild.roles.cache("730641082064568370");
        const palaRole = message.guild.roles.cache("730641082517422103");
        const anthRole = message.guild.roles.cache("730641083620655166");
        const apbRole = message.guild.roles.cache("730641084144812063");
        const outbRole = message.guild.roles.cache("730641085243850764");
        const atlasRole = message.guild.roles.cache("730641086011408404");
        const eftRole = message.guild.roles.cache("730645140447690793");
        const ets2Role = message.guild.roles.cache("730645143157473360");
        const fal76Role = message.guild.roles.cache("730645145166413895");
        const pd2Role = message.guild.roles.cache("730645145992691772");
        const ps2Role = message.guild.roles.cache("730645146475167877");
        const rdr2Role = message.guild.roles.cache("730645147569881119");
        const scumRole = message.guild.roles.cache("730645148622651412");
        const sc2Role = message.guild.roles.cache("730645149431889940");
        const wotRole = message.guild.roles.cache("730645150237196328");

        const valoEmoji = this.client.emojis.find(
            emoji => emoji.name === "Valorant"
        ); 
        const hypeEmoji = this.client.emojis.find(
            emoji => emoji.name === "HyperScape"
        );
        const mwEmoji = this.client.emojis.find(
            emoji => emoji.name === "MW"
        );
        const r6Emoji = this.client.emojis.find(
            emoji => emoji.name === "R6"
        );
        const crossEmoji = this.client.emojis.find(
            emoji => emoji.name === "Cross"
        );
        const palaEmoji = this.client.emojis.find(
            emoji => emoji.name === "Paladins"
        );
        const anthEmoji = this.client.emojis.find(
            emoji => emoji.name === "Anthe"
        );
        const apbEmoji = this.client.emojis.find(
            emoji => emoji.name === "APB"
        );
        const outbEmoji = this.client.emojis.find(
            emoji => emoji.name === "Out"
        );
        const atlasEmoji = this.client.emojis.find(
            emoji => emoji.name === "Atlas"
        );
        const eftEmoji = this.client.emojis.find(
            emoji => emoji.name === "EFT"
        );
        const ets2Emoji = this.client.emojis.find(
            emoji => emoji.name === "ETS2"
        );
        const fal76Emoji = this.client.emojis.find(
            emoji => emoji.name === "F76"
        );
        const pd2Emoji = this.client.emojis.find(
            emoji => emoji.name === "PD2"
        );
        const ps2Emoji = this.client.emojis.find(
            emoji => emoji.name === "PS2"
        );
        const rdr2Emoji = this.client.emojis.find(
            emoji => emoji.name === "RDR2"
        );
        const scumEmoji = this.client.emojis.find(
            emoji => emoji.name === "SCUM"
        );
        const sc2Emoji = this.client.emojis.find(
            emoji => emoji.name === "SC2"
        );
        const wotEmoji = this.client.emojis.find(
            emoji => emoji.name === "WoT"
        );

       const embed = new RichEmbed()
            .setTitle("Rôle")
            .setDescription("Vous jouer à un ou des jeux ci-dessous, Alors clique simplement sur une ou les réactions ci-dessous !")
            .setColor("#38ad15")
            .addField(
            "Les rôles disponibles:"
            `
            ${valoEmoji} - ${valoRole.toString()}
            ${hypeEmoji} - ${hypeRole.toString()}
            ${mwEmoji} - ${mwEmoji.toString()}
            ${r6Emoji} - ${r6Role.toString()}
            ${crossEmoji} - ${crossRole.toString()}
            ${palaEmoji} - ${palaRole.toString()}
            ${anthEmoji} - ${anthRole.toString()}
            ${apbEmoji} - ${apbRole.toString()}
            ${outbEmoji} - ${outbRole.toString()}
            ${atlasEmoji} - ${atlasRole.toString()}
            ${eftEmoji} - ${eftRole.toString()}
            ${ets2Emoji} - ${ets2Role.toString()}
            ${fal76Emoji} - ${fal76Role.toString()}
            ${pd2Emoji} - ${pd2Role.toString()}
            ${ps2Emoji} - ${ps2Role.toString()}
            ${rdr2Emoji} - ${rdr2Role.toString()}
            ${scumEmoji} - ${scumRole.toString()}
            ${sc2Emoji} - ${sc2Role.toString()}
            ${wotEmoji} - ${wotRole.toString()}
            `
           );

           message.channel.send(embed).then(async msg => {
            await msg.react(valoEmoji)
            await msg.react(hypeEmoji)
            await msg.react(mwEmoji)
            await msg.react(r6Emoji)
            await msg.react(crossEmoji)
            await msg.react(palaEmoji)
            await msg.react(anthEmoji)
            await msg.react(apbEmoji)
            await msg.react(outbEmoji)
            await msg.react(atlasEmoji)
            await msg.react(eftEmoji)
            await msg.react(ets2Emoji)
            await msg.react(fal76Emoji)
            await msg.react(pd2Emoji)
            await msg.react(ps2Emoji)
            await msg.react(rdr2Emoji)
            await msg.react(scumEmoji)
            await msg.react(sc2Emoji)
            await msg.react(wotEmoji)
           })

    } catch (e) {
      console.log(e);
    }
}

module.exports = Allroles;