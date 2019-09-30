const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = '!';

    //Quand le bot ce connecte si tout fonctionne.
bot.on('ready', function () {
    console.log("je suis connecté !")
});

    //Message mp bienvenue
bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur le serveur! ' + member.displayName)
  }).catch(console.error)
})

    //Message de bienvenue sur le serveur.
//bot.on('guildMemberAdd', member => {

//    const welcomechannel = member.guild.channels.find('id', '628160745846341642')
//    var embed = new Discord.RichEmbed()
//    .setColor('#76D880')
//    .setDescription(`:inbox_tray: <@${member.user.id}> bienvenue à toi !!`)
//    return welcomechannel.send({embed})
    
//    });
    
    //Message quand une personnes quitte le serveur.
//bot.on('guildMemberRemove', member => {

//    const welcomechannel = member.guild.channels.find('id', '628160745846341642')
//    .setColor('#76D880')
//  .setDescription(`:inbox_tray: <@${member.user.id}>nous a quitté !! `)
//    return welcomechannel.send({embed})
        
//    });

bot.on('message', message => {
    if (message.content === prefix + "test1") {
        message.reply('test réussi')
    }
});

bot.on('message', message => {
    if (message.content === prefix + "test2"){
        message.author.send("test message privée réussi !")
    };
});

    //connecté le bot.
bot.login(process.env.TOKEN);
