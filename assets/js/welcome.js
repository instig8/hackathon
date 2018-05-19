var baseStyles = [
    'color: rgb(50, 50, 50)',
    'text-shadow: 2px 2px 2px #AAA',
]

var headerStyles = [
    'font-size: 1.2rem'
]

var pStyles = [
    'font-size: 0.8rem',
    'line-height: 1.5'
]

var codeStyles = [
    'display: block',
    'padding: 3px',
    'border-radius: 2px',
    'border: 1px solid #AAAAAA',
    'font-face: monospace',
    'font-size: 0.8rem',
    'color: #FF4D4D',
    'background-color: #F3F3F3'
]

function renderStyles() {
    return Array.from(arguments).map((style) => style.join(';')).join(';')
}

function welcome() {
    console.log('%cHello!', renderStyles(baseStyles, headerStyles))
    console.log('%cThis site was lovingly hand crafted in the hills of Brattleboro, Vermont. \n' + 
                'It features opengraph and schema.org metadata so you can ingest it intelligently.\n', renderStyles(baseStyles, pStyles))
}

welcome()