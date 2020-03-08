// generated on 2020-03-06 using generator-webapp 4.0.0-8
const { src, dest, watch, series, parallel, lastRun } = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const { argv } = require('yargs');

const fs = require('fs');
const assign = require('object-assign');
const hbsHelpers = require('handlebars-helpers');
const highlight = require('highlight.js');

const $ = gulpLoadPlugins({
  rename: {
    'gulp-marked-json': 'markdown'
  }
});
const server = browserSync.create();

const port = argv.port || 9000;

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;


function styles() {
  return src('app/styles/*.css', { sourcemaps: !isProd })
    .pipe($.postcss([
      autoprefixer()
    ]))
    .pipe(dest('.tmp/styles', { sourcemaps: !isProd }))
    .pipe(server.reload({stream: true}));
};

function scripts() {
  return src('app/scripts/**/*.js', { sourcemaps: !isProd })
    .pipe($.plumber())
    .pipe($.babel())
    .pipe(dest('.tmp/scripts', { sourcemaps: !isProd ? '.' : false }))
    .pipe(server.reload({stream: true}));
};

const lintBase = (files, options) => {
  return src(files)
    .pipe($.eslint(options))
    .pipe(server.reload({stream: true, once: true}))
    .pipe($.eslint.format())
    .pipe($.if(!server.active, $.eslint.failAfterError()));
};

function lint() {
  return lintBase('app/scripts/**/*.js', { fix: true })
    .pipe(dest('app/scripts'));
};

function html() {
  return src(['app/*.html', '.tmp/**/*.html'])
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if(/\.js$/, $.uglify({compress: {drop_console: true}})))
    .pipe($.if(/\.css$/, $.postcss([cssnano({safe: true, autoprefixer: false})])))
    .pipe($.if(/\.html$/, $.htmlmin({
      collapseWhitespace: false,
      minifyCSS: true,
      minifyJS: {compress: {drop_console: true}},
      processConditionalComments: true,
      removeComments: true,
      removeEmptyAttributes: false,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    })))
    .pipe(dest('dist'));
};

function images() {
  return src('app/images/**/*', { since: lastRun(images) })
    .pipe($.imagemin())
    .pipe(dest('dist/images'));
};

function fonts() {
  return src('app/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe($.if(isDev, dest('.tmp/fonts'), dest('dist/fonts')));
};

function handlebars() {
  hbsHelpers({ handlebars: $.hbs.handlebars });
  $.hbs.registerPartial('partials/head', fs.readFileSync('app/partials/head.hbs', 'utf8'));
  $.hbs.registerPartial('partials/footer', fs.readFileSync('app/partials/footer.hbs', 'utf8'));
  $.hbs.registerPartial('partials/navbar', fs.readFileSync('app/partials/navbar.hbs', 'utf8'));
  $.hbs.registerPartial('partials/logo', fs.readFileSync('app/partials/logo.hbs', 'utf8'));

  var templateData = JSON.parse(fs.readFileSync('app/docfx.json', 'utf8')).build.globalMetadata;

  return src(['app/**/*.md'])
      .pipe($.markdown({
        langPrefix: 'hljs lang-',
        highlight: function(code, lang) {
          if (lang && highlight.getLanguage(lang)) {
            let ignoreIllegals = true;
            return highlight.highlight(lang, code, ignoreIllegals).value;
          }
          return code;
        }
      }))
      .pipe($.hbs('app/layout/master.hbs', { dataSource: (file) => {
        var data = JSON.parse(file.contents.toString());
        data = assign(data, templateData);
        return data;
      }}))
      .pipe(dest('.tmp'));
};

function extras() {
  return src([
    'app/*',
    'app/**/assets/**/*',
    '!app/**/*.hbs',
    '!app/**/*.md',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(dest('dist'));
};

function clean() {
  return del(['.tmp', 'dist'])
};

function measureSize() {
  return src('dist/**/*')
    .pipe($.size({title: 'build', gzip: true}));
};

function deploy() {
  return src('dist/**/*')
    .pipe($.ghPages({
      remoteUrl: 'https://github.com/NetOfficeFw/netofficefw.github.io.git',
      branch: 'master'
    }));
};


const build = series(
  clean,
  handlebars,
  parallel(
    lint,
    series(parallel(styles, scripts), html),
    images,
    fonts,
    extras
  ),
  measureSize
);

function startAppServer() {
  server.init({
    notify: false,
    port,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  });

  watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/**/*.html',
    '.tmp/fonts/**/*'
  ]).on('change', server.reload);

  watch('app/styles/**/*.css', styles);
  watch('app/scripts/**/*.js', scripts);
  watch('app/fonts/**/*', fonts);

  watch('app/docfx.json', handlebars);
  watch('app/**/*.md', handlebars);
  watch('app/**/*.hbs', handlebars);
}

function startDistServer() {
  server.init({
    notify: false,
    port,
    server: {
      baseDir: 'dist',
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  });
}

let serve;
if (isProd) {
  serve = series(build, startDistServer);
} else {
  serve = series(clean, parallel(styles, scripts, fonts, handlebars), startAppServer);
}

exports.serve = serve;
exports.build = build;
exports.deploy = series(build, deploy);
exports.default = build;
