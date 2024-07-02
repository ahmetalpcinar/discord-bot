const { ActionRowBuilder, ModalBuilder, TextInputBuilder } = require("discord.js");

module.exports = {
    name: "modalcommand",
    description: "Açıklama girmeyi unutma.",
    run(interaction, db) {
        const modal = new ModalBuilder({
            custom_id: "",
            title: "",
            components: [
                new ActionRowBuilder({
                    components: [
                        new TextInputBuilder({
                            custom_id: "",
                            label: "",
                            style: 1,
                            value: "",
                            required: true,
                            max_length: 0,
                            min_length: 0,
                            placeholder: "",
                        }),
                    ],
                }),
            ],
        });

        interaction.showModal(modal);
    },
};