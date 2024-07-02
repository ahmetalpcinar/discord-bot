const modalcontents = require("./modal-contents.js");

module.exports = (client, interaction, db) => {
    if (interaction.customId == "") return modalcontents(client, interaction, db);
};