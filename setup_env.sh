#!/bin/bash

# Verify wether .env file already exist
if [ -f .env ]; then
  echo ".env file already exists. Skipping creation."
else
  # Environment Variable that will be configurated in pipeline
  SONAR_TOKEN=$1

  # Create .env file with SONAR_TOKEN from secrets
  echo "SONAR_TOKEN=$SONAR_TOKEN" > .env

  echo ".env file has been created."
fi
