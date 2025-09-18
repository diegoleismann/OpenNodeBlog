export default ({ title = '', head = '', html = '', scripts = '' }) => {
  const template = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>${title}</title>
    ${head}
    <link rel="stylesheet" type="text/css" href="/modules/materialdesignicons.min.css" />
    <link rel="stylesheet" type="text/css" href="/modules/vuetify.min.css" />
    <link rel="stylesheet" type="text/css" href="/style.css" />
  </head>
  <body>
    <div id="app">${html}</div>
    ${scripts}
  </body>
  </html>
`
  return template
}