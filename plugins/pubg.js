let fetch = require('node-fetch')
//plugin by Samu330

let handler  = async (m, { conn, text }) => {
//let text = args.join` `
let [to, samu] = text.split`|`
if (!to) throw `Formato incorrecto`
if (!samu) throw `Ejemplo *.pubg dark|ze*`

if (!text) return conn.reply(m.chat, 'No hay texto para crear logo', m)
let url = 'https://videfikri.com/api/textmaker/pubgmlogo/?text1=' + `${to}` + '&text2=' + `${dark}`

conn.sendFile(m.chat, url, '', 'By @DarkZE 👑', m)

}
handler.help = ['pubg']
handler.tags = ['images']
handler.command = /^pubg?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
