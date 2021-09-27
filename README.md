# SmashTheEducation

![build](https://github.com/chibat/chrome-extension-typescript-starter/workflows/build/badge.svg)

## Prerequisites

* [git](https://git-scm.com/downloads)
* [node + npm](https://nodejs.org/) (LTS Version)

## Setup

Open a powershell window and run the following commands:
```
git clone https://github.com/ThatAquarel/SmashTheEducation.git
cd SmashTheEducation
npm install
npm run build
```

## Load extension to chrome

Enable developer mode on chrome and click load unpacked.
In the same powershell window, run the following command to get current folder:
```
pwd
```
Select the `dist/` folder inside the current folder.

## Update

Open a powershell window in the installation folder and run:
```
git pull
```

## Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files
