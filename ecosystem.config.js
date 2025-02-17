module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-184-72-68-207.compute-1.amazonaws.com',
      key: '~/.ssh/AWS.pem',
      ref: 'origin/master',
      repo: 'git@github.com:MaxStenklyft/MaxStenklyft.git',
      path: '/home/ec2-user/tutorial-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
