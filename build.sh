#!/bin/bash

# only proceed script when started not by pull request (PR)
if [ "$TRAVIS_PULL_REQUEST" == "true" ]; then
  echo "this is PR, exiting"
  exit 0
fi

# enable error reporting to the console
set -e

# build site with jekyll, by default to `_site' folder
bundle exec jekyll build

# accept server key
ssh -oStrictHostKeyChecking=no ${username}@ederpesca.com "uptime"

# copy generated HTML site to `master' branch
export RSYNC_PASSWORD=${password}
rsync -avz --delete _site/ ${username}@ederpesca.com:www/
