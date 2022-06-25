/*HELLO BRO TERIMA KASIH SUDAH AMBIL SCRIPT INI JANGAN LUPA IKUTI DAN SUBSCRIBE MEDIA SOSIAL OWNER DAN BOT

Sc Ori By Arasya
Sc Record By Christian ID
Note : Jangan Perjualkan Sc Ini!!!

Instagram Jojo : @arsrfi.jpg
Youtube Jojo : Jojo Channel

Instagram : @chris.tianid
Youtube : Christian ID
WhatsApp : 0859-2116-5857

THANKS TO
- Irfan Hardianto
- Amell
- Hardianto
- Affis Junianto
- Rafli Rusdiana
- Febri
- Jojo
- Christian ID

Terimakasih*/
"use strict";
const {
	downloadContentFromMessage
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('../lib/color')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("../lib/myfunc");
const { webp2mp4File } = require("../lib/convert")
const { y2mateA, y2mateV } = require('../lib/y2mate')
const { pinterest } = require("../lib/pinterest")
const { darkjokes } = require("../lib/darkjokes")
const { igstalk } = require("../lib/igstalk")
const { lirikLagu } =require("../lib/lirik.js")
const { igstory } = require("../lib/igstory")
const { mediafire } = require("../lib/mediafire")
const { ephoto } = require("../lib/ephoto")
const { igDownloader } = require("../lib/igdown")
const { wikiSearch } = require("../lib/wiki")
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../lib/game");
const tictac = require("../lib/tictac");
const _prem = require("../lib/premium");

const fs = require ("fs");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const xfar = require('xfarr-api');
const axios = require("axios");
const hxz = require("hxz-api");
const ig = require("insta-fetcher");
const ra = require("ra-api");
const kotz = require("kotz-api");
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");

//Apikey melcanz, Search aja melcanz.com
//Apikey Anto = hardianto
//Apikey Jojo = Syaa
const apikey = "melcantik"
const keyanto = "hardianto"
const jojoapi = "Syaa"
const ikiapi = "FuckBitch"
const chrisapi = "IzumiBot"

//Setting ke 2
const nobot = "37259886749"
const namabot = "Izumi MD"

// Setting Donasi
const gopay = "0813-2850-7885"
const pulsa = "0813-2850-7885"
const insta = "chris.tianid"
const github = "TianBot1"

// Setting SewaBot
const qris = "https://i.ibb.co/YTZT9SS/Qris.jpg"
const nomor = "wa.me/6285921165857"
const tujuhhari = "5.000"
const tigapuluhhari = "10.000"
const setahun = "20.000"
const permanen = "30.000"

//Setting Diamond FF | Ubah Harga Diamond Sesuai Kemauan mu//
const diamondsatu = "50 💎 = 8.000"
const diamonddua = "70 💎 = 10.000"
const diamondtiga = "100 💎 = 15.000"
const diamondempat = "140 💎 = 20.000"
const diamondlima = "355 💎 = 50.000"

//Setting Rekber // Lu Ubah Aja Soalnya Gw Bukan Anak JB:v //
const rekbera = "0-49K : 5K"
const rekberb = "50-110K : 10K"
const rekberc = "111-199K : 15K"
const rekberd = "200-299K : 20K"
const rekbere = "300-399K : 25K"
const rekberf = "400-499K : 30K"
const rekberg = "500-699K : 40K"
const rekberh = "700-1JT : 50K"

// Setting Payment
const via = "ShoopePay , Qris, Gopay"

// Exif
const Exif = require("../lib/exif")
const exif = new Exif()

// DB Game
let tictactoe = [];
let tebakgambar = []

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./message/response.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = async(conn, msg, m, setting, store) => {
	try {
		let { ownerNumber, ownerName, botName, gamewaktu, limitCount } = setting
		let { allmenu } = require('./help')
		const { type, quotedMsg, mentioned, now, fromMe } = msg
		if (msg.isBaileys) return
		const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const content = JSON.stringify(msg.message)
		const from = msg.key.remoteJid
		const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
		const toJSON = j => JSON.stringify(j, null,'\t')
		if (conn.multi) {
			var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
		} else {
			if (conn.nopref) {
				prefix = ''
			} else {
				prefix = conn.prefa
			}
		}
		const more = String.fromCharCode(8206)
    const readmore = more.repeat(4001)
		const args = chats.split(' ')
		const command = chats.toLowerCase().split(' ')[0] || ''
		const isCmd = command.startsWith(prefix)
		const isGroup = msg.key.remoteJid.endsWith('@g.us')
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
		const isOwner = ownerNumber == sender ? true : [`${ownerNumber}@s.whatsapp.net`, "6285921165857@s.whatsapp.net"].includes(sender) ? true : false
		const pushname = msg.pushName
		const q = chats.slice(command.length + 1, chats.length)
		const body = chats.startsWith(prefix) ? chats : ''
		const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender)
		const isUser = pendaftar.includes(sender)
		const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
		const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntiWame = isGroup ? antiwame.includes(from) : false

		const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.prem : gcounti.user

		const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
                const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
                const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
                mention != undefined ? mention.push(mentionByReply) : []
                const mentionUser = mention != undefined ? mention.filter(n => n) : []
		
		async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
				return path_file
			}
		}
		const sendFileFromUrl = async (from, url, caption, options = {}) => {
		    let mime = '';
		    let res = await axios.head(url)
		    mime = res.headerd["content-type"]
		    let type = mime.split("/")[0]+"Message"
		    if (mime.split("/")[0] === "image") {
		       var img = await getBuffer(url)
		       return conn.sendMessage(from, { image: img, caption: caption }, options)
		    } else if (mime.split("/")[0] === "video") {
		       var vid = await getBuffer(url)
		       return conn.sendMessage(from, { video: vid, caption: caption }, options)
		    } else if (mime.split("/")[0] === "audio") {
		       var aud = await getBuffer(url)
		       return conn.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
		    } else {
		       var doc = await getBuffer(url)
		       return conn.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
		    }
		}
        async function sendPlay(from, query) {
           var url = await yts(query)
           url = url.videos[0].url
           hxz.youtube(url).then(async(data) => {
             /*var button = [{ buttonId: `/ytmp3 ${url}`, buttonText: { displayText: `🎵 Audio (${data.size_mp3})` }, type: 1 }, { buttonId: `/ytmp4 ${url}`, buttonText: { displayText: `🎥 Video (${data.size})` }, type: 1 }]*/
             /*conn.sendMessage(from, { caption: `*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`, location: { jpegThumbnail: await getBuffer(data.thumb) }, buttons: button, footer: 'Pilih Salah Satu Button Dibawah⬇️', mentions: [sender] })*/
           var button = [
		        	{ urlButton: { displayText: `Source`, url : `https://youtu.be/${data.id}` } },
	         		{ quickReplyButton: { displayText: `🎵 Audio (${data.size_mp3})`, id: `${prefix}ytmp3 ${url}` } },
	         		{ quickReplyButton: { displayText: `🎥 Video (${data.size})`, id: `${prefix}ytmp4 ${url}` } },
		]
             conn.sendMessage(from, { caption: `*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`, location: { jpegThumbnail: await getBuffer(data.thumb) }, templateButtons: button, footer: 'Pilih Salah Satu Button Dibawah', mentions: [sender]} )
           }).catch((e) => {
             conn.sendMessage(from, { text: mess.error.api }, { quoted: msg })
               ownerNumber.map( i => conn.sendMessage(from, { text: `Send Play Error : ${e}` }))
           })
        }
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}
		function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
		function monospace(string) {
            return '```' + string + '```'
        }
		function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
		}
		function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = conn.sendMessage(from, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = conn.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
		      return res
 		    }
		}
		const reply = (teks) => {
			conn.sendMessage(from, { text: teks }, { quoted: msg })
		}
		const textImg = (teks) => {
			return conn.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(setting.pathimg) }, { quoted: msg })
		}
		const sendMess = (hehe, teks) => {
			conn.sendMessage(hehe, { text, teks })
		}
		const buttonWithText = (from, text, footer, buttons) => {
			return conn.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
		}
		const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
		}
		//{ callButton: { displayText: `Call Owner!`, phoneNumber: `+${ownerNumber}` } },
		const buttonsDefault = [
			{ urlButton: { displayText: `Group Izumi Bot`, url : `https://chat.whatsapp.com/LsNzi7PDERyB9xIlW0F8Eq2` } },
			{ urlButton: { displayText: `Nomer Owner`, url : `https://wa.me/6285921165857` } },
			{ quickReplyButton: { displayText: `💰 Donasi`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `Script`, id: `${prefix}sc` } },
		]
		const button5 = [
			{ callButton: { displayText: `Number Owner`, phoneNumber: `0859-2116-5857` } },
			{ urlButton: { displayText: `Group Izumi Bot`, url : `https://chat.whatsapp.com/LsNzi7PDERyB9xIlW0F8Eq2` } },
			{ quickReplyButton: { displayText: `Back To Menu 🔙`, id: `${prefix}menu` } },
		]
		const buttonsSewa = [
			{ urlButton: { displayText: `Group Izumi Bot`, url : `https://chat.whatsapp.com/LsNzi7PDERyB9xIlW0F8Eq2` } },
			{ urlButton: { displayText: `Nomer Owner`, url : `https://wa.me/6285921165857` } },
			{ quickReplyButton: { displayText: `Donasi`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `Menu`, id: `${prefix}menu` } },
		]
		const buttonsMenu = [
			{ urlButton: { displayText: `Group Izumi Bot`, url : `https://chat.whatsapp.com/LsNzi7PDERyB9xIlW0F8Eq2` } },
			{ urlButton: { displayText: `Nomer Owner`, url : `https://wa.me/6285921165857` } },
			{ quickReplyButton: { displayText: `Donasi`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `Rules`, id: `${prefix}rules` } },
			{ quickReplyButton: { displayText: `Premium`, id: `${prefix}daftarprem` } },
		]
		const buttonsDiamondFF = [
			{ urlButton: { displayText: `Group Izumi Bot`, url : `https://chat.whatsapp.com/LsNzi7PDERyB9xIlW0F8Eq2` } },
			{ quickReplyButton: { displayText: `Format ID`, id: `${prefix}formatid` } },
		]
		const buttonsAllmenu = [
		    { urlButton: { displayText: `Group Izumi Bot`, url : `https://chat.whatsapp.com/LsNzi7PDERyB9xIlW0F8Eq2` } },
			{ quickReplyButton: { displayText: `All Menu`, id: `${prefix}allmenu` } },
			{ quickReplyButton: { displayText: `Rules`, id: `${prefix}rules` } },
		]
		const buttonsRekber = [
			{ urlButton: { displayText: `Chat Owner`, url : `https://wa.me/6285921165857` } },
		]
        
		const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

         // Anti link

        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){

            if (chats.match(`://chat.whatsapp.com`)) {

                reply(`*[ GROUP LINK DETECTOR ]*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)

                number = sender

      conn.groupParticipantsUpdate(from, [number], "remove")

            }

        }
         // Anti wame
        if (isGroup && isAntiWame && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(/(wa.me\/)/gi)) {
                reply(`*[ NOMOR LINK DETECTOR ]*\n\nSepertinya kamu mengirimkan link nomor, maaf kamu akan di kick`)
                number = sender

      conn.groupParticipantsUpdate(from, [number], "remove")

            }
        }

		// Auto Read & Presence Online
		conn.sendReadReceipt(from, sender, [msg.key.id])
		conn.sendPresenceUpdate('available', from)
		
        // Auto Registrasi
		if (isCmd && !isUser) {
			pendaftar.push(sender)
			fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		  }

		// Premium
		_prem.expiredCheck(conn, premium)
		
		// Tictactoe
		if (isTicTacToe(from, tictactoe)) tictac(chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)

        // Game
		cekWaktuGame(conn, tebakgambar)
		if (isPlayGame(from, tebakgambar) && isUser) {
		  if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
		    var htgm = randomNomor(500, 550)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var tebakgmbr = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tebakgambar` } },
		]
			 conn.sendMessage(from, { text: texttg, templateButtons: tebakgmbr, footer: 'TEBAK - GAMBAR', mentions: [sender]} )  
		    tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
		  }
		}
