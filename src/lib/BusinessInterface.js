import axios from 'axios'

// 汇率接口
export let ExchangeRate = function () {
  return new Promise(function (resolve, reject) {
    axios.get('https://api-cocosbcx.cocosbcx.net/backend/currencyRate')
    .then(function (response) {
      resolve(response)
    })
    .catch(function (error) {
      console.log("ExchangeRate error");
      console.log(error);
    });
  })
}

// cocos换算美元接口
export let COCOSconversion = function (currency) {
  return new Promise(function (resolve, reject) {
    axios({
      methods: 'get',
      url: 'https://api-cocosbcx.cocosbcx.net/backend/fxhTicker?code=cocosbcx',
      // params: {
      //   code: currency || 'cocosbcx'
      // }
      // params: {
      //   code: 'cocosbcx'
      // }
    })
    .then(function (response) {
      resolve(response)
    })
    .catch(function (error) {
      console.log("COCOSconversion error");
      console.log(error);
    });
  })
}