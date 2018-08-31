const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Cosmic Bot",
              icon_url: "https://i.hizliresim.com/EyyG8z.png"
            },
			    "thumbnail": {
				 "url": "https://i.hizliresim.com/EyyG8z.png"
			},
            title: "",
            url: "",
            description: "Cosmic Bot kolay işlevli bir bottur .",
            fields: [
				{
                name: "Genel Komutlar",
				inline: true,
                value: "c!**destek**\nc!**yardım**\nc!**değişiklikler**\nc!**istatistikler**\nc!**sunucubilgi**\nc!**davet**\nc!**seviye-sistemi**\nc!**kodtest**\nc!**ailemiz**"
			  },
				{
                name: "Mod komutları",
				inline: true,
                value: "c!**temizle**\nc!**ban**\nc!**duyuruyap**\nc!**uyar**\nc!**kick**",
              },
			  {
                name: "Eğlenceli Komutlar",
				inline: true,
                value: "c!**kedi**\nc!**köpek**\nc!**coolresim**\nc!**hastebin**\nc!**köpekadı**\nc!**kediadı**\nc!**randomşifre**\nc!**mcödül**\nc!**twerk**\nc!**sins-aga**"
              },
              {
                name: "Kullanıcı Komutları",
				inline: true,
                value: "c!**kullanıcıbilgim**\nc!**avatarım**\nc!**ping**\nc!**altınlarım**\nc!**altın-kontrol**\nc!**madencilik**"
              },
              {
                name: "Güncel Sürüm",
                value: "v2.3 BETA"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "https://i.hizliresim.com/EyyG8z.png",
              text: "© Yeni neslin oyuncağı"
            }
          }
        });  
	    message.react("👍")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
