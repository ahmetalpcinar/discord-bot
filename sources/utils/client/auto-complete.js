module.exports = (client, interaction, db) => {
    const value = interaction.options.getFocused().toLocaleLowerCase("tr");
    const valueIf = value == "";
    const textIf = value.length >= 5;

    if (interaction.commandName == "") {
        if (!valueIf && textIf) {
            const names = "";
            const results = names.filter(item => item.toLocaleLowerCase("tr").startsWith(value));
            const suggestions = results.map(item => ({ name: item, value: `${item}` } ));

            return interaction.respond(suggestions);
        };
    };
};