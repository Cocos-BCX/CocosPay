var content=webpackJsonp_name_([17],{0:function(e,f){},1:function(e,f){},"1hgp":function(e,f){e.exports={"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}},2:function(e,f){},3:function(e,f){},4:function(e,f){},5:function(e,f){},"5qII":function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0});f.ADDRESS_CHANGED="address_changed",f.NETWORK_CHANGED="network_changed",f.LOCK_STAUS="lock_status"},"7Jh7":function(e,f){e.exports={sha224WithRSAEncryption:{sign:"rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},"RSA-SHA224":{sign:"ecdsa/rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},sha256WithRSAEncryption:{sign:"rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},"RSA-SHA256":{sign:"ecdsa/rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},sha384WithRSAEncryption:{sign:"rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},"RSA-SHA384":{sign:"ecdsa/rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},sha512WithRSAEncryption:{sign:"rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA512":{sign:"ecdsa/rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA1":{sign:"rsa",hash:"sha1",id:"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{sign:"ecdsa",hash:"sha1",id:""},sha256:{sign:"ecdsa",hash:"sha256",id:""},sha224:{sign:"ecdsa",hash:"sha224",id:""},sha384:{sign:"ecdsa",hash:"sha384",id:""},sha512:{sign:"ecdsa",hash:"sha512",id:""},"DSA-SHA":{sign:"dsa",hash:"sha1",id:""},"DSA-SHA1":{sign:"dsa",hash:"sha1",id:""},DSA:{sign:"dsa",hash:"sha1",id:""},"DSA-WITH-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-WITH-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-WITH-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-WITH-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-RIPEMD160":{sign:"dsa",hash:"rmd160",id:""},ripemd160WithRSA:{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},"RSA-RIPEMD160":{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},md5WithRSAEncryption:{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"},"RSA-MD5":{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"}}},BfhH:function(e,f){e.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}},ETUZ:function(e,f,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(f,"__esModule",{value:!0});var c=a("kfHR"),n=t(c),d=a("AA3o"),r=t(d),s=a("xSur"),i=t(s),o=function(){function e(){(0,r.default)(this,e)}return(0,i.default)(e,null,[{key:"toHexString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?(0,n.default)(e,function(e){return("0"+(255&e).toString(16)).slice(-2)}).join(""):""}},{key:"charToByte",value:function(e){return e>="A"&&e<="F"?e.charCodeAt(0)-"A".charCodeAt(0)+10:e>="a"&&e<="f"?e.charCodeAt(0)-"a".charCodeAt(0)+10:e>="0"&&e<="9"?e.charCodeAt(0)-"0".charCodeAt(0):0}},{key:"fromHexString",value:function(e){for(var f=[],a=0,t=0,c=0,n=0;n<e.length;n++){var d=e.charAt(n);a<<=4,a+=this.charToByte(d),t++,t%2==0&&(f[c++]=a,a=0)}return f}}]),e}();f.default=o},"I//z":function(e,f,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(f,"__esModule",{value:!0});var c=a("AA3o"),n=t(c),d=a("xSur"),r=t(d),s=a("XPaO"),i=t(s),o=a("KCWd"),b=t(o),u=[],l=function(){function e(){(0,n.default)(this,e)}return(0,r.default)(e,null,[{key:"_ininBcxNodes",value:function(){}},{key:"GetDefaultNodes",value:function(){return u.length<1&&this._ininBcxNodes(),u[0]}},{key:"GetNewBCX",value:function(){var e=b.default.get("node");b.default.get("choose_node");(!e||e.length<1)&&(e=[{chainId:"6057d856c398875cac2650fe33caef3d5f6b403d184c5154abbff526ec1143c4",coreAsset:"COCOS",faucetUrl:"https://faucet.cocosbcx.net",name:"Main",type:"1",ws:"wss://api.cocosbcx.net",choose:!0}]);var f=void 0,a=b.default.get("choose_node");f=a||e[0];var t="";t=f.faucetUrl;var c=new i.default({default_ws_node:f.ws,ws_node_list:[{url:f.ws,name:f.name}],networks:[{core_asset:"COCOS",chain_id:f.chainId}],faucet_url:t,auto_reconnect:!0,worker:!1});return b.default.set("choose_node",f),c}}]),e}();f.default=l},KCWd:function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0});var t=a("3cXf"),c=function(e){return e&&e.__esModule?e:{default:e}}(t);f.default={get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){}},set:function(e,f){try{localStorage.setItem(e,(0,c.default)(f))}catch(e){}},remove:function(e){try{localStorage.removeItem(e)}catch(e){}},clear:function(){try{localStorage.clear()}catch(e){}}}},UgYt:function(e,f){e.exports={modp1:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},modp2:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},modp5:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},modp14:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},modp15:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},modp16:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},modp17:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},modp18:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}},Uy9U:function(e,f,a){"use strict";function t(e){if(e&&e.__esModule)return e;var f={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(f[a]=e[a]);return f.default=e,f}function c(e){return e&&e.__esModule?e:{default:e}}function n(e){return new m.default(function(f,a){f($(P.GET_ACCOUNT_INFO,e))})}function d(e){return new m.default(function(f,a){f($(P.SIGNATURE,e))})}function r(e){return new m.default(function(f,a){f($(P.CREATE_NH_ASSET_ORDER,e))})}function s(e){return new m.default(function(f,a){f($(P.CALL_CONTRACT,e))})}function i(e){return new m.default(function(f,a){f($(P.FILL_NH_ASSET_ORDER,e))})}function o(e){return new m.default(function(f,a){f($(P.CANCEL_NH_ASSET_ORDER,e))})}function b(e){return new m.default(function(f,a){f($(P.TRANSFER_NH_ASSET,e))})}function u(e){return new m.default(function(f,a){f($(P.REGISTER_CREATOR,e))})}function l(e){return new m.default(function(f,a){f($(P.SIGN_STRING,e))})}function h(e){return new m.default(function(f,a){f($(P.CREATE_WORLDVIEW,e))})}function p(e){return new m.default(function(f,a){f($(P.CREATE_NH_ASSET,e))})}function y(e){return new m.default(function(f,a){f($(P.DELETE_NH_ASSET,e))})}function v(e){return new m.default(function(f,a){f($(P.PUBLISH_VOTES,e))})}function A(){return new m.default(function(e,f){e(U.default)})}Object.defineProperty(f,"__esModule",{value:!0});var S=a("IHPB"),g=c(S),_=a("rVsN"),m=c(_),E=a("lC5x"),C=c(E),T=a("J0Oq"),k=c(T),N=a("xSur"),O=c(N),H=a("vBS/"),R=c(H),w=a("AA3o"),x=c(w),I=a("mT4i"),D=a("Z/Kl"),B=c(D),j=a("wAu4"),P=t(j),M=a("n95b"),G=c(M),F=a("VKKP"),X=c(F),L=a("5qII"),W=t(L),K=a("I//z"),U=c(K),V=a("kEHT"),Y=(c(V),function e(f,a,t){(0,x.default)(this,e),this.id=f,this.resolve=a,this.reject=t}),J=new R.default,z=[],Z=[],q=function(){function e(){(0,x.default)(this,e),this.account_name="",this.BCX=!1}return(0,O.default)(e,null,[{key:"setBCX",value:function(e){this.BCX=e}},{key:"setTransferAsset",value:function(e){this.BCX.transferAsset=e}},{key:"setCallContractFunction",value:function(e){this.BCX.callContractFunction=e}},{key:"setCreatNHAssetOrder",value:function(e){this.BCX.creatNHAssetOrder=e}},{key:"setFillNHAssetOrder",value:function(e){this.BCX.fillNHAssetOrder=e}},{key:"setCancelNHAssetOrder",value:function(e){this.BCX.cancelNHAssetOrder=e}},{key:"setTransferNHAsset",value:function(e){this.BCX.transferNHAsset=e}},{key:"setRegisterCreator",value:function(e){this.BCX.registerCreator=e}},{key:"setSignString",value:function(e){this.BCX.signString=e}},{key:"setCreatWorldView",value:function(e){this.BCX.creatWorldView=e}},{key:"setCreatNHAsset",value:function(e){this.BCX.creatNHAsset=e}},{key:"setDeleteNHAsset",value:function(e){this.BCX.deleteNHAsset=e}},{key:"setpublishVotes",value:function(e){this.BCX.publishVotes=e}},{key:"setGetAccountInfo",value:function(e){this.BCX.getAccountInfo=e}},{key:"setgetExtensionNode",value:function(e){this.BCX.getExtensionNode=e}},{key:"setAddress",value:function(e){this.account_name=e}},{key:"callContractFunction",value:function(e){e.payload.domain=G.default.strippedHost(),$(P.CALL_CONTRACT,e)}},{key:"creatNHAssetOrder",value:function(e){e.payload.domain=G.default.strippedHost(),$(P.CREATE_NH_ASSET_ORDER,e)}},{key:"getAccountInfo",value:function(e){$(P.GET_ACCOUNT_INFO,e)}},{key:"tranferCount",value:function(e){e.payload.domain=G.default.strippedHost(),$(P.SIGNATURE,e)}},{key:"fillNHAssetOrder",value:function(e){e.payload.domain=G.default.strippedHost(),$(P.FILL_NH_ASSET_ORDER,e)}},{key:"cancelNHAssetOrder",value:function(e){e.payload.domain=G.default.strippedHost(),$(P.CANCEL_NH_ASSET_ORDER,e)}},{key:"transferNHAsset",value:function(e){e.payload.domain=G.default.strippedHost(),$(P.TRANSFER_NH_ASSET,e)}}]),e}(),Q=function(){J.listenWith(function(){var e=(0,k.default)(C.default.mark(function e(f){var a;return C.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(f&&f.hasOwnProperty("type")){e.next=2;break}return e.abrupt("return",!1);case 2:for(a=0;a<z.length;a++)z[a].id===f.resolver&&(z[a].resolve(f.payload),z=z.slice(a,1));case 3:case"end":return e.stop()}},e,void 0)}));return function(f){return e.apply(this,arguments)}}())},$=function(e,f){return new m.default(function(a,t){var c=B.default.numeric(24),n=new X.default(e,f,c);localStorage.setItem("sing",!0),z.push(new Y(c,a,t)),J.send(n,P.CONTENT)})},ee=U.default.GetNewBCX(),fe=function(){function e(){var f=this;(0,x.default)(this,e),J=new I.EncryptedStream(P.INJECTED,B.default.text(64)),J.listenWith(function(e){f.contentListener(e)}),J.sync(P.CONTENT,J.key),Q(),J.onSync((0,k.default)(C.default.mark(function e(){return C.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:document.dispatchEvent(new CustomEvent("cocosLoaded"));case 1:case"end":return e.stop()}},e,f)})))}return(0,O.default)(e,[{key:"contentListener",value:function(e){if(e){e.domain=G.default.strippedHost();var f=X.default.fromJson(e);switch(e.type){case P.INIT_COCOSWEB:this.initCOCOSWeb(f);break;case P.SET_NODE:this.setNode(f);break;case P.SET_ADDRESS:this.setAddress(f);break;case W.LOCK_STAUS:this.setlockStatus(f);break;case W.ADDRESS_CHANGED:this.setAddress(f);break;case W.NETWORK_CHANGED:this.setNetWork(f)}}}},{key:"initCOCOSWeb",value:function(e){var f=e.payload;q.setBCX(ee),q.setAddress(f.account_name),q.setTransferAsset(d),q.setCallContractFunction(s),q.setGetAccountInfo(n),q.setCreatNHAssetOrder(r),q.setFillNHAssetOrder(i),q.setCancelNHAssetOrder(o),q.setTransferNHAsset(b),q.setRegisterCreator(u),q.setSignString(l),q.setCreatWorldView(h),q.setCreatNHAsset(p),q.setDeleteNHAsset(y),q.setpublishVotes(v),q.setgetExtensionNode(A),q.BCX.account_name=f.account_name,window.BcxWeb=q.BCX,Z.forEach(function(e,f){var a=e.resolve,t=e.reject,c=e.args;e.func.apply(void 0,(0,g.default)(c)).then(a).catch(t).then(function(){return console.log("Event request #"+(f+1)+" completed")})})}},{key:"setNode",value:function(e){e.payload}},{key:"setAddress",value:function(e){var f=e.payload;q.setAddress(f.address)}},{key:"setNetWork",value:function(e){e.payload}},{key:"setlockStatus",value:function(e){e.payload.unlocked?console.info("CocosPay is unlocked"):console.info("CocosPay is locked")}}]),e}();f.default=fe,new fe},V0mS:function(e,f){e.exports={secp128r1:{p:"fffffffdffffffffffffffffffffffff",a:"fffffffdfffffffffffffffffffffffc",b:"e87579c11079f43dd824993c2cee5ed3",n:"fffffffe0000000075a30d1b9038a115",h:"01",Gx:"161ff7528b899b2d0c28607ca52c5b86",Gy:"cf5ac8395bafeb13c02da292dded7a83"},secp160k1:{p:"fffffffffffffffffffffffffffffffeffffac73",a:"00",b:"07",n:"0100000000000000000001b8fa16dfab9aca16b6b3",h:"01",Gx:"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",Gy:"938cf935318fdced6bc28286531733c3f03c4fee"},secp160r1:{p:"ffffffffffffffffffffffffffffffff7fffffff",a:"ffffffffffffffffffffffffffffffff7ffffffc",b:"1c97befc54bd7a8b65acf89f81d4d4adc565fa45",n:"0100000000000000000001f4c8f927aed3ca752257",h:"01",Gx:"4a96b5688ef573284664698968c38bb913cbfc82",Gy:"23a628553168947d59dcc912042351377ac5fb32"},secp192k1:{p:"fffffffffffffffffffffffffffffffffffffffeffffee37",a:"00",b:"03",n:"fffffffffffffffffffffffe26f2fc170f69466a74defd8d",h:"01",Gx:"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",Gy:"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},secp192r1:{p:"fffffffffffffffffffffffffffffffeffffffffffffffff",a:"fffffffffffffffffffffffffffffffefffffffffffffffc",b:"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",n:"ffffffffffffffffffffffff99def836146bc9b1b4d22831",h:"01",Gx:"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",Gy:"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},secp256k1:{p:"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",a:"00",b:"07",n:"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",h:"01",Gx:"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",Gy:"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},secp256r1:{p:"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",a:"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",b:"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",n:"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",h:"01",Gx:"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",Gy:"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}},VKKP:function(e,f,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(f,"__esModule",{value:!0});var c=a("aA9S"),n=t(c),d=a("AA3o"),r=t(d),s=a("xSur"),i=t(s),o=a("wAu4"),b=function(e){if(e&&e.__esModule)return e;var f={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(f[a]=e[a]);return f.default=e,f}(o),u=function(){function e(){var f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";(0,r.default)(this,e),this.type=f,this.payload=a,this.resolver=t}return(0,i.default)(e,[{key:"respond",value:function(f){return new e(this.type,f,this.resolver)}},{key:"error",value:function(f){return new e(b.ERROR,f,this.resolver)}}],[{key:"placeholder",value:function(){return new e}},{key:"fromJson",value:function(e){return(0,n.default)(this.placeholder(),e)}},{key:"widthPayload",value:function(f,a){return new e(f,a)}},{key:"signal",value:function(f){return new e(f)}}]),e}();f.default=u},XLFa:function(e,f){e.exports={name:"bigi",version:"1.4.2",description:"Big integers.",keywords:["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],devDependencies:{coveralls:"^2.11.2",istanbul:"^0.3.5",jshint:"^2.5.1",mocha:"^2.1.0",mochify:"^2.1.0"},repository:{url:"https://github.com/cryptocoinjs/bigi",type:"git"},main:"./lib/index.js",scripts:{"browser-test":"./node_modules/.bin/mochify --wd -R spec",test:"./node_modules/.bin/_mocha -- test/*.js",jshint:"./node_modules/.bin/jshint --config jshint.json lib/*.js ; true",unit:"./node_modules/.bin/mocha",coverage:"./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",coveralls:"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"},dependencies:{},testling:{files:"test/*.js",harness:"mocha",browsers:["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},__npminstall_done:"Mon Mar 09 2020 13:57:07 GMT+0800 (GMT+08:00)",_from:"bigi@1.4.2",_resolved:"https://registry.npm.taobao.org/bigi/download/bigi-1.4.2.tgz"}},"Z/Kl":function(e,f,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(f,"__esModule",{value:!0});var c=a("AA3o"),n=t(c),d=a("xSur"),r=t(d),s=function(){function e(){(0,n.default)(this,e)}return(0,r.default)(e,null,[{key:"rand",value:function(){var e=new Uint32Array(1);return window.crypto.getRandomValues(e),e[0]/4294967296}},{key:"text",value:function(f){for(var a="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<f;c++)a+=t.charAt(Math.floor(e.rand()*t.length));return a}},{key:"numeric",value:function(f){var a=11;if(f>a)return e.numeric(a)+e.numeric(f-a);a=Math.pow(10,f+1);var t=a/10;return(""+(Math.floor(e.rand()*(a-t+1))+t)).substring(1)}}]),e}();f.default=s},aTyY:function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0});f.ENCRYPTION_ALGORITHM="aes-256-ctr",f.ONE_TRX=1e6,f.COCOS_CONSTANTS_MAINNET={ADD_PRE_FIX_BYTE:65,ADD_PRE_FIX_STRING:"41"},f.COCOS_CONSTANTS_TESTNET={ADD_PRE_FIX_BYTE:160,ADD_PRE_FIX_STRING:"a0"},f.HISTORY_REQUEST_LIMIT=999999,f.HISTORY_SHOW_LIMIT=999999},gCvn:function(e,f){e.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}},kEHT:function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0});var t=a("3cXf"),c=function(e){return e&&e.__esModule?e:{default:e}}(t);f.default={get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){}},set:function(e,f){try{localStorage.setItem(e,(0,c.default)(f))}catch(e){}},remove:function(e){try{localStorage.removeItem(e)}catch(e){}},clear:function(){try{localStorage.clear()}catch(e){}}}},ksEd:function(e,f){e.exports={name:"elliptic",version:"6.5.2",description:"EC cryptography",main:"lib/elliptic.js",files:["lib"],scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",unit:"istanbul test _mocha --reporter=spec test/index.js",test:"npm run lint && npm run unit",version:"grunt dist && git add dist/"},repository:{type:"git",url:"git@github.com:indutny/elliptic"},keywords:["EC","Elliptic","curve","Cryptography"],author:"Fedor Indutny <fedor@indutny.com>",license:"MIT",bugs:{url:"https://github.com/indutny/elliptic/issues"},homepage:"https://github.com/indutny/elliptic",devDependencies:{brfs:"^1.4.3",coveralls:"^3.0.8",grunt:"^1.0.4","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^9.0.1",istanbul:"^0.4.2",jscs:"^3.0.7",jshint:"^2.10.3",mocha:"^6.2.2"},dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},__npminstall_done:"Mon Mar 09 2020 13:57:07 GMT+0800 (GMT+08:00)",_from:"elliptic@6.5.2",_resolved:"https://registry.npm.taobao.org/elliptic/download/elliptic-6.5.2.tgz"}},n95b:function(e,f,a){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(f,"__esModule",{value:!0});var c=a("rVsN"),n=t(c),d=a("4Xi4"),r=t(d),s=a("AA3o"),i=t(s),o=a("xSur"),b=t(o),u=a("t/Mm"),l=t(u),h=a("ZpE2"),p=t(h),y=a("ETUZ"),v=t(y),A=a("decf"),S=a("U64u"),g=a("aTyY"),_="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",m=function(){function f(){(0,i.default)(this,f)}return(0,b.default)(f,null,[{key:"sha256",value:function(e){var f=new l.default("SHA-256","HEX");return f.update(e),f.getHash("HEX")}},{key:"hashPassword",value:function(e){return this.sha256(this.stringToHex(e+"!~%$#^&*"))}},{key:"validateAddress",value:function(e){if(34!==e.length)return!1;var f=this.base58ToHex(e).substr(0,2);return f===g.COCOS_CONSTANTS_MAINNET.ADD_PRE_FIX_STRING||f===g.COCOS_CONSTANTS_TESTNET.ADD_PRE_FIX_STRING}},{key:"privateKeyToPublicKey",value:function(e){for(var f=new A.ec("secp256k1"),a=f.keyFromPrivate(e,"bytes"),t=a.getPublic(),c=t.x,n=t.y,d=c.toString("hex"),r=n.toString("hex");d.length<64;)d="0"+d;for(;r.length<64;)r="0"+r;var s="04"+d+r;return v.default.fromHexString(s)}},{key:"privateKeyToAddress",value:function(e){var f=v.default.fromHexString(e),a=this.privateKeyToPublicKey(f),t=this.publicKeyToAddress(a);return this.hexToBase58(v.default.toHexString(t))}},{key:"publicKeyToAddress",value:function(e){var f=65===e.length?e.slice(1):e,a=(0,S.keccak256)(f).toString(),t=g.COCOS_CONSTANTS_MAINNET.ADD_PRE_FIX_STRING+a.substring(24);return v.default.fromHexString(t)}},{key:"validatePrivateKey",value:function(e){try{var f=this.privateKeyToAddress(e);return this.validateAddress(f)}catch(e){return!1}}},{key:"isFunction",value:function(e){return"function"==typeof e}},{key:"isHex",value:function(e){return"string"==typeof e&&!isNaN(parseInt(e,16))}},{key:"isInteger",value:function(e){return(0,r.default)(Number(e))}},{key:"isString",value:function(e){return"[object String]"===Object.prototype.toString.call(e)}},{key:"stringToHex",value:function(f){return e.from(f).toString("hex")}},{key:"hexToString",value:function(f){return e.from(f,"hex").toString()}},{key:"encrypt",value:function(e,f){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.ENCRYPTION_ALGORITHM,t=p.default.createCipher(a,f),c=t.update(e,"utf8","hex");return c+=t.final("hex")}},{key:"decrypt",value:function(e,f){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.ENCRYPTION_ALGORITHM,t=p.default.createDecipher(a,f),c=t.update(e,"hex","utf8");return c+=t.final("utf8")}},{key:"injectPromise",value:function(e){for(var f=arguments.length,a=Array(f>1?f-1:0),t=1;t<f;t++)a[t-1]=arguments[t];return new n.default(function(f,t){e.apply(void 0,a.concat([function(e,a){e?t(e):f(a)}]))})}},{key:"strippedHost",value:function(){var e=window.location.hostname;return 0===e.indexOf("www.")&&(e=e.replace("www.","")),e}},{key:"getLanguage",value:function(){var e="";return e="Netscape"===window.navigator.appName?window.navigator.language:window.navigator.browserLanguage,e=e.indexOf("zh")>-1?"zh":(e.indexOf("en"),"en")}},{key:"toUtf8",value:function(f){return f=f.replace(/^0x/,""),e.from(f,"hex").toString("utf8")}},{key:"getTokenAmount",value:function(e){return e/g.ONE_TRX}},{key:"getTokenRawAmount",value:function(e){return e*g.ONE_TRX}},{key:"byte2hexStr",value:function(e){var f="0123456789ABCDEF",a="";return a+=f.charAt(e>>4),a+=f.charAt(15&e)}},{key:"byteArray2hexStr",value:function(e){var f=this;return e.reduce(function(e,a){return e+f.byte2hexStr(a)},"")}},{key:"hexToBase58",value:function(e){for(var f=this.sha256(e),a=this.sha256(f),t=v.default.fromHexString(e+a.slice(0,8)),c=[0],n=0;n<t.length;n++){for(var d=0;d<c.length;d++)c[d]<<=8;c[0]+=t[n];for(var r=0,s=0;s<c.length;++s)c[s]+=r,r=c[s]/58|0,c[s]%=58;for(;r;)c.push(r%58),r=r/58|0}for(var i=0;0===t[i]&&i<t.length-1;i++)c.push(0);return c.reverse().map(function(e){return _[e]}).join("")}},{key:"base58ToHex",value:function(e){for(var f=[0],a=0;a<e.length;a++){var t=e[a];if(!_.includes(t))throw new Error("Non-base58 character");for(var c=0;c<f.length;c++)f[c]*=58;f[0]+=_.indexOf(t);for(var n=0,d=0;d<f.length;++d)f[d]+=n,n=f[d]>>8,f[d]&=255;for(;n;)f.push(255&n),n>>=8}for(var r=0;"1"===e[r]&&r<e.length-1;r++)f.push(0);return f.reverse().slice(0,21).map(function(e){var f=e.toString(16);return 1===f.length&&(f="0"+f),f}).join("")}},{key:"base64ToHex",value:function(e){for(var f=atob(e.replace(/[ \r\n]+$/,"")),a=[],t=0;t<f.length;t++){var c=f.charCodeAt(t).toString(16);1===c.length&&(c="0"+c),a.push(c)}return a.join("")}},{key:"transformAddress",value:function(e){if(!this.isString(e))return!1;switch(e.length){case 42:return this.transformAddress(this.hexToBase58(e));case 28:var f=this.base64ToHex(e),a=this.hexToBase58(f);return this.transformAddress(a);case 34:return!!this.validateAddress(e)&&e}}},{key:"genPriKey",value:function(){for(var e=new A.ec("secp256k1"),f=e.genKeyPair(),a=f.getPrivate(),t=a.toString("hex");t.length<64;)t="0"+t;return v.default.fromHexString(t)}},{key:"generateAccount",value:function(){var e=this.genPriKey(),f=v.default.toHexString(e);return{privateKey:f,address:this.privateKeyToAddress(f)}}},{key:"browser",value:function(){var e=navigator.userAgent;navigator.appVersion;return{versions:{trident:e.indexOf("Trident")>-1,presto:e.indexOf("Presto")>-1,webKit:e.indexOf("AppleWebKit")>-1,gecko:e.indexOf("Gecko")>-1&&-1==e.indexOf("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,webApp:-1==e.indexOf("Safari")},language:(navigator.browserLanguage||navigator.language).toLowerCase()}}}]),f}();f.default=m}).call(f,a("NfRg").Buffer)},wAu4:function(e,f,a){"use strict";Object.defineProperty(f,"__esModule",{value:!0});f.ERROR="error",f.SIGNATURE="signature",f.SET_NODE="setNode",f.SET_ADDRESS="setAddress",f.INIT_COCOSWEB="initCOCOSWeb",f.CALL_CONTRACT="callContract",f.GET_ACCOUNT_INFO="getAccountInfo",f.INJECTED="COCOSPAY_INJECTED",f.CONTENT="COCOS_CONTENT",f.TRANSFER_NH_ASSET="transferNHAsset",f.CREATE_NH_ASSET_ORDER="creatNHAssetOrder",f.FILL_NH_ASSET_ORDER="fillNHAssetOrder",f.CANCEL_NH_ASSET_ORDER="cancelNHAssetOrder",f.REGISTER_CREATOR="registerCreator",f.CREATE_WORLDVIEW="creatWorldView",f.CREATE_NH_ASSET="creatNHAsset",f.DELETE_NH_ASSET="deleteNHAsset",f.PUBLISH_VOTES="publishVotes",f.SIGN_STRING="signString"}},["Uy9U"]);