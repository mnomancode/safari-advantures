const firebaseConfig = {
    apiKey: "AIzaSyAw8jQFW7bgktAcIVwmhmuioVp8ieqD6t0",
    authDomain: "fir-testing-53f60.firebaseapp.com",
    projectId: "fir-testing-53f60",
    storageBucket: "fir-testing-53f60.appspot.com",
    messagingSenderId: "413209988655",
    appId: "1:413209988655:web:225b7fe6e9b3293b1d80da"
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