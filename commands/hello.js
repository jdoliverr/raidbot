module.exports = {
    name: 'hello',
    description: 'greetings',
    execute(message, args) {
        message.channel.send('Hello!');
    }
};