## CocosPay:

CocosPay is a Browser Extension for Cocos-BCX.

## Preparation:

Node.js version 8.9.3 or higher.

## Build:

Install local dependencies by using 

npm install

npm install bcxjs-api@v1.3.12 --registry=http://39.105.4.131:8080/ -S. 

Build with development 
npm run dev 

Build for Publishing 
npm run build

Uncompressed build will be found in `./build`

## Start:

It's useful for dapp or web.
Install and log in the CocosPay,
CocosPay will inject a BcxWeb object into current document.
Note that you can use like this:

        if (window.BcxWeb && window.BcxWeb) {
          bcx = window.BcxWeb
        }

## Example

How to use for dapp?  
Here is a dapp sample. [cocos-dice](https://github.com/Cocos-BCX/cocos-dice)
