const github = new Github;
const ui = new UI;

// Search Input
const serchUser = document.getElementById('searchlocation');

// Search Input Event Listener

serchUser.addEventListener('keyup', (e)=>{

    const userText = e.target.value;

    
    if(userText !== ''){
        console.log(userText);
        github.getUserLocation(userText)
        .then(data => {   
            // show profile
            ui.showProfile(data);
        })
 
     }else{
         // Clear Field
         ui.clearProfile();
     }

   

});