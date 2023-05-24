# CV builder

Single Page Application built with Nuxt v3 that helps to create resume and provides several beautiful PDF templates for it.


[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)
[![forthebadge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDQuOCIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDIwNC44IDM1Ij48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIwIiB5PSIwIiB3aWR0aD0iMTE4LjI5IiBoZWlnaHQ9IjM1IiBmaWxsPSIjMDBENTdFIi8+PHJlY3QgY2xhc3M9InN2Z19fcmVjdCIgeD0iMTE2LjI5IiB5PSIwIiB3aWR0aD0iODguNTEwMDAwMDAwMDAwMDIiIGhlaWdodD0iMzUiIGZpbGw9IiMyQjQ4NUEiLz48cGF0aCBjbGFzcz0ic3ZnX190ZXh0IiBkPSJNMTcuMzMgMjJMMTQuMjIgMjJMMTQuMjIgMTMuNDdMMTcuMTQgMTMuNDdRMTguNTkgMTMuNDcgMTkuMzQgMTQuMDVRMjAuMTAgMTQuNjMgMjAuMTAgMTUuNzhMMjAuMTAgMTUuNzhRMjAuMTAgMTYuMzYgMTkuNzggMTYuODNRMTkuNDcgMTcuMzAgMTguODYgMTcuNTZMMTguODYgMTcuNTZRMTkuNTUgMTcuNzUgMTkuOTMgMTguMjZRMjAuMzEgMTguNzggMjAuMzEgMTkuNTFMMjAuMzEgMTkuNTFRMjAuMzEgMjAuNzEgMTkuNTMgMjEuMzZRMTguNzYgMjIgMTcuMzMgMjJMMTcuMzMgMjJaTTE1LjcwIDE4LjE1TDE1LjcwIDIwLjgyTDE3LjM1IDIwLjgyUTE4LjA0IDIwLjgyIDE4LjQ0IDIwLjQ3UTE4LjgzIDIwLjEzIDE4LjgzIDE5LjUxTDE4LjgzIDE5LjUxUTE4LjgzIDE4LjE4IDE3LjQ3IDE4LjE1TDE3LjQ3IDE4LjE1TDE1LjcwIDE4LjE1Wk0xNS43MCAxNC42NkwxNS43MCAxNy4wNkwxNy4xNSAxNy4wNlExNy44NCAxNy4wNiAxOC4yMyAxNi43NVExOC42MiAxNi40MyAxOC42MiAxNS44NkwxOC42MiAxNS44NlExOC42MiAxNS4yMyAxOC4yNiAxNC45NVExNy45MCAxNC42NiAxNy4xNCAxNC42NkwxNy4xNCAxNC42NkwxNS43MCAxNC42NlpNMjQuNjQgMTkuMTZMMjQuNjQgMTkuMTZMMjQuNjQgMTMuNDdMMjYuMTIgMTMuNDdMMjYuMTIgMTkuMThRMjYuMTIgMjAuMDMgMjYuNTUgMjAuNDhRMjYuOTggMjAuOTMgMjcuODMgMjAuOTNMMjcuODMgMjAuOTNRMjkuNTQgMjAuOTMgMjkuNTQgMTkuMTNMMjkuNTQgMTkuMTNMMjkuNTQgMTMuNDdMMzEuMDIgMTMuNDdMMzEuMDIgMTkuMTdRMzEuMDIgMjAuNTMgMzAuMTUgMjEuMzJRMjkuMjggMjIuMTIgMjcuODMgMjIuMTJMMjcuODMgMjIuMTJRMjYuMzYgMjIuMTIgMjUuNTAgMjEuMzNRMjQuNjQgMjAuNTUgMjQuNjQgMTkuMTZaTTM3LjE1IDIyTDM1LjY3IDIyTDM1LjY3IDEzLjQ3TDM3LjE1IDEzLjQ3TDM3LjE1IDIyWk00Ny4zMiAyMkw0MS45NiAyMkw0MS45NiAxMy40N0w0My40NCAxMy40N0w0My40NCAyMC44Mkw0Ny4zMiAyMC44Mkw0Ny4zMiAyMlpNNTMuOTAgMjJMNTEuNDQgMjJMNTEuNDQgMTMuNDdMNTMuOTYgMTMuNDdRNTUuMDkgMTMuNDcgNTUuOTcgMTMuOTdRNTYuODQgMTQuNDggNTcuMzIgMTUuNDBRNTcuODEgMTYuMzMgNTcuODEgMTcuNTJMNTcuODEgMTcuNTJMNTcuODEgMTcuOTVRNTcuODEgMTkuMTYgNTcuMzIgMjAuMDhRNTYuODQgMjEuMDAgNTUuOTQgMjEuNTBRNTUuMDUgMjIgNTMuOTAgMjJMNTMuOTAgMjJaTTUyLjkyIDE0LjY2TDUyLjkyIDIwLjgyTDUzLjg5IDIwLjgyUTU1LjA2IDIwLjgyIDU1LjY4IDIwLjA5UTU2LjMxIDE5LjM2IDU2LjMyIDE3Ljk5TDU2LjMyIDE3Ljk5TDU2LjMyIDE3LjUyUTU2LjMyIDE2LjEzIDU1LjcxIDE1LjQwUTU1LjExIDE0LjY2IDUzLjk2IDE0LjY2TDUzLjk2IDE0LjY2TDUyLjkyIDE0LjY2Wk02OS42MyAyMkw2Ny42NiAxMy40N0w2OS4xMyAxMy40N0w3MC40NiAxOS44OEw3Mi4wOCAxMy40N0w3My4zMyAxMy40N0w3NC45NCAxOS44OUw3Ni4yNSAxMy40N0w3Ny43MiAxMy40N0w3NS43NSAyMkw3NC4zMyAyMkw3Mi43MSAxNS43N0w3MS4wNSAyMkw2OS42MyAyMlpNODMuMzYgMjJMODEuODggMjJMODEuODggMTMuNDdMODMuMzYgMTMuNDdMODMuMzYgMjJaTTg5Ljg1IDE0LjY2TDg3LjIxIDE0LjY2TDg3LjIxIDEzLjQ3TDkzLjk4IDEzLjQ3TDkzLjk4IDE0LjY2TDkxLjMyIDE0LjY2TDkxLjMyIDIyTDg5Ljg1IDIyTDg5Ljg1IDE0LjY2Wk05OS4yMiAyMkw5Ny43NCAyMkw5Ny43NCAxMy40N0w5OS4yMiAxMy40N0w5OS4yMiAxNy4wMkwxMDMuMDMgMTcuMDJMMTAzLjAzIDEzLjQ3TDEwNC41MSAxMy40N0wxMDQuNTEgMjJMMTAzLjAzIDIyTDEwMy4wMyAxOC4yMUw5OS4yMiAxOC4yMUw5OS4yMiAyMloiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBjbGFzcz0ic3ZnX190ZXh0IiBkPSJNMTMyLjgxIDIyTDEzMC40OCAyMkwxMzAuNDggMTMuNjBMMTMyLjQzIDEzLjYwTDEzNi4xNCAxOC4wN0wxMzYuMTQgMTMuNjBMMTM4LjQ3IDEzLjYwTDEzOC40NyAyMkwxMzYuNTIgMjJMMTMyLjgxIDE3LjUyTDEzMi44MSAyMlpNMTQzLjU2IDE4LjI2TDE0My41NiAxOC4yNkwxNDMuNTYgMTMuNjBMMTQ1Ljk0IDEzLjYwTDE0NS45NCAxOC4xOVExNDUuOTQgMjAuMjAgMTQ3LjUzIDIwLjIwTDE0Ny41MyAyMC4yMFExNDkuMTIgMjAuMjAgMTQ5LjEyIDE4LjE5TDE0OS4xMiAxOC4xOUwxNDkuMTIgMTMuNjBMMTUxLjQ2IDEzLjYwTDE1MS40NiAxOC4yNlExNTEuNDYgMjAuMTMgMTUwLjQyIDIxLjE1UTE0OS4zOCAyMi4xNyAxNDcuNTEgMjIuMTdMMTQ3LjUxIDIyLjE3UTE0NS42NCAyMi4xNyAxNDQuNjAgMjEuMTVRMTQzLjU2IDIwLjEzIDE0My41NiAxOC4yNlpNMTU4LjQwIDIyTDE1NS42OCAyMkwxNTguNzQgMTcuNzVMMTU1LjgxIDEzLjYwTDE1OC40OSAxMy42MEwxNjAuMTcgMTYuMDJMMTYxLjgzIDEzLjYwTDE2NC40MCAxMy42MEwxNjEuNDcgMTcuNjZMMTY0LjU5IDIyTDE2MS44NSAyMkwxNjAuMTEgMTkuNDBMMTU4LjQwIDIyWk0xNzAuNjcgMTUuNDhMMTY4LjA4IDE1LjQ4TDE2OC4wOCAxMy42MEwxNzUuNjEgMTMuNjBMMTc1LjYxIDE1LjQ4TDE3My4wNCAxNS40OEwxNzMuMDQgMjJMMTcwLjY3IDIyTDE3MC42NyAxNS40OFpNMTg2LjA3IDIxLjM0TDE4Ni4wNyAyMS4zNEwxODYuOTMgMTkuNTVRMTg3LjQyIDE5Ljg4IDE4OC4wNCAyMC4wN1ExODguNjYgMjAuMjUgMTg5LjI2IDIwLjI1TDE4OS4yNiAyMC4yNVExODkuODcgMjAuMjUgMTkwLjIzIDIwLjAyUTE5MC41OSAxOS43OSAxOTAuNTkgMTkuMzdMMTkwLjU5IDE5LjM3UTE5MC41OSAxOC41NSAxODkuMzEgMTguNTVMMTg5LjMxIDE4LjU1TDE4OC4zMSAxOC41NUwxODguMzEgMTcuMDVMMTg5LjgxIDE1LjQ0TDE4Ni41MCAxNS40NEwxODYuNTAgMTMuNjBMMTkyLjU3IDEzLjYwTDE5Mi41NyAxNS4wOUwxOTAuODMgMTYuOTZRMTkxLjg3IDE3LjE4IDE5Mi40MyAxNy44MlExOTIuOTkgMTguNDYgMTkyLjk5IDE5LjM3TDE5Mi45OSAxOS4zN1ExOTIuOTkgMjAuMTEgMTkyLjU5IDIwLjc1UTE5Mi4xOCAyMS4zOSAxOTEuMzYgMjEuNzhRMTkwLjU0IDIyLjE3IDE4OS4zMyAyMi4xN0wxODkuMzMgMjIuMTdRMTg4LjQ0IDIyLjE3IDE4Ny41NyAyMS45NVExODYuNzAgMjEuNzQgMTg2LjA3IDIxLjM0WiIgZmlsbD0iI0ZGRkZGRiIgeD0iMTI5LjI5MDAwMDAwMDAwMDAyIi8+PC9zdmc+)](https://forthebadge.com)
[![Gem Version](https://badge.fury.io/rb/colorls.svg)](https://badge.fury.io/rb/colorls)
[![CI](https://github.com/athityakumar/colorls/actions/workflows/ruby.yml/badge.svg)](https://github.com/athityakumar/colorls/actions/workflows/ruby.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shields)](http://makeapullrequest.com)



 ![image](https://user-images.githubusercontent.com/17109060/32149040-04f3125c-bd25-11e7-8003-66fd29bc18d4.png)

*If you're interested in knowing the powerlevel9k configuration to get this prompt, have a look at [this gist](https://gist.github.com/athityakumar/1bd5e9e24cd2a1891565573a893993eb).*

<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.png" alt="Markdownify" width="200"></a>
  <br>
  Markdownify
  <br>
</h1>

<h4 align="center">A minimal Markdown Editor desktop app built on top of <a href="http://electron.atom.io" target="_blank">Electron</a>.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://badges.gitter.im/amitmerchant1990/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/bullredeyes@gmail.com">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/AmitMerchant">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif)

## Key Features

* LivePreview - Make changes, See changes
  - Instantly see what your Markdown documents look like in HTML as you create them.
* Sync Scrolling
  - While you type, LivePreview will automatically scroll to the current location you're editing.
* GitHub Flavored Markdown  
* Syntax highlighting
* [KaTeX](https://khan.github.io/KaTeX/) Support
* Dark/Light mode
* Toolbar for basic Markdown formatting
* Supports multiple cursors
* Save the Markdown preview as PDF
* Emoji support in preview :tada:
* App will keep alive in tray for quick usage
* Full screen mode
  - Write distraction free.
* Cross platform
  - Windows, macOS and Linux ready.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/amitmerchant1990/electron-markdownify

# Go into the repository
$ cd electron-markdownify

# Install dependencies
$ npm install

# Run the app
$ npm start
```



## Support

<a href="https://www.buymeacoffee.com/5Zn8Xh3l9" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

<p>Or</p> 

<a href="https://www.patreon.com/amitmerchant">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>




