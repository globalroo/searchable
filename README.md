# searchable
[![Build Status](https://travis-ci.org/globalroo/searchable.svg?branch=master)](https://travis-ci.org/globalroo/searchable)[![codecov](https://codecov.io/gh/globalroo/searchable/branch/master/graph/badge.svg)](https://codecov.io/gh/globalroo/searchable)
TMDB endpoint searches.

> React TMDB Searchable

```sh
npm install yarn -g
yarn
yarn test (tdd)
yarn coverage  generated to ./coverage)
yarn start or
yarn build (for a production version - generated to ./build)
```
## Brief description

An Application that interfaces with TheMovieDB API and allows search for Actors, Actresses, and Movies and allows you to view the results. It's responsive and should work on your mobile too.

N.B. Because of the live-site github pages deployment into a subdirectory, I've had to hardcode the root path to make it work for the demo. The side effect of this is that a direct deep link without navigating from the root of the site will probably not work correctly. This issue is a problem with this deployment environment and a local install and deploy using yarn start should demonstrate the deep linking working fine.

Checkout the example links at the bottom of the landing page.

### Live demo: https://globalroo.github.io/searchable/

![Screenshot](/screenshot.png)

### Video highlighting some functionality
https://www.youtube.com/embed/c_DcKPq6XZI