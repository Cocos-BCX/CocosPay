var background=webpackJsonp_name_([15],{"/KmK":function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0}),f.apis=void 0;var t=a("Zrlr"),c=function(e){return e&&e.__esModule?e:{default:e}}(t),n=function(e){try{e()}catch(e){}},r=function e(){var f=this;(0,c.default)(this,e),["app","storage","extension","runtime","windows"].map(function(e){"undefined"!=typeof chrome&&n(function(){chrome[e]&&(f[e]=chrome[e])}),"undefined"!=typeof browser&&n(function(){browser[e]&&(f[e]=browser[e])})}),"undefined"!=typeof browser&&n(function(){browser&&browser.runtime&&(f.runtime=browser.runtime)})};f.apis=new r},"/X41":function(e,f,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(f,"__esModule",{value:!0});var c=a("woOf"),n=t(c),r=a("Zrlr"),d=t(r),s=a("wxAW"),o=t(s),i=function(){function e(){var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(0,d.default)(this,e),this.type=f,this.payload=a}return(0,o.default)(e,[{key:"send",value:function(){var e=this;chrome.tabs.query({active:!0,currentWindow:!0},function(f){var a=new RegExp("^https?://");f[0]&&a.test(f[0].url)&&chrome.tabs.sendMessage(f[0].id,e,function(e){})})}}],[{key:"placeholder",value:function(){return new e}},{key:"fromJson",value:function(e){return(0,n.default)(this.placeholder(),e)}},{key:"widthPayload",value:function(f,a){return new e(f,a)}},{key:"signal",value:function(f){return new e(f)}}]),e}();f.default=i},0:function(e,f){},"05Ij":function(e,f){e.exports={secp128r1:{p:"fffffffdffffffffffffffffffffffff",a:"fffffffdfffffffffffffffffffffffc",b:"e87579c11079f43dd824993c2cee5ed3",n:"fffffffe0000000075a30d1b9038a115",h:"01",Gx:"161ff7528b899b2d0c28607ca52c5b86",Gy:"cf5ac8395bafeb13c02da292dded7a83"},secp160k1:{p:"fffffffffffffffffffffffffffffffeffffac73",a:"00",b:"07",n:"0100000000000000000001b8fa16dfab9aca16b6b3",h:"01",Gx:"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",Gy:"938cf935318fdced6bc28286531733c3f03c4fee"},secp160r1:{p:"ffffffffffffffffffffffffffffffff7fffffff",a:"ffffffffffffffffffffffffffffffff7ffffffc",b:"1c97befc54bd7a8b65acf89f81d4d4adc565fa45",n:"0100000000000000000001f4c8f927aed3ca752257",h:"01",Gx:"4a96b5688ef573284664698968c38bb913cbfc82",Gy:"23a628553168947d59dcc912042351377ac5fb32"},secp192k1:{p:"fffffffffffffffffffffffffffffffffffffffeffffee37",a:"00",b:"03",n:"fffffffffffffffffffffffe26f2fc170f69466a74defd8d",h:"01",Gx:"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",Gy:"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},secp192r1:{p:"fffffffffffffffffffffffffffffffeffffffffffffffff",a:"fffffffffffffffffffffffffffffffefffffffffffffffc",b:"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",n:"ffffffffffffffffffffffff99def836146bc9b1b4d22831",h:"01",Gx:"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",Gy:"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},secp256k1:{p:"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",a:"00",b:"07",n:"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",h:"01",Gx:"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",Gy:"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},secp256r1:{p:"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",a:"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",b:"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",n:"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",h:"01",Gx:"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",Gy:"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}},1:function(e,f){},"1QQ/":function(e,f){e.exports={_from:"bigi@^1.4.2",_id:"bigi@1.4.2",_inBundle:!1,_integrity:"sha1-nGZalfiLiwj8Bc/XMfVhhZ1yWCU=",_location:"/bigi",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"bigi@^1.4.2",name:"bigi",escapedName:"bigi",rawSpec:"^1.4.2",saveSpec:null,fetchSpec:"^1.4.2"},_requiredBy:["/","/bcx-api/bcxjs-cores","/bcxjs-cores","/ecurve"],_resolved:"https://registry.npmjs.org/bigi/-/bigi-1.4.2.tgz",_shasum:"9c665a95f88b8b08fc05cfd731f561859d725825",_spec:"bigi@^1.4.2",_where:"/Users/SYLApple/Desktop/CocosWallet/CocosPay",bugs:{url:"https://github.com/cryptocoinjs/bigi/issues"},bundleDependencies:!1,dependencies:{},deprecated:!1,description:"Big integers.",devDependencies:{coveralls:"^2.11.2",istanbul:"^0.3.5",jshint:"^2.5.1",mocha:"^2.1.0",mochify:"^2.1.0"},homepage:"https://github.com/cryptocoinjs/bigi#readme",keywords:["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],main:"./lib/index.js",name:"bigi",repository:{url:"git+https://github.com/cryptocoinjs/bigi.git",type:"git"},scripts:{"browser-test":"mochify --wd -R spec",coverage:"istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",coveralls:"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info",jshint:"jshint --config jshint.json lib/*.js ; true",test:"_mocha -- test/*.js",unit:"mocha"},testling:{files:"test/*.js",harness:"mocha",browsers:["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},version:"1.4.2"}},2:function(e,f){},3:function(e,f){},4:function(e,f){},"4Vh3":function(e,f){e.exports={modp1:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},modp2:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},modp5:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},modp14:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},modp15:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},modp16:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},modp17:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},modp18:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}},5:function(e,f){},"5qII":function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0});f.ADDRESS_CHANGED="address_changed",f.NETWORK_CHANGED="network_changed",f.LOCK_STAUS="lock_status"},"6ZSt":function(e,f){e.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}},"8YCc":function(e,f){e.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}},HSKQ:function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0});f.NO_SIGNATURE=402,f.FORBIDDEN=403,f.LOCKED=423,f.TIMED_OUT=408},"I//z":function(e,f,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(f,"__esModule",{value:!0});var c=a("Zrlr"),n=t(c),r=a("wxAW"),d=t(r),s=a("kmnK"),o=t(s),i=a("KCWd"),u=t(i),b=[],l=function(){function e(){(0,n.default)(this,e)}return(0,d.default)(e,null,[{key:"_ininBcxNodes",value:function(){}},{key:"GetDefaultNodes",value:function(){return b.length<1&&this._ininBcxNodes(),b[0]}},{key:"GetNewBCX",value:function(){var e=u.default.get("node");console.log("hhh",e),(!e||e.length<1)&&(e=[{chainId:"c1ac4bb7bd7d94874a1cb98b39a8a582421d03d022dfa4be8c70567076e03ad0",coreAsset:"COCOS",faucetUrl:"http://test-faucet.cocosbcx.net",name:"Cocos - China - Beijing",type:"0",ws:"ws://test.cocosbcx.net",choose:!0}]);var f=void 0,a=u.default.get("choose_node");e.map(function(t){f=a&&a.ws===t.ws?t:e[0]}),console.log("------",f);var t="";t=f.faucetUrl;var c=new o.default({default_ws_node:f.ws,ws_node_list:[{url:f.ws,name:f.name}],networks:[{core_asset:"COCOS",chain_id:f.chainId}],faucet_url:t,auto_reconnect:!1,worker:!1});return u.default.set("choose_node",f),c}}]),e}();f.default=l},KCWd:function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0});var t=a("mvHQ"),c=function(e){return e&&e.__esModule?e:{default:e}}(t);f.default={get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){}},set:function(e,f){try{localStorage.setItem(e,(0,c.default)(f))}catch(e){}},remove:function(e){try{localStorage.removeItem(e)}catch(e){}},clear:function(){try{localStorage.clear()}catch(e){}}}},KYqO:function(e,f){e.exports={_from:"elliptic@^6.4.1",_id:"elliptic@6.5.1",_inBundle:!1,_integrity:"sha512-xvJINNLbTeWQjrl6X+7eQCrIy/YPv5XCpKW6kB5mKvtnGILoLDcySuwomfdzt0BMdLNVnuRNTuzKNHj0bva1Cg==",_location:"/elliptic",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"elliptic@^6.4.1",name:"elliptic",escapedName:"elliptic",rawSpec:"^6.4.1",saveSpec:null,fetchSpec:"^6.4.1"},_requiredBy:["/","/browserify-sign","/create-ecdh"],_resolved:"https://registry.npmjs.org/elliptic/-/elliptic-6.5.1.tgz",_shasum:"c380f5f909bf1b9b4428d028cd18d3b0efd6b52b",_spec:"elliptic@^6.4.1",_where:"/Users/SYLApple/Desktop/CocosWallet/CocosPay",author:{name:"Fedor Indutny",email:"fedor@indutny.com"},bugs:{url:"https://github.com/indutny/elliptic/issues"},bundleDependencies:!1,dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},deprecated:!1,description:"EC cryptography",devDependencies:{brfs:"^1.4.3",coveralls:"^3.0.4",grunt:"^1.0.4","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^9.0.1",istanbul:"^0.4.2",jscs:"^3.0.7",jshint:"^2.6.0",mocha:"^6.1.4"},files:["lib"],homepage:"https://github.com/indutny/elliptic",keywords:["EC","Elliptic","curve","Cryptography"],license:"MIT",main:"lib/elliptic.js",name:"elliptic",repository:{type:"git",url:"git+ssh://git@github.com/indutny/elliptic.git"},scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",test:"npm run lint && npm run unit",unit:"istanbul test _mocha --reporter=spec test/index.js",version:"grunt dist && git add dist/"},version:"6.5.1"}},NdFW:function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0});f.SIGNATURE="signature",f.CALL_CONTRACT="call_contract",f.UNLOCK="unlock"},O3Mt:function(e,f,a){"use strict";function t(e){if(e&&e.__esModule)return e;var f={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(f[a]=e[a]);return f.default=e,f}function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(f,"__esModule",{value:!0});var n=a("Xxa5"),r=c(n),d=a("exGp"),s=c(d),o=a("Zrlr"),i=c(o),u=a("wxAW"),b=c(u),l=a("lHA8"),p=c(l),h=a("64X5"),m=a("eIxI"),g=c(m),v=a("efDr"),y=t(v),A=a("kmSK"),k=c(A),_=a("QdlT"),w=c(_),E=a("NdFW"),S=t(E),C=a("wYSw"),x=c(C),N=a("kEHT"),O=c(N),I=a("/X41"),T=c(I),D=a("5qII"),R=t(D),H=a("I//z"),L=c(H),M=new p.default,j=null,G=function(){function e(){(0,i.default)(this,e),this.Params(),this.watchInternalMessaging()}return(0,b.default)(e,[{key:"watchInternalMessaging",value:function(){var e=this;h.LocalStream.watch(function(f,a){var t=g.default.fromJson(f);e.dispenseMessage(a,t)})}},{key:"dispenseMessage",value:function(f,a){switch(a.type){case y.SIGNATURE:if(M.has(a.resolver))break;e.signature(f,a.payload),M.add(a.resolver);break;case y.SET_PROMPT:e.setPrompt(f,a);break;case y.GET_PROMPT:e.getPrompt(f);break;case y.GET_ADDRESS:e.getAddress(f);break;case y.SETCURRENTNETWORK:e.setCurrentNetwork(f,a);break;case y.CREATE_NH_ASSET_ORDER:e.creatNHAssetOrder(f,a.payload);break;case y.FILL_NH_ASSET_ORDER:e.fillNHAssetOrder(f,a.payload);break;case y.CANCEL_NH_ASSET_ORDER:e.cancelNHAssetOrder(f,a.payload);break;case y.CALL_CONTRACT:e.callContract(f,a.payload),M.add(a.resolver);break;case y.REGISTER_CREATOR:e.regsiterCreator(f,a.payload),M.add(a.resolver);break;case y.CREATE_WORLDVIEW:e.creatWorldView(f,a.payload),M.add(a.resolver);break;case y.TRANSFER_NH_ASSET:e.transferNHAsset(f,a.payload),M.add(a.resolver);break;case y.GET_ACCOUNT_INFO:e.getAccountInfo(f,a.payload),M.add(a.resolver);break;case y.CREATE_NH_ASSET:e.creatNHAsset(f,a.payload),M.add(a.resolver);break;case y.DELETE_NH_ASSET:e.deleteNHAsset(f,a.payload),M.add(a.resolver);break;case y.DELETE_NH_ASSET:e.publishVotes(f,a.payload),M.add(a.resolver)}}},{key:"Params",value:function(){}}],[{key:"getAccountInfo",value:function(e,f){var a=this;this.lockGuard(e,(0,s.default)(r.default.mark(function t(){var c;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.getBCX().getAccountInfo();case 3:return c=t.sent,c.locked&&a.openDialog(e,f),e(c),t.abrupt("return");case 9:t.prev=9,t.t0=t.catch(0),e(x.default.maliciousEvent());case 12:case"end":return t.stop()}},t,a,[[0,9]])})))}},{key:"callContract",value:function(e,f){var a=this;this.lockGuard(e,(0,s.default)(r.default.mark(function t(){var c,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c=a._getLocalData(),!(n=c.wallet.whiteList.some(function(e){return e.domain===f.domain&&e.address===c.cocosAccount.accounts}))){t.next=8;break}return t.next=6,a.getBCX().callContractFunction({nameOrId:f.payload.nameOrId,functionName:f.payload.functionName,valueList:f.payload.valueList}).then(function(f){1!==f.code&&Alert({message:CommonJs.getI18nMessages(I18n).error[f.code]}),e(f)});case 6:t.next=9;break;case 8:a.openDialog(e,f);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e(x.default.maliciousEvent());case 15:case"end":return t.stop()}},t,a,[[0,11]])})))}},{key:"signature",value:function(e,f){var a=this;this.lockGuard(e,(0,s.default)(r.default.mark(function t(){var c,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c=a._getLocalData(),!(n=c.wallet.whiteList.some(function(e){return e.domain===f.domain&&e.address===c.cocosAccount.accounts}))){t.next=8;break}return t.next=6,a.getBCX().transferAsset({fromAccount:f.payload.fromAccount,toAccount:f.payload.toAccount,amount:f.payload.amount,memo:f.payload.memo,assetId:f.payload.coin}).then(function(f){1!==f.code&&Alert({message:CommonJs.getI18nMessages(I18n).error[f.code]}),e(f)});case 6:t.next=9;break;case 8:a.openDialog(e,f);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e(x.default.maliciousEvent());case 14:case"end":return t.stop()}},t,a,[[0,11]])})))}},{key:"transferNHAsset",value:function(e,f){var a=this;this.lockGuard(e,(0,s.default)(r.default.mark(function t(){var c,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c=a._getLocalData(),!(n=c.wallet.whiteList.some(function(e){return e.domain===f.domain&&e.address===c.cocosAccount.accounts}))){t.next=8;break}return t.next=6,a.getBCX().transferNHAsset({toAccount:f.payload.toAccount,NHAssetIds:f.payload.NHAssetIds}).then(function(f){console.log(f),1!==f.code&&Alert({message:CommonJs.getI18nMessages(I18n).error[f.code]}),e(f)});case 6:t.next=9;break;case 8:a.openDialog(e,f);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e(x.default.maliciousEvent());case 15:case"end":return t.stop()}},t,a,[[0,11]])})))}},{key:"creatWorldView",value:function(e,f){var a=this;this.lockGuard(e,(0,s.default)(r.default.mark(function t(){var c,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c=a._getLocalData(),!(n=c.wallet.whiteList.some(function(e){return e.domain===f.domain&&e.address===c.cocosAccount.accounts}))){t.next=8;break}return t.next=6,a.getBCX().creatWorldView({worldView:f.payload.worldView}).then(function(f){1!==f.code&&Alert({message:CommonJs.getI18nMessages(I18n).error[f.code]}),e(f)});case 6:t.next=9;break;case 8:a.openDialog(e,f);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e(x.default.maliciousEvent());case 15:case"end":return t.stop()}},t,a,[[0,11]])})))}},{key:"creatNHAsset",value:function(e,f){var a=this;this.lockGuard(e,(0,s.default)(r.default.mark(function t(){var c,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c=a._getLocalData(),!(n=c.wallet.whiteList.some(function(e){return e.domain===f.domain&&e.address===c.cocosAccount.accounts}))){t.next=8;break}return t.next=6,a.getBCX().creatNHAsset({assetId:f.payload.assetId,worldView:f.payload.worldView,baseDescribe:f.payload.baseDescribe,ownerAccount:f.payload.ownerAccount,NHAssetsCount:f.payload.NHAssetsCount,type:f.payload.type,NHAssets:f.payload.nhAssets}).then(function(f){1!==f.code&&Alert({message:CommonJs.getI18nMessages(I18n).error[f.code]}),e(f)});case 6:t.next=9;break;case 8:a.openDialog(e,f);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e(x.default.maliciousEvent());case 15:case"end":return t.stop()}},t,a,[[0,11]])})))}},{key:"deleteNHAsset",value:function(e,f){var a=this;this.lockGuard(e,(0,s.default)(r.default.mark(function t(){var c,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c=a._getLocalData(),!(n=c.wallet.whiteList.some(function(e){return e.domain===f.domain&&e.address===c.cocosAccount.accounts}))){t.next=8;break}return t.next=6,a.getBCX().deleteNHAsset({NHAssetIds:f.payload.NHAssetIds}).then(function(f){1!==f.code&&Alert({message:CommonJs.getI18nMessages(I18n).error[f.code]}),e(f)});case 6:t.next=9;break;case 8:a.openDialog(e,f);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e(x.default.maliciousEvent());case 15:case"end":return t.stop()}},t,a,[[0,11]])})))}},{key:"publishVotes",value:function(e,f){var a=this;this.lockGuard(e,(0,s.default)(r.default.mark(function t(){var c,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c=a._getLocalData(),n=c.wallet.whiteList.some(function(e){return e.domain===f.domain&&e.address===c.cocosAccount.accounts}),console.log("----------"),!n){t.next=13;break}return console.log(f),console.log(f.payload.type),console.log(f.payload.vote_ids),console.log(f.payload.votes),t.next=11,a.getBCX().publishVotes({type:f.payload.type,vote_ids:f.payload.vote_ids,votes:f.payload.votes}).then(function(f){1!==f.code&&Alert({message:CommonJs.getI18nMessages(I18n).error[f.code]}),e(f)});case 11:t.next=14;break;case 13:a.openDialog(e,f);case 14:t.next=20;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0),e(x.default.maliciousEvent());case 20:case"end":return t.stop()}},t,a,[[0,16]])})))}},{key:"creatNHAssetOrder",value:function(e,f){var a=this;this.lockGuard(e,(0,s.default)(r.default.mark(function t(){var c,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c=a._getLocalData(),!(n=c.wallet.whiteList.some(function(e){return e.domain===f.domain&&e.address===c.cocosAccount.accounts}))){t.next=8;break}return t.next=6,a.getBCX().creatNHAssetOrder({otcAccount:f.payload.otcAccount,orderFee:f.payload.orderFee,NHAssetId:f.payload.NHAssetId,price:f.payload.price,priceAssetId:f.payload.priceAssetId,expiration:f.payload.expiration,memo:f.payload.memo}).then(function(f){1!==f.code&&Alert({message:CommonJs.getI18nMessages(I18n).error[f.code]}),e(f)});case 6:t.next=9;break;case 8:a.openDialog(e,f);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e(x.default.maliciousEvent());case 15:case"end":return t.stop()}},t,a,[[0,11]])})))}},{key:"regsiterCreator",value:function(e,f){var a=this;this.lockGuard(e,(0,s.default)(r.default.mark(function t(){var c,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c=a._getLocalData(),!(n=c.wallet.whiteList.some(function(e){return e.domain===f.domain&&e.address===c.cocosAccount.accounts}))){t.next=8;break}return t.next=6,a.getBCX().registerCreator().then(function(f){console.log("registerCreatorssss",f),1!==f.code&&Alert({message:CommonJs.getI18nMessages(I18n).error[f.code]}),e(f)});case 6:t.next=10;break;case 8:console.log("registerCreatorssss"),a.openDialog(e,f);case 10:t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),e(x.default.maliciousEvent());case 16:case"end":return t.stop()}},t,a,[[0,12]])})))}},{key:"fillNHAssetOrder",value:function(e,f){var a=this;this.lockGuard(e,(0,s.default)(r.default.mark(function t(){var c,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c=a._getLocalData(),!(n=c.wallet.whiteList.some(function(e){return e.domain===f.domain&&e.address===c.cocosAccount.accounts}))){t.next=8;break}return t.next=6,a.getBCX().fillNHAssetOrder({orderId:f.payload.orderId}).then(function(f){1!==f.code&&Alert({message:CommonJs.getI18nMessages(I18n).error[f.code]}),e(f)});case 6:t.next=9;break;case 8:a.openDialog(e,f);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e(x.default.maliciousEvent());case 15:case"end":return t.stop()}},t,a,[[0,11]])})))}},{key:"cancelNHAssetOrder",value:function(e,f){var a=this;this.lockGuard(e,(0,s.default)(r.default.mark(function t(){var c,n;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c=a._getLocalData(),!(n=c.wallet.whiteList.some(function(e){return e.domain===f.domain&&e.address===c.cocosAccount.accounts}))){t.next=8;break}return t.next=6,a.getBCX().cancelNHAssetOrder({orderId:f.payload.orderId}).then(function(f){1!==f.code&&Alert({message:CommonJs.getI18nMessages(I18n).error[f.code]}),e(f)});case 6:t.next=9;break;case 8:a.openDialog(e,f);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e(x.default.maliciousEvent());case 15:case"end":return t.stop()}},t,a,[[0,11]])})))}},{key:"openDialog",value:function(e,f){k.default.open(new w.default(S.SIGNATURE,f.domain,f,function(f){return chrome.runtime.lastError?(console.log("ERROR: ",chrome.runtime.lastError),!1):f&&f.hasOwnProperty("accepted")?f?(e(f.res),!0):void 0:(e(x.default.signatureError("signature_rejected","User rejected the signature request")),!1)}))}},{key:"lockGuard",value:function(e,f){f()}},{key:"setPrompt",value:function(e,f){j=f,e(!0)}},{key:"getPrompt",value:function(e){e(j)}},{key:"getAddress",value:function(e){if(this._getLocalData()&&this._getLocalData().cocosAccount&&this._getLocalData().cocosAccount.accounts){e(this._getLocalData().cocosAccount.accounts)}}},{key:"setCurrentNetwork",value:function(e,f){T.default.widthPayload(R.NETWORK_CHANGED,{network:f.payload.network}).send(),e(!0)}},{key:"_getLocalData",value:function(){return O.default.get("vuex")}},{key:"getBCX",value:function(){return L.default.GetNewBCX()}}]),e}();f.default=G,new G},QDfD:function(e,f){e.exports={"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}},QdlT:function(e,f,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(f,"__esModule",{value:!0});var c=a("woOf"),n=t(c),r=a("Zrlr"),d=t(r),s=a("wxAW"),o=t(s),i=a("NdFW"),u=function(e){if(e&&e.__esModule)return e;var f={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(f[a]=e[a]);return f.default=e,f}(i),b=function(){function e(){var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;(0,d.default)(this,e),this.type=f,this.domain=a,this.data=t,this.responder=c}return(0,o.default)(e,[{key:"routeName",value:function(){return"prompt_"+this.type}}],[{key:"placeholder",value:function(){return new e}},{key:"fromJson",value:function(e){return(0,n.default)(this.placeholder(),e)}},{key:"isLocked",value:function(){return new e(u.UNLOCK,"",{},function(){})}}]),e}();f.default=b},eIxI:function(e,f,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(f,"__esModule",{value:!0});var c=a("woOf"),n=t(c),r=a("Zrlr"),d=t(r),s=a("wxAW"),o=t(s),i=a("64X5"),u=function(){function e(){var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";(0,d.default)(this,e),this.type=f,this.payload=a,this.resolver=t}return(0,o.default)(e,[{key:"send",value:function(){return i.LocalStream.send(this)}}],[{key:"placeholder",value:function(){return new e}},{key:"fromJson",value:function(e){return(0,n.default)(this.placeholder(),e)}},{key:"widthPayload",value:function(f,a){return new e(f,a)}},{key:"widthPayloadAndResolver",value:function(f,a,t){return new e(f,a,t)}},{key:"signal",value:function(f){return new e(f)}}]),e}();f.default=u},efDr:function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0});f.SET_TIMEOUT="setTimeout",f.SET_SEED="setSeed",f.IS_UNLOCKED="isUnlocked",f.SIGNATURE="signature",f.INIT_COCOSWEB="initCOCOSWeb",f.SET_PROMPT="setPrompt",f.GET_PROMPT="getPrompt",f.GET_ADDRESS="getAddress",f.GET_NETWORK="getNetwork",f.SETCURRENTACCOUNT="setCurrentAccount",f.SETCURRENTNETWORK="setCurrentNetwork",f.ENCRYPTKEYSTORE="encryptKeystore",f.DECRYPTKEYSTORE="decryptKeystore",f.SIGNSENDTRANSACTION="signsendtransaction",f.CALL_CONTRACT="callContract",f.GET_ACCOUNT_INFO="getAccountInfo",f.TRANSFER_NH_ASSET="transferNHAsset",f.CREATE_NH_ASSET_ORDER="creatNHAssetOrder",f.FILL_NH_ASSET_ORDER="fillNHAssetOrder",f.CANCEL_NH_ASSET_ORDER="cancelNHAssetOrder",f.REGISTER_CREATOR="registerCreator",f.CREATE_WORLDVIEW="creatWorldView",f.CREATE_NH_ASSET="creatNHAsset",f.DELETE_NH_ASSET="deleteNHAsset",f.PUBLISH_VOTES="publishVotes"},ejIc:function(e,f){e.exports={sha224WithRSAEncryption:{sign:"rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},"RSA-SHA224":{sign:"ecdsa/rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},sha256WithRSAEncryption:{sign:"rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},"RSA-SHA256":{sign:"ecdsa/rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},sha384WithRSAEncryption:{sign:"rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},"RSA-SHA384":{sign:"ecdsa/rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},sha512WithRSAEncryption:{sign:"rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA512":{sign:"ecdsa/rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA1":{sign:"rsa",hash:"sha1",id:"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{sign:"ecdsa",hash:"sha1",id:""},sha256:{sign:"ecdsa",hash:"sha256",id:""},sha224:{sign:"ecdsa",hash:"sha224",id:""},sha384:{sign:"ecdsa",hash:"sha384",id:""},sha512:{sign:"ecdsa",hash:"sha512",id:""},"DSA-SHA":{sign:"dsa",hash:"sha1",id:""},"DSA-SHA1":{sign:"dsa",hash:"sha1",id:""},DSA:{sign:"dsa",hash:"sha1",id:""},"DSA-WITH-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-WITH-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-WITH-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-WITH-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-RIPEMD160":{sign:"dsa",hash:"rmd160",id:""},ripemd160WithRSA:{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},"RSA-RIPEMD160":{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},md5WithRSAEncryption:{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"},"RSA-MD5":{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"}}},kEHT:function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0});var t=a("mvHQ"),c=function(e){return e&&e.__esModule?e:{default:e}}(t);f.default={get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){}},set:function(e,f){try{localStorage.setItem(e,(0,c.default)(f))}catch(e){}},remove:function(e){try{localStorage.removeItem(e)}catch(e){}},clear:function(){try{localStorage.clear()}catch(e){}}}},kmSK:function(e,f,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(f,"__esModule",{value:!0});var c=a("//Fk"),n=t(c),r=a("Xxa5"),d=t(r),s=a("exGp"),o=t(s),i=a("Zrlr"),u=t(i),b=a("wxAW"),l=t(b),p=a("wYSw"),h=t(p),m=a("/KmK"),g=a("eIxI"),v=(t(g),a("efDr")),y=(function(e){if(e&&e.__esModule)return e;var f={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(f[a]=e[a]);f.default=e}(v),null),A=function(){function e(){(0,u.default)(this,e)}return(0,l.default)(e,null,[{key:"open",value:function(){function e(e){return f.apply(this,arguments)}var f=(0,o.default)(d.default.mark(function e(f){var a,t,c,r,s,i,u=this;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return y&&(y.close(),y=null),a=480,t=600,c=window.screen.availWidth/2-t/2,r=window.screen.availHeight/2-a/2,s=function(){var e=(0,o.default)(d.default.mark(function e(){var n,s,o;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=m.apis.runtime.getURL("/pages/prompt.html"),"undefined"==typeof browser){e.next=10;break}return e.next=5,m.apis.windows.create({url:n,height:a,width:t,type:"popup"});case 5:return s=e.sent,window.notification=f,e.abrupt("return",s);case 10:if(!o){e.next=12;break}return e.abrupt("return",null);case 12:return o=window.open(n,"COCOSPayPrompt","width="+t+",height="+a+",resizable=0,top="+r+",left="+c+",titlebar=0"),o.data=f,y=o,e.abrupt("return",o);case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(0),console.log("notification error",e.t0),e.abrupt("return",null);case 22:case"end":return e.stop()}},e,u,[[0,18]])}));return function(){return e.apply(this,arguments)}}(),e.next=8,new n.default(function(e){return setTimeout(e,600)});case 8:return e.next=10,s();case 10:i=e.sent,i.onbeforeunload=function(){f.responder(h.default.promptClosedWithoutAction()),y=null};case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"close",value:function(){function e(){return f.apply(this,arguments)}var f=(0,o.default)(d.default.mark(function e(){var f,a;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"==typeof browser){e.next=8;break}return e.next=3,m.apis.windows.getCurrent();case 3:f=e.sent,a=f.id,m.apis.windows.remove(a),e.next=10;break;case 8:window.onbeforeunload=function(){},window.close();case 10:case"end":return e.stop()}},e,this)}));return e}()}]),e}();f.default=A},pIku:function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0});f.LOCKED="locked",f.MALICIOUS="malicious",f.PROMPT_CLOSED="promptClosed"},wYSw:function(e,f,a){"use strict";function t(e){if(e&&e.__esModule)return e;var f={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(f[a]=e[a]);return f.default=e,f}function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(f,"__esModule",{value:!0});var n=a("Zrlr"),r=c(n),d=a("wxAW"),s=c(d),o=a("pIku"),i=t(o),u=a("HSKQ"),b=t(u),l=function(){function e(f,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b.LOCKED;(0,r.default)(this,e),this.type=f,this.message=a,this.code=t,this.isError=!0}return(0,s.default)(e,null,[{key:"locked",value:function(){return new e(i.LOCKED,"The user's CocosPay is locked. They have been notified and should unlock before continuing.")}},{key:"maliciousEvent",value:function(){return new e(i.MALICIOUS,"Malicious event discarded.",b.FORBIDDEN)}},{key:"promptClosedWithoutAction",value:function(){return new e(i.PROMPT_CLOSED,"The user closed the prompt without any action.",b.TIMED_OUT)}},{key:"signatureError",value:function(f,a){return new e(f,a,b.NO_SIGNATURE)}}]),e}();f.default=l}},["O3Mt"]);