
function Generate_Pwd(){
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pwd1 = "";
    for(let i=0;i<=8;i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
   pwd1+= chars.substring(randomNumber, randomNumber +1);
  
  }
  console.log(pwd1);
  document.getElementById('fname').value = pwd1;

}
function copyText(){
   let text=document.getElementById('fname');
   text.select();
   text.setSelectionRange(0,9999);
   navigator.clipboard.writeText(text.value);
   alert("Copied the text : "+ text.value)
}

