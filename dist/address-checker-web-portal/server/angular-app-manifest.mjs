
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 68238, hash: '918773edfb5006ef74c3db11c79ee45cfa63d633c48a5edebddc2b5fdd7bbbcd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17131, hash: '2bca331e02ebbf2de1f6dd8d2ae61b96d0d889ed5a449fd5564866073caf0e48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 106012, hash: 'ce61fc9b2029133d2561c8bc3a866433968c5f78013cdccdfccb7265405b8eeb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JLZ4UQS3.css': {size: 320321, hash: 'gqaZXFx0xTk', text: () => import('./assets-chunks/styles-JLZ4UQS3_css.mjs').then(m => m.default)}
  },
};
