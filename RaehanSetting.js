
const fs = require('fs')
const chalk = require('chalk')

global.autorecording = true //status auto merekam ( auto record )

global.autoketik = false //status auto mengetik (auto typing)

global.autoavailable = false //status online (online)
global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
global.youtube = 'https://youtube.com/channel/UCFwDX1z-rsvvyoHTscWK11A'
global.ig = 'https://www.instagram.com/fthooni'
global.mygc = 'wa.me/6285852688728'
global.myweb = 'https://www.instagram.com/fthooni'
global.linkgrupss = "Gada"

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'FathoniOfc'
global.botname = 'FathoniOfc'
global.footer = 'FathoniOfc' 
//=================================================//
// Other
global.owner = ['6285852688728']
global.premium = ['6285852688728']
global.packname = 'APA SIH BANGSAT'
global.ownerr = ['FathoniOfc']
global.author = 'KEPO BANGET SIH JADI ORANG'
global.sessionName = 'RaehanBoss'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'
global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    wait: '────────[ LOADING ]────────⊱',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    verif: 'Hai Kakak 👋 Silahkan Verifikasi Terlebih Dahulu Agar Bisa Menggunakan Bot RAEHAN',
}
//=================================================//
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
global.thumb = fs.readFileSync("./RaehanMedia/image/han.jpg")
global.visoka = fs.readFileSync("./RaehanMedia/video/kadal.jpg")
global.log0 = fs.readFileSync("./RaehanMedia/image/bacotah.jpg")
global.menuimg = 'https://d.top4top.io/p_2462t8qyt1.jpg'
global.yaLL = fs.readFileSync("./RaehanMedia/video/thumbnail.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
