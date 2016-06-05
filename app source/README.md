# Getting started with this project

Getting this project started is easy. Simply

    - Install and use ruby version 2.1.3 "rvm install 2.1.3 && rvm use 2.1.3"

    - Create a gemset "rvm gemset create middleman"

    - Install bundler "gem install bundler"

    - Install all other gems "bundle install"

    - Start the middleman server "middleman server"

    - Visit web page at "http://localhost:4567/"

# Using Javascript ES6

To use ES6, you need to specify that the javascript file is an ES6 file by including .es6 as the extension

```
/assets/javascripts/application.js.es6
```

# Page-specific scripts and initialization contexts

For the best example of where you should put context-specific initialization code, please reference /assets/javascripts/pages/home.js.es6

```
//= require animations/header

$(document).ready(() => {
  // Proto a blank array
  let animations = [];

  // Basic accessor function to check if we should run logic for this page
  let isRelevent = () => {
    return $(".home-page-container").length > 0;
  };

  // Build animation array
  let initAnimations = () => {
    // Construct all animations
    animations = [
      new HeaderAnimation()
    ];

    // Start all animations
    animations.forEach(anim => { anim.start(); });
  }


  if (isRelevent()) {
    // Start off by constructing and playing animations
    initAnimations();

    // When the window resizes, let's reset the animations so they look right
    $(window).on('resize', () => {
      console.log('window resized, reloading animations');

      // Destroy all the animations
      animations.forEach(anim => { anim.destroy(); });

      // Re-construct the animations
      initAnimations();
    });
  }
});
```

# Bower Components

To use bower components successfully, you need to include the path of the plugin in the config.rb so it will be loaded into the asset pipeline.

For instance, the path to GreenSock's timeline max is

```
bower_components/gsap/src/uncompressed/TimelineMax.js
```

To include this file, the directive would look like this

```
sprockets.append_path 'assets/bower_components/gsap/src/uncompressed'
```

In the application.js.es6

```
// require TimelineMax
```


# Single page specific information

To register a new page, you must create the template at the path /sources/templates/{{filename}}.

After creating the template, you must register the page proxy in the config.rb

```
# TODO: Add any additional HTML pages here
page "/index.html", proxy: "/templates/index.html"
```


# How to finalize a build

Use Ctrl+Shift+Slash to block comment/uncomment in config.rb.

    - ex. ctrl + shift + /

These are commented out as they break staging to Heroku.

In the config.rb do the following:

    - uncomment require 'extensions/sitemap.rb'

    - uncomment activate :favicon_maker

    - uncomment activate :imageoptim

    - uncomment activate :minify_css

    - uncomment activate :minify_javascript

    - uncomment activate :sitemap_generator

    - uncomment activate :gzip

Confirm the following are correct on each pages frontmatter:

    - title

    - description

    - keywords

    - sitename

    - url

Check 'javascripts/_typekitfont.js' to confirm kit id is correct.

Check 'javascripts/_ga.js' to confirm UA-XXXXX-X code is correct.

For favicon maker to work include favicon_template.png in source directory. Ideal image size is 152x152.

Make sure to change the URL in 'extensions/sitemap.rb' to the proper live domain.
