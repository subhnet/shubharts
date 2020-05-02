var ghpages = require('gh-pages');

// ghpages.publish('build', function (err) { });

ghpages.publish('build', {
    branch: 'master',
    repo: 'https://github.com/subhset/shubharts.github.io.git'
}, function (err) { console.log(err) });

