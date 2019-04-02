
## CocosPay:
CocosPay is a Browser Extension for Cocos-BCX.

## Preparation:
Node.js version 8.9.3 or higher.

## Build:
Install local dependencies by using npm install.  
Build with development npm run dev.  
Build for Publishing npm run build.  
Uncompressed build will be found in `./build`

## Start:
It's useful for dapp or web.
Install and log in the CocosPay,
CocosPay will inject a BcxWeb object into current document.
Note that you can use like this:

        if (window.BcxWeb && window.BcxWeb.BCX) { 
          bcx = window.BcxWeb.BCX
        }
