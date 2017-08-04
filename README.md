# _Find a Doctor_

#### _JavaScript and API Practice, 8.4.2017_

#### By _**Brittany Kerr**_

## Description

_This web app is a practice in API calls using AJAX. The user can enter a medical issue and the app will return a list of doctors in the Portland area that can assist them._

## Setup Requirements

_**Ensure that the following programs are downloaded to your computer:**_

  * [Node](https://nodejs.org/en/)
  * [Ruby](https://www.ruby-lang.org/en/downloads/)
  * To install gulp, bower, and sass globally open terminal and type:
    * `npm install gulp -g`
    * `npm install bower -g`
    * `gem install sass`

_**Cloning directions:**_
  * From your local console:
    * Enter Desktop by typing `cd Desktop`
    * Type `git clone https://github.com/kerrbrittany9/js-find-doctor.git`
    * Type `cd js-find-doctor` to enter directory.
    * To install packages in project type:
      * `npm install`
      * `bower install`
      * `gulp build`
      * `gulp serve`
    * At this point the browser will open at localhost:3000 in order to view app.

_**You will need your own API Key from Better Doctor**_
  * [BetterDoctor](https://developer.betterdoctor.com/)
  * Click "Get a free API key".
  * Fill out the form, listing Epicodus as the Organization/Company Name.
  * Your API key should be listed on the front page (ex: “a2c356ibgh44…..”)      or under My Account > Applications.
  * Copy your personal api Key provided.
  * In the top level of your project folder create an .env file. Type: `exports.apiKey = "YOUR-API-KEY-GOES-HERE"; ` and save the file.

## Configuration and Dependencies
* npm
* gulp
* bower
* bower-files
* browser-sync
* browserify
* vinyl-source-stream
* del
* jshint
* gulp-concat
* gulp-uglify
* gulp-util
* gulp-jshint
* gulp-sass
* gulp-sourcemaps
* jquery
* bootstrap

## Known Bugs

If you are having difficulty retrieving information from the API try installing: [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)
  * Click green button on top right of pop-up labeled 'added to chrome' and follow prompts.
  
## Technologies Used

* _JavaScript_
* _jQuery_
* _GULP_
* _HTML_
* _SASS_
* _Node.js_

### License

Copyright &copy; 2017 Brittany Kerr

This software is licensed under the MIT license.
