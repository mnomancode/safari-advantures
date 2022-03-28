const firebaseConfig = {
    apiKey: "AIzaSyD5RNZY92nEvpK1CKI0u8dOdgSJ-2dhcog",
authDomain: "safari-adventure-78671.firebaseapp.com",
  projectId: "safari-adventure-78671",
  storageBucket: "safari-adventure-78671.appspot.com",
  messagingSenderId: "139068250812",
  appId: "1:139068250812:web:ec4e8e5e4bb62a31b5ceb9",
  measurementId: "G-YV5GKS22MS"

  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function agentCreation() {
    var agentForm = document.getElementById("agentRegisterationForm").elements;
    const agentEmail = agentForm.item(0).value;
    const agentPassword = agentForm.item(1).value;


    firebase.auth().createUserWithEmailAndPassword(agentEmail, agentPassword)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            saveAgentToDb();

            alert('agent Creation Success full');

        })
        .catch((error) => {
            alert(error);
        });

}

function agentLogin() {
    var agentForm = document.getElementById("agentSigninForm").elements;
    const agentEmail = agentForm.item(0).value;
    const agentPassword = agentForm.item(1).value;


    firebase.auth().signInWithEmailAndPassword(agentEmail, agentPassword)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            saveAgentToDb();

            alert('agent login Successfully');

        })
        .catch((error) => {
            alert(error);
        });

}

// function logout(){
//     firebase.auth().signOut() 
// }

function saveAgentToDb() {
    var db = firebase.firestore();

    var userId = firebase.auth().currentUser.uid;


    db.collection("agents").doc(userId).set({
        name: "Agent Name",
        verified: "false",
        country: "USA"
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });


}