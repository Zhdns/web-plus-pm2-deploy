const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
console.log(dotenv.config({ path: './.env' }));

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH_FRONTEND, DEPLOY_REF, DEPLOY_REPOSITOTY,
} = process.env;

module.exports = {
  apps : [{
    name: 'mesto-frontend',
    script: 'npx', 
  }],

  deploy : {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITOTY,
      path: DEPLOY_PATH_FRONTEND,
      'pre-deploy-local': `scp ./.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH_FRONTEND}`,
      'post-deploy': 'rm -rf backend && cd frontend && pwd && npm ci && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  }
};
