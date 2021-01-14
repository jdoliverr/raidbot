module.exports = {
    name: 'notes',
    description: 'link to raid notes',
    execute(message, args) {
        message.channel.send('https://docs.google.com/drawings/d/1oOIPXh8P-rgGlgUR7M6eypjzy00BFH2W1dXYz7tItTA/edit');
    }
};