if (chats.startsWith("@37258266435")){
	/*conn.sendMessage(from, { react: { text: `😍`, key: msg.key }})*/
   conn.sendMessage(from, { audio: {url : `https://d.top4top.io/m_22231oj7h1.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
}
		if (chats.startsWith("> ") && isOwner) {
		console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
		  const ev = (sul) => {
            var sat = JSON.stringify(sul, null, 2)
            var bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return textImg(bang)
          }
          try {
           textImg(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
          } catch (e) {
           textImg(util.format(e))
          }
		} else if (chats.startsWith("$ ") && isOwner) {
        console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
          exec(chats.slice(2), (err, stdout) => {
		    if (err) return reply(`${err}`)
		    if (stdout) reply(`${stdout}`)
		  })
        } else if (chats.startsWith("x ") && isOwner) {
	    console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
		 try {
	       let evaled = await eval(chats.slice(2))
		   if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
			reply(`${evaled}`)
		 } catch (err) {
		   reply(`${err}`)
		 }
		}
		
		// Logs;
		if (!isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(45), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(45), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}

		switch(command) {
			// Main Menu
			case prefix+'allmenu':
			  /*conn.sendMessage(from, { audio: fs.readFileSync('audio/Menu.m4a'), mimetype: 'audio/mp4', ptt: true}, {quoted: msg})*/
			    var teks = allmenu(sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount)
			    
				/*conn.sendMessage(from, { react: { text: `👋`, key: msg.key }})*/
conn.sendMessage(from, { caption: teks, location: { jpegThumbnail: fs.readFileSync('media/Menu.jpg') }, templateButtons: buttonsMenu, footer: '© Izumi - Bot', mentions: [sender] })
				break
case prefix+'menu':
  var teks = `Hai kak ${pushname}
saya ${namabot}, bot ini adalah Beta Multi-Device Whatsapp

Note : *_Bot Ini Masih Dalam Pengembangan Jika Ada Fitur Yang Eror Silakan Hubungi Owner!!!_*`
			    conn.sendMessage(from, { caption: teks, location: { jpegThumbnail: fs.readFileSync('media/Menu.jpg') }, templateButtons: buttonsAllmenu, footer: 'Izumi Bot Multi Device', mentions: [sender] })
			    break
case prefix+'donasiah':
  reply(`Jika Ingin Donasi Harap Hubungi Owner\n\nhttps://wa.me/${ownerNumber}`)
  break
case prefix+'donasi':
  case prefix+'donate':
  var donasibut = [
			{ urlButton: { displayText: `Group Izumi Bot`, url : `https://chat.whatsapp.com/LsNzi7PDERyB9xIlW0F8Eq2` } },
			{ quickReplyButton: { displayText: `Aku Ingin Donasi`, id: `${prefix}donasiah` } },
		]
var teks = `  │
  ├─ ❏ GOPAY
  ├─ ❏ ${gopay}
  ├─ ❏ PULSA
  ├─ ❏ ${pulsa}
  ├─ ❏ INSTAGRAM
  └─ ❏ https://www.instagram.com/${insta}
  
  Donasi Untuk Upgrade Ke Fitur Premium
  Note : Donasi Seikhlasnya`
 conn.sendMessage(from, { caption: teks, image: {url: `https://i.ibb.co/CPcFJ6c/IMG-20220131-WA0504.jpg`}, templateButtons: donasibut, footer: '© Izumi - Bot', mentions: [sender]} )  
			    break
case prefix+'daftarprem':
  var teks = `*[ LIST HARGA PREM ]*

_Yakin kamu mau daftar ke premium?_

*Keuntungan :*
- Limit Unlimited
- Akses Fitur Premium
- Tidak Ada Kata ~Limit Menurun~

*LIST DAFTAR PREMIUM*
- Rp. 2.000 - 7 Hari
- Rp. 5.000 - 1 Bulan
- Rp. 8.000 - 1 Tahun`
			    conn.sendMessage(from, { caption: teks, location: { jpegThumbnail: fs.readFileSync('media/premium.jpg') }, templateButtons: button5, footer: '© Izumi - Bot', mentions: [sender] })
			    break
//Store Menu By Christian ID
case prefix+'listff': //By Christian ID
  var teks = `*[ LIST DIAMOND FREE FIRE ]*

✾ ${diamondsatu}
✾ ${diamonddua}
✾ ${diamondtiga}
✾ ${diamondempat}
✾ ${diamondlima}

*_Pembayaran Via : ${via}_*

*Jika Ingin Order Klick Button Dibawah Atau Ketik ${prefix}formatid*`
			    conn.sendMessage(from, { caption: teks, location: { jpegThumbnail: fs.readFileSync('media/ff.jpg') }, templateButtons: buttonsDiamondFF, footer: '© Diamond FF', mentions: [sender] })
			    break
case prefix+'rekber': //By Christian ID
  var teks = `*[ LIST HARGA REKBER ]*

 ${rekbera}
 ${rekberb}
 ${rekberc}
 ${rekberd}
 ${rekbere}
 ${rekberf}
 ${rekberg}
 ${rekberh}`
			    conn.sendMessage(from, { caption: teks, location: { jpegThumbnail: fs.readFileSync('media/rekber.jpg') }, templateButtons: buttonsRekber, footer: 'List Rekber', mentions: [sender] })
			    break
case prefix+'formatid': // By Christian ID
  reply("*[ FORMAT FF ]*\n\nID Game = \nNick Game = \nJumlah Diamond = \nPembayaran Via = \n\n*Kirim Formulir Ini Ke wa.me/6285921165857*")
  break
case prefix+'sc': //By Christian ID
  var teks = `*── 「 SOURCE CODE 」 ──*

*Script : https://youtube.com/channel/UCbetUssizXWLgZdDVEFp8Sg*

*_Sc Bot Versi 1 Via MediaFire : https://www.mediafire.com/file/zi97farlseupw3z/Christian-ID.zip/file_*

*_Sc Bot Versi 2 Via MediaFire : https://www.mediafire.com/file/l8zoyc38l420wen/ChrisV1.7z/file_*

_Sc Versi 2 Berpassword Syarat : Subscribe https://youtube.com/channel/UCbetUssizXWLgZdDVEFp8Sg Dan Screenshot Kirim Ke Owner_`
			    conn.sendMessage(from, { caption: teks, location: { jpegThumbnail: fs.readFileSync('media/chris.jpg') }, templateButtons: button5, footer: '© Izumi - Bot', mentions: [sender] })
			    break
case prefix+'rules': //By Christian ID
  var teks = `*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Izumi Bot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*)

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Izumi Bot
😖🙏`
			    conn.sendMessage(from, { caption: teks, location: { jpegThumbnail: fs.readFileSync('media/rules.jpg') }, templateButtons: button5, footer: '© Izumi - Bot', mentions: [sender] })
			    break
case prefix+'sewabot': //By Christian ID
  var teks = `*── 「 SEWA BOT 」 ──*

*Harga Sewa*
7 Hari = ${tujuhhari}
30 Hari = ${tigapuluhhari}
1 Tahun = ${setahun}
Permanen = ${permanen}

*Keuntungan :*
- Bot Masuk Sesuai Waktu Sewa
- Gratis Premium 7 Hari
- Menyapa Member Join Ke Group
- Dan Lainnya

*_Pembayaran Melalui Qris Link Qris = ${qris}_*

*_Untuk Konfirmasi Saldo Hubungi Owner Silakan Klick Link Di Bawah_*
*_${nomor}_*`
			    conn.sendMessage(from, { caption: teks, location: { jpegThumbnail: fs.readFileSync('media/sewa.jpg') }, templateButtons: buttonsSewa, footer: '© Sewa Bot Christian ID', mentions: [sender] })
			    break
case prefix+'runtime':
case prefix+'tes':
  var teks = `*── 「 TES STATUS BOT 」 ──*


*[ STATUS BOT ONLINE ]*
*_Runtime : ${runtime(process.uptime())}_*`
			    conn.sendMessage(from, { caption: teks, location: { jpegThumbnail: fs.readFileSync('media/tes.jpg') }, templateButtons: buttonsSewa, footer: '© Bot By Christian ID', mentions: [sender] })
			    break
case prefix+'claim': //By Christian ID
  var htgm = randomNomor(500, 550)
  addBalance(sender, htgm, balance)
  reply(`Selamat Anda Mendapatkan ${htgm} Balance`)
  break
case prefix+'groupizumi':
  reply("Group 1\n\nhttps://chat.whatsapp.com/F92O1RmRXU2FYx3TudDVFj\nGroup 2\n\nhttps://chat.whatsapp.com/HWDIowVhHcd4EIm88F4X1y")
  break
			case prefix+'speed':
			  reply("Testing Speed...")
			    let timestamp = speed();
                            let latensi = speed() - timestamp
                            textImg(`*${latensi.toFixed(4)}* Second Membalas Chat Anda`)
		            break
case prefix+'infobot':
  case prefix+'inforobot':
    case prefix+'info':
      var caption = `*[ INFO IZUMI BOT ]*

*Nama Bot :* Izumi - MD
*Name Owner :* Christian ID
*Nomor Bot :* wa.me/${nobot}
*Nomor Owner :* wa.me/${ownerNumber}
*Engine :* NodeJs
*Status :* Aktif
*Aktif Selama :* ${runtime(process.uptime())}

===================
Thanks To
- Riyan
- Arasya
- Christian ID
- Amel
- Hardianto
- Febri`

conn.sendMessage(from, {caption: caption, location: fs.readFileSync('media/chris2.jpg')}, {quoted: msg})
break
			/*case prefix+'donate':
			case prefix+'donasi':
			    reply(`◪ DONASI
  │
  ├─ ❏ GOPAY
  ├─ ❏ 088213292687
  ├─ ❏ OVO
  ├─ ❏ 088213292687
  ├─ ❏ PULSA
  ├─ ❏ 081319944917
  ├─ ❏ PULSA2
  ├─ ❏ 088213292687
  ├─ ❏ INSTAGRAM
  └─ ❏ https://www.instagram.com/chris.tianid
  
  Donasi Untuk Upgrade Ke Fitur Premium
  Note : Donasi Seikhlasnya`)
			    break*/
			case prefix+'owner':
			    for (let x of ownerNumber) {
			      sendContact(from, x.split('@s.whatsapp.net')[0], 'Christian ID', msg)
			    }
			    /*conn.sendMessage(from, { audio: {url : `https://b.top4top.io/m_2223iin241.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})*/
			    var owncuy = [
			{ quickReplyButton: { displayText: `♨️ Instagram`, id: `${prefix}igowner` } },
			{ quickReplyButton: { displayText: `🌐 Github`, id: `${prefix}githubown` } },
		]
		conn.sendMessage(from, {text: `Ingin bertanya tanya tentang apa?`, templateButtons: owncuy, footer: `My Name : Christian`, mentions: [sender]} )
			    break
case prefix+'igowner':
 reply(`INSTAGRAM OWNER : @${insta}\nLINK : https://instagram.com/${insta}`)
 break
case prefix+'githubown':
 reply(`GITHUB OWNER : ${github}\nLINK : https://github.com/${github}`)
 break
			case prefix+'cekprem':
            case prefix+'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                if (isOwner) return reply(`Lu owner bego!`)
                if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                break
            case prefix+'listprem':
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium) {
                    men.push(i.id)
                    txt += `*ID :* @${i.id.split("@")[0]}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txt, men, true)
                break
	        // Converter & Tools Menu
			case prefix+'sticker': case prefix+'stiker': case prefix+'s': case prefix+'stickergif': case prefix+'sgif': case prefix+'stikergif': case prefix+'stikgif':
				if (isImage || isQuotedImage) {
		           var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
			       var buffer = Buffer.from([])
			       for await(const chunk of stream) {
			          buffer = Buffer.concat([buffer, chunk])
			       }
			       var rand1 = 'sticker/'+getRandom('.jpg')
			       var rand2 = 'sticker/'+getRandom('.webp')
			       fs.writeFileSync(`./${rand1}`, buffer)
			       ffmpeg(`./${rand1}`)
				.on("error", console.error)
				.on("end", () => {
				  exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				    conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) })
				    limitAdd(sender, limit)
					fs.unlinkSync(`./${rand1}`)
			            fs.unlinkSync(`./${rand2}`)
			          })
				 })
				.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				.toFormat('webp')
				.save(`${rand2}`)
			    } else if (isVideo || isQuotedVideo) {
				 var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				 var buffer = Buffer.from([])
				 for await(const chunk of stream) {
				   buffer = Buffer.concat([buffer, chunk])
				 }
			     var rand1 = 'sticker/'+getRandom('.mp4')
				 var rand2 = 'sticker/'+getRandom('.webp')
			         fs.writeFileSync(`./${rand1}`, buffer)
			         ffmpeg(`./${rand1}`)
				  .on("error", console.error)
				  .on("end", () => {
				    exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				      conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				      limitAdd(sender, limit)
					  fs.unlinkSync(`./${rand1}`)
				      fs.unlinkSync(`./${rand2}`)
				    })
				  })
				 .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				 .toFormat('webp')
				 .save(`${rand2}`)
                } else {
			       reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
			    }
                break
			case prefix+'toimg': case prefix+'toimage':
			case prefix+'tovid': case prefix+'tovideo':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedSticker) return reply(`Reply stikernya!`)
			    var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
			    var buffer = Buffer.from([])
			    for await(const chunk of stream) {
			       buffer = Buffer.concat([buffer, chunk])
			    }
			    var rand1 = 'sticker/'+getRandom('.webp')
			    var rand2 = 'sticker/'+getRandom('.png')
			    fs.writeFileSync(`./${rand1}`, buffer)
			    if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
			    exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
			      fs.unlinkSync(`./${rand1}`)
			      if (err) return reply(mess.error.api)
			      conn.sendMessage(from, { image: { url: `./${rand2}` }}, { quoted: msg })
			      limitAdd(sender, limit)
				  fs.unlinkSync(`./${rand2}`)
			    })
			    } else {
			    reply(mess.wait)
		          webp2mp4File(`./${rand1}`).then( data => {
			       fs.unlinkSync(`./${rand1}`)
			       conn.sendMessage(from, { video: { url: data.result }}, { quoted: msg })
			       limitAdd(sender, limit)
				  })
			    }
			    break
	        // Downloader Menu
			/*case prefix+'tiktok':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Tiktok(args[1]).then( data => {
			      conn.sendMessage(from, {
				   video: { url: data.medias[0].url },
				   caption: `${data.title}\n\nKamu bisa mengubahnya menjadi Vidio Tanpa Watermark atau Audio, pencet tombol dibawah untuk mengubahnya!`,
				   buttons: [{buttonId: `${prefix}tiktoknowm ${args[1]}`, buttonText: { displayText: "Without Watermark" }, type: 1 },
					{buttonId: `${prefix}tiktokaudio ${args[1]}`, buttonText: { displayText: "Audio" }, type: 1 }],
				   footer: "Create by @yannnnn.zz_"
			      }, { quoted: msg })
				  limitAdd(sender, limit)
			    }).catch(() => reply(mess.error.api))
			    break*/
			case prefix+'tiktoknowm':
			  case prefix+'tiktok':
				  case prefix+'tt':
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    const link = `${q}`
				hxz.ttdownloader(link).then( data => {
					var tidtod = [
						{ urlButton: { displayText: `Link`, url : `${q}` } },
			{ quickReplyButton: { displayText: `Ubah Ke Audio`, id: `${prefix}tiktokaudio ${q}` } },
				]
				reply(mess.wait)
				conn.sendMessage(from, { caption: `Succes Download Video Tiktok, Thanks For Using Izumi-Bot!`, video: {url: data.nowm}, templateButtons: tidtod, footer: '© Izumi - Bot', mentions: [sender]} )
			}).catch(() => reply(mess.error.api))
			limitAdd(sender, limit)
			    break
			case prefix+'tiktokaudio':
				case prefix+'ttaudio':
			    if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    hxz.ttdownloader(args[1]).then( data => {
			      conn.sendMessage(from, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: msg })
			       limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
		        break
				case prefix+'mediafire':
					if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('mediafire')) return reply(mess.error.Iv)
			    reply(mess.wait)
					var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/download/mediafire?url=${q}/textprome.js/file&apikey=${chrisapi}`)
					conn.sendMessage(from, { document: { url: data.result.link }, fileName: `${data.result.nama}`, mimetype: 'zip' }, { quoted: msg })
					limitAdd(sender, limit)
					break
            case prefix+'play':
				case prefix+'yt':
					case prefix+'youtube':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah ${command} query\nContoh : ${command} monokrom`)
                reply(mess.wait)
                await sendPlay(from, q)
				limitAdd(sender, limit)
                break
case prefix+'ytmp4': case prefix+'mp4':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Youtube(args[1]).then( data => {
			      //var teks = `*Youtube Video Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* ${data.medias[1].quality}\n*≻ Size :* ${data.medias[1].formattedSize}\n*≻ Url Source :* ${data.url}`
			      var teks = `Succes`
			      conn.sendMessage(from, { video: { url: data.medias[1].url }, caption: teks }, { quoted: msg })
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
/*case prefix+'ytmp3': case prefix+'mp3':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Youtube(args[1]).then( data => {
			      var teks = `*Youtube Audio Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* ${data.medias[7].quality}\n*≻ Size :* ${data.medias[7].formattedSize}\n*≻ Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			      conn.sendMessage(from, { audio: { url: data.medias[7].url }, mimetype: 'audio/mp4' }, { quoted: msg })
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break*/
				///SCRAPER YTMP3 BY ARASYA RAFI	
case prefix+'ytmp3':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)

			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
				y2mateA(q).then( data => {
					var capt = `📛 *Title :* ${data[0].judul}\n🔰 *Size Audio :* ${data[0].size}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data[0].thumb}}, {quoted: msg}) 
					
					conn.sendMessage(from, { document: { url: data[0].link }, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3' }, { quoted: msg })
					  }
					  )
limitAdd(sender, limit)
              break
			  case prefix+'ytmp3vn':
				if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
				y2mateA(q).then( data => {
					var capt = `📛 *Title :* ${data[0].judul}\n🔰 *Size Video :* ${data[0].size}\n⤵️ *Download :* ${data[0].link}\n\n_Tunggu sebentar audio akan di kirim...._`
					conn.sendMessage(from, {caption: capt, image: {url: data[0].thumb}}, {quoted: msg}) 
					
					conn.sendMessage(from, {audio: {url: data[0].link}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
					  }
					  )
				limitAdd(sender, limit)
				  break
				  
			case prefix+'getvideo': case prefix+'getvidio':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
				if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
			    reply(mess.wait)
			    xfar.Youtube(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then( data => {
			      var teks = `*Youtube Video Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* ${data.medias[1].quality}\n*≻ Size :* ${data.medias[1].formattedSize}\n*≻ Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			      conn.sendMessage(from, { video: { url: data.medias[1].url }, caption: teks }, { quoted: msg })
			       limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
		        break
			case prefix+'getmusik': case prefix+'getmusic':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (!isQuotedImage) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				if (!quotedMsg.fromMe) return reply(`Hanya bisa mengambil hasil dari pesan bot`)
				if (args.length < 2) return reply(`Balas hasil pencarian dari ${prefix}ytsearch dengan teks ${command} <no urutan>`)
				var kuoted = await quotedMsg.chats
                var ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/gi
                var arrey = [...kuoted.matchAll(ytIdRegex)].map(x => x[1])
                if (arrey.length == 0) return reply(`Reply hasil dari *${prefix}ytsearch* dengan perintah *${command}* urutan`)
                if (isNaN(args[1])) return reply(`Hanya support angka! pilih angka 1 sampai 10\nContoh : ${command} 2`)
                if (args[1] > arrey.length) return reply(`Urutan Hasil *${prefix}ytsearch* Hanya Sampai *${arrey.length}*`)
			    reply(mess.wait)
			    y2mateA(`https://youtube.com/watch?v=${arrey[args[1] -1]}`).then( data => {
			      var teks = `*Youtube Audio Downloader*\n\n*≻ Title :* ${data[0].judul}\n*≻ Quality :* ${data[0].quality}\n*≻ Size :* ${data.medias[0].size}\n\n_wait a minute sending media..._`
			      conn.sendMessage(from, { image: { url: data[0].thumbnail }, caption: teks }, { quoted: msg })
			      conn.sendMessage(from, { document: { url: data[0].link }, fileName: `${data[0].judul}.mp3`, mimetype: 'audio/mp3' }, { quoted: msg })
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'igdl': case prefix+'instagram': case prefix+'ig':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('instagram.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    igDownloader(args[1]).then( data => {
			     for (let i of data.medias) {
				  if (i.extension === "mp4") {
				   conn.sendMessage(from, { video: { url: i.result.link }})
				  } else if (i.extension === "jpg") {
				   conn.sendMessage(from, { image: { url: i.result.link }})
			      }
			     }
				 limitAdd(sender, limit)
			    }) 
			    break
			case prefix+'facebook': case prefix+'fbdl':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('facebook.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Facebook(args[1]).then( data => {
			      conn.sendMessage(from, { video: { url: data.medias[0].url }, caption: data.title }, { quoted: msg })
			      limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
			// Owner Menu
			case prefix+'exif':
			    if (!isOwner) return reply(mess.OnlyOwner)
			    var namaPack = q.split('|')[0] ? q.split('|')[0] : q
                var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
                exif.create(namaPack, authorPack)
				reply(`Sukses membuat exif`)
				break
			case prefix+'leave':
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (!isGroup) return reply(mess.OnlyGrup)
				conn.groupLeave(from)
			    break
			case prefix+'masuk':
			    if (!isOwner) return reply(mess.OnlyOwner)
				if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
				if (!isUrl(args[1])) return reply(mess.error.Iv)
				var url = args[1]
			    url = url.split('https://chat.whatsapp.com/')[1]
				var data = await conn.groupAcceptInvite(url)
				reply(jsonformat(data))
				break
case prefix+'bc': case prefix+'broadcast':
			    if (!isOwner) return reply(mess.OnlyOwner)
		            if (args.length < 2) return reply(`Masukkan isi pesannya`)
                            var data = await store.chats.all()
                            for (let i of data) {
                               conn.sendMessage(i.id, { text: `*[ IZUMI BROADCAST ]*\n\n${q}` })
                               await sleep(1000)
                            }
                            break
			case prefix+'setpp': case prefix+'setppbot':
		        if (!isOwner) return reply(mess.OnlyOwner)
		        if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', 'ppbot.jpeg')
				  var data =  await conn.updateProfilePicture(botNumber, { url: media })
			      fs.unlinkSync(media)
				  reply(`Sukses`)
				} else {
				  reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
				}
				break
			case prefix+'addprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
                if (!args[2]) return reply(`Mau yang berapa hari?`)
                if (mentioned.length !== 0) {
                    _prem.addPremiumUser(mentioned[0], args[2], premium)
                    reply('Sukses')
                } else {
                 var cekap = await conn.onWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    _prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
                    reply('Sukses')
                }
                break
            case prefix+'delprem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                if (mentioned.length !== 0){
                    premium.splice(_prem.getPremiumPosition(mentioned[0], premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                } else {
                 var cekpr = await conn.oWhatsApp(args[1]+"@s.whatsapp.net")
                 if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                }
                break
			// Random Menu
  case prefix+'katagalau':
    case prefix+'galau':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			var kotes = JSON.parse(fs.readFileSync('./fitur/katagalau.json'))
var hasil = pickRandom(kotes)
var quot = [
			{ quickReplyButton: { displayText: `Next Kata Galau ➡️`, id: `${prefix}katagalau` } },
		]
		conn.sendMessage(from, {text: hasil, templateButtons: quot, footer: 'Galau Mulu', mentions: [sender]} )
		limitAdd(sender, limit)
break
case prefix+'quotes':
  case prefix+'quote':
    case prefix+'katakata':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			var kotes2 = JSON.parse(fs.readFileSync('./fitur/quotes.json'))
var hasil = pickRandom(kotes2)
var quot = [
			{ quickReplyButton: { displayText: `Next Quotes ➡️`, id: `${prefix}quote` } },
		]
		
		conn.sendMessage(from, {text: hasil.quotes, templateButtons: quot, footer: `~ ${hasil.author}`, mentions: [sender]} )
		limitAdd(sender, limit)
break
case prefix+'covid': case prefix+'covid19': case prefix+'kopit':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/covidworld?apikey=${jojoapi}`)
  var captnya = `*[ COVID WORLD ]*\n\nTotal Kasus Seluruh Dunia : *${data.result.totalCases}* Jiwa\nTotal Sembuh : *${data.result.recovered}* Jiwa\nMeninggal : *${data.result.deaths}* Jiwa\nKasus Aktif : *${data.result.activeCases}*\nKasus Tertutup : *${data.result.closedCases}*\n\nPembaruan Terakhir Pada : *${data.result.lastUpdate}*`
   conn.sendMessage(from, {caption: captnya, image: { url: `https://telegra.ph/file/86b3b90581f9d31353b62.jpg`}}, {quoted: msg})
   limitAdd(sender, limit)
   break
//Persingkat Url By Christian ID
case prefix+'shortlink':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://hadi-api.herokuapp.com/api/shorturl?url=${args[1]}2`)
			    reply(`*Hasil : ${data.result}*`)
				limitAdd(sender, limit)
				break
case prefix+'cuttly':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://hadi-api.herokuapp.com/api/cuttly?url=${args[1]}`)
			    reply(`*Hasil : ${data.result}*`)
				limitAdd(sender, limit)
				break
case prefix+'bitly':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://hadi-api.herokuapp.com/api/bitly?url=${args[1]}`)
			    reply(`*Link : ${data.result}*`)
				limitAdd(sender, limit)
				break
case prefix+'tinyurl':
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[1])) return reply("Masukan Link")
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://hadi-api.herokuapp.com/api/tinyurl?url=${args[1]}`)
			    reply(`*Hasil : ${data.result}*`)
				limitAdd(sender, limit)
				break
case prefix+'hitungmundur':
  if (args.length < 2) return reply(`Mana tanggalnya?\nContoh : ${prefix}hitungmundur 12 10 2022`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (isNaN(args[1], args[2], args[3])) return reply(`Harus berupa angka`)
				var data = await fetchJson(`https://melcanz.com/countdown?tanggal=${args[1]}&bulan=${args[2]}&tahun=${args[3]}&apikey=${apikey}`)
			    reply(`Terisisa ${data.result}`)
				limitAdd(sender, limit)
				break
case prefix+'kbbi':
  if (args.length < 2) return reply(`Kirim perintah ${command} jembatan`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    const kbbi = args.join(" ")
				var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/kbbi?kata=${args[1]}&apikey=${jojoapi}`)
			    reply(`Kata : ${kbbi}\nArti : ${data.result.arti}`)
				limitAdd(sender, limit)
				break
//Primbon Menu By Christian ID
case prefix+'artimimpi':
  if (args.length < 2) return reply(`Kirim perintah ${command} jembatan`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    const artimimpi = args.join(" ")
				var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/primbon/artimimpi?text=${args[1]}&apikey=${chrisapi}`)
			    reply(`Kata : ${artimimpi}\nArti : ${data.result.hasil}`)
				limitAdd(sender, limit)
				break
case prefix+'artinama':
  if (args.length < 2) return reply(`Kirim perintah ${command} jembatan`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    const artinama = args.join(" ")
				var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/primbon/artinama?text=${args[1]}&apikey=${chrisapi}`)
			    reply(`Kata : ${artinama}\nArti : ${data.result.arti}`)
				limitAdd(sender, limit)
				break
			case prefix+'cecan': case prefix+'cewek':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/cecan`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
			case prefix+'cogan': case prefix+'cowok':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
				var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
				var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/cogan`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
				break
case prefix+'naruto':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["naruto hd","naruto boruto","naruto sasuke", "naruto aesthetic", "naruto aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/naruto`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Naruto", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'yaoi':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

				reply(mess.wait)
			    var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Yaoi", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'loli':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["loli","loli chan","loli anime","loli hd","loli aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/loli`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Foto Loli Chan", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'waifu':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["waifu","waifu aesthetic","waifu hd"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/waifu`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Waifu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
case prefix+'husbu':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				reply(mess.wait)
			    var query = ["husbu anime","husbu hd","husbu aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `/husbu`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				conn.sendMessage(from, { caption: "Random Husbu", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
			    limitAdd(sender, limit)
 			    break
			// Search Menu
			case prefix+'grupwa': case prefix+'searchgrup':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} nama grup`)
				reply(mess.wait)
			    hxz.linkwa(q).then(async(data) => {
				  if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
				  var teks = `*Hasil Pencarian Dari ${q}*\n\n`
				  for (let x of data) {
					teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
				  }
				  reply(teks)
				  limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'pinterest':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
				reply(mess.wait)
			    var jumlah;
			    if (q.includes('--')) jumlah = q.split('--')[1]
			    pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
				  if (q.includes('--')) {
					if (data.result.length < jumlah) {
					  jumlah = data.result.length
					  reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
					}
					for (let i = 0; i < jumlah; i++) {
					  conn.sendMessage(from, { image: { url: data.result[i] }})
					}
				    limitAdd(sender, limit)
				  } else {
					var but = [{buttonId: `/pinterest ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					conn.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
				    limitAdd(sender, limit)
				  }
				})
			    break
			case prefix+'yts': case prefix+'ytsearch':
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			    if (args.length < 2) return reply(`Kirim perintah ${command} query`)
				reply(mess.wait)
			    yts(q).then( data => {
				  let yt = data.videos
				  var jumlah = 15
				  if (yt.length < jumlah) jumlah = yt.length
				  var no = 0
				  let txt = `*YOUTUBE SEARCH*

 *Data berhasil didapatkan*
 *Hasil pencarian dari ${q}*
 
 *${prefix}getmusic <no urutan>*
 *${prefix}getvideo <no urutan>*
 Untuk mengambil Audio/Video dari hasil pencarian`
                for (let i = 0; i < jumlah; i++) {
				  no += 1
				  txt += `\n─────────────────\n\n*No Urutan : ${no.toString()}*\n*▢ Judul :* ${yt[i].title}\n*▢ ID :* ${yt[i].videoId}\n*▢ Channel :* ${yt[i].author.name}\n*▢ Upload :* ${yt[i].ago}\n*▢ Ditonton :* ${yt[i].views}\n*▢ Duration :* ${yt[i].timestamp}\n*▢ URL :* ${yt[i].url}\n`
				}
				conn.sendMessage(from, { image: { url: yt[0].image }, caption: txt }, { quoted: msg })
				limitAdd(sender, limit)
				}).catch(() => reply(mess.error.api))
			    break
//report
case prefix+'report':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} laporan`)
        reply(`Sukses Kirim Ke Owner, Main² banned!`)
        for (let i of ownerNumber) {
            conn.reply(i, `*[ USER REPORTS ]*\nThe Message : ${q}`, msg)
        }
        limitAdd(sender, limit)
        break
case prefix+'request':
        if (args.length < 2) return reply(`Kirim perintah ${command} laporan`)
        reply(`*Sukses Request Fitur Ke Owner*`)
        for (let i of ownerNumber) {
            conn.reply(i, `*[ REQUEST FITUR ]*\nThe Message : ${q}`, msg)
        }
        limitAdd(sender, limit)
        break
case prefix+'join':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
        if (args.length < 2) return reply(`Kirim perintah ${command} Link Grup Kamu`)
        reply(`Sukses Kirim Ke Owner, tunggu Laporan 3/4 menitan untuk masukan bot ke grup`)
        for (let i of ownerNumber) {
            conn.reply(i, `*[ JOIN GRUP ]*\nLink nya : ${q}`, msg)
        }
        limitAdd(sender, limit)
        break
// By Christian ID
case prefix+'wame':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} 62899xxxxxxxx`)
reply(`*[ WAME ]*\n*_Link : https://wa.me/${q}_*`)
limitAdd(sender, limit)
break
case prefix+'linkig':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah ${command} chris.tianid`)
reply(`*[ INSTAGRAM ]*\n*_Link : https://instagram.com/${q}_*`)
limitAdd(sender, limit)
break
//game & fun menu
//suit menu
case prefix+'suit':
  var but = [{buttonId: `#sbatu`, buttonText: { displayText: "Batu ✊" }, type: 1 }, {buttonId: `#sgunting`, buttonText: { displayText: "Gunting ✌️" }, type: 1 }, {buttonId: `#skertas`, buttonText: { displayText: "Kertas ✋" }, type: 1 }]
  var sutit = `*[ GAME SUIT ]*\n\nNOTE : *KAMU MEMILIKI 3 BUTTON DAN 3 KESEMPATAN UNTUK MEMILIH ANTARA BATU GUNTING KERTAS*\n*JIKA KAMU MEMENANGKAN 3 KESEMPATAN PERMAINAN BATU GUNTING KERTAS*\n*KAMU MENANG!!*`
conn.sendMessage(from, { text: sutit, buttons: but, footer: "Pilih Button Di Bawah\n\n- _Jika Kamu Pakai WhatsApp Mod Langsung Saja Ketik #sgunting, #sbatu, #skertas_", templateButtons: but }, {quoted: msg})
break
case prefix+'sbatu':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const batu = [`Aku Memilih *Batu*\nKamu Memilih *Batu*\n\n!! KITA SERI !!`,`Aku Memilih *Gunting*\nKamu Memilih *Batu*\n\n!! KAMU MENANG:( !!`,`Aku Memilih *Kertas*\nKamu Memilih *Batu*\n\n!! AKU MENANG !!`]
					const batuh = batu[Math.floor(Math.random() * batu.length)]
					var batuh2 = `*[ GAME SUIT ]*\n\n${batuh}`
					conn.sendMessage(from, { text: batuh2 }, { quoted: msg })
gameAdd(sender, glimit)
break
case prefix+'sgunting':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const gunting = [`Aku Memilih *Batu*\nKamu Memilih *Gunting*\n\n!! AKU MENANG !!`,`Aku Memilih *Gunting*\nKamu Memilih *Gunting*\n\n!! KITA SERI !!`,`Aku Memilih *Kertas*\nKamu Memilih *Gunting*\n\n!! KAMU MENANG :( !!`]
					const guntingh = gunting[Math.floor(Math.random() * gunting.length)]
					var guntingh2 = `*[ GAME SUIT ]*\n\n${guntingh}`
					conn.sendMessage(from, { text: guntingh2 }, { quoted: msg })
gameAdd(sender, glimit)
break
case prefix+'skertas':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const kertas = [`Aku Memilih *Batu*\nKamu Memilih *Kertas*\n\n!! KAMU MENANG :( !!`,`Aku Memilih *Gunting*\nKamu Memilih *Kertas*\n\n!! KAMU KALAH !!`,`Aku Memilih *Kertas*\nKamu Memilih *Kertas*\n\n!! KITA SERI !!`]
					const kertash = kertas[Math.floor(Math.random() * kertas.length)]
					var kertash2 = `*[ GAME SUIT ]*\n\n${kertash}`
					conn.sendMessage(from, { text: kertash2 }, { quoted: msg })
gameAdd(sender, glimit)
break
//akher nsfw
case prefix+'slot':
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  const pepekk = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🥑 : 🥑 : 🥑 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🌶️ : 🌶️ : 🌶️ Win👑',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
  const kalah = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        ]
 const kalah2 = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //Arasya
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        ]
        const selot = pepekk[Math.floor(Math.random() * pepekk.length)]
        const kalahnya = kalah[Math.floor(Math.random() * kalah.length)]
        const kalahnya2 = kalah2[Math.floor(Math.random() * kalah2.length)]
        var slotnya = `*[ 🎰 GAME SLOT 🎰 ]*

${kalahnya}
${selot}
${kalahnya2}

Note : Jika Kamu Mendapatkan Item Yang Sama, Kamu Menang!!!
Contoh : 🔔 : 🔔 : 🔔`
        var but = [{buttonId: `${command}`, buttonText: { displayText: "Kembali Slot" }, type: 1 }]
