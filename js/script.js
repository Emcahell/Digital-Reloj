(function() {
  
    const reloj = () =>{

        let fecha = new Date(),
            hora = fecha.getHours(),
            minuto = fecha.getMinutes(),
            segundo = fecha.getSeconds();
        
        const pHora = document.getElementById("hora"),
            pMinuto = document.getElementById("minuto"),
            pSegundo = document.getElementById("segundo");
          
            if(hora < 10){hora = `0 ${hora}`};
          pHora.textContent = hora;

          if(minuto < 10){minuto = `0 ${minuto}`};
          pMinuto.textContent = minuto;

          if(segundo < 10){segundo = `0 ${segundo}`};
          pSegundo.textContent = segundo;
          
        };

        reloj();
        setInterval(() => {
            reloj();
        }, 1000);

}())