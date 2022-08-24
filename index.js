let inputMessage, inputKey;
let encryptedText = [];

let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let nepaliAlphabets=['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त',
                     'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह','क्ष', 'त्र' ,'ज्ञ' ]

let nepaliAlphabetsOther=[ 'ा', 'ि','ी','ु', 'ू', 'ृ', 'ॄ', 'े','ै','ो', 'ौ', 'ँ', 'ं' ]
// console.log(nepaliAlphabetsOther.length)
 

//  console.log(nepaliAlphabets.length)
function handleEncrypt() {
  // console.log("called");
  inputMessage = document.getElementById("plainText").value;
  console.log(inputMessage);
  inputKey = document.getElementById("keyPassed").value;
  // console.log(inputKey);

  encryptPlainText(inputMessage, inputKey);

  function encryptPlainText(inputMessage, inputKey) {
    // console.log("called",inputMessage, inputKey)
    // console.log("called",inputMessage, inputKey)

    for (let eachWord of inputMessage) {
      // console.log(eachWord)
      if (alphabets.includes(eachWord)) {
        for (let i = 0; i < alphabets.length; i++) {
          if (eachWord == alphabets[i]) {
            let shiftedAlphabetIndexValue = (Number(i) + Number(inputKey)) % 26;
            console.log("shifted index value", shiftedAlphabetIndexValue);
            let shiftedText = alphabets[shiftedAlphabetIndexValue];
            // console.log("shiftedText", shiftedText)
            //  console.log('called')
            encryptedText.push(shiftedText);
          }
        }
      } else if (nepaliAlphabets.includes(eachWord)) {
        for (let j = 0; j < nepaliAlphabets.length; j++) {
          if (eachWord == nepaliAlphabets[j]) {
            let shiftedNepaliAlphabetIndexValue =
              (Number(j) + Number(inputKey)) % 36;
            let shiftedTextNepaliAlphabets =
              nepaliAlphabets[shiftedNepaliAlphabetIndexValue];
            encryptedText.push(shiftedTextNepaliAlphabets);
          }
        }
      } else if (nepaliAlphabetsOther.includes(eachWord)) {
        console.log("called");
        for (let k = 0; k < nepaliAlphabetsOther.length; k++) {
          if (eachWord == nepaliAlphabetsOther[k]) {
            let shiftedNepaliAlphabetIndexValue =
              (Number(k) + Number(inputKey)) % 13;
            let shiftedTextNepaliAlphabetsOther =
              nepaliAlphabetsOther[shiftedNepaliAlphabetIndexValue];
            encryptedText.push(shiftedTextNepaliAlphabetsOther);
          }
        }
      }
    }
    window.localStorage.setItem("encryptedMessage",encryptedText.join(""));
    window.localStorage.setItem("inputKey", inputKey)


  }
  

}

  // console.log("Encrypted message is", encryptedText.join(""));
  // let encryptedMessage=encryptedText.join('');



  // Decrypt Message
  // decryptText(encryptedMessage, inputKey);

  function handleDecrypt() {
    let decryptCipherText = [];

    // console.log("called",inputMessage, inputKey)
    // console.log("called",inputMessage, inputKey)
    let encryptedMessage=window.localStorage.getItem("encryptedMessage")
    let inputKey=window.localStorage.getItem("inputKey")
    
    decryptText(encryptedMessage, inputKey)
    function decryptText(encryptedMessage, inputKey){

    
    for (let eachWord of encryptedMessage) {
      // console.log(eachWord)
      if (alphabets.includes(eachWord)) {
        for (let i = 0; i < alphabets.length; i++) {
          if (eachWord == alphabets[i]) {
            let shiftedAlphabetIndexValue = (Number(i) - Number(inputKey)) % 26;
            console.log("shifted index value", shiftedAlphabetIndexValue);
            let shiftedText = alphabets[shiftedAlphabetIndexValue];
            // console.log("shiftedText", shiftedText)
            //  console.log('called')
            decryptCipherText.push(shiftedText);
          }
        }
      } else if (nepaliAlphabets.includes(eachWord)) {
        for (let j = 0; j < nepaliAlphabets.length; j++) {
          if (eachWord == nepaliAlphabets[j]) {
            let shiftedNepaliAlphabetIndexValue =
              (Number(j) - Number(inputKey)) % 36;
            let shiftedTextNepaliAlphabets =
              nepaliAlphabets[shiftedNepaliAlphabetIndexValue];
              decryptCipherText.push(shiftedTextNepaliAlphabets);
          }
        }
      } else if (nepaliAlphabetsOther.includes(eachWord)) {
        console.log("called");
        for (let k = 0; k < nepaliAlphabetsOther.length; k++) {
          if (eachWord == nepaliAlphabetsOther[k]) {
            let shiftedNepaliAlphabetIndexValue =
              (Number(k) - Number(inputKey)) % 13;
            let shiftedTextNepaliAlphabetsOther =
              nepaliAlphabetsOther[shiftedNepaliAlphabetIndexValue];
              decryptCipherText.push(shiftedTextNepaliAlphabetsOther);
          }
        }
      }
    }
    // console.log("Decrypted message is", decryptCipherText.join(''))
  }
  window.localStorage.setItem("decryptedMessage", decryptCipherText.join(''))

  }


  function handleExit(){
    window.localStorage.clear("encryptedMessage")
    window.localStorage.clear("decryptedMessage")
    window.localStorage.clear("inputKey")

  }