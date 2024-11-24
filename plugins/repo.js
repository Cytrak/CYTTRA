const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "⚔️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `* *_ CYTRA BOT REPO_* 


* Repo:* https://github.com/CytraK/ASTA-BOT-

OWNER https://wa.me/254715155196?text=Hi%20Cytra


_Thank you for choosing CYTRA BOT

*Join My WhatsApp Channel✓ - :* https://chat.whatsapp.com/FC8Y2G46yFaFVwVYWkLGv2


> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : © cytra*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/p2868y.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
