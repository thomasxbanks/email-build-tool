'use strict' // Allow the use of ES6 declarations

var fs = require('fs') // Require the file system. You will need this later on!
var global = require('./global') // Load all the global settings
var global = global.global // reset the double variable
var email = require('./email') // Load the email object
var email = email.email // reset the double variable
var t = require('./templates') // Load the tamplate library

/***************************************************/
/*                START EDITING HERE               */
/***************************************************/

email.content.push(
    t.FullImg({
        src: 'http://placecage.com/600/400',
        alt: 'Nicolas Cage!',
        gutter: null
    }),
    t.FullText({
        text: "<br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ratione magni, provident aliquam voluptas tempora ipsa possimus animi mollitia nam libero quis ea nulla sapiente rerum culpa incidunt facilis cupiditate!<br /><br />"
    }),
    t.FullImg({
        src: 'http://placecage.com/600/400',
        alt: 'This is an alt text example',
        url: 'www.yourmum.com'
    }),
    t.CTA({
        text: 'Visit the website',
        url: 'http://shoot-the-moon.co.uk'
    }),
    t.DoubleColumnRes({
        left: t.FullText({
            gutter: null,
            text: "<br /><h1 style='font-size: 20px; line-height: 20px;'>This is a title</h1>I am left text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ratione magni, provident aliquam voluptas tempora ipsa possimus animi mollitia nam libero quis ea nulla sapiente rerum culpa incidunt facilis cupiditate!<br /><br />"
        }) + t.CTA({
          text: 'Click me!',
          url: 'http://i-do-nothing.com'
        }),
        right: t.FullImg({
            gutter: null,
            src: 'http://placecage.com/300/400',
            alt: 'This is an alt text example',
            url: 'www.yourmum.com',
            width: 290
        })
    }),
    t.FullText({
        text: "<br />I am text on my own. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ratione magni, provident aliquam voluptas tempora ipsa possimus animi mollitia nam libero quis ea nulla sapiente rerum culpa incidunt facilis cupiditate!<br /><br />"
    }),
    t.DoubleColumnRes({
        right: t.FullText({
            gutter: null,
            text: "<br /><h1 style='font-size: 20px; line-height: 20px;'>This is a title</h1>I am right text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ratione magni, provident aliquam voluptas tempora ipsa possimus animi mollitia nam libero quis ea nulla sapiente rerum culpa incidunt facilis cupiditate!<br /><br />"
        }),
        left: t.FullImg({
            gutter: null,
            src: 'http://placecage.com/300/200',
            alt: 'This is an alt text example',
            url: 'www.yourmum.com',
            width: 290
        })
    })
)

/***************************************************/
/*                STOP EDITING HERE                */
/***************************************************/

// Write your layout into a single enormous string
let b = email.body
let archive = email.archive.table + email.archive.gutter + email.archive.td + email.archive.hook + email.archive.xgutter + email.archive.xtable
let footer = email.footer.table + email.footer.gutter + email.footer.td + email.footer.text + email.footer.xgutter + email.footer.xtable
let unsubscribe = email.unsubscribe.table + email.unsubscribe.gutter + email.unsubscribe.td + email.unsubscribe.hook + email.unsubscribe.xgutter + email.unsubscribe.xtable

var output = email.html + email.head + b.tag + ' style="display: ' + b.display + '; width: ' + b.width + '; background: ' + b.bgcolor + '; padding: ' + b.padding + '; margin: ' + b.margin + ';"' + b.xtag + email.style + email.wrap + email.mso.tag + email.mso.xtag + archive
for (let i = 0; i < email.content.length; i++) {
    var output = output + email.content[i]
}
var output = output + footer + unsubscribe + email.gmailfix + email.xmso + email.xwrap + email.xbody + email.xhtml

// Write the output string into a distribution file
fs.writeFile('dist/index.html', output, (err) => {
    if (err) throw err
    console.log('It\'s saved!')
})
