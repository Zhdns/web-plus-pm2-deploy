module.exports = {
    apps : [{
      name: 'my-app',                 
      script: './src/app.js',           
      instances: 2,                     
      autorestart: true,               
      watch: true,                     
      max_memory_restart: '1G',         
      env: {
        NODE_ENV: 'development',        
        PORT: 3000                      
      },
      env_production: {
        NODE_ENV: 'production',         
        PORT: 8080
      }
    }]}