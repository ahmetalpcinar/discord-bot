const cooldown = require("../../utils/client/cooldown.js");

module.exports = (client, db) => {
    client.on("messageCreate", async (message) => {
        const prefix = process.env.prefix;

        if(message.author.bot) return;
        if(!message.content.startsWith(prefix)) return;
        if(message.content.startsWith(`${prefix} `)) return;

        const args = message.content.slice(1).trim().split(/ +/);
        const commandName = args.shift().toLocaleLowerCase("tr");
        const command = client.textcommands.get(commandName) || client.textcommands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;

        const time = await cooldown(command, db, message.member);

        async function format(seconds) {
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(seconds / 3600);

            if (seconds < 60) return `${seconds} saniye`;
            else if (seconds < 3600)  return `${minutes} dakika`;
            else return `${hours} saat`;
        };

        if (time) { 
            const formatted = await format(time);
            return message.reply(`❌ Bu komutu kullanmak için \*\*${formatted}\*\* beklemelisiniz.`);
        };

        try { 
            command.run(client, message, args, db);
        }
        catch (error) {
            console.error(error);
            message.reply(`⌛ Bu komut şuanda bakımda, lütfen sonra tekrar deneyiniz.`);
        };
    });
};