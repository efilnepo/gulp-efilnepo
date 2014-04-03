gulp-efilnepo
=============

gulp project with less coffee jade and reload. It scaffolds environment to start developing of html page. After project is created the following are subjects to work with:

  - app/jade/index.jade
  - app/jade/css/style.css
  - app/bower_components/bootstrap/less/
  - app/coffee/script.coffee
  - app/img/

Includes Twitter bootstrap as a basis for less-to-css development.

### Installation

```
git clone git@github.com:efilnepo/gulp-efilnepo.git
npm install
bower install
```

## Directories

app - working area, contains ``app/jade`` ``app/coffee`` and ``app/less``

dist - compiled area, will contain ``index.html css/style.css js/script.js img/``

### Running

```
gulp

gulp build

gulp clean
```
Sometimes clean does not work, in this case I run it twice and after second time it is fine.

requires livereload plugin fot Chrome. After it is started it will open index.html and will watch for app changes

### Additional bower components

twitter bootsrap + jquery
