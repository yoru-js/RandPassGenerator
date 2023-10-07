var chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*?'

function generatePassword(){
    var password = ''
    for(let i = 0; i < 16; i++){
        let randomNum = Math.floor(Math.random() * chars.length);
        password += chars[randomNum];
    }
    document.getElementById("Password").textContent = password;
    document.getElementById("passwordOutput").value = password;
    return password;
}