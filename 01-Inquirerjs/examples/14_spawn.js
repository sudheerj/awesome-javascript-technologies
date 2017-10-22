var spawn = require('child_process').spawn;

spawn('node', ['01_input.js'], {
  cwd: __dirname,
  stdio: 'inherit'
});
