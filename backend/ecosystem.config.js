const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
console.log(dotenv.config({ path: './.env' }));

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH_BACKEND, DEPLOY_REF, DEPLOY_REPOSITOTY,
} = process.env;

module.exports = {
  apps: [{
    name: 'mesto-backend',
    script: './dist/app.js',
    watch: true,
    exec_mode: 'cluster',
    instances: 2,
    max_restarts: 10,
    restart_delay: 1000,
  }],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITOTY,
      path: DEPLOY_PATH_BACKEND,
      'pre-deploy-local': `scp ./.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH_BACKEND}`,
      'post-deploy': 'rm -rf frontend && cd backend && pwd && npm ci && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
