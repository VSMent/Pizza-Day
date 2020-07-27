const {spawn} = require('child_process');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('api', () => nodemon({
  script: './bin/www',
  watch: ['./src']
}));

gulp.task('db', (callback) => {
  const dbProcess = spawn('mongod', ['--dbpath', 'data/db', '--port', '3001']);
  dbProcess.on('data', console.log);
  dbProcess.on('error', e => console.log(e));
  dbProcess.on('close', code => {
    console.log(`DB was stopped with code ${code}`);
    callback();
  });
});

gulp.task('run:dev', gulp.parallel('db', 'api'));
