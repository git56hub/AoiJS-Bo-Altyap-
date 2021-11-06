const falsis = require('aoi.js');
var fs = require('fs');
var config = require("./config");
const bot = new falsis.Bot({
	token: config.token,
	prefix: config.prefix,
	mobile: false
});

bot.onMessage()
bot.onMessageDelete()
bot.onMessageUpdate()

//komutlar klasörünü tanımladığımız bölüm
var komutlar = fs.readdirSync('./komutlar').filter(file => file.endsWith('.js'));
console.log(komutlar.length+" Tane komut yüklenecek !")
for (const file of komutlar) {
	const command = require(`./komutlar/${file}`);
	  bot.command({
    name: command.name,
		aliases: command.aliases,
		bkz: command.bkz,
		code: command.code,
    nonPrefixed: command.nonPrefixed
	});
  console.log(command.name+" Komutu yüklendi")
  }

//Komutları alta yazın.


//Komutları üste yazın.

//Bot Durumu - Çoğalta bilirsiniz
bot.status({
	text: 'Herkesi', //durum yazısı
	type: 'WATCHING', //oynuyor kısmı
	status: 'online', //durum
	time: 12 //zaman 
});

bot.variables({
degisken: "degisken",
degisken2: "degisken2"
})