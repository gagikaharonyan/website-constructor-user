import app from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAGjaYNXQUB2mQ391Wz6ohMJCJaAKYCXbM",
    authDomain: "website-constructor.firebaseapp.com",
    databaseURL: "https://website-constructor.firebaseio.com",
    projectId: "website-constructor",
    storageBucket: "website-constructor.appspot.com",
    messagingSenderId: "521285781916",
    appId: "1:521285781916:web:11d9c1e4cd598221ac6059",
    measurementId: "G-ZM8BPNSK72"
};


class FireBase {
    constructor() {
        app.initializeApp(firebaseConfig)

        this.db = app.database();
        this.storage = app.storage();
    }
    event = uid => this.db.ref(`events/${uid}`)
}

export default FireBase