const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  message.channel.send('Ornek komut calistirildi')
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ornek'],
  permLevel: 0
};

exports.help = {
  name: 'ornek',
  description: 'murat eren bos altyapi ornek komut',
  usage: '<prefix> ornek'
};