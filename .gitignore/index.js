const Discord = require('discord.js');
const client = new Discord.Client();

tera.on('ready', function () {
  console.log("Je suis connecté !")
});

client.login(process.env.BOT_TOKEN);
