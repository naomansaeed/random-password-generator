//let passOne
//let passTwo

//const capitals = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
//const smalls = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//const numbers = [0,1,2,3,4,5,6,7,8,9]
//const symbols = ['!','@','#','$','&','^','&','8','(',')']

const charset = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,'!','@','#','$','&','^','&','8','(',')']

let passOne = document.getElementById("password1")
let passTwo = document.getElementById("password2")
let gererateBtn = document.getElementById("generate")
let limit = 15

function genratePassword(){
    let password = '';
    for (let i = 0; i < limit; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password
}

gererateBtn.addEventListener('click', () =>{
    passOne.textContent = genratePassword();
    passTwo.textContent = genratePassword();
});