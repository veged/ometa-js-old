if (!load && include && system.getcwd)
    var load = global.load = function(f) {
        var oldLoad = global.load;
        if (f.indexOf('/') != -1)
            global.load = function(ff){ return oldLoad(f.replace(/[^\/]+$/, '') + ff) };
        var result = eval.call(global, new File(system.getcwd() + '/' + f).open("r").read());
        global.load = oldLoad;
        return result;
    };
if (!print && system.stdout)
    var print = global.print = function(d) { return system.stdout(d + '\n') };

load('ometa-rhino.js');

exports.translateCode = translateCode;
exports.ometa = ometa;
