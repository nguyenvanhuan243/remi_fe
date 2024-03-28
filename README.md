ReadMe
# Github Config
```
git config user.name "Your Name"
git config user.email "Your Email"
git config --list
```

# Many commits to one commit
git checkout branch
git log --oneline
git rebase -i HEAD~15
Change "pick" to "s" and update commit message.
Continue comment and keep one message commit.
git push -f (Take carefully with this comment)


# Node Installation
```
nvm use 14
npm uninstall node-sass
npm install node-sass@4.14.1
npm install
npm run build:dll
npm run build
```

```
npm cache clean --force
npm update
```