# Typefixer

Utility for transforming your Markdown files to use typographically correct punctuation. Basically a
CLI wrapper around [wooorm/retext][] and [wooorm/retext-smartypants][].

[![NPM version][npm-image]][npm-url]


## Install

```
$ npm install -g typefixer
```


## Usage
```
$ cat foo.md
Lorem "ipsum" dolor 'sit' amet...

$ typefixer foo.md
Lorem “ipsum” dolor ‘sit’ amet…
```

If you want to save the transformation to a file use the redirection operator (`>`), e.g.

```
$ typefixer foo.md > fixed.md
```


## Inspiration
<http://smartquotesforsmartpeople.com>


## License

MIT © [Jonathan Persson](https://github.com/jonathanp)

[npm-url]: https://npmjs.org/package/typefixer
[npm-image]: https://badge.fury.io/js/typefixer.svg
[wooorm/retext]: https://github.com/wooorm/retext
[wooorm/retext-smartypants]: https://github.com/wooorm/retext-smartypants
