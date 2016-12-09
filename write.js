'use strict'

// Require the file system. You will need this later on!
var fs = require('fs')

// Create an empty array to hold your email components
const email = {
    "html": "<!DOCTYPE html><html lang='en'>",
    "head": "<head><meta charset='UTF-8'>",
    "body": {
        "tag": "<body",
        "display": "block",
        "width": "100%",
        "bgcolor": "#ffffff",
        "padding": 0,
        "margin": 0,
        "xtag": ">"
    },
    "wrap": "<table cellpadding='0' cellspacing='0' border='0' style='width: 100%;'><tr><td align='center' valign='top'>",
    "mso": {
        "tag": "<!--[if gte mso 9]><table cellpadding='0' cellspacing='0'",
        "width": "600",
        "xtag": "><tr><td align='center' valign='top'><![endif]-->"
    },
    "content": [

    ],
    "xmso": "<!--[if gte mso 9]></td></tr></table><![endif]-->",
    "xwrap": "</td></tr></table>",
    "xbody": "</body>",
    "xhead": "</head>",
    "xhtml": "</html"
}

// Define overrides for base options
email.body.bgcolor = '#ff0000'
email.mso.width = '650'
let b = email.body

// Function to create a text block
const cellText = (options, content) => {
    email.content.push('<table cellpadding="0" cellspacing="0" border="0" bgcolor="' + options.background + '" style="width: 100%; max-width: ' + options.width + 'px;"><tr><td width="' + options.width + '" height="' + options.height + '" align="' + options.align + '" valign="' + options.valign + '" style="font-face: ' + options.fontFace + '; font-size: ' + options.fontSize + ';">' + content + '</td></tr></table>')
}

// Functin to create an image block
const cellImg = (options) => {
    if (options.url != '') {
        email.content.push('<table cellpadding="0" cellspacing="0" border="0" bgcolor="' + options.background + '" style="width: 100%; max-width: ' + options.width + 'px;"><tr><td align="' + options.align + '" valign="' + options.valign + '"><a href="' + options.url + '" style="display: block; padding: 0; margin: 0;"><img src="' + options.src + '" alt="' + options.alt + '" style="display: block; padding: 0; margin: 0; outline: 0; border: 0; width: 100%;" /></td></tr></table>')
    } else {
        email.content.push('<table cellpadding="0" cellspacing="0" border="0" bgcolor="' + options.background + '" style="width: 100%; max-width: ' + options.width + 'px;"><tr><td align="' + options.align + '" valign="' + options.valign + '"><img src="' + options.src + '" alt="' + options.alt + '" style="display: block; padding: 0; margin: 0; width: 100%;" /></td></tr></table>')
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

// Write your layout into a single enormous string
var output = email.html + email.head + email.wrap + email.mso.tag + " width='" + email.mso.width + "'" + email.mso.xtag + b.tag + " style='display: " + b.display + "; width: " + b.width + "; background: " + b.bgcolor + "; padding: " + b.padding + "; margin: " + b.margin + ";'" + b.xtag
for (let i = 0; i < email.content.length; i++) {
    var output = output + email.content[i]
}
var output = output + email.xmso + email.xwrap + email.xhtml

// Write the output string into a distribution file
fs.writeFile('dist/index.html', output, (err) => {
    if (err) throw err
    console.log('It\'s saved!')
})
