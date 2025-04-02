module.exports = {
  apps: [
    {
      name: process.env.DEPLOYMENT_APP_NAME || "djangotutorial",
      script: `gunicorn mysite.wsgi -w 9 --bind 127.0.0.1:${process.env.DEPLOYMENT_PORT || 3000}`,
      args: "",
      merge_logs: true,
      autorestart: true,
      log_file: "logs/combined.outerr.log",
      out_file: "logs/out.log",
      error_file: "logs/err.log",
      max_memory_restart: "1G",
    },
  ],
};
