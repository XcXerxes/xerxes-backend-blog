module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'bankend',
      script    : './build/build.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '39.108.97.20',
      ref  : 'origin/master',
      repo : 'git@github.com:XcXerxes/xerxes-backend-blog.git',
      path : '/var/www/xcxerxes/backend',
      'post-deploy' : 'git pull && yarn install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
