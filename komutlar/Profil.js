
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
const moment = require('moment')
require('moment-duration-format')

exports.run = async (client, message, args) => {
let Userr;
if (message.mentions.members.first()) Userr = message.mentions.members.first().id
if (args[0] && isNaN(Userr)) Userr = args[0]
if (!Userr) Userr = message.author.id
client.users.fetch(Userr).then((User) => {
let AddField;
if (ayarlar.geli??tiriciler.includes(User.id)) AddField = `${User.bot ? `${User.tag} \\???? && ${client.emojis.cache.get('903668970815635497')}

\\???? 罈 Discord Botu
${client.emojis.cache.get('903668970815635497')} 罈 ${client.user.username} Geli??tiricisi` : `${User.tag} ${client.emojis.cache.get('903668970815635497')}

${client.emojis.cache.get('903668970815635497')} 罈 ${client.user.username} Geli??tiricisi`}`
if (!ayarlar.geli??tiriciler.includes(User.id)) AddField = `${User.bot ? `${User.tag} \\????

\\???? 罈 Discord Botu` : User.tag}`
const Embed = new Discord.MessageEmbed()
.setColor(message.guild.me.roles.highest.hexColor)
.setAuthor(User.tag,User.avatarURL({dynamic:true}))
.addField('Discord Etiketi',AddField,true)
.addField('Sahibi Oldu??u Onayl覺 Sunucular',client.guilds.cache.filter(Sunucu => Sunucu.ownerID == User && db.fetch(`Onayl覺Sunucu_${Sunucu.id}`) == true).sort((a,b) => a-b).map(Sunucu =>
`${client.guilds.cache.get(Sunucu.id).name}
${client.guilds.cache.get(Sunucu.id).memberCount} 羹ye`).join('\n') || 'Sahibi oldu??u onayl覺 sunucu bulunmamaktad覺r.',true)
.addField('Hesap Olu??turulma',`${moment(User.createdAt).format('LL')} \`(${moment.duration(new Date().getTime() - User.createdAt.getTime()).format('DD').toString().replace(',','')} g羹n)\``,true)
.setThumbnail(User.avatarURL({dynamic:true}))
.setFooter(`Kullan覺c覺 ID: ${User.id}`)
message.channel.send(Embed)
})
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['profil','profile',"Userinfo","kb","userinfo","kullan覺c覺-bilgi","kullan覺c覺bilgi",'Profil','Profile',"Kb","USER襤NFO","Kullan覺c覺-bilgi","Kullan覺c覺bilgi"],
    permLevel: 0
}

exports.help = {
    name: 'Profil | Profile',
    description: 'Profilinize bakman覺za yarar.',
    usage: 'profil'
}
