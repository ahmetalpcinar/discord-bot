module.exports = (client, interaction, db) => {
    if (interaction.customId == "") {
        const title = interaction.components[0].components[0].value;
        const details = interaction.components[1].components[0].value;
    };
};