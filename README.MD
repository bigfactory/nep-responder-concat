config example:

```
{
    pattern: 'http://g.tbcdn.cn/mtb/app-cart-buy/1.1.1/page.js',
    responder: 'concat',
    options: {
        base: '/gitlab/mtb/app-cart-buy/',
        files: [
            'src/core/loginedRequest.js',
            'src/core/mtop.js',
            'src/tpl/template.js', 
            'src/mods/**/*.js',
            'src/core/publicMods.js',
            'src/core/render.js',
            'src/bag.js'
        ]
    }
}

```