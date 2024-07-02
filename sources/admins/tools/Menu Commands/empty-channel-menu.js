const { ActionRowBuilder, ChannelSelectMenuBuilder } = require("discord.js");

module.exports = {
    name: "channelselectmenu",
    run(client, message, args, db) {
        const channel_menu = new ActionRowBuilder().setComponents(
            new ChannelSelectMenuBuilder({
                type: 8,
                custom_id: "",
                min_values: 0,
                max_values: 1,
                placeholder: "",
                disabled: false,
            }),
        );

        message.reply({ content: "", components: [channel_menu] });
    },
};