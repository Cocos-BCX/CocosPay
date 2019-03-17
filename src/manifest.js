module.exports = {
  name: 'COCOSPay',
  version: '1.0.0',
  description: 'COCOSPay Chrome Extension',
  author: 'info@dappp.com',
  manifest_version: 2,
  icons: {
    '16': 'icons/16px.png',
    '48': 'icons/48px.png',
    '128': 'icons/128px.png'
  },
  permissions: [
    'activeTab',
    'tabs',
    'unlimitedStorage',
    'storage'
  ],
  browser_action: {
    default_title: 'COCOSPay',
    default_popup: 'pages/popup.html'
  },
  background: {
    persistent: true,
    page: 'pages/background.html'
  },
  content_scripts: [{
    js: [
      'js/vendor.js',
      'js/inject.js'
    ],
    run_at: 'document_start',
    matches: ['<all_urls>'],
    all_frames: true
  }],
  content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
  web_accessible_resources: ['js/vendor.js', 'js/content.js']
}
