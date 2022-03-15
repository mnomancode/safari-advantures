

const firebaseConfig = {
    apiKey: "AIzaSyDRVHIwiU7bTxV1g61-GfbZ3C0PxKJH1tY",
    authDomain: "safari-adventures.firebaseapp.com",
    projectId: "safari-adventures",
    storageBucket: "safari-adventures.appspot.com",
    messagingSenderId: "133316262087",
    appId: "1:133316262087:web:0fbed12f185ad0a0f0a6e2",
    measurementId: "G-HLCB0YJRMK"
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