conn.sendMessage(from, { text: slotnya, buttons: but, footer: "© Slot By Christian\n@chris.tianid", templateButtons: but }, {quoted: msg})
gameAdd(sender, glimit)
        break
case prefix+'cekme':
  case prefix+'me':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  const ganteng = ['Cakep ✔️','Jelek Anjrit ❌']
  const sifat = ['Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan']
  const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
  const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
					const sipat = sifat[Math.floor(Math.random() * sifat.length)]
					const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)]
					const gai = suka[Math.floor(Math.random() * suka.length)]
					const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
					const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
  var cek = `*[ CEK PRIBADI KAMU ]*
 
Nama : ${pushname}
Sifat : ${sipat}
Keberanian : ${berani}%
Ketakutan : ${numb}%
Cakep : ${ganz}
Cek Pintar : ${pinter}%
Menyukai : ${gai}
  `

					 conn.profilePictureUrl(from, 'image').then( res => conn.sendMessage(from, {caption: cek, image: { url: res }}, {quoted: msg})).catch(() => conn.sendMessage(from, {caption: cek, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}}, {quoted: msg}))
				    limitAdd(sender, limit)
				    break
case prefix+'y':
  reply("Yey Prediksi Bot Benar")
  break
case prefix+'n':
  reply("Yah Maaf Ya kak:(")
  break
