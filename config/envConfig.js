const envConfig = {
    "env": process.env.AppEnv || "test",
    "test": {
        "web": {
            "HOST-URL": "",
            strapURL: "",
        },
        "api": {
            "REST_API_ENDPOINT": "",
        },
        "server": {
            "graphQL_ENDPOINT": ""
        }
    },
    "dev": {
        "web": {
            "HOST-URL": "",
            strapURL: "",
        },
        "api": {
            "REST_API_ENDPOINT": "",
        },
        "server": {
            "graphQL_ENDPOINT": ""
        }
    },
};
module.exports = envConfig;