
# Assignment    

 
## Deployment

To run the app and the API 

1. Clone the repository:
```bash
  git clone https://github.com/sujalsachan/Assignment.git

```
2. Install dependencies:
Go inside both the folders backend and frontend in cmd or terminal in vs Code : 
```bash
  npm i

```
3. Change the ip address in the following line in files :

UserContext and in createUser  : 

const response = await axios.get('http://192.168.31.78:3000/users');

change the number 192.168.31.78 to your ip address (ipv4)  


Note :
Both the system and the mobile app should be on the same wifi network.
   1. You must have an AVD android virtual device on your system to run on pc.
   2. If you want to run on the mobile use expo go app and scan the QR Code in the app

4.Run the frontend :
```bash
 npx expo start
```

5. Run the backend :
```bash
 node server.js
```