sudo yum update -y
sudo yum install -y nodejs
node -v
npm -v
npx -v
npx create-react-app myclock-app
cd myclock-app
npm start
ls
cd myclock-app
npm start
cd ..
npm init
cd myclock-app
npm init
npm install --save express
ls node_modules #(dir node_modules for windows)
npm install -g nodemon
[ec2-user@ip-172-31-13-120 myclock-app]$ npm install -g nodemon
npm ERR! code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/local/lib/node_modules
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules'
npm ERR!  [Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules'                                                                       ] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: '/usr/local/lib/node_modules'
npm ERR! }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the                                                                        current user
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check t                                                                       he
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.
npm ERR! A complete log of this run can be found in: /home/ec2-user/.npm/_logs/2                                                                       024-03-03T00_35_31_136Z-debug-0.log
[ec2-user@ip-172-31-13-120 myclock-app]$
[ec2-user@ip-172-31-13-120 myclock-app]$ npm install -g nodemon
npm ERR! code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/local/lib/node_modules
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules'
npm ERR!  [Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules'                                                                       ] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: '/usr/local/lib/node_modules'
npm ERR! }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the                                                                        current user
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check t                                                                       he
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.
npm ERR! A complete log of this run can be found in: /home/ec2-user/.npm/_logs/2                                                                       024-03-03T00_35_31_136Z-debug-0.log
[ec2-user@ip-172-31-13-120 myclock-app]$ [ec2-user@ip-172-31-13-120 myclock-app]$ npm install -g nodemon
npm ERR! code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/local/lib/node_modules
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules'
npm ERR!  [Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules'                                                                       ] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'mkdir',
ls
npm init
npm install --save express
sudo npm install -g nodemon
ls
cat index.js
nodemon index.js
sudo vi /etc/selinux/config
/etc/yum.repos.d/mongodb-org-7.0.repo
sudo vi /etc/yum.repos.d/mongodb-org-7.0.repo
cat /etc/yum.repos.d/mongodb-org-7.0.repo
sudo yum install -y mongodb-org
sudo yum install -y mongodb-org-7.0.6 mongodb-org-database-7.0.6 mongodb-org-server-7.0.6 mongodb-mongosh-7.0.6 mongodb-org-mongos-7.0.6 mongodb-org-tools-7.0.6
ulimit
grep mongod /etc/passwd
sudo usermod --shell /bin/bash mongod
grep mongod /etc/passwd
sudo cp /etc/sudoers /etc/sudoers_backup
ls -l /etc/sudoers_backup
sudo visudo
EXIT
clear
visudo
sudo visudo
sudo su -mongod
sudo su - mongod
sudo vi /etc/mongod.conf
mongosh "mongodb://172.31.13.120:27017"
openssl version
mongo "mongodb://172.31.13.120:27017"
sudo yum install -y mongodb-org-tools
which mongo
sudo find / -name mongo -type f
 ls -l /usr/bin/mongo*
sudo yum install -y mongodb-org-shell
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
mongosh "mongodb://172.31.13.120:27017"
export OPENSSL_ALLOW_SHA1=1
mongosh "mongodb://172.31.13.120:27017"
sudo visudo
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
mongosh "mongodb://172.31.13.120:27017"
sudo systemctl stop mongod
sudo visudo
sudo su - mongod
sudo vi /etc/mongod.conf
sudo systemctl restart mongod
sudo systemctl status mongod
sudo systemctl start mongod
sudo systemctl status mongod
sudo vi /etc/mongod.conf
sudo rm /etc/.mongod.conf.swp
sudo systemctl start mongod
sudo systemctl status mongod
sudo vi /etc/mongod.conf
sudo systemctl start mongod
sudo systemctl status mongod
mongosh "mongodb://172.31.13.120:27017"
mongo "mongodb://172.31.13.120:27017"
mongosh
sudo systemctl enable mongod
mongosh
export OPENSSL_ALLOW_SHA1=1
mongosh "mongodb://172.31.13.120:27017"
sudo yum update
sudo yum update mongodb-org-shell
sudo yum reinstall mongodb-org-shell
sudo yum update
sudo yum update openssl
sudo yum reinstall openssl
export OPENSSL_ALLOW_SHA1=1
mongosh "mongodb://172.31.13.120:27017"
mongosh
sudo yum remove mongodb-org mongodb-org-server mongodb-org-shell mongodb-org-mongos mongodb-org-tools
sudo vi /etc/selinux/config
sudo nano /etc/yum.repos.d/mongodb-org-4.4.repo
ls
sudo nano /etc/yum.repos.d/mongodb-org-4.4.repo
sudo nano /etc/yum.repos.d/mongodb-org-4.4.repo  
sudo yum install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod
mongosh
mongo
sudo yum list installed | grep mongodb-org
sudo yum install -y mongodb-org-shell
sudo yum search libcrypto libssl
sudo yum remove mongodb-org mongodb-org-server mongodb-org-mongos mongodb-org-shell mongodb-org-tools
sudo rm /etc/mongod.conf
cd /var/lib/mongodb/
sudo yum clean all
sudo rm -rf *
ls
sudo yum update -y
sudo yum install -y nodejs
node -v
npm -v
npx -v
npx create-react-app myclock-app
ls
cd myclock-app
npm start
cd ..
sudo rm -rf *
ls
node -v
npm -v
npx v-
npx -v
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install
npm init
npm init 
npx create-react-app myclock-app
cd myclock-app
npm start
cd ..
/etc/yum.repos.d/mongodb-org-7.0.repo
sudo vi /etc/yum.repos.d/mongodb-org-7.0.repo
sudo yum install -y mongodb-org
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
mongosh
dnf install -qy mongodb-mongosh
sudo dnf install -qy mongodb-mongosh-shared-openssl3
dnf erase -qy mongodb-mongosh
sudo dnf erase -qy mongodb-mongosh
dnf install -qy mongodb-mongosh-shared-openssl3
sudo dnf install -qy mongodb-mongosh-shared-openssl3
if mongosh --help 1>/dev/null; then echo 'OK'; else echo '!!!NG!!!'; fi
OK
if mongosh --help 1>/dev/null; then echo 'OK'; else echo '!!!NG!!!'; fi
mongosh
mongosh "mongodb://172.31.13.120:27017"
sudo systemctl stop mongod
exit
sudo systemctl start mongod
ls
mongosh
sudo systemctl enable mongod
mongo
ls -l /usr/bin/mongo*
sudo yum install mongodb-org-tools
mongosh
mongo
ls -l /usr/bin/mongo*
sudo systemctl status mongod
sudo yum install -y mongodb-org
sudo yum reinstall -y mongodb-org
sudo systemctl status mongod
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
mongosh
mongosh "mongodb:// 3.96.106.9:27017"
mongosh "mongodb:// 172.31.13.120:27017"
sudo vi /etc/mongod.conf
sudo rm /etc/.mongod.conf.swp
sudo vi /etc/mongod.conf
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
mongosh "mongodb:// 172.31.13.120:27017"
grep mongod /etc/passwd
sudo visudo
sudo vi /etc/mongod.conf
sudo systemctl stop mongod
sudo vi /etc/mongod.conf
sudo systemctl restart mongod
sudo systemctl status mongod
mongosh "mongodb:// 172.31.13.120:27017"
mongosh
mongosh "mongodb://127.0.0.1:27017"
mongosh --port 27017 --authenticationDatabase "admin" -u "admin" -p;
exit
mongosh
mongosh --port 27017 --authenticationDatabase "admin" -u "admin" -p;
mongosh
mongosh --port 27017 --authenticationDatabase "admin" -u "admin" -p;
mongosh "mongodb:// 172.31.13.120:27017"
sudo visudo
sudo su - mongod
sudo systemctl status mongod
sudo systemctl stop mongod
sudo systemctl status mongod
umilit
ulimit
grep mongod /etc/passwd
sudo usermod --shell /bin/bash mongod
sudo cp /etc/sudoers /etc/sudoers_backup
ls -l /etc/sudoers_backup
sudo visudo
sudo su - mongod
ls
vi package.json
nodemon index.js
exit
ls
node --version
npm --version
npm install --save express
npm install -g nodemon
sudo npm install -g nodemon
sudo vi index.js
nodemon index.js
exitr
exit
sudo systemctl status mongod
sudo systemctl stop mongod
exit
nodemon index.js
clear
ls
cd myclock-app
npm start
exit
sudo systemctl start mongod 
sudo systemctl status mongod
sudo systemctl enable mongod
mongosh "mongodb://172.31.13.120:27017" --username admin --authenticationDatabase admin
exit
ls
cd JS_FinalExame
nodemon index.js
cd my-react-app
cd src
nodemon index.js
npm init
npm start
cd ..
npm start
npm install
npm audit fix --force
npm audit fix
npm start
ls
cd myclock-app
ls
npm start
ls
cd myclock-app
npm start
exit
ls
cd myclock-app
npm install evergreen-ui axios
npm start
ls
nodemon index.js
ls
nodemon index.js
cat index.js
ls
cd myclock-app
ls
npm start
ls
cat index.js
vi index.js
ls
cat index.js
nodemon index.js
npm install mongoose
npm install mongoose --save
nodemon index.js
npm install cors --save
nodemon index.js
npm i pug
nodemon index.js
ls
cd myclock-app
npm start
exit
ls
cat index,js
cat index.js
nodemon index.js
la
ls
nodemon index.js
ls
nodemon index.js
ls
cd myclock-app
npm start
exit
vi index.js
nodemon index.js
ls
nodemon index.js
ls
cd myclock-app
npm start
ls
cd myclock-app
ls
cd ..
ls
nodemon index.js
ls
cd myclock-app
cd src
ls
npm start
ls
nodemon index.jsl
nodemon index.js
ls
cd myclock-app
ls
cd src
ls
npm start
ls
npm install moment
ls
npm start
ls
cd myclock-app
ls
cd src
ls
npm start
ls
nodemon index.js
ls
nodemon index.js
ls
cd myclock-app
ls
cd src
ls
npm start
cd myclock-app
ls
cd src
ls
npm start
ls
nodemon index.js
whoami
aws configure
aws ec2 describe-images --owners self
ls
cd myclock-app
cd src
ls
cd ..
ls
docker build dockerfile
docker build -t dockerfile .
docker build -t test:latest .
docker build -t myclock-docker .
sudo yum install -y docker
docker --version
sudo service docker start
sudo systemctl enable docker
docker --version
docker build -t myclock-docker .
sudo usermod -aG docker $USER
docker build -t myclock-docker .
ls
docker build -t myclock-docker .
docker commit
docker export
nodemon index.js
docker version
sudo service docker start
start docker.service
sudo usermod -a -G docker ec2-user
docker info
ls
docker build -t myclock-docker .
node version
docker build -t myclock-docker .
docker images
docker tag myclock-docker joycedemoura/myclock-docker:tag
docker push joycedemoura/myclock-docker:tag
docker login
docker tag myclock-docker joycedemoura/myclock-docker:tag
docker images
docker push joycedemoura/myclock-docker:tag
docker build --pull . -t joycedemoura/myclock-docker:tag
docker push joycedemoura/myclock-docker:tag
docker login
docker push joycedemoura/myclock-docker:tag
docker images
docker build --pull . -t joycedemoura/myclock-docker:tag
docker push joycedemoura/myclock-docker:tag
node version
clea
clear
node --version
npm list mongoose
npm list react
ls
cd myclock-app
npm list react
ls
cd ..
ls
cd ec2-user
clear
npm list express
mongod --version
