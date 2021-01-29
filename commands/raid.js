module.exports = {
    name: 'raid',
    description: 'sends raid day and time',
    execute(message, args) {
        message.channel.send('Wednesday/Saturday 8-11pm EST');
    }
};