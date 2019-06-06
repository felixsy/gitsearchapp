const github = new Github;
const ui = new UI;

// Search Input
const serchUser = document.getElementById('searchuser');



serchUser.addEventListener('keyup', (e)=>{

    const userText = e.target.value;

    if(userText !== ''){
        
       github.getUser(userText)
       .then(data => {   
           // show profile
           ui.showProfile(data);
       })

    }else{
        // Clear Field
        ui.clearProfile();
    }
   

});