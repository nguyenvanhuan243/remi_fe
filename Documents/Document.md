1. How to stop node js:
`killall node`

2. How to add reactstrap to your project.
`https://www.npmjs.com/package/reactstrap`
Use `--save` to save version in package file.
+ Reactstrap: `npm install reactstrap --save`
+ Bootstrap: `npm install bootstrap@4.0.0 --save`

3. How to start react boilerplate in production.
cd home/parttimebee: Run `npm run build`
vi /opt/nginx/conf/nginx.conf
add this code
  location / {
    proxy_pass http://159.65.1.5:3001;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
install pm2: `npm install pm2 -g`
Run `pm2 start server/index.js`
Tut: https://github.com/Unitech/pm2

Why using pm2 tool?
Because we can start react boilerplate with  `npm run start:prod`. However, we stop terminal
then server will stop.
=> We need to use pm2 to start server ALLWAYS ON.

<!-- How to make animation effect the same with facebook -->
<!-- Tut: https://codepen.io/brucevang/pen/qZOPwR -->
