import axios from 'axios'

// 汇率接口
export let ExchangeRate = function () {
  return new Promise(function (resolve, reject) {
    axios.get('https://api-cocosbcx.cocosbcx.net/backend/currencyRate')
    .then(function (response) {
      resolve(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  })
}

// cocos换算美元接口
export let ExchangeRate = function () {
  return new Promise(function (resolve, reject) {
    axios({
      methods: 'get',
      url: 'http://fxhapi.feixiaohao.com/public/v1/ticker',
      params: {
        code: 'cocosbcx'
      }
    })
    .then(function (response) {
      resolve(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  })
}