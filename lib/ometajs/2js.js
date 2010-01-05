var file = require('file'),
    parser = exports.parser = new (require('args').Parser)();

parser.option('-i', '--input', 'inputFile')
    .help('specifies filename to read the input source, if omit use STDIN')
    .set();

parser.option('-o', '--output', 'outFile')
    .help('specifies filename to write the output, if omit use STDOUT')
    .set();

parser.helpful();

exports.main = function () {
    var options = parser.parse(system.args),
        input = options.inputFile ? file.read(options.inputFile) : system.stdin.read();

    try {
        var result = require('ometajs').translateCode(input) + '\n';
        options.outFile ? file.write(options.outFile, result) : system.stdout.write(result);
    } catch (e) {
        if (e.errorPos != undefined) {
            system.stderr.write(
                input.slice(0, e.errorPos) +
                " Parse error ->" +
                input.slice(e.errorPos) + '\n'
            );
        }
        throw e
    }
};
