const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function () {
  console.log("Je suis connecté !")
});

bot.on('message', message => {
  if (message.content === "!ping") {
    message.reply('pong !')
  }
});

bot.login("NjI3NDQwODcyNzQ5MDA2ODQ4.XZDp0w.3JcwrN3v97-0bGmDJGDzXDeGaqQ");
