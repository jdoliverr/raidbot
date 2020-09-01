module.exports = {
    name: 'raid',
    description: 'sends raid day and time',
    execute(message, args) {
        message.channel.send('Mondays 9pm EST');
    }
};