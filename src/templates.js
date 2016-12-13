'use strict'
var global = require('./global') // Load all the global settings
var global = global.global // reset the double variable
var helper = require('./helpers') // Load helper functions
module.exports = {
    FullText: (options) => {
        let x = Object.assign({}, global, options)
        var z = '<table class="resFull" cellpadding="0" cellspacing="0" border="0" width="' + x.width + '" bgcolor="' + x.bgcolor + '" style="width: 100%; max-width: ' + x.width + 'px;"><tr>';
        (x.gutter != null) ? z += '<td align="' + x.align + '" valign="' + x.valign + '" width="' + x.gutter + '"></td>': null
        z += '<td align="' + x.align + '" valign="' + x.valign + '" height="' + x.height + '" '
        z += 'style="font-family: ' + x.fontFace + '; font-size: ' + x.fontSize + 'px; color: ' + x.fontColor + '; line-height: ' + x.lineHeight + 'px;">'
        z += x.text;
        (x.gutter != null) ? z += '</td>': null
        z += '<td align="' + x.align + '" valign="' + x.valign + '" width="' + x.gutter + '"></td>'
        z += '</tr></table>'
        return z
    },
    FullImg: (options) => {
        let x = Object.assign({}, global, options)
        var z = '<table class="resFull" cellpadding="0" cellspacing="0" border="0" width="' + x.width + '" bgcolor="' + x.bgcolor + '" style="width: 100%; max-width: ' + x.width + 'px;"><tr>';
        (x.gutter != null) ? z += '<td align="' + x.align + '" valign="' + x.valign + '" width="' + x.gutter + '"></td>': null
        z += '<td align="' + x.align + '" valign="' + x.valign + '" height="' + x.height + '" '
        z += '>';
        (x.url) ? z += '<a href="' + x.url + '" style="display: block; padding: 0; margin: 0;">': null
        z += '<img src="' + x.src + '" alt="' + x.alt + '" width="' + x.width + '" style="display: block; padding: 0; margin: 0; outline: 0; border: 0; width: 100% !important;"/>';
        (x.url) ? z += '</a>': null;
        z += '</td>';
        (x.gutter != null) ? z += '<td align="' + x.align + '" valign="' + x.valign + '" width="' + x.gutter + '"></td>': null
        z += '</tr></table>'
        return z

    },
    CTA: (options) => {
        let y = Object.assign({}, global, options)
        let x = Object.assign({}, global.cta, options)
        var z = '<table class="resFull" cellpadding="0" cellspacing="0" border="0" bgcolor="' + y.bgcolor + '" style="width: 100%; max-width: ' + y.width + 'px;"><tr><td width="' + y.gutter + '"></td><td align="center" valign="middle" style="font-size: ' + y.fontSize + 'px;"><br />'
        z += '<div>'
        z += '<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" '
        z += 'href="' + x.url + '" style="height:' + x.height + ';v-text-anchor:middle;width:' + x.width + ';" arcsize="' + helper.radius(x.border.radius) + '%" strokecolor="' + x.border.color + '" fill="t">'
        z += '<v:fill type="tile" src="' + x.bgimg + '" color="' + x.bgcolor + '" /><w:anchorlock/>'
        z += '<center style="color:' + x.font.color + ';font-family:' + x.font.face + ';font-size:' + x.font.size + ';font-weight:bold;">' + x.text + '</center>'
        z += '</v:roundrect><![endif]-->'
        z += '<a href="'+x.url+'"style="background-color:' + x.bgcolor + ';background-image:url(' + x.bgimg + ');border:' + x.border.size + 'px ' + x.border.style + ' ' + x.border.color + ';border-radius:' + x.border.radius + 'px;color:' +
            x.font.color + ';display:inline-block;font-family:' + x.font.face + ';font-size:' + x.font.size + 'px;font-weight:bold;line-height:' + x.height + 'px;text-align:center;text-decoration:none;width:' + x.width +
            'px;-webkit-text-size-adjust:none;mso-hide:all;">' + x.text + '</a>'
        z += '</div>'
        z += '<br /></td><td width="' + y.gutter + '"></td></tr></table>'
        return z
    },
    DoubleColumn: (options) => {
        let x = Object.assign({}, global, options)
        var z = '<table cellpadding="0" cellspacing="0" border="0" width="' + x.width + '" bgcolor="' + x.bgcolor + '" style="width: 100%; max-width: ' + x.width + 'px;"><tr>';
        (x.gutter != null) ? z += '<td align="' + x.align + '" valign="' + x.valign + '" width="' + x.gutter + '"></td>': null
        z += '<td width="50%" align="' + x.align + '" valign="' + x.valign + '" height="' + x.height + '" '
        z += '>';
        z += options.left
        z += '</td>';
        (x.gutter != null) ? z += '<td align="' + x.align + '" valign="' + x.valign + '" width="' + x.gutter + '"></td>': null
        z += '<td width="50%" align="' + x.align + '" valign="' + x.valign + '" height="' + x.height + '" '
        z += '>';
        z += options.right
        z += '</td>';
        (x.gutter != null) ? z += '<td align="' + x.align + '" valign="' + x.valign + '" width="' + x.gutter + '"></td>': null
        z += '</tr></table>'
        return z
    },
    DoubleColumnRes: (options) => {
        let x = Object.assign({}, global, options)
        var z = '<table class="resFull" cellpadding="0" cellspacing="0" align="center" bgcolor="' + x.bgcolor + '" style="width: 100%; max-width: ' + x.width + 'px;">'
        z += '<tr>'
        z += '<td align="left" valign="top" width="'+(x.gutter / 2)+'"></td>'
        z += '<td class="resWrap" align="left" valign="top" width="'+(x.width - x.gutter)+'">'


        z += '<table class="resCell" cellpadding="0" cellspacing="0" align="left" width="'+((x.width - x.gutter) / 2)+'">'
        z += '<tr>'
        z += '<td align="left" valign="top" width="'+(x.gutter / 2)+'"></td>'
        z += '<td>'+options.left+'</td>'
        z += '<td align="left" valign="top" width="'+(x.gutter / 2)+'"></td>'
        z += '</tr>'
        z += '</table>'


        z += '<table class="resCell" cellpadding="0" cellspacing="0" align="left" width="'+((x.width - x.gutter) / 2)+'">'
        z += '<tr>'
        z += '<td align="left" valign="top" width="'+(x.gutter / 2)+'"></td>'
        z += '<td>'+options.right+'</td>'
        z += '<td align="left" valign="top" width="'+(x.gutter / 2)+'"></td>'
        z += '</tr>'
        z += '</table>'


        z += '</td>'
        z += '<td align="left" valign="top" width="'+(x.gutter / 2)+'"></td>'
        z += '</tr>'
        z += '</table>'
        return z
    }
}
