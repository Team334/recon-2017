Recon
-----
<img width="20%" align="right" style="display: block; margin:40px auto;" src="http://i.imgur.com/sMcb7I9.gif">
<img width="20%" align="right" style="display: block; margin:40px auto;" src="http://i.imgur.com/JvxqGw8.gif">
Recon is a scouting app for the 2017 FRC competition steamworks. It is built on the principles:

* centralized datastore _with mongodb_
* convienient data access _with socketio_
* powerful analytics _with numpy_

Usage
-----
Be sure to have [React Native](https://facebook.github.io/react-native/docs/getting-started.html) installed as well as the [Recon Server](https://github.com/Team334/recon-server) running.

1. Download the repository:
```
$ git clone https://github.com/Team334/recon.git
$ cd recon/
```
2. Install the dependencies:
```
$ sudo npm install --save
$ react-native link
```
3. Change the [recon server](https://github.com/Team334/recon-server) address in `app/config/config.js`:
```javascript
const SERVER = "http://localhost:8080";
```
4. Run the app
```
$ react-native run-ios
#          OR
$ react-native run-android
```

For further resources on deploying a React Native app, please refer to the [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html).
