var fs = require('fs')

const email = []
const cellText = (options, content) => {
    email.push('<table cellpadding="0" cellspacing="0" border="0" bgcolor="' + options.background + '" style="width: 100%; max-width: ' + options.width + 'px;"><tr><td width="' + options.width + '" height="' + options.height + '" align="' + options.align + '" valign="' + options.valign + '" style="font-face: ' + options.fontFace + '; font-size: ' + options.fontSize + ';">' + content + '</td></tr></table>')
}

const cellImg = (options) => {
    if (options.url != '') {
        email.push('<table cellpadding="0" cellspacing="0" border="0" bgcolor="' + options.background + '" style="width: 100%; max-width: ' + options.width + 'px;"><tr><td align="' + options.align + '" valign="' + options.valign + '"><a href="' + options.url + '" style="display: block; padding: 0; margin: 0;"><img src="' + options.src + '" alt="' + options.alt + '" style="display: block; padding: 0; margin: 0; outline: 0; border: 0; width: 100%;" /></td></tr></table>')
    } else {
        email.push('<table cellpadding="0" cellspacing="0" border="0" bgcolor="' + options.background + '" style="width: 100%; max-width: ' + options.width + 'px;"><tr><td align="' + options.align + '" valign="' + options.valign + '"><img src="' + options.src + '" alt="' + options.alt + '" style="display: block; padding: 0; margin: 0; width: 100%;" /></td></tr></table>')
    }
}
var options = {
    width: 640,
    height: 30,
    background: "#ff8800",
    fontFace: "Arial, Helvetica, sans-serif",
    fontSize: "12px",
    align: "center",
    valign: "middle"
}

cellText(options, "yer ma")

var options = {
    width: 640,
    height: 300,
    background: "#ff8800",
    align: "center",
    valign: "middle",
    src: "images/yer-ma.jpg",
    alt: "Yer mam, last night. With me.",
    url: "http://menwholooklikeoldlesbians.blogspot.co.uk/2008_10_01_archive.html"
}

cellImg(options)

var output = ""
for (i = 0; i < email.length; i++) {
    var output = output + email[i]
}

fs.writeFile('dist/index.html', output, (err) => {
    if (err) throw err
    console.log('It\'s saved!')
})
