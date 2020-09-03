module.exports = {
    name: 'help',
    description: 'sends a list of commands',
    execute(message, args) {
        message.channel.send(`
        Commands-
**!spreadsheet**
**!ramuh**
**!raid**
**!garuda**
**!darkness**
**!shivaone**
**!shivatwo**
**!friend**
        `);
    }
};