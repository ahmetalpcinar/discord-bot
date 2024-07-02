const { joinVoiceChannel } = require("@discordjs/voice");
const slashcommands = require("../../utils/client/slash-commands.js");

module.exports = (client, db) => {
    client.on("ready", () => {
        slashcommands(client, "Global");
        console.log(`${client.user.username} botu başarıyla çalıştırıldı.`);

        client.user.setStatus("idle");
        client.user.setActivity({ name: "@anubiss.xd", type: 2 });

        const channel = client.channels.cache.get("1226842086620397578");
        if (!channel) return;

        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
    });
};