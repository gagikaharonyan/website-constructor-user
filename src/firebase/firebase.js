import app from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDMSFtY9rNmAF-otj0oOBKxDNoY_rOdIbM",
    authDomain: "website-constructor-user.firebaseapp.com",
    databaseURL: "https://website-constructor-user.firebaseio.com",
    projectId: "website-constructor-user",
    storageBucket: "website-constructor-user.appspot.com",
    messagingSenderId: "858680372616",
    appId: "1:858680372616:web:817adf1857dc0414db5e3d",
    measurementId: "G-QWXLDDFHD7"
};


class FireBase {
    constructor() {
        app.initializeApp(firebaseConfig)

        this.db = app.database();
        this.storage = app.storage();
    }


}

export default FireBase