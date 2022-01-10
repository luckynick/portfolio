#/bin/sh!

rm -r build
mkdir build

cp -r dist/portfolio/* build/
cp -r config_files/production/* build/

cd build
zip -r portfolio.war * 