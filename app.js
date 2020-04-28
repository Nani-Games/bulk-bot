/*

Made by Nani-Games
https://www.nani-games.net/
Fork me on GitHub: https://github.com/Nani-Games

*/

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

process.on('unhandledRejection', error => {
    console.log(config.logger + 'There was an unexpected error while sending the bulk messages. Continue...');
});

client.on('ready', () => {
    client.user.setActivity(config.activity);
    client.guilds.get(config.guild).members.get(config.id).setNickname("Bulk Bot");
    console.log(config.logger + `Bot started successfully: ${client.user.tag}!`);
    console.log(config.logger + `Version ${config.version} by ${config.author}`);
});

client.on("error", (e) => console.error(config.prefix + e));

client.on('message', message => {
  if(message.content.toLowerCase().startsWith(config.prefix + "bulk")) {
    if(message.member.roles.some(r=>[config.admin_role].includes(r.name))) {
        let text = message.content.slice((config.prefix + "bulk").length);
        const list = client.guilds.get(config.guild); 
        message.reply("your message was successfully sent to everyone!");
        message.react('✅');
        list.members.forEach(member => {
            if (member.id != client.user.id && !member.user.bot) {
                member.user.send({embed: {
                    color: 3719275,
                    thumbnail: {
                        url: config.logo
                    },
                    title: config.servername,
                    url: config.url,
                    description: text,
                    timestamp: new Date(),
                    footer: {
                    text: "Nani-Games on GitHub"
                    }
                }});
            }
        }); 
    } else {
        message.reply("you are not permitted to do that!");
        message.react('❌');
    }
  }
});

client.login(config.token);
