const inputText = document.querySelector(".inputText")
const message = document.querySelector(".message")

function btnEncrypt(){
    const encryptedText = encrypt(inputText.value)
    message.value = encryptedText;
    message.style.backgroundImage = "none"
    inputText.value = ""
    document.getElementById('boxText').style.display = "none"
}

function encrypt(encryptedString){
    let codeMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encryptedString = encryptedString.toLowerCase();

    for(let i = 0; i < codeMatriz.length; i++){
        if(encryptedString.includes(codeMatriz[i][0])){
            encryptedString = encryptedString.replaceAll(codeMatriz[i][0],codeMatriz[i][1])
        }
    }
    return encryptedString;
}

function btnDecrypt(){
    const decryptedText = decrypt(inputText.value)
    message.value = decryptedText;
    message.style.backgroundImage = "none"
    inputText.value = ""
    document.getElementById('boxText').style.display = "none"
}

function decrypt(decryptedString){
    let codeMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    decryptedString = decryptedString.toLowerCase();

    for(let i = 0; i < codeMatriz.length; i++){
        if(decryptedString.includes(codeMatriz[i][1])){
            decryptedString = decryptedString.replaceAll(codeMatriz[i][1],codeMatriz[i][0])
        }
    }
    return decryptedString;
}

function btnCopy(){
    message.select();
    navigator.clipboard.writeText(message.value);
    message.value = "";
    Swal.fire(
        'Texto copiado',
        '¡El texto ha sido copiado!',
        'success'
      )
      document.getElementById('boxText').style.display = ""
      message.style.backgroundImage = ""
}
