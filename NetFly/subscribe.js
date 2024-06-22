import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBEzWmfzRUoRFRHlXNEssfR-3EtoElwjJc",
    authDomain: "netflix-5002f.firebaseapp.com",
    databaseURL: "https://netflix-5002f-default-rtdb.firebaseio.com",
    projectId: "netflix-5002f",
    storageBucket: "netflix-5002f.appspot.com",
    messagingSenderId: "977326144598",
    appId: "1:977326144598:web:52026ea69e60f526738ff7",
    measurementId: "G-416W2YJ6K8"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log('Subscribe');
var isprem = false;
var isstand = false;
var isbasic = false;
var ismobile = false;

var prem = document.querySelector('#premiumplan');
var stand = document.querySelector('#Standardplan');
var basic = document.querySelector('#basicplan');
var mobile = document.querySelector('#mobileplan');

var premtick = document.querySelector('.premtick');
var standtick = document.querySelector('.standardtick');
var basictick = document.querySelector('.basictick');
var mobiletick = document.querySelector('.mobiletick');
async function premiumsuccess() {
    const auth = getAuth();
    try {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                // console.log(uid);
                try {
                    // Create a reference to the document with the user's UID
                    await setDoc(doc(db, "users", uid), {
                        'isSubscribed': true
                    });
                    window.location.replace("home.html");
                    // console.log("Document written with ID: ", uid);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            } else {
                console.error("No user is signed in");
            }
        });
    } catch (e) {
        console.error("Error with auth state change: ", e);
    }
}

prem.addEventListener('click', function () {
    isprem = true;
    isstand = false;
    isbasic = false;
    ismobile = false;

    if (isprem) {
        standtick.innerHTML = ``;
        basictick.innerHTML = ``;
        mobiletick.innerHTML = ``;
        premtick.innerHTML = `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path></svg>`;
    }
});

stand.addEventListener('click', function () {
    isprem = false;
    isstand = true;
    isbasic = false;
    ismobile = false;

    if (isstand) {
        premtick.innerHTML = ``;
        basictick.innerHTML = ``;
        mobiletick.innerHTML = ``;
        standtick.innerHTML = `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path></svg>`;
    }
});

basic.addEventListener('click', function () {
    isprem = false;
    isstand = false;
    isbasic = true;
    ismobile = false;

    if (isbasic) {
        premtick.innerHTML = ``;
        standtick.innerHTML = ``;
        mobiletick.innerHTML = ``;
        basictick.innerHTML = `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path></svg>`;
    }
});

mobile.addEventListener('click', function () {
    isprem = false;
    isstand = false;
    isbasic = false;
    ismobile = true;

    if (ismobile) {
        premtick.innerHTML = ``;
        standtick.innerHTML = ``;
        basictick.innerHTML = ``;
        mobiletick.innerHTML = `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" class="success-icon" data-uia="success-svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="white"></path></svg>`;
    }
});

var footer = document.querySelector('.error');
var subscribe = document.querySelector('.subscribe');

var options = {
    "key": "rzp_test_LWOeujcY4CFvGk",
    "amount": "64900",
    "currency": "INR",
    "name": "NetFlyy",
    "theme": {
        "color": "#1DB954"
    },
    "handler": function (response) {
        console.log("Handler triggered with response:", response);
        checkPaymentStatus('success');
    }
};
var options1 = {
    "key": "rzp_test_LWOeujcY4CFvGk",
    "amount": "49900",
    "currency": "INR",
    "name": "NetFlyy",
    "theme": {
        "color": "#1DB954"
    },
    "handler": function (response) {
        console.log("Handler triggered with response:", response);
        checkPaymentStatus('success');
    }
};
var options2 = {
    "key": "rzp_test_LWOeujcY4CFvGk",
    "amount": "19900",
    "currency": "INR",
    "name": "NetFlyy",
    "theme": {
        "color": "#1DB954"
    },
    "handler": function (response) {
        console.log("Handler triggered with response:", response);
        checkPaymentStatus('success');
    }
};
var options3 = {
    "key": "rzp_test_LWOeujcY4CFvGk",
    "amount": "14900",
    "currency": "INR",
    "name": "NetFlyy",
    "theme": {
        "color": "#1DB954"
    },
    "handler": function (response) {
        console.log("Handler triggered with response:", response);
        checkPaymentStatus('success');
    }
};

subscribe.onclick = function (e) {
    var rzp1;
    if (isprem) {
        rzp1 = new Razorpay(options);
    } else if (isstand) {
        rzp1 = new Razorpay(options1);
    } else if (isbasic) {
        rzp1 = new Razorpay(options2);
    } else if (ismobile) {
        rzp1 = new Razorpay(options3);
    } else {
        footer.innerHTML = `Please select a plan`;
        e.preventDefault();
        return;
    }

    paymentStatus(rzp1).then(function (status) {
        checkPaymentStatus(status);
    }).catch(function (status) {
        checkPaymentStatus(status);
    });

    rzp1.open();
    e.preventDefault();
};

subscribe.addEventListener('click', function () {
    if (isprem) {
        console.log('premium');
        footer.innerHTML = ``;
    } else if (isstand) {
        console.log('standard');
        footer.innerHTML = ``;
    } else if (isbasic) {
        console.log('basic');
        footer.innerHTML = ``;
    } else if (ismobile) {
        console.log('mobile');
        footer.innerHTML = ``;
    } else {
        footer.innerHTML = `Please select a plan`;
    }
});

var paymentStatus = function (rzp1) {
    return new Promise((resolve, reject) => {
        rzp1.on('payment.error', function (response) {
            console.log("Payment failed:", response);
            reject('failed');
        });

        rzp1.on('payment.success', function (response) {
            console.log("Payment successful:", response);
            resolve('success');
        });

        rzp1.on('external_wallet', function (response) {
            console.log("External wallet chosen:", response);
        });

        rzp1.on('rzp_event', function (response) {
            console.log("Razorpay event:", response);
        });
    });
};

async function checkPaymentStatus(status) {
    if (status === 'failed') {
        console.log('failed');
    } else {
        console.log('success');
        premiumsuccess();
    }
}
