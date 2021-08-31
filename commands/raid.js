module.exports = {
    name: 'raid',
    description: 'sends raid day and time',
    execute(message, args) {
        message.channel.send('Saturday/Monday 8pm-1030pm EST');
    }
};