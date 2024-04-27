const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img");



//função para pegar o input para fazer o Qr
function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value;


   // console.log(!qrCodeInputValue) ;//validação depois apaga
   if(!qrCodeInputValue)return;
   qrCodeBtn.innerText ="Gerando código...";
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () =>{
     container.classList.add("active");
     qrCodeBtn.innerText = "Código gerado..."
    
    })
   
}

qrCodeBtn.addEventListener("click", ()=>{
    generateQrCode();
    
});

//acionar o evento com a tecla enter
qrCodeInput.addEventListener("keydown", (e) =>{
    if(e.code === "Enter")
    generateQrCode();
    
});

//limpar area do qrCode ao apagar a frase no input
qrCodeInput.addEventListener("keyup", () =>{
    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QrCode";
    }
    
    
});

