const { ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

module.exports = {
    name: "stringselectmenu",
    run(client, message, args, db) {
        const string_menu = new ActionRowBuilder().setComponents(
            new StringSelectMenuBuilder({
                type: 3,
                custom_id: "",
                min_values: 0,
                max_values: 1,
                placeholder: "",
                disabled: false,
                options: [
                    { label: "", value: "" },
                ],
            }),
        )

        message.reply({ content: "", components: [string_menu] });
    },
};