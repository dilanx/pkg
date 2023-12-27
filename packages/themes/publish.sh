#!/usr/bin/env sh

set -e

if [ -z "$1" ]; then
  echo "Usage: publish.sh <otp>"
  exit 1
fi

PKGS=$(ls src)

echo "Publishing subpackages: $PKGS"
echo ""

echo "Removing files from package.json"
npm pkg delete files

echo "Adding README.md to package.json"
npm pkg set "files[]=README.md"

for PKG in $PKGS; do
  if [ $PKG = "src" ]; then
    # never delete src
    continue
  fi

  if [ -d $PKG ]; then
    echo "Deleting old build of $PKG"
    rm -rf $PKG
  fi

  echo "Adding $PKG to package.json"
  npm pkg set "files[]=$PKG"
done

echo "Building packages"
npx babel --copy-files --out-dir . src

echo "Publishing all packages under @dilanx/themes"
npm publish --otp $1

for PKG in $PKGS; do
  if [ $PKG = "src" ]; then
    # never delete src
    continue
  fi

  echo "Removing build of $PKG"
  rm -rf $PKG
done

echo ""
echo "Done!"