case prefix+'apakah':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
conn.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'bisakah':
  case prefix+'bisa':
    case prefix+'bisagak':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'bagaimanakah':
  case prefix+'gimanakah':
    case prefix+'gimana':
      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'rate':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
conn.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'gantengcek':
  case prefix+'cekganteng':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Christian`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'cantikcek':
  case prefix+'cekcantik':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Christian`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'sangecek':
  case prefix+'ceksange':
    case prefix+'gaycek':
      case prefix+'cekgay':
        case prefix+'lesbicek':
          case prefix+'ceklesbi':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
conn.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'kapankah':
  case prefix+'kapan':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
conn.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: msg })
limitAdd(sender, limit)
					break
case prefix+'cekbapak': // By Christian ID
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Liaa Cans']
					const cekbapak = bapak[Math.floor(Math.random() * bapak.length)]
					conn.sendMessage(from, { text: `Pertanyaan : Cek Bapak\nJawaban : ${cekbapak}` }, { quoted: msg })
					break
			case prefix+'tictactoe': case prefix+'ttt': case prefix+'ttc':
                if (!isGroup)return reply(mess.OnlyGrup)
			    if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                if (mentionByTag.length !== 1) {
				if (mentionByTag[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
                if (mentionByTag[0] === sender) return reply(`Sad amat main ama diri sendiri`)
                     var hadiah = randomNomor(100, 150)
				     mentions(monospace(`@${sender.split('@')[0]} menantang @${mentionByTag[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/N) untuk bermain\n\nHadiah : ${hadiah} balance`), [sender, mentionByTag[0]], false)
                     tictactoe.push({
                        id: from,
                        status: null,
						hadiah: hadiah,
                        penantang: sender,
                        ditantang: mentionByTag[0],
                        TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                     })
					 gameAdd(sender, glimit)
                } else {
                    reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                }
                break
			case prefix+'delttt':
            case prefix+'delttc':
                if (!isGroup)return reply(mess.OnlyGrup)
				if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
                var posi = getPosTic(from, tictactoe)
                if (tictactoe[posi].penantang.includes(sender)) {
                    tictactoe.splice(posi, 1)
                    reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (tictactoe[posi].ditantang.includes(sender)) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isGroupAdmins) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else if (isOwner) {
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                 } else {
                   reply(`Anda tidak bisa menghapus sesi tictactoe, karena bukan pemain!`)
                }
                break
			case prefix+'tebakgambar':
		        if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebakgambar)) return conn.reply(from, `Masih ada game yang belum diselesaikan`, tebakgambar[getGamePosi(from, tebakgambar)].msg)
				kotz.tebakgambar().then( data => {
				  data = data[0]
				  data.jawaban = data.jawaban.split('Jawaban ').join('')
				  var teks = `*TEBAK GAMBAR*\n\n`+monospace(`Petunjuk : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`)
				  conn.sendMessage(from, { image: { url: data.image }, caption: teks }, { quoted: msg })
				  .then( res => {
					var jawab = data.jawaban.toLowerCase()
					addPlayGame(from, 'Tebak Gambar', jawab, gamewaktu, res, tebakgambar)
					gameAdd(sender, glimit)
				  })
				})
			    break
             
			// Group Menu
			case prefix+'linkgrup': case prefix+'link': case prefix+'linkgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
			    url = 'https://chat.whatsapp.com/'+url
				reply(url)
				break
			case prefix+'setppgrup': case prefix+'setppgc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (isImage || isQuotedImage) {
				  var media = await downloadAndSaveMediaMessage('image', `ppgc${from}.jpeg`)
			      await conn.updateProfilePicture(from, { url: media })
				  .then( res => {
					reply(`Sukses`)
					fs.unlinkSync(media)
				  }).catch(() => reply(mess.error.api))
				} else {
			      reply(`Kirim/balas gambar dengan caption ${command}`)
				}
				break
			case prefix+'setnamegrup': case prefix+'setnamegc':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateSubject(from, q)
			    .then( res => {
				  reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
			    break
			case prefix+'setdesc': case prefix+'setdescription':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
				await conn.groupUpdateDescription(from, q)
			    .then( res => {
			      reply(`Sukses`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'group': case prefix+'grup':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				if (args.length < 2) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				if (args[1] == "close") {
				  conn.groupSettingUpdate(from, 'announcement')
				  reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
				} else if (args[1] == "open") {
				  conn.groupSettingUpdate(from, 'not_announcement')
				  reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
				} else {
				  reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
				}
			    break
			case prefix+'revoke':
			    if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins) return reply(mess.GrupAdmin)
				if (!isBotGroupAdmins) return reply(mess.BotAdmin)
				await conn.groupRevokeInvite(from)
			    .then( res => {
				  reply(`Sukses menyetel tautan undangan grup ini`)
				}).catch(() => reply(mess.error.api))
				break
			case prefix+'hidetag':
		        if (!isGroup) return reply(mess.OnlyGrup)
				if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
			    let mem = [];
		        groupMembers.map( i => mem.push(i.id) )
				conn.sendMessage(from, { text: q ? q : '', mentions: mem })
			    break
case prefix+'kick':
  if (!isOwner)return reply("_Maaf Fitur Ini Di Nonaktifkan Oleh Owner, Karena menyebabkan nomer bot 3 kali ke banned_")
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (mentioned.length !== 0) {
      number = mentioned[0]
      conn.groupParticipantsUpdate(from, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      conn.groupParticipantsUpdate(from, [number], "remove")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Tag atau balas pesan member yang ingin dikeluarkan dari grup`)
    }
    break

case prefix+'add':
  if (!isOwner)return reply("_Maaf Fitur Ini Di Nonaktifkan Oleh Owner, Karena menyebabkan nomer bot 3 kali ke banned_")
    if (!isGroup) return reply(mess.OnlyGrup)
    if (!isGroupAdmins) return reply(mess.GrupAdmin)
    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
    var number;
    if (args[1]) {
      number = mentioned[0]
      var cek = await conn.onWhatsApp(number)
      if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
      conn.groupParticipantsUpdate(from, [number], "add")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else if (isQuotedMsg) {
      number = quotedMsg.sender
      var cek = await conn.onWhatsApp(number)
      if (cek.length == 0) return reply(`Member yang kamu balas pesannya sudah tidak terdaftar di WhatsApp`)
      conn.groupParticipantsUpdate(from, [number], "add")
      .then( res => reply(jsonformat(res)))
      .catch( err => reply(jsonformat(err)))
    } else {
      reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan kedalam grup`)
    }
    break
case prefix+'antilink':

                if (!isGroup) return reply(mess.OnlyGrup)

                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)

                if (!isBotGroupAdmins) return reply(mess.BotAdmin)

                if (args.length === 1) return reply(`Pilih enable atau disable\nContoh : ${prefix}antilink enable`)

                if (args[1].toLowerCase() === 'enable'){

                    if (isAntiLink) return reply(`Udah aktif`)

                    antilink.push(from)

					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))

					reply('*Antilink Grup Aktif*')

                } else if (args[1].toLowerCase() === 'disable'){

                    let anu = antilink.indexOf(from)

                    antilink.splice(anu, 1)

                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))

                    reply('*Antilink Grup Nonaktif*')

                } else {

                    reply(`Pilih enable atau disable\nContoh : ${prefix}antilink enable`)

                }

                break
