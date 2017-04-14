<h1 align="center">334 Scouting: Recon</h1>

<img width="20%" align="right" style="display: block; margin:40px auto;" src="http://i.imgur.com/XuUyBUk.gif">
<img width="20%" align="right" style="display: block; margin:40px auto;" src="http://i.imgur.com/QpqcY2N.gif">

Recon is a scouting app for the 2017 FRC competition steamworks. It is built on the principles:

* centralized datastore _with mongodb_
* convienient data access _with socketio_
* powerful analytics _with numpy_

<h3 align="center"><a href="https://www.youtube.com/watch?v=4BDBRJK_2Vo">Demo Video</a></h3>

<b><b>

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
