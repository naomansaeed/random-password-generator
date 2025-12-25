
const charset = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','^','&','*','(',')']

let passOne = document.getElementById("password1")
let passTwo = document.getElementById("password2")
let generateBtn = document.getElementById("generate")

// Get the input element (once, at startup)
let lengthInput = document.getElementById('lengthInput')


function genratePassword(length){
    let password = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password
}

generateBtn.addEventListener('click', () =>{
    // Read the current value WHEN THE BUTTON IS CLICKED
    let length = parseInt(lengthInput.value) || 15

    // Pass length value to the function
    passOne.textContent = genratePassword(length);
    passTwo.textContent = genratePassword(length);
});

// Copy first password to clipboard upon click
passOne.addEventListener('click', () => {
  const originalPassword = passOne.textContent;
  navigator.clipboard.writeText(originalPassword);
  passOne.textContent = 'Copied!';
  
  // After 1 second, put the original password back
  setTimeout(() => {
    passOne.textContent = originalPassword;
  }, 1000);
});


// Copy second password to clipboard upon click
passTwo.addEventListener('click', () => {
  const originalPassword = passTwo.textContent;
  navigator.clipboard.writeText(originalPassword);
  passTwo.textContent = 'Copied!';
  
  // After 1 second, put the original password back
  setTimeout(() => {
    passTwo.textContent = originalPassword;
  }, 1000);
});