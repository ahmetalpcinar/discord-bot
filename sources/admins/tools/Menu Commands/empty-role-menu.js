const { ActionRowBuilder, RoleSelectMenuBuilder } = require("discord.js");

module.exports = {
    name: "roleselectmenu",
    run(client, message, args, db) {
        const role_menu = new ActionRowBuilder().setComponents(
            new RoleSelectMenuBuilder({
                type: 5,
                custom_id: "",
                min_values: 0,
                max_values: 1,
                placeholder: "",
                disabled: false,
            }),
        )

        message.reply({ content: "", components: [role_menu] });
    },
};