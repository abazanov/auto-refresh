# auto-refresh
## What is it?
*auto-refresh* is an extension for Google Chrome which monitors the HTTP traffic and if a page fails to load, it auto-refreshes that page.

## Why ???
We (https://poolesoftware.com) recently got a project in for a customer who wanted a web-page to display some weather information. The page was to keep refreshing the content at an interval of every 2 seconds. The page was not to flicker but instead update the content silently in the background. To accomplish that, we chose to use some JavaScript. The issue is thought that, if the page fails to load properly for some reason, then the JavaScript will not be loaded properly and the page will just end-up in a broken state. Since the display might be on a wall somewhere where people cannot manually refresh it, makes this a challenge.

The idea is to create a Google Chrome extension, which will automatically refresh the page if it did not load properly. Should the page ever fail to load, the issue will sort itself out automatically.

## How to use it?
Just find it in the Google Chrome Extensions gallery and install it from there.
