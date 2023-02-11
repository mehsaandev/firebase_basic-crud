// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, set, get , update , remove } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "YOUR_API_KEY",
   authDomain: "YOUT_AUTH_DOMAIN",
   databaseURL: "YOUR_DATABASE_URL",
   projectId: "YOUR_PROJECT_ID",
   storageBucket: "YOUR_STORAGE_BUCKET",
   messagingSenderId: "YOUR_MESASAGING_SENDER_ID",
   appId: "YOUR_API_ID"
 };

 // Initialize Firebase
  initializeApp(firebaseConfig);

const database = getDatabase()




// Event Listeners
const addForm = document.getElementById('form');
const getBtn = document.getElementById('getBtn');
const deleteBtn = document.getElementById('deleteBtn');
const updateBtn = document.getElementById('updateBtn');

addForm.addEventListener('submit',submitDataHandler);
getBtn.addEventListener('click',getDataHandler);
deleteBtn.addEventListener('click',deleteDataHandler);
updateBtn.addEventListener('click',updateDataHandler);




// ------------------------------------------ Add Data -------------------------------
function submitDataHandler(e) {

    e.preventDefault();
    const rollNo = document.getElementById('rollNo').value;
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;


    const refObj = ref(database, `studentsTable/${rollNo}`)

    console.log(refObj)

    set(refObj, {
        rollNo,
        email,
        name
    }).then(()=>{
        
        alert("Submitted!!")
        addForm.reset()
    }).catch(()=>console.log("Something went wrong"))
}



// ------------------------------------------ Get Data -------------------------------
function getDataHandler(e) {

    e.preventDefault();


    const refObj = ref(database, 'studentsTable')

    console.log(refObj)

    get(refObj).then((result)=>{
        
        alert("Data Retrieved!!")
        console.log(result.val())
        addForm.reset();
    }).catch(()=>console.log("Something went wrong"))
}



// ------------------------------------------ Delete Data -------------------------------
function deleteDataHandler(e) {

    e.preventDefault();

    const rollNo = document.getElementById('rollNo').value;

    const refObj = ref(database, `studentsTable/${rollNo}`)

    console.log(refObj)

    remove(refObj).then((result)=>{
        
        alert("Data Deleted!!")
        addForm.reset();
    }).catch(()=>console.log("Something went wrong"))
}


// ------------------------------------------ Update Data -------------------------------
function updateDataHandler(e) {

    e.preventDefault();

    const rollNo = document.getElementById('rollNo').value;
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;

    const refObj = ref(database, `studentsTable/${rollNo}`)

    console.log(refObj)

    update(refObj,{
        rollNo,
        email,
        name
    }).then((result)=>{
        
        alert("Data Updated!!")
        addForm.reset();
    }).catch(()=>console.log("Something went wrong"))
}




