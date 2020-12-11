const front_end_path = '/home/jvg/www/jv-g.fr/';

module.exports = {
    "apps": [{
        "name": "JVG",
        "script": "npm",
        "args": "start",
    }],
    deploy: {
        // "production" is the environment name
        production: {
            // SSH key path, default to $HOME/.ssh
            key: '/Users/jvg/.ssh/id_rsa',
            user: "jvg",
            host: ["jv-g.fr"],
            ssh_options: "StrictHostKeyChecking=no",
            // GIT remote/branch
            ref: "origin/master",
            // GIT remote
            repo: "https://github.com/jeguglie/jv-g.fr.git",
            // path in the server
            path: "/home/jvg/www/jv-g.fr/",
            'post-deploy': "cd ${front_end_path} && rm -rf node_modules/ && npx webpack --env.REACT_APP_CUSTOM_NODE_ENV=production --env.REACT_APP_SERVER_PORT=9004 --progress --config ./webpack.config.js"
        }
    }
}