case prefix+'antiwame':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable\nContoh : ${prefix}antiwame enable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiWame) return reply(`Udah aktif`)
                    antiwame.push(from)
					fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
					reply('*Antiwame Grup Aktif*')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antiwame.indexOf(from)
                    antiwame.splice(anu, 1)
                    fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
                    reply('*Antiwame Grup Nonaktif*')
                } else {
                    reply(`Pilih enable atau disable\nContoh : ${prefix}antiwame enable`)
                }
                break
			// Bank & Payment Menu
			case prefix+'topbalance':{
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 20
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 150)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @6281319944917 2000`)
                 if (mentioned.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args[2])) return reply(`Nominal harus berupa angka!`)
                 if (args[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 kurangBalance(sender, parseInt(args[2]), balance)
                 addBalance(mentioned[0], parseInt(args[2]), balance)
                 reply(`Sukses transfer balance sebesar $${args[2]} kepada @${mentioned[0].split("@")[0]}`)
            }
                 break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (args[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args[1]) * 100)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${toCommas(getBalance(sender, balance))}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
			case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			    if (mentioned.length !== 0){
					var Ystatus = ownerNumber.includes(mentioned[0])
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(mentioned[0], premium)
				    var ggcount = isPrim ? gcounti.prem : gcounti.user
                    var limitMen = `${getLimit(mentioned[0], limitCount, limit)}`
                    textImg(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(mentioned[0], ggcount, glimit)}/${ggcount}\nBalance : $${getBalance(mentioned[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    textImg(`Limit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
				break
