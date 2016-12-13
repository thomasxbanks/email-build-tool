'use strict'
var global = require('./global') // Load all the global settings
var global = global.global // reset the double variable
module.exports = {
  email: {
      "html": '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html lang="en" xmlns="http://www.w3.org/1999/xhtml">',
      "head": '<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width"><meta name="format-detection" content="telephone=no"><meta name="format-detection" content="date=no"><meta name="format-detection" content="address=no"><meta name="format-detection" content="email=no"></head>',
      "body": {
          "tag": "<body",
          "display": "block",
          "width": "100%",
          "bgcolor": global.bodycolor,
          "padding": 0,
          "margin": 0,
          "xtag": ">"
      },
      "style": "<style>html{width:100%}body{width:100% !important;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;margin:0;padding:0}div,p,a,li,td{webkit-text-size-adjust:none}#outlook a{padding:0}.ExternalClass{width:100%}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{line-height:100%}img{border:0;outline:0;display:block;text-decoration:none;border:0;-ms-interpolation-mode:bicubic}a img{border:0}p{margin:0 0 !important}table td{border-collapse:collapse}table{border-collapse:collapse;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0}a{color:"+global.fontColor+";text-decoration:none;text-decoration:none !important}.resFull { width: 100% !important; }@media screen and (max-width:"+global.width+"px){.resFull{width:100% !important}.resWrap{width:"+((global.width - global.gutter) / 2)+"px !important}.resCell{width:100% !important}}</style>",
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
          "td": "<td align='" + global.footer.font.align + "' valign='middle' height='" + global.footer.font.lineHeight + "' style='font-family: " + global.footer.font.face + "; font-size: " + global.footer.font.size + "px; color: " + global.footer.font.color + "; line-height: " + global.footer.font.lineHeight + "px;'><br />",
          "text": global.company.name + "<br />" + global.company.address + "<br />Tel: " + global.company.phone + "<br />Email: " + global.company.email + "<br />Web: " + global.company.website,
          "xgutter": "<br /><br /></td><td width='" + global.gutter + "'></td>",
          "xtable": "</tr></table>"
      },
      "unsubscribe": {
          "table": "<table cellpadding='0' cellspacing='0' border='0' align='center' width='" + global.width + "' bgcolor='" + global.unsubscribe.bgcolor + "' style='width: 100%; max-width: " + global.width + "px;'><tr>",
          "gutter": "<td width='" + global.gutter + "'></td>",
          "td": "<td align='" + global.unsubscribe.font.align + "' valign='middle' height='" + global.unsubscribe.font.lineHeight + "' style='font-family: " + global.unsubscribe.font.face + "; font-size: " + global.unsubscribe.font.size + "px; color: " + global.unsubscribe.font.color + "; line-height: " + global.unsubscribe.font.lineHeight + "px;'>",
          "hook": "<unsubscribe style='font-family: " + global.unsubscribe.font.face + ";text-decoration:none; color: " + global.unsubscribe.font.color + " !important; font-size: " + global.unsubscribe.font.size + "px; font-weight: normal; '>" + global.unsubscribe.text + "</unsubscribe>",
          "xgutter": "<br /><br /></td><td width='" + global.gutter + "'></td>",
          "xtable": "</tr></table>"
      },
      "xmso": "<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->",
      "gmailfix": "<table cellpadding='0' cellspacing='0' border='0' align='center' width='" + global.width + "' bgcolor='" + global.archive.bgcolor + "' style='width: 100%; max-width: " + global.width + "px;'><tr><td align='center' valign='top'><div style='display:none; white-space:nowrap; font:15px courier; line-height:0;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></td></tr></table>",
      "xwrap": "</td></tr></table>",
      "xbody": "</body>",
      "xhtml": "</html>"
  }
}
