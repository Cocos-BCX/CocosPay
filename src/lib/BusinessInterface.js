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
      url: 'http://fxhapi.feixiaohao.com/public/v1/ticker',
      params: {
        code: currency || 'cocosbcx'
      }
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