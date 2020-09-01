module.exports = {
    name: 'spreadsheet',
    description: 'link to raid spreadsheet',
    execute(message, args) {
        message.channel.send('https://docs.google.com/spreadsheets/d/1RCaOul7m9xh1sVUD7xk4lopTw7NqCSjx6NRcimMsMPU/edit#gid=0');
    }
};