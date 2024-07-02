const { Client, Collection } = require("discord.js");
const { QuickDB } = require("quick.db");
const { readdirSync } = require("fs");

require("dotenv").config();
const token = process.env.token;

const db = new QuickDB();
const client = new Client({ intents: 3276799, });

readdirSync("./sources/events").forEach(category => {
    readdirSync(`./sources/events/${category}`).forEach(async file => {
        const event = await require(`./sources/events/${category}/${file}`);
        event(client, db);
    });
});

client.textcommands = new Collection();
readdirSync("./sources/commands/base").forEach(category => {
    readdirSync(`./sources/commands/base/${category}`).forEach(file => {
        const command = require(`./sources/commands/base/${category}/${file}`);
        client.textcommands.set(command.name, command);
    });
});

client.slashcommands = new Collection();
readdirSync("./sources/commands/home").forEach(category => {
    readdirSync(`./sources/commands/home/${category}`).forEach(file => {
        const command = require(`./sources/commands/home/${category}/${file}`);
        client.slashcommands.set(command.name, command);
    });
});

client.login(token);