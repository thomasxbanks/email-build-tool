'use strict'

// Require the file system. You will need this later on!
var fs = require('fs')

const global = {
    width: 650,
    height: "auto",
    align: "left",
    valign: "top",
    gutter: 25,
    bodycolor: '#8f0f26',
    bgcolor: '#ffeedd',
    fontFace: "Arial, Helvetica, sans-serif",
    fontSize: 15,
    fontColor: '#212121',
    lineHeight: 15,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ratione magni, provident aliquam voluptas tempora ipsa possimus animi mollitia nam libero quis ea nulla sapiente rerum culpa incidunt facilis cupiditate!",
    src: null,
    alt: null,
    url: null,
    archive: {
        text: "Not displaying correctly? <u>View the email in your browser.</u>",
        bgcolor: "#8f0f26",
        font: {
            face: "Arial, Helvetica, sans-serif",
            size: 9,
            color: "#ffeedd",
            lineHeight: 18,
            align: 'right'
        }
    },
    unsubscribe: {
        text: "If you no longer wish to receive updates from us, you can <u>unsubscribe here</u>",
        bgcolor: "#ffeedd",
        font: {
            face: "Arial, Helvetica, sans-serif",
            size: 9,
            color: "#212121",
            lineHeight: 18,
            align: 'center'
        }
    },
    footer: {
        bgcolor: "#ffeedd",
        font: {
            face: "Arial, Helvetica, sans-serif",
            size: 9,
            color: "#212121",
            lineHeight: 18,
            align: 'center'
        }
    },
    cta: {
        width: 300,
        height: 40,
        text: 'I am a call to action!',
        url: '#yer-ma',
        bgcolor: '#8f0f26',
        bgimg: '',
        border: {
            size: 1,
            style: 'solid',
            color: '#4a0a03',
            radius: 4
        },
        font: {
            face: "Arial, Helvetica, sans-serif",
            color: '#ffeedd',
            size: 18
        }
    },
    company: {
        name: "Shoot the Moon",
        email: "hello@shoot-the-moon.co.uk",
        phone: "0161 205 3311",
        address: "Concept House, Naval Street, Manchester, M4 6AX",
        website: "http://www.shoot-the-moon.co.uk"
    }
}

