

var file = require('file'),
    parser = exports.parser = new (require('args').Parser)();

//parser.command('main', function(options){
//    print('========' + Util.serialize(options));

//    var input = options.args[0] ? file.read(options.args[0]) : system.stdin.read();

//    print(input);
//    try {
//        var result = require('./ometajs').translateCode(input) + '\n';
//    } catch (e) {
//        if (e.errorPos != undefined) {
//            system.stdout(input.slice(0, e.errorPos));
//            system.stdout(" Parse error ->");
//            system.stdout(input.slice(e.errorPos));
//        }
//        throw e
//    }
//
//    if (o.get('output')) {
//        (new File(o.get('output'))).open('w').write(result).close();
//        system.stdout(o.get('output') + ' written\n');
//    } else {
//        system.stdout(result);
//    }
//}).args('fileName');

parser.option('-i', '--input', 'inputFile')
    .help('specifies filename to read the input source, if omit use STDIN')
    .set();

parser.option('-o', '--output', 'outFile')
    .help('specifies filename to write the output, if omit use STDOUT')
    .set();

parser.helpful();

//o.add('', 'Input file', '', false, false, GetOpt.REQUIRED_ARGUMENT);
//o.add('help', 'Print help message', false, 'h', 'help');
//o.add('output', 'Output file', '', 'o', 'output', GetOpt.REQUIRED_ARGUMENT);

//system.stdout('Usage: ./translate.js [options] input file\n\n');


exports.main = function () {
    var options = parser.parse(system.args);

    var input = options.inputFile ? file.read(options.inputFile) : system.stdin.read();

    try {
        var result = require('ometajs').translateCode(input) + '\n';
        options.outFile ? file.write(options.outFile, result) : system.stdout.write(result);
    } catch (e) {
        if (e.errorPos != undefined) {
            system.stderr.write(
                input.slice(0, e.errorPos) +
                " Parse error ->" +
                input.slice(e.errorPos)
            );
        }
        throw e
    }
};
