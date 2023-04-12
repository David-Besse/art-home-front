#!/bin/bash
# -*- ENCODING: UTF-8 -*-
git clone $1
wait
cd $(echo $1| cut -d '/' -f 2 | cut -d '.' -f1)
cp -n ../React-Modele/{.*,*} .
cp -rn ../React-Modele/{src,config,public,tests} .
yarn
git add .
git commit -m "installation du React-Modele"
git push
code .
yarn start
