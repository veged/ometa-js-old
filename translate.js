#!/usr/bin/env v8cgi

(function(){

var GetOpt = require('getopt').GetOpt;
var o = new GetOpt();

o.add('', 'Input file', '', false, false, GetOpt.REQUIRED_ARGUMENT);
o.add('help', 'Print help message', false, 'h', 'help');
o.add('output', 'Output file', '', 'o', 'output', GetOpt.REQUIRED_ARGUMENT);

function help() {
    system.stdout('Usage: ./translate.js [options] input file\n\n');
    system.stdout(o.help());
}

try {
    var args = [];
    for (var i = 1, l = system.args.length; i < l; i++) { args.push(system.args[i]) }
    o.parse(args);
    if (!o.get('help') && !o.get()) throw new Error('Input file required');
} catch(e) {
    system.stdout('Bad arguments.\n' + e + '\n\n');
    help();
    return;
}

if (o.get('help')) {
    help();
} else {
    var f = new File(o.get());
    if (!f.exists()) {
        system.stdout('Cannot access ' + o.get() + ': No such file.\n');
        return;
    }

    f.open('r');
    var input = f.read();
    f.close();

    try {
        var result = require('./ometajs').translateCode(input) + '\n';
    } catch (e) {
        if (e.errorPos != undefined) {
            system.stdout(input.slice(0, e.errorPos));
            system.stdout(" Parse error ->");
            system.stdout(input.slice(e.errorPos));
        }
        throw e
    }

    if (o.get('output')) {
        (new File(o.get('output'))).open('w').write(result).close();
        system.stdout(o.get('output') + ' written\n');
    } else {
        system.stdout(result);
    }
}

})();
