@echo off

:: Create the main project directory
mkdir how-am-i-weird-website
cd how-am-i-weird-website

:: Create the main HTML file
type nul > index.html

:: Create subdirectories
mkdir css js images pages

:: Create CSS file
type nul > css\styles.css

:: Create JavaScript file
type nul > js\main.js

:: Create HTML files for other pages
type nul > pages\games.html
type nul > pages\shop.html
type nul > pages\about.html
type nul > pages\contact.html

:: Create a README file
echo # How Am I Weird Website > README.md

:: Print the directory structure
echo Project structure created:
tree /F

:: Optionally, initialize a git repository
git init
echo node_modules/ > .gitignore
git add .
git commit -m "Initial project structure"

echo Project setup complete!