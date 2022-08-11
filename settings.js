//═══════════════════════════════════════════════════════//
//
//                    乂𝐂𝐨𝐤𝐁𝐨𝐭乂 『A̶̢͛̐͒͛̐̒̐̌ ̸̝͎̦́̔͠Β̸͌͂̑̆𖣘』
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['6281350042483']
global.premium = ['6281350042483']
global.ownernomer = '6281350042483'
global.duo = ['6281350042483, 6282259826721, 6281340911800']
global.ownername = '『A̶̢͛̐͒͛̐̒̐̌ ̸̝͎̦́̔͠Β̸͌͂̑̆𖣘』'
global.botname = '乂𝐂𝐨𝐤𝐁𝐨𝐭乂'
global.footer = '©yangmutebabi.'
global.ig = 'https://instagram.com/zulfhanmt'
global.region = 'Indonesia, Malaysia, Singapore, India'
global.sc = 'https://api.whatsapp.com/send?phone=+6281350042483&text=Halo Bang'
global.myweb = 'https://api.whatsapp.com/send?phone=+6281350042483&text=Halo Bang'
global.wa = 'https://wa.me/+6281350042483'
global.wa2= 'https://wa.me/+6281338178425'
global.packname = '乂𝐂𝐨𝐤𝐁𝐨𝐭乂'
global.author = '『A̶̢͛̐͒͛̐̒̐̌ ̸̝͎̦́̔͠Β̸͌͂̑̆𖣘』'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Senglesai ✓',
    admin: 'Fitur Hanya Untuk Admin!✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾',
    botAdmin: 'Bot Harus Jadi Admin Dulu BODOK!',
    owner: 'Fitur Hanya Untuk Owner!',
    group: 'Fitur Hanya Untuk Groups!',
    private: 'Fitur Hanya Untuk Private Chat!',
    bot: 'Fitur Hanya Untuk For Bot',
    wait: 'Tunggu Bentar...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Daily Limitmu Expired, Limit DiReset Setiap 12 Jam',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/ABKeceX.jpg')
global.glowing = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=alien-glow-anim-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontname=heroes+assemble+3d+italic&fontsize=110&text='
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]		
	require(file)
})
