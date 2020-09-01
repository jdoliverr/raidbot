const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');
const spreadsheet = require('./commands/spreadsheet');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('RaidBot is online!');
    console.log(process.env.TOKEN)
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    client.commands.get(command).execute(message, args)
    // if (command === 'hello') {
    //     client.commands.get('hello').execute(message, args)
    // } else if (command === 'youtube') {
    //     client.commands.get('youtube').execute(message, args)
    // } else if (command === 'spreadsheet') {
    //     client.commands.get('spreadsheet').execute(message, args)
    // }
});

client.login();