//Api Anto
case prefix+'ssweb':
  if (!isUrl(args[1])) return reply(mess.error.Iv)
  var seweb = chats.slice(7)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} link Mu\nContoh ${command} https://github.com/GetSya`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hardianto.xyz/api/tools/ssweb?url=${seweb}&apikey=${keyanto}`}})
  limitAdd(sender, limit)
  break
  case prefix+'sshpfull':
  if (!isUrl(args[1])) return reply(mess.error.Iv)
  var seweb = chats.slice(7)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} link Mu\nContoh ${command} https://github.com/GetSya`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/ssweb?url=${q}&device=phone&full=on`}})
  limitAdd(sender, limit)
  break
case prefix+'ssdesktop':
  if (!isUrl(args[1])) return reply(mess.error.Iv)
  var seweb = chats.slice(7)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} link Mu\nContoh ${command} https://github.com/GetSya`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/ssweb?url=${q}&device=desktop&full=on`}})
  limitAdd(sender, limit)
  break
case prefix+'nuliskanan':
  var kanan = chats.slice(11)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} Tulisan Mu\nContoh ${command} Izumi Ganteng\n\n⚠️ *NOTE : GAK BOLEH DI TAMBAHIN EMOJI/TEXT TEXT GAK JELAS*`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/canvas/nulis?text=${kanan}`}})
  limitAdd(sender, limit)
  break
case prefix+'foliokiri':
  var fkiri = chats.slice(10)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (args.length < 2) return reply(`Kirim Perintah ${command} Tulisan Mu\nContoh ${command} Izumi Ganteng\n\n⚠️ *NOTE : GAK BOLEH DI TAMBAHIN EMOJI/TEXT TEXT GAK JELAS*`)
  reply(mess.wait)
  conn.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/canvas/nulis2?text=${fkiri}`}})
  limitAdd(sender, limit)
  break
case prefix+'nulis':
  case prefix+'tulis':
    case prefix+'menulis':
reply(`*[ COMMAND NOT FOUND ]*
Command Salah ❌
Silahkan Pilih Type Buku/Folio Berikut

- ${prefix}foliokiri <Text>
- ${prefix}nuliskanan <Text>

