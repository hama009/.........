const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
  
 
    let helpEmbed = new MessageEmbed()
 
   .setTitle(`${message.client.user.username} Help`)
   .
   .setDescription("

 [`I N V I T E`](https://discord.com/api/oauth2/authorize?client_id=769188260228104203&permissions=1878523729&scope=bot) 
 [`S U P P O R T`](https://discord.gg/yE7u7UMYyQ) 


")
   
      .setColor("RANDOM");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
