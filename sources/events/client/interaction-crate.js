const cooldown = require("../../utils/client/cooldown.js");
const selectmenu = require("../../utils/client/select-menu.js");
const autocomplete = require("../../utils/client/auto-complete.js");
const messagebutton = require("../../utils/client/message-button.js");

module.exports = (client, db) => {
    client.on("interactionCreate", async (interaction) => {
        if (interaction.isButton()) return messagebutton(client, interaction, db);
        if (interaction.isAutocomplete()) return autocomplete(client, interaction, db);
        if (interaction.isStringSelectMenu() || interaction.isUserSelectMenu()) return selectmenu(client, interaction, db);
        if (interaction.isChannelSelectMenu() || interaction.isRoleSelectMenu()) return selectmenu(client, interaction, db);
        if (!interaction.isCommand()) return;

        const command = client.slashcommands.get(interaction.commandName);
        if (!command) return;

        const time = await cooldown(command, db, interaction.member);

        async function format(seconds) {
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(seconds / 3600);

            if (seconds < 60) return `${seconds} saniye`;
            else if (seconds < 3600)  return `${minutes} dakika`;
            else return `${hours} saat`;
        };

        if (time) { 
            const formatted = await format(time);
            return interaction.reply(`❌ Bu komutu kullanmak için \*\*${formatted}\*\* beklemelisiniz.`);
        };

        try {
            command.run(client, interaction, db);
        }
        catch (error) {
            console.error(error);
            interaction.reply(`⌛ Bu komut şuanda bakımda, lütfen sonra tekrar deneyiniz.`);
        };
    });
};