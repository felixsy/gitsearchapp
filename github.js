
class Github{

    constructor(){
        this.client_id = '8d6f10078ccccf94fe93';
        this.client_secret ='3fd5e0f6de919f7b3326a410bacbcba1d45afcec';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrets=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    } 


// https://api.github.com/search/users?q=location:france

}