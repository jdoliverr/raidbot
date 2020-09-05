module.exports = {
    name: 'help',
    description: 'sends a list of commands',
    execute(message, args) {
        message.channel.send(`
        Commands-
**!spreadsheet**
**!raid**
**!E5S**
**!E6S**
**!E7S**
**!E8Sone**
**!E8Stwo**
**!friend**
        `);
    }
};