// Create an empty array to hold your email components
const email = {
    "html": "<!DOCTYPE html><html lang='en'>",
    "head": "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width'><meta name='format-detection' content='telephone=no'><meta name='format-detection' content='date=no'><meta name='format-detection' content='address=no'><meta name='format-detection' content='email=no'></head>",
    "body": {
        "tag": "<body",
        "display": "block",
        "width": "100%",
        "bgcolor": global.bodycolor,
        "padding": 0,
        "margin": 0,
        "xtag": ">"
    },
    "style": "<style></style>",
    "wrap": "<table cellpadding='" + (global.gutter / 2) + "' cellspacing='0' border='0' align='center' bgcolor='" + global.bodycolor + "' style='width: 100%; font-size: 0;'><tr><td align='center' valign='top'>",
    "mso": {
        "tag": "<!--[if (gte mso 9)|(IE)]><table cellpadding='0' cellspacing='0' width='" + global.width + "' style='background: none; font-size: 0;'",
        "width": global.width,
        "xtag": "><tr><td align='center' valign='top'><![endif]-->"
    },
    "archive": {
        "table": "<table cellpadding='0' cellspacing='0' border='0' align='center' width='" + global.width + "' bgcolor='" + global.archive.bgcolor + "' style='width: 100%; max-width: " + global.width + "px;'><tr>",
        "gutter": "<td width='" + global.gutter + "'></td>",
        "td": "<td align='" + global.archive.font.align + "' valign='middle' height='" + global.archive.font.lineHeight + "' style='font-family: " + global.archive.font.face + "; font-size: " + global.archive.font.size + "px; color: " + global.archive.font.color + "; line-height: " + global.archive.font.lineHeight + "px;'>",
        "hook": "<webversion style='font-family: " + global.archive.font.face + ";text-decoration:none; color: " + global.archive.font.color + " !important; font-size: " + global.archive.font.size + "px; font-weight: normal; '>" + global.archive.text + "</webversion>",
        "xgutter": "</td><td width='" + global.gutter + "'></td>",
        "xtable": "</tr></table>"
    },
    "content": [

    ],
    "footer": {
        "table": "<table cellpadding='0' cellspacing='0' border='0' align='center' width='" + global.width + "' bgcolor='" + global.unsubscribe.bgcolor + "' style='width: 100%; max-width: " + global.width + "px;'><tr>",
        "gutter": "<td width='" + global.gutter + "'></td>",
        "td": "<td align='" + global.footer.font.align + "' valign='middle' height='" + global.footer.font.lineHeight + "' style='font-family: " + global.footer.font.face + "; font-size: " + global.footer.font.size + "px; color: " + global.footer.font.color + "; line-height: " + global.footer.font.lineHeight + "px;'>",
        "text": global.company.name + "<br />" + global.company.address + "<br />Tel: " + global.company.phone + "<br />Email: " + global.company.email + "<br />Web: " + global.company.website,
        "xgutter": "</td><td width='" + global.gutter + "'></td>",
        "xtable": "</tr></table>"
    },
    "unsubscribe": {
        "table": "<table cellpadding='0' cellspacing='0' border='0' align='center' width='" + global.width + "' bgcolor='" + global.unsubscribe.bgcolor + "' style='width: 100%; max-width: " + global.width + "px;'><tr>",
        "gutter": "<td width='" + global.gutter + "'></td>",
        "td": "<td align='" + global.unsubscribe.font.align + "' valign='middle' height='" + global.unsubscribe.font.lineHeight + "' style='font-family: " + global.unsubscribe.font.face + "; font-size: " + global.unsubscribe.font.size + "px; color: " + global.unsubscribe.font.color + "; line-height: " + global.unsubscribe.font.lineHeight + "px;'>",
        "hook": "<unsubscribe style='font-family: " + global.unsubscribe.font.face + ";text-decoration:none; color: " + global.unsubscribe.font.color + " !important; font-size: " + global.unsubscribe.font.size + "px; font-weight: normal; '>" + global.unsubscribe.text + "</unsubscribe>",
        "xgutter": "</td><td width='" + global.gutter + "'></td>",
        "xtable": "</tr></table>"
    },
    "xmso": "<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->",
    "xwrap": "</td></tr></table>",
    "xbody": "</body>",
    "xhtml": "</html>"
}

let b = email.body
let archive = email.archive.table + email.archive.gutter + email.archive.td + email.archive.hook + email.archive.xgutter + email.archive.xtable
let footer = email.footer.table + email.footer.gutter + email.footer.td + email.footer.text + email.footer.xgutter + email.footer.xtable
let unsubscribe = email.unsubscribe.table + email.unsubscribe.gutter + email.unsubscribe.td + email.unsubscribe.hook + email.unsubscribe.xgutter + email.unsubscribe.xtable

// Helpers
let radius = (px) => {
    return ((25 * px) / 10)
}

// Function to create a text block
let FullText = (options) => {
    let x = Object.assign({}, global, options)
    var z = '<table cellpadding="0" cellspacing="0" border="0" align="center" width="' + x.width + '" bgcolor="' + x.bgcolor + '" style="width: 100%; max-width: ' + x.width + 'px;"><tr>';
    (x.gutter != null) ? z += '<td align="' + x.align + '" valign="' + x.valign + '" width="' + x.gutter + '"></td>': null
    z += '<td align="' + x.align + '" valign="' + x.valign + '" height="' + x.height + '" '
    z += 'style="font-family: ' + x.fontFace + '; font-size: ' + x.fontSize + 'px; color: ' + x.fontColor + '; line-height: ' + x.lineHeight + 'px;">'
    z += x.text;
    (x.gutter != null) ? z += '</td>': null
    z += '<td align="' + x.align + '" valign="' + x.valign + '" width="' + x.gutter + '"></td>'
    z += '</tr></table>'
        // Log for debug
        //console.info(z)
    email.content.push(z)
}

