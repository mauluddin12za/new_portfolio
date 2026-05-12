export default {
    apps: [
        {
            name: "portfolio",
            script: "npm",
            args: "start",
            env: {
                NODE_ENV: "production",
                PORT: 3001
            }
        }
    ]
};
