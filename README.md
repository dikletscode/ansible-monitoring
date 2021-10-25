**1. run backend**
  - cd backend
  - npm install
  - npm run dev
  
**2. run frontend**
  - cd frontend
  - npm install
  - npm run start
  
**3. install app on virtual machine (Virtual Box)**
  - download ubuntu server from https://ubuntu.com/download/server
  - set up network in virtual box and install openssh server
  - connect remote computer and guest computer with ssh key
  - Update ansible.host with ip address obtained from server
  - Update group_vars/all.yml with your server username / password
  - If connect with ssh key, update prometheus-grafana.pem
  - Change permission "chmod 400 prometheus-grafana.pem"
  - run on remote computer`ansible-playbook promotheus-grafana.yml"

--- user login ---
![Screenshot](https://user-images.githubusercontent.com/80526360/138637516-703fbd1c-26ac-4433-8319-0907b2dca926.png)

-- user register --
![sss2](https://user-images.githubusercontent.com/80526360/138637587-81125cad-727a-455f-a6ca-aef9bf5aae30.png)

-- add server /install app ---
![Screenshot from 2021-10-24 21-55-49](https://user-images.githubusercontent.com/80526360/138637699-397aa335-2422-41b2-b079-f9069023c6e7.png)

-- list installed app --
![Screenshot from 2021-10-24 21-57-15](https://user-images.githubusercontent.com/80526360/138637641-274d8971-3223-4853-8503-7b3049b939a1.png)
  
