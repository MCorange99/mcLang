const Tokenizer = require('tokenizer');
const t = new Tokenizer()

module.exports = (code) => {

    t.on('token', function(token, type) {
        console.log('%s(%s)', token, type);
    });

    t.addRule(/^"([^"]|\\")*"$/, 'string');
    t.addRule(/^"([^"]|\\")*$/, 'maybe-string'); // same as above without the ending "
    t.addRule(/^\d+(\.\d+)?$/, 'number');
    // t.addRule(/^\d+\.$/, 'maybe-float');
    t.addRule(/^(true|false)$/, 'bool');
    t.addRule(/^null$/, 'null');
    // t.addRule(/^\{$/, 'begin-object');
    // t.addRule(/^\}$/, 'end-object');
    // t.addRule(/^\[$/, 'begin-array');
    // t.addRule(/^\]$/, 'end-array');
    // t.addRule(/^:$/, 'end-label');
    t.addRule(/^,$/, 'comma');
    t.addRule(/^\($/, 'bracket_start');
    t.addRule(/^\)$/, 'bracket_end');
    t.addRule(/^\.$/, 'dot');
    t.addRule(/^\w+$/, "symbol");
    t.addRule(/^(\s)+$/, 'whitespace');
    t.addRule(/^;$/, 'colon'); //  /`?\$size`?/
    t.addRule(/^(\n)+$/, 'newline');
    t.addRule(/^(\t)+$/, 'tab');
    t.addRule(/^\+$/, 'OP_plus');
    t.addRule(/^\-$/, 'OP_plus');
    
    t.addRule(/^\\$/, 'back_slash');
    t.addRule(/^\/$/, 'forward_slash');
    
    
    t.write(code);



    return 0;
}