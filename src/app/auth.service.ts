export class AuthService {
    loggedIn = false;

    /**
     * to fake in the check to see if a user is log in
     */
    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject)=> {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800)
            }
        )
        return promise;
    }
    login(){
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}