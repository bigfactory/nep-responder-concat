var fs = require('fs');
var path = require('path');
var mime = require('mime');
var glob = require('glob');


module.exports = function(req, res, next, data) {
    var options = data.options;
    var pattern = data.pattern;
    var log = data.log;

    var files = options.files;
    var base = options.base||'';

    var charset = options.charset || 'utf-8';
    var localFiles = [];
    var buffer = [];

    files.forEach(function(file){
        var res = glob.sync(path.join(base, file));
        localFiles = localFiles.concat(res);
    });

    
    localFiles.forEach(function(file){
        var content = fs.readFileSync(file);
        buffer.push(content);
    });

    buffer = buffer.join('');
    res.setHeader('Content-Type', mime.lookup(localFiles[0])+'; charset='+charset);
    res.send(buffer);
};