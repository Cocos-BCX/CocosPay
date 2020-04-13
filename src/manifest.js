module.exports = {
  name: 'CocosPay',
  version: '1.2.8',
  description: 'CocosPay Chrome Extension',
  author: 'chain@cocosbcx.io',
  manifest_version: 2,
  icons: {
    '16': 'icons/16px.png',
    '48': 'icons/48px.png',
    '128': 'icons/128px.png'
  },
  // permissions: ['activeTab', 'tabs', 'unlimitedStorage', 'storage'],
  browser_action: {
    default_title: 'CocosPay',
    default_popup: 'pages/popup.html'
  },
  background: {
    persistent: true,
    page: 'pages/background.html'
  },
  content_scripts: [{
    js: ['js/cocospay.js', 'js/inject.js'],
    run_at: 'document_start',
    matches: ['<all_urls>'],
    all_frames: true
  }],
  content_security_policy: "script-src 'self'; object-src 'self'",
  web_accessible_resources: ['js/cocospay.js', 'js/content.js']
  //"externally_connectable": {
  //  "matches": ["*://127.0.0.1:9000/*"]
  //}
}
