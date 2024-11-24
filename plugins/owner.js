const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "⚔️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*CYTRA BOT*

*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ*: cytra
*| ɴᴜᴍʙᴇʀ*: 254715155196
*| ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ*: https://chat.whatsapp.com/FC8Y2G46yFaFVwVYWkLGv2

special thanks to malvin king
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/p2868y.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
