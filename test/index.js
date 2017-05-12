var it = require('tape');
var fs = require('fs');
var gmBin = require('..');

it('should find gm', function(t) {
    var stats = fs.statSync(gmBin.gmPath);
    t.ok(stats.isFile(gmBin.gmPath));
    t.end();
});
