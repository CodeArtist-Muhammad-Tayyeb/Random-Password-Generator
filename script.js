function generatePassword(){
    var characterAll = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890@/";
    var forRange = document.getElementById('range').value;
    var passwordShow = '';

    for (var i=0; i<forRange; i++){
        var randomIndex = Math.floor(Math.random() * characterAll.length);
        passwordShow = passwordShow + characterAll[randomIndex];
    }

    document.getElementById('input-box').value = passwordShow;

}