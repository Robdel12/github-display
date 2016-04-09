# Github-display

This addon provides some components to display github information

## Including it in your project

To package.json add:
```
  "devDependencies": {
    ...
    "github-display":"0.0.1"
    ...
  }
```

## Components

### repo-display

<p>Shows information about a github repository.</p>
<p>TODO: needs to be fleshed out and made configuratbel</p>
<p>To use the component do:</p>
```
{{repo-display id="langens-jonathan/github-display"}}
```

### repo-readme
<p>Shows the readme for the repository with the given id</p>
<p>TODO: fleshing out, making it more flexible</p>
<p>To use the component do:</p>
```
{{repo-readme repoId="langens-jonathan/github-display"}}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
