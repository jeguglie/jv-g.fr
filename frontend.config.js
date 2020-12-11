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
            key: '/Users/jv/.ssh/id_rsa',
            user: "jvg",
            host: ["jv-g.fr"],
            ssh_options: "StrictHostKeyChecking=no",
            // GIT remote/branch
            ref: "origin/master",
            // GIT remote
            repo: "https://github.com/jeguglie/jv-g.fr.git",
            // path in the server
            path: "/home/jvg/www/jv-g.fr/",
            // Pre-setup command or path to a script on your local machine
            'pre-setup': "npm run build",
            // Post-setup commands or path to a script on the host machine
            // eg: placing configurations in the shared dir etc
            // 'post-setup': `sudo chown -R jvg:collab ${path} && sudo chmod -R g+w ${path}`,
            'post-deploy': `cd ${front_end_path} && rm -rf node_modules/ && ` +
                "npm install && npm rebuild node-sass && npx webpack --env.REACT_APP_CUSTOM_NODE_ENV=production --env.REACT_APP_SERVER_PORT=9004 --progress --config ./webpack.config.js"
        }
    }
}