// Function to create an image block
let FullImg = (options) => {
    let x = Object.assign({}, global, options)
    var z = '<table cellpadding="0" cellspacing="0" border="0" align="center" width="' + x.width + '" bgcolor="' + x.bgcolor + '" style="width: 100%; max-width: ' + x.width + 'px;"><tr>';
    (x.gutter != null) ? z += '<td align="' + x.align + '" valign="' + x.valign + '" width="' + x.gutter + '"></td>': null
    z += '<td align="' + x.align + '" valign="' + x.valign + '" height="' + x.height + '" '
    z += '>';
    (x.url) ? z += '<a href="' + x.url + '" style="display: block; padding: 0; margin: 0;">': null
    z += '<img src="' + x.src + '" alt="' + x.alt + '" width="' + x.width + '" style="display: block; padding: 0; margin: 0; outline: 0; border: 0; width: 100%;"/>';
    (x.url) ? z += '</a>': null
    z += '</td>';
    (x.gutter != null) ? z += '<td align="' + x.align + '" valign="' + x.valign + '" width="' + x.gutter + '"></td>': null
    z += '</tr></table>'
        // Log for debug
        //console.info(z)
    email.content.push(z)
}

const cta = (options) => {
    let y = Object.assign({}, global, options)
    let x = Object.assign({}, global.cta, options)
    console.log('cta', options)
    var cta = '<table cellpadding="0" cellspacing="0" border="0" align="center" bgcolor="' + y.bgcolor + '" style="width: 100%; max-width: ' + y.width + 'px;"><tr><td width="' + y.gutter + '"></td><td align="center" valign="middle"><br />'
    cta += '<div>'
    cta += '<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" '
    cta += 'href="' + x.url + '" style="height:' + x.height + 'px;v-text-anchor:middle;width:' + x.width + 'px;" arcsize="' + radius(x.border.radius) + '%" strokecolor="' + x.border.color + '" fill="t">'
    cta += '<v:fill type="tile" src="' + x.bgimg + '" color="' + x.bgcolor + '" /><w:anchorlock/>'
    cta += '<center style="color:' + x.font.color + ';font-family:' + x.font.face + ';font-size:' + x.font.size + 'px;font-weight:normal;">' + x.text + '</center>'
    cta += '</v:roundrect><![endif]-->'
    cta += '<a href="https://"style="background-color:' + x.bgcolor + ';background-image:url(' + x.bgimg + ');border:' + x.border.size + 'px ' + x.border.style + ' ' + x.border.color + ';border-radius:' + x.border.radius + 'px;color:' + x.font.color + ';display:inline-block;font-family:' + x.font.face + ';font-size:' + x.font.size + 'px;font-weight:bold;line-height:' + x.height + 'px;text-align:center;text-decoration:none;width:' + x.width + 'px;-webkit-text-size-adjust:none;mso-hide:all;">' + x.text + '</a>'
    cta += '</div>'
    cta += '<br /></td><td width="' + y.gutter + '"></td></tr></table>'
    email.content.push(cta)
}

FullImg({
    src: 'http://placecage.com/640/400',
    alt: 'Nicolas Cage!',
    gutter: null
})

var options = {
    text: "<br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ratione magni, provident aliquam voluptas tempora ipsa possimus animi mollitia nam libero quis ea nulla sapiente rerum culpa incidunt facilis cupiditate!<br /><br />"
}

FullText(options)

// FullImg({
//     src: 'images/yer-ma.jpg',
//     alt: 'This is an alt text example',
//     url: 'www.yourmum.com'
// })

cta()

// Write your layout into a single enormous string
var output = email.html + email.head + b.tag + " style='display: " + b.display + "; width: " + b.width + "; background: " + b.bgcolor + "; padding: " + b.padding + "; margin: " + b.margin + ";'" + b.xtag + email.style + email.wrap + email.mso.tag + email.mso.xtag + archive
for (let i = 0; i < email.content.length; i++) {
    var output = output + email.content[i]
}
var output = output + footer + unsubscribe + email.xmso + email.xwrap + email.xbody + email.xhtml

// Write the output string into a distribution file
fs.writeFile('dist/index.html', output, (err) => {
    if (err) throw err
    console.log('It\'s saved!')
})
