#!/bin/bash
ng build --prod
cd cloud-functions
npm ci
npm run build:lambda