Note : Anggap "<" dan ">" Tidak Ada
 `)
 break
//nsfw
case prefix+'pussy':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  reply(mess.wait)
var pussy = JSON.parse(fs.readFileSync('./fitur/nsfw/pussy.json'))
var hasil = pickRandom(pussy)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break
case prefix+'masturbation':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  reply(mess.wait)
var masturbation = JSON.parse(fs.readFileSync('./fitur/nsfw/masturbation.json'))
var hasil = pickRandom(masturbation)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
case prefix+'hentai':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  reply(mess.wait)
var hentai = JSON.parse(fs.readFileSync('./fitur/nsfw/hentai.json'))
var hasil = pickRandom(hentai)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
case prefix+'blowjob':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  reply(mess.wait)
var bj = JSON.parse(fs.readFileSync('./fitur/nsfw/blowjob.json'))
var hasil = pickRandom(bj)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
case prefix+'bdsm':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  reply(mess.wait)
var bdsm = JSON.parse(fs.readFileSync('./fitur/nsfw/bdsm.json'))
var hasil = pickRandom(bdsm)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")

  reply(mess.wait)

var hentai = JSON.parse(fs.readFileSync('./fitur/nsfw/hentai.json'))
var hasil = pickRandom(hentai)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
case prefix+'ass':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  reply(mess.wait)
var ass = JSON.parse(fs.readFileSync('./fitur/nsfw/ass.json'))
var hasil = pickRandom(ass)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
case prefix+'ahegao':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  reply(mess.wait)
var ahegao = JSON.parse(fs.readFileSync('./fitur/nsfw/ahegao.json'))
var hasil = pickRandom(ahegao)
conn.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: msg})
break 
///MAKER MENU BY JOJO AND CHRISTIAN ID!!!
case prefix+'glitch':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/tiktok-effect?text=${args[1]}&text2=${args[2]}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'flaming':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/flaming-fire?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'shadow':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/shadow-sky?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'goldenroses': // By Christian ID
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/golden-roses?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'youtubegold': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/maker/goldbutton?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'youtubesilver': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/maker/silverbutton?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*",  image: {url: data.result}}, {quoted: msg})
break
case prefix+'thunder': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/thunder2?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'neonlight': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/neon-light?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'neondevil': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/neon-devil?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'hallowen': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/hallowen-text?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'skytext': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/sky-text?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'holografic': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/holograpic?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'grafity': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/grafity-text?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'christmas': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/christmas?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'luxury': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/luxury?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'harrypotter': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/harry-potter?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'brokenglass': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/broken-glass?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'artpapper': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/art-papper?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'watercolor': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/water-color?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'glossymaker': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/glossy?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'multicolor': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/multi-color?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'deluxesilver': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/deluxe-silver?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'gluetext': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/glue-text?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'fabric': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/fabric?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'engraved': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/engraved?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'writing': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/writing?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'wicker': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/wicker?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'larva': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/larva?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'toxic': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/toxic-bokeh?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'koipish': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/koi?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'strobery': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/stroberi?text=$q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'jokerlogo': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/joker-logo?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'ninjalogo': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/ninja-logo?text=${text1}&text2=${text2}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'vintage': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/vintage?text=${text1}&text2=${text2}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'lionlogo': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/lion-logo?text=${text1}&text2=${text2}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'avengers': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/avengers-logo?text=${text1}&text2=${text2}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'pornhub': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var text1 = q.split('|')[0] ? q.split('|')[0] : q

var text2 = q.split('|')[1] ? q.split('|')[1] : ''
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/textpro/pornhub?text=${text1}&text2=${text2}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {caption: "*© Izumi Bot MD*", image: {url: data.result}}, {quoted: msg})
break
case prefix+'mascotbear': 
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1> <Text2>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/textpro/black-white-bear-mascot?teks=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'wolftext':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/wolf-metal?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'cup':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/teks-cup?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'romantic':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/romantic-messages?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'writetext':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/burn-paper?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'cup2':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/funny-cup?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'lovetext':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/love-messages?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'lovetext2':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/romantic-double?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'undergrass':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/under-grass?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'tahta': case prefix+'hartatahta':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
  reply(`Harta Tahta *${q}* Sedang Di Buat`)
conn.sendMessage(from, {caption: `*HARTA*\n*TAHTA*\n*${q}*`, image: { url: `https://hardianto.xyz/api/maker/harta-tahta?apikey=${keyanto}&text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'coffecup':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/coffee-cup?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'woodheart':
  if (args.length < 2) return reply(`Kirim perintah ${command} <Text1>`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  
conn.sendMessage(from, {caption: "© Izumi Bot", image: { url: `https://hadi-api.herokuapp.com/api/photoxy/wood-hearth?text=${q}`}}, {quoted: msg})
limitAdd(sender, limit)
break
//PHOTO OXY BY CHRISTIAN ID//
case prefix+'army': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/photooxy/army?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {image: {url: data.result}}, {quoted: msg})
break
case prefix+'matrix': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/maker/matrix?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {image: {url: data.result}}, {quoted: msg})
break
case prefix+'butterfly': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/photooxy/butterfly?text={q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {image: {url: data.result}}, {quoted: msg})
break
case prefix+'burnpapper': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/photooxy/burn-papper?text=${q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {image: {url: data.result}}, {quoted: msg})
break
case prefix+'glitcheffect': // By Christian ID
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var data = await fetchJson(`https://christian-id-api.herokuapp.com/api/photooxy/message-under-grass?text={q}&apikey=${chrisapi}`)
reply(mess.wait)
conn.sendMessage(from, {image: {url: data.result}}, {quoted: msg})
break
case prefix+'say': case prefix+'tts':
  if (args.length < 2) return reply(`Kirim perintah ${command} Text`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
   conn.sendMessage(from, { audio: {url : `https://hadi-api.herokuapp.com/api/tts?text=${q}&language=id`}, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
limitAdd(sender, limit)
   break
case prefix+'nabi': case prefix+'kisahnabi':
  if (args.length < 2) return reply(`Kirim perintah ${command} Nama Nabi\nContoh : ${command} Muhammad`)
			    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				var data = await fetchJson(`https://hardianto.xyz/api/muslim/kisahnabi?nabi=${q}&apikey=${keyanto}`)
				var kisahnya = `*Nama Nabi :* ${data.result.name}\n*Kelahiran :* ${data.result.wafat_usia}\n*Tempat Tinggal :* ${data.result.singgah}\n*Kisah Nabi :* ${data.result.kisah}`
			    reply(kisahnya)
				limitAdd(sender, limit)
				break
case prefix+'quranaudio': case prefix+'quranvn':
  if (args.length < 2) return reply(`Kirim perintah ${command} surah ayat\nContoh : ${command} 1 2`)
  if (isNaN(args[1])) return reply(`Harus berupa angka`)
  if (isNaN(args[2])) return reply(`Harus berupa angka`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://hardianto.xyz/api/muslim/quran?surah=${args[1]}&ayat=${args[2]}&apikey=${keyanto}`)

conn.sendMessage(from, { audio: {url : pickRandom(data.result.data.audio.secondary)}, mimetype: 'audio/mp4', ptt: true})
limirAdd(sender, limit)
break
case prefix+'quran':
  if (args.length < 2) return reply(`Kirim perintah ${command} Nomer`)
  if (isNaN(args[1])) return reply(`Harus berupa angka`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://hadi-api.herokuapp.com/api/quran?no=${q}`)
			    reply(`*Surah :* ${data.result.surah}\n*Ayat :* \n${data.result.ayat}\n*Arti :* \n${data.result.terjemahan}`)
			    break
case prefix+'listquran':
  var listquran = `*[ LIST QURAN ]*

1. Al Fatihah (Pembuka)
2. Al Baqarah (Sapi Betina)
3. Ali Imran (Keluarga Imran)
4. An Nisa (Wanita)
5. Al Ma'idah (Jamuan)
6. Al An'am (Hewan Ternak)
7. Al-A'raf (Tempat yang Tertinggi)
8. Al-Anfal (Harta Rampasan Perang)
9. At-Taubah(Pengampunan)
10. Yunus (Nabi Yunus)
11. Hud (Nabi Hud)
12. Yusuf (Nabi Yusu)
13. Ar-Ra'd (Guruh)
14. Ibrahim (Nabi Ibrahim)
15. Al-Hijr (Gunung Al Hijr)
16. An-Nahl (Lebah)
17. Al-Isra' (Perjalanan Malam)
18. Al-Kahf (Penghuni-penghuni Gua)
19. Maryam (Maryam)
20. Ta Ha (Ta Ha)
21. Al-Anbiya (Nabi-Nabi)
22. Al-Hajj (Haji)
23. Al-Mu'minun (Orang-orang mukmin)
24. An-Nur (Cahaya)
25. Al-Furqan (Pembeda)
26. Asy-Syu'ara' (Penyair)
27. An-Naml (Semut)
28. Al-Qasas (Kisah-kisah)
29. Al-'Ankabut (Laba-laba)
30. Ar-Rum (Bangsa Romawi)
31. Luqman (Keluarga Luqman)
32. As-Sajdah (Sajdah)
33. Al-Ahzab (Golongan-golongan yang Bersekutu)
34. Saba' (Kaum Saba')
35. Fatir (Pencipta)
36. Ya Sin (Yaasiin)
37. As-Saffat (Barisan-barisan)
38. Sad (Shaad)
39. Az-Zumar (Rombongan-rombongan)
40. Ghafir (Yang Mengampuni)
41. Fussilat (Yang Dijelaskan)
42. Asy-Syura (Musyawarah)
43. Az-Zukhruf (Perhiasan)
44. Ad-Dukhan (Kabut)
45. Al-Jasiyah (Yang Bertekuk Lutut)
46. Al-Ahqaf (Bukit-bukit Pasir)
47. Muhammad (Nabi Muhammad)
48. Al-Fath (Kemenangan)
49. Al-Hujurat (Kamar-kamar)
50. Qaf (Qaaf)
51. Az-Zariyat (Angin yang Menerbangkan)
52. At-Tur (Bukit)
53. An-Najm (Bintang)
54. Al-Qamar (Bulan)
55. Ar-Rahman (Yang Maha Pemurah)
56. Al-Waqi'ah (Hari Kiamat)
57. Al-Hadid (Besi)
58. Al-Mujadilah (Wanita yang Mengajukan Gugatan)
59. Al-Hasyr (Pengusiran)
60. Al-Mumtahanah (Wanita yang Diuji)
61. As-Saff (Satu Barisan)
62. Al-Jumu'ah (Hari Jum'at)
63. Al-Munafiqun (Orang-orang yang Munafik)
64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan)
65. At-Talaq (Talak)
67. Al-Mulk (Kerajaan)
68. Al-Qalam (Pena)
69. Al-Haqqah (Hari Kiamat)
70. Al-Ma'arij (Tempat Naik)
71. Nuh (Nabi Nuh)
72. Al-Jinn (Jin)
73. Al-Muzzammil (Orang yang Berselimut)
74. Al-Muddassir (Orang yang Berkemul)
75. Al-Qiyamah (Kiamat)
76. Al-Insan (Manusia)
77. Al-Mursalat (Malaikat-Malaikat Yang Diutus)
78. An-Naba' (Berita Besar)
79. An-Nazi'at (Malaikat-Malaikat Yang Mencabut)
80. 'Abasa (Ia Bermuka Masam)
81. At-Takwir (Menggulung)
82.Al-Infitar (Terbelah)
83. Al-Tatfif (Orang-orang yang Curang)
84. Al-Insyiqaq (Terbelah)
85. Al-Buruj (Gugusan Bintang)
86. At-Tariq (Yang Datang di Malam Hari)
87. Al-A'la (Yang Paling Tinggi)
88. Al-Gasyiyah (Hari Pembalasan)
89. Al-Fajr (Fajar)
90. Al-Balad (Negeri)
91. Asy-Syams (Matahari)
92. Al-Lail (Malam)
93. Ad-Duha (Waktu Matahari Sepenggalahan Naik (Dhuha))
94. Al-Insyirah (Melapangkan)
95. At-Tin (Buah Tin)
96. Al-'Alaq (Segumpal Darah)
97. Al-Qadr (Kemuliaan)
98. Al-Bayyinah (Pembuktian)
99. Az-Zalzalah (Kegoncangan)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
114. An-Nas (Umat Manusia)`
  textImg(listquran)
  break
case prefix+'darkjokes': case prefix+'dark': case prefix+'darkjoke': case prefix+'meme': case prefix+'memeindo':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var darkjoke = JSON.parse(fs.readFileSync('./lib/darkjokes.js')) // posisinya sesuain
var hasil = pickRandom(darkjoke)
conn.sendMessage(from, {caption: 'Ancrit', image: {url: hasil.result}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'readmore':
  case prefix+'more':
    if (args.length < 2) return reply(`Kirim perintah ${command} Text1|Text2`)
    var read = q.split('|')[0] ? q.split('|')[0] : q
                var morr = q.split('|')[1] ? q.split('|')[1] : ''
    var retmor = `${read}${readmore}${morr}`
    conn.sendMessage(from, { text: retmor}, { quoted: msg })
    break
case prefix+'izumi':
  case prefix+'simi':
 var text = `${q}`
var cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
  conn.sendMessage(from, { text: cimcimi.success}, {quoted: msg})
  break
case prefix+'igstalk':
  case prefix+'stalkig':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Username\nContoh : ${command} chris.tianid`)
    var data = await fetchJson(`https://hardianto.xyz/api/igstalk?username=${q}&apikey=hardianto`)
    var caption = `*[ INSTAGRAM STALK ]*\n\n👤Username : ${data.username}\n📛 Full Name : ${data.fullname}\n✔️ Verified : ${data.verified}\n👥 Followers : ${data.followers}\n🫂 Following : ${data.follow}\n🗣️ Kategori ${data.category}\n\n${readmore} *� Izumi Bot*`
    conn.sendMessage(from, {caption: caption, image: {url: data.thumbnail}}, {quoted: msg})
    limitAdd(sender, limit)
    break
case prefix+'ghstalk': //By Christian ID
  case prefix+'stalkgh':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Username\nContoh : ${command} chris.tianid`)
    var data = await fetchJson(`https://hadi-api.herokuapp.com/api/githubstalk?username=${q}`)
    var caption = `*[ GITHUB STALK ]*\n\n Bio : ${data.result.bio}\n Company : ${data.result.company}\n Email : ${data.result.email}\n Twiter Username : ${data.result.twiter_username}\n Public Repo : ${data.result.public_repo}\n Public Gists : ${data.result.public_gists}\n Followers : ${data.result.follower}\n Following : ${data.result.following}\n Location : ${data.result.location}\n Type : ${data.result.Type}\n\n${readmore} *By Izumi Bot*`
    conn.sendMessage(from, {caption: caption, image: {url: data.result.avatar}}, {quoted: msg})
    limitAdd(sender, limit)
    break
case prefix+'guramaker':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} Izumi`)
   conn.sendMessage(from, {caption: `Premium Feature For User Free`, image: {url: `https://hardianto.xyz/api/bot/gura?apikey=hardianto&nama=${q}`}}, {quoted: msg})
   limitAdd(sender, limit)
   break
   case prefix+'kanekimaker':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} Izumi`)
   conn.sendMessage(from, {caption: `Premium Feature For User Free`, image: {url: `https://hardianto.xyz/api/bot/gfx1?apikey=hardianto&nama=${q}`}}, {quoted: msg})
   limitAdd(sender, limit)
   break
case prefix+'lolimaker':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} Izumi`)
   conn.sendMessage(from, {caption: `Premium Feature For User Free`, image: {url: `https://hardianto.xyz/api/bot/gfx2?apikey=hardianto&nama=${q}`}}, {quoted: msg})
   limitAdd(sender, limit)
   break
case prefix+'waifumaker':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} Izumi bot`)
   conn.sendMessage(from, {caption: `Premium Feature For User Free`, image: {url: `https://hardianto.xyz/api/bot/gfx4?apikey=hardianto&text1=${args[1]}&text2=${args[2]}`}}, {quoted: msg})
   limitAdd(sender, limit)
   break
case prefix+'qrcode':
  case prefix+'qr':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} Izumi bot`)
    reply(`Membuat Qr Code`)
    conn.sendMessage(from, {caption: `*QR CODE*`, image: {url: `https://docs-jojo.herokuapp.com/api/qrcode?text=${q}`}}, {quoted: msg})
    limitAdd(sender, limit)
    break
case prefix+'cersex':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)
  var caption = `*[ CERSEX ]*\n\n*Judul* : ${data.result.judul}\n*Cerita* : ${data.result.cersex}\n${readmore} *IzumiBOT*`
  conn.sendMessage(from, {caption: caption, image: {url: data.result.img}}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'cerpen':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
  var text = `*[ CERPEN ]*\n\n*Judul* : ${data.result.title}\n*Kategori* : ${data.result.kategori}\n*Cerritanya* : ${data.result.cerpen}`
  conn.sendMessage(from, {text: text}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'faktaunik':
  case prefix+'faktamenarik':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
     var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fakta-unik`)
var caption = `Tahukah kamu?
${data.result}`
var but = [{buttonId: `${command}`, buttonText: { displayText: "Fakta Unik" }, type: 1 }]
conn.sendMessage(from, { text: caption, buttons: but, footer: "© Izumi Bot", templateButtons: but }, {quoted: msg})
limitAdd(sender, limit)
break
//maker arasya
case prefix+'leaves':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var data = await fetchJson(`https://jojo-docsapi.herokuapp.com/api/textpro/natural-leaves?apikey=Joo&text=${q}`)
  conn.sendMessage(from, {caption: `Succes!`, image: {url: data.result}}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'3d':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
  var data = await fetchJson(`https://jojo-docsapi.herokuapp.com/api/textpro/3d-gradient?apikey=Joo&text=${q}`)
  conn.sendMessage(from, {caption: `Succes!`, image: {url: data.result}}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'logowolf':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
  var data = await fetchJson(`https://jojo-docsapi.herokuapp.com/api/textpro/logo-wolf2?apikey=Joo&text=${args[1]}&text2=${args[2]}`)

  conn.sendMessage(from, {caption: `Succes!`, image: {url: data.result}}, {quoted: msg})
  limitAdd(sender, limit)
  break
case prefix+'logowolf2':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply("Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang")
  var data = await fetchJson(`https://jojo-docsapi.herokuapp.com/api/textpro/logo-wolf ?apikey=Joo&text=${args[1]}&text2=${args[2]}`)
  conn.sendMessage(from, {caption: `Succes!`, image: {url: data.result}}, {quoted: msg})
  limitAdd(sender, limit)
  break
//Amel
case prefix+'ppcp':
case prefix+'ppcouple':
  case prefix+'pp':
var couple = JSON.parse(fs.readFileSync('./fitur/couple.json'))
var hasil = pickRandom(couple)
conn.sendMessage(from, {caption: `Cowo`, image: {url: hasil.male}}, {quoted: msg})
conn.sendMessage(from, {caption: `Cewe`, image: {url: hasil.female}}, {quoted: msg})
break 
  break
case prefix+'xnxx':
  case prefix+'xnxxdownload':
	if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
if (args.length < 2) return reply(`Kirim perintah ${command} link`)
if (!args[1].includes('xnxx')) return reply(mess.error.Iv)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
var data = await fetchJson(`https://melcanz.com/xnxxdl?url=${q}&apikey=${apikey}`)
reply(mess.wait)
conn.sendMessage(from, {video: {url: data.result.files.high}}, {quoted: msg})
break
case prefix+'react':
  case prefix+'reaction':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
 conn.sendMessage(from, { react: { text: `${q}`, key: msg.key }})
 limitAdd(sender, limit)
 break
 //BOLEH DI AKTIFIN JIKA MENGGUNAKAN HEROKU
case prefix+'halah':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'a'))
  limitAdd(sender, limit)
  break
case prefix+'hilih':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'i'))
  break
case prefix+'huluh':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'u'))
  limitAdd(sender, limit)
  break
