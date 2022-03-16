const firebaseConfig = {
    apiKey: "AIzaSyD5RNZY92nEvpK1CKI0u8dOdgSJ-2dhcog",

    authDomain: "safari-adventure-78671.firebaseapp.com",

    projectId: "safari-adventure-78671",

    storageBucket: "safari-adventure-78671.appspot.com",

    messagingSenderId: "139068250812",

    appId: "1:139068250812:web:1e7631c85fe63b80b5ceb9",

    measurementId: "G-1HC9F98R52"

};
firebase.initializeApp(firebaseConfig);


var agentForm = document.getElementById("agentRegisterationForm").elements;

// add All The Properties from the agent tabel in erd diagram
var agentData = {
    name: "Agent Name",
    country: "USA",
    verified: "false",

};


function agentCreation() {
    const agentEmail = agentForm.item(0).value;
    const agentPassword = agentForm.item(1).value;

    firebase.auth().createUserWithEmailAndPassword(agentEmail, agentPassword)
        .then((userCredential) => {
            console.log(agentEmail);

            // Signed in 
            var user = userCredential.user;
            console.log(user);
            saveAgentToDb();
            alert('agent Creation Success full');
        })
        .catch((error) => {
            alert(error);
        });

}



function saveAgentToDb() {
    var db = firebase.firestore();

    var userId = firebase.auth().currentUser.uid;


    db.collection("agents").doc(userId).set(agentData)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });


}
