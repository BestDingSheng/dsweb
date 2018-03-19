import _ from 'lodash';
let config = {
    "env": process.env.NODE_ENV, // “devlopment prodcution”
}

if (process.env.NODE_ENV == "development") {
    const localConfig = {
        port: 8081
    }
    config = _.extend(config, localConfig)
}

//  上线环境
if (process.env.NODE_ENV == 'production') {
    const prodConfig = {
        port: 8081
    }
    config = _.extend(config, prodConfig)
}
console.log(config)

export default config;