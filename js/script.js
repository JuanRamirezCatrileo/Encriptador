const ingresotexto = document.getElementById("ingresotexto");

const botonencriptar= document.getElementById("botonencriptar");

const botoncopiar= document.getElementById("botoncopiar");

const botondesencriptar= document.getElementById("botondesencriptar");

const mensajefinal = document.getElementById("mensajefinal");

const muneco = document.getElementById("muneco");

const info = document.getElementById("info");

const right = document.getElementById("right");

let remplazar =[

    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],

]

const remplace = (nuevotexto) =>{
    mensajefinal.innerHTML= nuevotexto;
    
    muneco.classList.add ("oculto");

    info.style.display= "none";

    botoncopiar.style.display="block";

    right.classList.add("ajustar");

    mensajefinal.classList.add("ajustar");

    ingresotexto.value = "";


};

const reset = () => {
    mensajefinal.innerHTML = "";
    muneco.classList.remove ("oculto");
    info.style.display= "block";
    botoncopiar.style.display="none";
    right.classList.remove("ajustar");
    mensajefinal.classList.remove("ajustar");
    ingresotexto.focus();
}

botonencriptar.addEventListener("click", ()=> {

    const texto = ingresotexto.value.toLowerCase();

        if (texto != ""){
                function encriptar (newtexto){
                    for (let i = 0; i < remplazar.length; i ++){
                        if (newtexto.includes(remplazar[i][0])){
                            newtexto = newtexto.replaceAll(remplazar[i][0], remplazar[i][1]);
                        };
                    };
                    return newtexto;
                };
   
        }else {
            alert ("Ingrese texto a encriptar"),
            reset();
        }
        remplace(encriptar(texto))
    
});

botondesencriptar.addEventListener("click", ()=> {

        const texto = ingresotexto.value.toLowerCase();
        if(texto != ""){      
            function desencriptar(newtexto){
                for (let i = 0 ; i < remplazar.length;  i++){
                    if (newtexto.includes(remplazar[i][1])){
                        newtexto = newtexto.replaceAll(remplazar[i][1],remplazar[i][0]);
                    };   
                };
                return newtexto;
            };
        } else {
            alert("Ingrese texto a Desencriptar");
            reset();
        }
       remplace(desencriptar(texto))
});

botoncopiar.addEventListener("click", () => {
    let texto = mensajefinal;
    texto.select();
    document.execCommand('copy')

    alert("Texto Copiado");
    
    reset();


})









