const { ActionRowBuilder, ButtonBuilder } = require("discord.js");

module.exports = {
    name: "messagebutton",
    run(client, message, args, db) {
        const button = new ActionRowBuilder().setComponents(
            new ButtonBuilder({
                url: "",
                type: 2,
                style: 1,
                label: "",
                disabled: false,
                custom_id: "",
            }),
        );

        message.reply({ content: "", components: [button] });
    },
};