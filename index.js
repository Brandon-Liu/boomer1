const Discord = require('discord.js');
const fs = require('fs');
var bot = new Discord.Client();


bot.on('ready', () => {
    console.info(`BOT IS READY`);
});

bot.on('message', msg => {

    if (msg.content === 'ok') {
        msg.channel.send('boomer');
    }
    else if (msg.content === 'Ok') {
        msg.channel.send('boomer');
    }
    else if (msg.content === 'oK') {
        msg.channel.send('boomer');
    }
    let port = process.env.PORT;
    if (port == null || port == "") {
      port = 8000;
    }
    app.listen(port);

})

bot.login('NjU5NDExNDUxMDQzMjUwMjI3.XgN7kg._tBxKHkXVE1gnNllbJY72HhleiM')
