// 获取语言
const getI18nMessages = (i18n) => {
  if (i18n.locale === 'ZH') {
    return i18n['messages']['ZH']
  } else if (i18n.locale === 'EN') {
    return i18n['messages']['EN']
  } else if (i18n.locale === 'FR') {
    return i18n['messages']['FR']
  }
}

const defaultNode = "Main"
export default {
  getI18nMessages,
  defaultNode
}
