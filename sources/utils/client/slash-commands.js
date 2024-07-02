module.exports = (client, type = "Global") => {
    const guild = process.env.guild;
    const commands = client.slashcommands.map(command => command);

    if (type == "Global") {
        client.application.commands.set(commands);
    };

    if (type == "Guild") {
        const guilds = client.guilds.cache.get(guild);
        guilds.commands.set(commands);
    };
};