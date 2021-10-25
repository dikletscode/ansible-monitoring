1. run backend
  - cd backend
  - npm install
  - npm run dev
  
2. run frontend
  - cd frontend
  - npm install
  - npm run start
  
3. install app on virtual machine (Virtual Box)
  - download ubuntu server from https://ubuntu.com/download/server
  - set up network in virtual box and install openssh server
  - connect remote computer and guest computer with ssh key
  - Update ansible.host with ip address obtained from server
  - Update group_vars/all.yml with your server username / password
  - If connect with ssh key, update prometheus-grafana.pem
  - Change permission "chmod 400 prometheus-grafana.pem"
  - run on remote computer`ansible-playbook promotheus-grafana.yml"
  
