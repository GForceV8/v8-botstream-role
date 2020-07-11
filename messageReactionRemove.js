module.exports = (client, messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const channel = message.guild.channels.cache.find(c => c.id === '655315690340745216');
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
    if (member.user.bot) return;

    if (["Valorant", "HyperScape", "MW", "R6", "Cross", "Anthe", "APB", "Out", "Atlas", "EFT", "ETS2", "F76", "PD2", "PS2", "Valorant", "RDR2", "SCUM", "SC2", "WoT"].includes(emoji) && message.channel.id === channel.id) {
        switch (emoji) {
            case "Valorant":
                members.roles.remove(valoRole);
                message.channel.send(`Le rôle ${valoRole.name} a été supprimé avec succès !`);
                break;
            case "HyperScape":
                members.roles.remove(hypeRole);
                message.channel.send(`Le rôle ${hypeRole.name} a été supprimé avec succès !`);
                break;
            case "MW":
                members.roles.remove(mwRole);
                message.channel.send(`Le rôle ${mwRole.name} a été supprimé avec succès !`);
                break;
            case "R6":
                members.roles.remove(r6Role);
                message.channel.send(`Le rôle ${r6Role.name} a été supprimé avec succès !`);
                break;
             case "Cross":
                members.roles.remove(crossRole);
                message.channel.send(`Le rôle ${crossRole.name} a été supprimé avec succès !`);
                break;
            case "Anthe":
                members.roles.remove(anthRole);
                message.channel.send(`Le rôle ${anthRole.name} a été supprimé avec succès !`);
                break;
            case "APB":
                members.roles.remove(apbRole);
                message.channel.send(`Le rôle ${apbRole.name} a été supprimé avec succès !`);
                break;
            case "Out":
                members.roles.remove(outbRole);
                message.channel.send(`Le rôle ${outbRole.name} a été supprimé avec succès !`);
                break;
            case "Atlas":
                members.roles.remove(atlasRole);
                message.channel.send(`Le rôle ${atlasRole.name} a été supprimé avec succès !`);
                break;
            case "EFT":
                members.roles.remove(eftRole);
                message.channel.send(`Le rôle ${eftRole.name} a été supprimé avec succès !`);
                break;
            case "ETS2":
                members.roles.remove(ets2Role);
                message.channel.send(`Le rôle ${ets2Role.name} a été supprimé avec succès !`);
                break;
            case "F76":
                members.roles.remove(fal76Role);
                message.channel.send(`Le rôle ${fal76Role.name} a été supprimé avec succès !`);
                break;
            case "PD2":
                members.roles.remove(pd2Role);
                message.channel.send(`Le rôle ${pd2Role.name} a été supprimé avec succès !`);
                break;
            case "PS2":
                members.roles.remove(ps2Role);
                message.channel.send(`Le rôle ${ps2Role.name} a été supprimé avec succès !`);
                break;
            case "RDR2":
                members.roles.remove(rdr2Role);
                message.channel.send(`Le rôle ${rdr2Role.name} a été supprimé avec succès !`);
                break;
            case "SCUM":
                members.roles.remove(scumRole);
                message.channel.send(`Le rôle ${scumRole.name} a été supprimé avec succès !`);
                break;
            case "SC2":
                members.roles.remove(sc2Role);
                message.channel.send(`Le rôle ${sc2Role.name} a été supprimé avec succès !`);
                break;
            case "WoT":
                members.roles.remove(wotRole);
                message.channel.send(`Le rôle ${wotRole.name} a été supprimé avec succès !`);
                break;
        }
    }
}