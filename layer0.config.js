module.exports = {
  routes: './src/routes.ts',
  connector: '@layer0/starter',
  backends: {
    origin: {
      domainOrIp: 'docs.layer0.co',
      hostHeader: 'docs.layer0.co',
      disableCheckCert: true,
    },
  },
}
