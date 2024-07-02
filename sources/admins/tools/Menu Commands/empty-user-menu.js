const { ActionRowBuilder, UserSelectMenuBuilder } = require("discord.js");

module.exports = {
    name: "userselectmenu",
    run(client, message, args, db) {
        const user_menu = new ActionRowBuilder().setComponents(
            new UserSelectMenuBuilder({
                type: 6,
                custom_id: "",
                min_values: 0,
                max_values: 1,
                placeholder: "",
                disabled: false,
            }),
        )

        message.reply({ content: "", components: [user_menu] });
    },
};