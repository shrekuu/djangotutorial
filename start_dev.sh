#!/bin/bash

# Load environment variables from .env file
export $(grep -v '^#' .env | xargs)

SERVICE_NAME="$DEPLOYMENT_APP_NAME"
PORT="$DEPLOYMENT_PORT"

gunicorn --bind 0.0.0.0:$PORT mysite.wsgi 
