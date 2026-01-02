
//const charset = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
//    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','^','&','*','(',')']

const uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numbers = [0,1,2,3,4,5,6,7,8,9]
const symbols = ['!','@','#','$','%','^','&','*','(',')']

let passOne = document.getElementById("password1")
let passTwo = document.getElementById("password2")
let generateBtn = document.getElementById("generate")

// Get the input element (once, at startup)
let lengthInput = document.getElementById("lengthInput")

let includeNumbers = document.getElementById("includeNumbers")
let includeSymbols = document.getElementById("includeSymbols")


let charset = []
//defineConstrains(8)
//console.log(charset)
//console.log(includeNumbers.checked);

function genratePassword(length){
    let password = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password
}

// This function checks whether to include numbers & symbols or not depending on the condition of relevant checkbox at the time of button press
function defineConstrains (length){
    charset = [...uppers, ...lowers] //uppers + lowers;
    if (includeNumbers.checked) {
        charset = [...charset, ...numbers] //numbers;
    }
    if (includeSymbols.checked) {
        charset = [...charset, ...symbols] //symbols;
    }

    // Safety: if somehow charset is empty (shouldn't happen), fallback
    if (charset.length === 0) charset = ['a'];
    
    return genratePassword(length)
    //return length
}

generateBtn.addEventListener('click', () =>{
    // Read the current value WHEN THE BUTTON IS CLICKED
    let length = parseInt(lengthInput.value) || 15

    // Pass length value to the function
    passOne.textContent = defineConstrains(length)// genratePassword(length);
    passTwo.textContent = defineConstrains(length)// genratePassword(length);
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

const themeToggle = document.getElementById('themeToggle');

// Check if user previously chose light mode
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '🌑 Dark Mode';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  
  if (document.body.classList.contains('light')) {
    themeToggle.textContent = '🌑 Dark Mode';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.textContent = '🌓 Light Mode';
    localStorage.setItem('theme', 'dark');
  }
});