case prefix+'heleh':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'e'))
  limitAdd(sender, limit)
  break
case prefix+'holoh':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  if (!isQuotedMsg) return reply(`Reply Message nya!`)
  var textnya = quotedMsg.chats
reply(textnya.replace(/[a|i|u|e|o|A|I|U|E|O]/gi, 'o'))
  limitAdd(sender, limit)
  break
  case prefix+'translate':
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
	if (!isQuotedMsg) return reply(`Reply Message nya!\nContoh Penggunaan : ${prefix}translate id en`)
	if (!args[1]) return reply(`Dari bahasa apa?`)
	if (!args[2]) return reply(`Mau Di translate ke bahasa apa?`)
	 var quoted = quotedMsg.chats
var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${quoted}&from=${args[1]}&to=${args[2]}`)
conn.sendMessage(from, {text: data.translated_text}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'igv':
	case prefix+'igreels':
		case prefix+'igvideo':
			if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('instagram.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			igDownloader(args[1]).then ( data => {
				conn.sendMessage(from, {video: {url: data.result.link}}, {quoted: msg})
			}).catch(() => reply(mess.error.api))
			limitAdd(sender, limit)
break
case prefix+'igf':
	case prefix+'igfoto':
		case prefix+'igpic':
			if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('instagram.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
			igDownloader(args[1]).then ( data => {
				conn.sendMessage(from, {image: {url: data.result.link}}, {quoted: msg})
			}).catch(() => reply(mess.error.api))
			limitAdd(sender, limit)
break
case prefix+'wiki':
	case prefix+'wikipedia':
		if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
		if (args.length < 2) return reply(`Kirim perintah ${command} Pencarian`)
		reply(`Sedang mencari ${q}`)
		wikiSearch(q).then ( data => {
			var caption = `*JUDUL* : ${q}\n*PENJELASAN* : ${data[0].wiki}`
			conn.sendMessage(from, {caption: caption, image: {url: data[0].thumb}}, {quoted: msg})
		})
		limitAdd(sender, limit)
		break
case prefix+'asupan':
  if (!isPremium)return reply("Perintah Ini Khusus Pengguna Premium, Upgrade Fitur Premium Ke Owner, Ketik !owner")
  reply(mess.wait)
  var asupan = JSON.parse(fs.readFileSync('./fitur/asupan.json'))
var hasil = pickRandom(asupan)
conn.sendMessage(from, {video: {url: hasil.url}}, {quoted: msg})
break
case prefix+'dadu':
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var dadu = JSON.parse(fs.readFileSync('./fitur/dadu.json'))
var hasil = pickRandom(dadu)
conn.sendMessage(from, {sticker: {url: hasil.url}}, {quoted: msg})
limitAdd(sender, limit)
break
case prefix+'getpp':
case prefix+'getprofile':
  case prefix+'getpic':
if (!isQuotedMsg) return reply(`Reply Message nya!`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
conn.profilePictureUrl(quotedMsg.sender, 'image').then( res => conn.sendMessage(from, { image: { url: res }}, {quoted: msg})).catch(() => conn.sendMessage(from, {caption: `Yah maaf kak, dia ini gak pake foto profile, kayaknya dia depresiiiii/Di Private...\n\nJadiii aku kasih ini ajaaa ya`, image: {url: `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`}}, {quoted: msg}))
limitAdd(sender, limit)
break
case prefix+'suratto':
  case prefix+'surat':
    if (args.length < 2) return reply(`Kirim perintah ${command} nomer|Suratnya\nContoh ${command} 6285921165857|Anjing\n\nAWALI DENGAN 62!`)
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  var number = q.split('|')[0] ? q.split('|')[0] : q
                var text = q.split('|')[1] ? q.split('|')[1] : ''
                reply(`Pesan Sukses Terkirim`)
conn.sendMessage(`${number}@s.whatsapp.net`, {text: `*[ FITUR SURAT ]*\n\n*Dari :* @${sender} (${pushname})\n*Pesan :* ${text}`, mentions: [sender]})
limitAdd(sender, limit)
break
case prefix+'gombal':
  case prefix+'gombalan':
    var gombal = JSON.parse(fs.readFileSync('./fitur/gombalan.json'))
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
var hasil = pickRandom(gombal)
var gom = [
			{ quickReplyButton: { displayText: `Next Gombalan ➡️`, id: `${command}` } },
		]
		conn.sendMessage(from, {text: hasil, templateButtons: gom, footer: `Cie Di Gombal Robot\n~ Instagram : @chris.tianid`, mentions: [sender]} )
limitAdd(sender, limit)
break
case prefix+'textchat':
  if (!isOwner) return reply(mess.OnlyOwner)
  if (args.length < 2) return reply(`Kirim perintah ${command} nomer|Laporan nya\nContoh ${command} 6285921165857|Anjing\n\nAWALI DENGAN 62!`)
  var nomorcuy = q.split('|')[0] ? q.split('|')[0] : q
                var okecuy = q.split('|')[1] ? q.split('|')[1] : ''
                reply(`Pesan Sukses Terkirim`)
conn.sendMessage(`${nomorcuy}@s.whatsapp.net`, {text: `*[ DARI OWNER ]*\nPesan Dari Owner : *${okecuy}*\nThanks For Using Izumi-BOT! ( ${sender} )`, mentions: [sender]})
break
case prefix+'lirik':
  if (args.length < 2) return reply(`kirim Perintah ${command} Judul Lagu`)
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
  reply(mess.wait)
  lirikLagu(q).then ( data => {
    var caption = `*[ > 🎵 LIRIK LAGU 🎵 < ]*\n\n*Lirik :* ${data[0].result}`
    conn.sendMessage(from, {text: caption}, {quoted: msg})
    limitAdd(sender, limit)
  }).catch(() => reply(`Lagu ${q} Tidak Di Temukan`))
  break
default:
			if (isGroup && isCmd) {
				reply(`*Hallo Kak ${pushname}*\n*Maaf Command ${command} Tidak Ada Di Dalam ${prefix}menu*`)
			}
		}
	} catch (err) {
		console.log(color('[ERROR]', 'red'), err)
	}
}
