module.exports = {
  apps: [
    {
      name: 'mesto-backend',
      script: './backend/dist/app.js',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      interpreter: '/home/ois/.nvm/versions/node/v16.13.2/bin/node'
    },
    {
      name: 'mesto-frontend',
      script: 'npx', 
      args: 'serve -s build -l 5000', 
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 80
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 80 
      },
      interpreter: '/home/ois/.nvm/versions/node/v16.13.2/bin/node'
    }
  ]
};
