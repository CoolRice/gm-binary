var os = require('os')
var path = require('path');

var platform = os.platform();
function registerGm() {
  if (platform !== 'darwin' && platform !== 'win32') {
      console.error('Unsupported platform (OS X and Windows only)');
      process.exit(1);
  }
  if (platform === 'darwin') {
    process.env.PATH = __dirname + '/bin/mac:' + process.env.PATH;
    process.env.MAGICK_CONFIGURE_PATH = __dirname + '/bin/mac/config';
  }
  if (platform === 'win32') {
    process.env.PATH = __dirname + '\\bin\\win64;' + process.env.PATH;
  }

  var gmPath = platform === 'darwin' ? __dirname + '/bin/mac/gm' : __dirname + '\\bin\\win64\\gm.exe';
};

module.exports = { registerGm };
