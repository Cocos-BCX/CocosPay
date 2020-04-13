export default {
  // placeholder
  placeholder: {
    account: '输入账户',
    password: '输入密码',
    temporary: '输入临时密码',
    oldPassword: '输入旧密码',
    repassword: '确认密码',
    input: '请输入',
  },
  // button
  button: {
    create: '创建',
    agree: '同意',
    back: '返回',
    accountLogin: '账户登录',
    keysLogin: '私钥登录',
    createAccount: '创建账户',
    importAccount: '导入账户',
    editAccountName: '修改账号名称',
    lookAccount: '查看账户详情',
    removeAccount: '退出账号',
    deletedWallet: '退出钱包',
    exportPrivateKey: '导出账号私钥',
    recharge: '充值',
    transfer: '转账',
    resource: '资源',
    copy: '复制',
    sure: '确定',
    copyPrivate: '复制私钥',
    doneCopy: '我已备份，进入账户',
    sureCreateAccount: '确认创建',
    save: '保存',
    cancel: '取消',
    copyAddress: '复制收款地址',
    send: '发送',
    surePay: '确认支付',
    unlock: '解锁',
    reset: '重置',
    modifyPassword: '修改密码',
    agreement: '隐私政策',
    policy: '用户协议',
    close: '关闭',
    pledge: '冻结',
    redeem: '解冻',
    pledgeSure: '确认冻结',
    redeemSure: '确认解冻',
    importSure: '确认导入',
    confirm: '确认',
    reject: '拒绝',

    // active_key
    assetPrivateKey: '资产私钥',
    
    // owner_key
    accountPrivateKey: '账户私钥',
    collection: '收款',

    receiveImmediately: '立即领取'
  },
  // message
  message: {
    rememberPassword: '请牢记密码，忘记密码将无法找回',
    recommendNew: '推荐新用户使用',
    recommendOld: '推荐已有COCOS账户的用户使用',
    savePrivateKey: '请注意：请及时导出对应的私钥，并保存于安全的地方，不要将私钥泄露给任何人',
    privateKeyOnly: '私钥将是您找回账户的唯一方式',
    noMoreRecord: '无更多记录',
    noRecord: '无交易记录',
    noWhiteList: '无白名单',
    joinWhiteList: '添加白名单，此网站不再提示',
    warningPrivateKey: '安全警告：请勿向任何人泄露您的私钥',
    rechargeOnly: '此地址支持转入COCOS及其token',
    rechargeOnly1: '此地址支持COCOS链币种',
    verifyPassword: '需要先验证您的当前密码',
    lockSetting: '自动锁定设置',
    ownerError: '账户名不能是自己',
    lockTip: '当您停止操作时，可以通过设置离开时间来自动锁定COCOSPay',
    changeLanguage: '选择语言',
    resourceTip: 'COCOS网络中的转账、交易、执行合约等操作会消耗资源（带宽和CPU），资源可通过冻结COCOS来获得',
    pledgeTip: '通过冻结COCOS（波场投票权）和资源，冻结的COCOS将被冻结3天，不能被交易。冻结期结束后，已冻结的COCOS可被解冻并可用于交易。',
    newUsersPlease: '新用户请',
    forExistingCOCOSAccount: '已有COCOS账户请',
    switchingTheNetworkWillExitTheAccount: '切换网络将会退出账户',

    changeUnit: '选择货币'

  },
  // verify
  verify: {
    passwordNull: '密码不能为空',
    accountType: '5-63位小写字母开头+数字',
    passwordType: '8-12位数字、字母和特殊符号任两种',
    passwordLength: '密码长度不能少于8位',
    passwordSure: '请再次输入密码',
    passwordMatch: '两次输入密码不一致',
    accountNull: '请输入账号名',
    accountReg: '请输入正确的用户名',
    ownerAccountNull: '请选择付款账户',
    toAddressNull: '请选择付款账户',
    tokenNull: '请选择付款账户',
    number: '请输入数字',
    numberGtZero: '请输入大于0的数字',
    ownerKey: 'owner_key不能进行转账，请导入active_key',
    minimum: '小数点后最大位数为',
    walletPassword: '请输入最初的临时密码',
    noZero: '数量应该大于 0'
  },
  // title
  title: {
    agreement: '用户协议',
    createAccount: '创建账号',
    history: '交易记录',
    editorAccount: '修改账户名称',
    recharge: '充值',
    transfer: '转账',
    walletType: '钱包模式',
    accountType: '账户模式',
    sendDetail: '交易详情',
    welcome: '欢迎回来！',
    setting: '设置',
    policy: '隐私政策',
    resource: '资源',
    resourceTitle: '资源与投票权',
    pledgeTrx: '冻结COCOS',
    redeemTrx: '解冻COCOS',
    importAccount: '导入账号',
    removeAccount: '退出账号',
    signature: '签名请求',
    locked: '未登录或已锁定',
    test: '测试',
    coin: '币种',
    registerCreator: '注册开发者',
    creatWorldView: '创建世界观',
    creatNHAsset: 'NH资产创建',
    deleteNHAsset: 'NH资产删除',
    publishVotes: '投票/撤票',
    collection: '收款',
    switchingTheNetwork: '切换网络'
  },
  // alert
  alert: {
    tranferSuccess: '转账成功',
    copySuccess: '复制成功',
    copyFail: '复制失败',
    changeFail: '切换失败',
    exportSuccess: '导出成功',
    exportFail: '导出失败',
    passwordError: '密码错误',
    sendSuccess: '发送成功',
    sendFail: '发送出错',
    modifySuccess: '修改成功',
    modifyFailed: "修改失败",
    modifyPasswordSuccess: '密码修改成功',
    redeemSuccess: '解冻成功',
    redeemFail: '解冻失败，请稍后再试',
    pledgeSuccess: '冻结成功',
    pledgeFail: '冻结失败',
    existAccount: '此账号已存在',
    illegalPrivateKey: '私钥不合法',
    transferFail: '扣除手续费后可用余额不足',
    setSuccess: '设置成功',
    
    SuccessfulReceiving: '领取成功',
  },
  // confirm
  confirm: {
    removeAccount: '退出账号前请务必确保私钥已经导出或牢记密码，否则退出后该账户将不能恢复'
  },
  // label
  label: {
    send: '发送方',
    receive: '接收方',
    user: '授权人',
    hash: '交易ID',
    blockHeight: '区块高度',
    tradeTime: '交易时间：',
    orderTime: '挂单时间：',
    orderPrice: '挂单价格：',
    coin: '代币：',
    orderID: '订单ID：',
    ownerAccount: '付款账号',
    toAddress: '收款地址',
    tokenType: '选择Token',
    amount: '转账金额',
    mainNetwork: '主网络',
    testNetwork: '测试网络',
    customNet: '自定义网络',
    bandwidth: '带宽',
    vote: '投票权',
    donePledge: '已冻结COCOS',
    redeemTime: '可解冻时间',
    pledgeAmount: '冻结COCOS数量：',
    pledgeType: '选择想要获得的资源：',
    redeemAmount: '解冻COCOS数量：',
    cocosPrivate: '请在下方输入您的COCOS账户私钥',
    property: '属性',
    json: 'json数据',
    contract: '合约',
    operation: '操作',
    ptsite: '站点：',
    ptaddress: '转出：',
    ptamount: '数量：',
    ptcontract: '合约：',
    ptpayment: '支付：',
    pttype: '类型：',
    param: '参数',
    memo: '备注',
    charge: '手续费',
    nhTitle: 'NH资产转移',
    nhId: 'NH资产ID',
    worldView: '世界观名称:',
    id: '通行资产:',
    world: '世界观:',
    nhData: 'NH资产数据data:',
    nhUser: 'NH资产拥有者:',
    nhNum: 'NH资产数量:',
    type: 'Type:',
    nhAssets: '批量创建不同资:',
    itemlds: 'itemlds:',
    tpType: '类型:',
    tpId: '账号ID:',
    tpNum: '票数:',

    balance: '余额',
    routerBrowser: '到浏览器中查看详细信息'
  },
  // settings
  settings: {
    network: '网络',
    whiteList: '白名单',
    language: '语言',
    modifyPassword: '修改密码',
    lockSetting: '锁定设置',
    about: '关于COCOSPay',
    lock: '立即锁定',

    vote: '投票',
    monetaryUnit: '货币单位'
  },
  // unit
  unit: {
    minute: '分钟'
  },
  type: {
    bandWidth: '带宽（Bandwidth Point）',
    energy: 'CPU （Energy）'
  },
  other: {
    never: '永不'
  },
  networkName: {
    // MainNet: '主网络',
    // MainNet: '测试网络',
    TestNet: '测试网络',
    PrivateNet: '自定义网络'
  },
  error: {
    '-11': '请先登录',
    0: '操作失败',
    101: '参数缺失',
    1011: '参数错误',
    102: '网络繁忙，请检查你的网络连接',
    103: '请输入正确的账户名,小写字母开头,5位以上',
    104: '不存在',
    105: '密码错误',
    106: '账户已经处于解锁状态',
    107: '请先导入私钥',
    108: '密码错误',
    109: '请输入正确的私钥',
    110: '该私钥没有对应的账户信息',
    111: '请先登录',
    112: '必须拥有owner权限才可以进行密码修改,请确认你导入的是ownerPrivateKey',
    113: '请输入正确的原始密码/临时密码',
    114: '帐户被锁定或未登录',
    115: '区块链上不存在资产',
    116: '收款方账户不存在',
    117: '小数点不能超过当前资产精度配置',
    118: '备注加密失败',
    119: '交易过期',
    120: '获取帐户记录错误',
    121: '查询不到相关区块及交易信息',
    122: '参数blockOrTXID不正确',
    123: '参数account不能为空',
    124: '收款方账户名不能为空',
    125: '用户未拥有该资产',
    127: '没有可领取的奖励',
    129: 'memo不能为空',
    130: '请输入正确的合约名称,小写字母开头,6位以上',
    131: '世界观名称不能为空',
    133: 'toAccount不能为空',
    135: '请检查参数数据类型',
    136: 'orderId不能为空',
    137: 'NHAssetHashOrIds不能为空',
    138: '接入点地址不能为空',
    139: '节点地址必须以 ws:// 或 wss:// 开头',
    140: 'API服务器节点地址已经存在',
    141: '请检查参数NHAssets中的数据',
    142: '请检查参数NHAssets的数据类型',
    144: '您当前批量 创建/删除/转移 批量操作数量不能超过 NH资产数量',
    145: '合约不存在',
    146: '账户没有该合约相关的信息',
    147: '非同质资产不存在',
    148: '请求超时，请尝试解锁账户或登录账户',
    149: '此私钥已导入过钱包',
    150: '导入私钥失败',
    151: '您的浏览器不支持文件保存',
    152: '无效的备份下载转换',
    153: '请先解锁钱包',
    154: '请先恢复你的钱包',
    155: '浏览器不支持钱包文件恢复',
    156: '该钱包已经导入，请勿重复导入',
    157: '请求超时，请尝试解锁账户或登录账户',
    158: '导入的钱包核心资产错误',
    159: '账户已存在',
    160: '该私钥已经导入钱包',
    161: '订单不存在',
    162: '资产已存在',
    163: '钱包已经存在，请尝试导入私钥',
    164: '世界观不存在',
    165: '链上没有该钱包账户信息',
    166: '该钱包链id与当前链配置信息不匹配',
    167: '当前合约版本id没有找到',
    168: '当前没有订阅此项',
    169: 'API方法不存在',
    181: '请稍后再试',
    300: '链同步错误，请检查您的系统时钟',
    301: '连接RPC失败，请检查你的网络',


    302: '不能以数字开头',
    303: '请先注册开发者',
    304: '世界观已存在',
    305: '资源不足以支撑本次操作，请抵押GAS或预留COCOS',
    306: '账户不存在',
    307: '暂时没有可领取GAS',
    311: '至少12位必须含有数字、大小写字母、和特殊符号!@#$%^&*.-'
  },
  
  chainInterfaceError: {
    200: '请求成功',
    400001: '请参数非法',
    400002: '账户名不是便宜账户',
    400003: '账户名已存在',
    401001: '没有权限',
    401002: '今日你创建的账户已到达最大限制',
    401003: '今日账户创建已达最大限制',
    500: '内部服务错误',
  }
}
