module.exports = {
    name: 'raid',
    description: 'sends raid day and time',
    execute(message, args) {
        message.channel.send('Sundays 8pm EST');
    }
};