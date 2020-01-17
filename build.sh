#!/bin/bash
ng build --prod
cd cloud-functions
npm run build:lambda
