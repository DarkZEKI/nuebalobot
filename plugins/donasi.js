let handler = async m => m.reply(`
╭─〘 darcsi el mas piola 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 [https://www.paypal.me/Michae165]

╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
