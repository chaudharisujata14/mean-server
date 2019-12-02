#!/bin/bash

running=$(docker container ls -q --filter name=myserver)

if [ $running ]; then
docker container stop myserver
docker container rm myserver
docker image rm myserver
else
echo "NOT FOUND"
fi

docker image build -t myserver .
docker container run --name myserver -p 9898:9898 myserver
