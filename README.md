# Using Jekyll

Jekyll is a Ruby static-site generator that plays very well with GitHub sites.

To get it up and running you first need to install Ruby (if you don't have it already) before installing Jekyll:

```
gem install jekyll
```

Once installed, navigate to the directory and run the command below to view the project in a local environment: 

```
bundle exec jekyll serve
```

To build the project so that it's ready to upload onto the world wide webs you'll need to modify your bundle:

```
bundle exec jekyll build
```

You'll find the packaged up website in the "_site_" folder that's now ready to be uploaded to the server. For more information take a read of [Jekyll's official documentation](https://jekyllrb.com/docs/installation/).
