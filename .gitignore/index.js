const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', function () {
  console.log("Je suis connecté !")
});

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong !')
  }
});

client.login(process.env.BOT_TOKEN);
