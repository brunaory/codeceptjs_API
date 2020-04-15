exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    AXIOS: {
      require: 'codeceptjs-axios',      
    }
  },
  bootstrap: null,
  mocha: {"reporterOptions":{
    "reportDir": "output"
  }}
  }
