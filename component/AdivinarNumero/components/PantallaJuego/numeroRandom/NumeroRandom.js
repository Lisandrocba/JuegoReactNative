export const numeroRandom = (min, max, opciones) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const resultado =  Math.floor(Math.random() * (max - min) +min);
    if(resultado === opciones){
        return numeroRamdom (min, max, opciones)
    }else{
        return resultado;
    }
}