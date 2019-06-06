
class UI{

    constructor(){
        this.profile = document.getElementById('profile');  
       // this.location = document.getElementById('locationprofile');
    }

    showProfile(user){
        const {html_url, public_repos, following, followers, avatar_url, login, name, blog, location, company, bio}=user.profile;

            this.profile.innerHTML =`
      
           <div class="card card-body">
                <div class='row'>
                    <div class='col-md-3 mb-2'>
                        <img src="${avatar_url}" class="img-fluid mb-2">
                        
                        
                        <a class='btn btn-primary form-control' href='${html_url}' target="_blank">View Profile</a>
                    </div>
                
                    <div class="col-md-9">
                    <span class="badge badge-primary">Repository: ${public_repos}</span>
                    <span class="badge badge-primary">Follwoing: ${following}</span>
                    <span class="badge badge-primary">Followers: ${followers}</span>
                    
                    <ul class="collection">
                            <li class="collection-item">Login: ${login}</li>
                            <li class="collection-item">Name: ${name}</li>
                            <li class="collection-item">Website: ${blog}</li>
                            <li class="collection-item">Location: ${location}</li>
                            <li class="collection-item">Company: ${company}</li>
                            <li class="collection-item">Bio: ${bio}</li>
                        </ul>
                    </div>
                
                </div>
            </div>
            
        `;

    }


 
// Clear Profile
    clearProfile(){
        this.profile.innerHTML = "";
    }
}