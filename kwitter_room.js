
var firebaseConfig = {
      apiKey: "AIzaSyB_3C87uTUZGgweF-VxBpmgtY4WFSUKkxk",
  authDomain: "code-chat2.firebaseapp.com",
  databaseURL: "https://code-chat2-default-rtdb.firebaseio.com",
  projectId: "code-chat2",
  storageBucket: "code-chat2.appspot.com",
  messagingSenderId: "96084941831",
  appId: "1:96084941831:web:07c37028be3fc5d0a01ea2"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function add_room()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "code_chat_room.html";

    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
// ok mam
console.log("Room name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#  "+ Room_names +" + </div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)

{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "code_page.html";
      
}
function logout()
{ 
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}






