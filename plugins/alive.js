const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or not.",
    category: "main",
    react: "⚔️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `sup ${pushname} CYTRAMD IS ONLINE 

| *Version*: 1.0.0
| *Memory*: 38.09MB/7930MB
| *Owner*: dave
Hi im cytra
my life is CoDM

 ©Cytra`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
