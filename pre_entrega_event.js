let ingreseNombre = prompt("Por favor ingrese nombre");

function ingreso() {
    alert("¡Bienvenido a 'Big Coffe' " + " " + ingreseNombre + "!") ;
}

ingreso();




            // OBJETOS DE CAFETERIA //

const objCafeteria = {
    cafe: "Café c/s leche doble $120 \n" ,
    precioCafe: 120,

    matecocido: "Matecocido o té, $100 \n",
    precioMatecocido: 100,

    capuccino:  "Capuccino $140 \n",
    precioCapuccino: 140,
    
    medialunas: "Medialunas dulces/saladas $80 c/u \n",
    precioMedialunas: 80,
    
    tostado:     "Tostado $300 \n",
    precioTostado: 300,

    carlitoComun: "Carlito común $350 \n",
    precioCarlitoComun: 350,

    carlitoEspecial: "Carlito especial $450 \n",
    precioCarlitoEspecial: 450
            
}

        // OBJETOS DE PROMOS //

const objPromos = {
    prom0:  "Café con leche + 2 medialunas $220 \n",
    precioProm0: 220,
        
    prom1:  "Café con leche + tostadas de campo $300 \n",
    precioProm1: 300,
        
    prom2: "Café con leche + tostado + jugo de naranja $390 \n",
    precioProm2: 390
        
          
}







const resultadoPedidos = [];
const resultadoPromos = [];

let preguntasPrimeras = document.getElementById("preguntas_primeras")
    preguntasPrimeras.innerHTML = "Por favor de las siguientes opciones elegir lo que desea hacer";
    


        // CLICK CAFETERIA //
    let ver_cafeteria = document.getElementById("ver_cafeteria");
    ver_cafeteria.addEventListener("click", pulsaCafeteria)

function pulsaCafeteria (){
    document.getElementById("cafeteria").style.display = 'flex';
    document.getElementById("menu").style.display = 'none';
}



        // CLICK CAFE //

        let btn_cafe = document.getElementById("cafe");
        btn_cafe.addEventListener("click", clickCafe);

        function clickCafe () {
         resultadoPedidos.push(objCafeteria.cafe);
        }       

        // CLICK MATECOCIDO //
        let btn_matecocido = document.getElementById("matecocido");
        btn_matecocido.addEventListener("click", clickMatecocido);

        function clickMatecocido() {
            resultadoPedidos.push(objCafeteria.matecocido);
        }

        // CLICK CAPUCCINO //
        let btn_capuccino = document.getElementById("capuccino");
        btn_capuccino.addEventListener("click", clickCapuccino);

        function clickCapuccino(){
            resultadoPedidos.push(objCafeteria.capuccino);
        }

        // CLICK MEDIALUNAS //
        let btn_medialunas = document.getElementById("medialunas");
        btn_medialunas.addEventListener("click", clickMedialunas);

        function clickMedialunas() {
            resultadoPedidos.push(objCafeteria.medialunas);
        }

        // TOSTADO //
        let btn_tostado = document.getElementById("tostado");
        btn_tostado.addEventListener("click", clickTostado);

        function clickTostado() {
            resultadoPedidos.push(objCafeteria.tostado);
        }

        // CARLITO COMUN //
        let btn_calrlito_cm = document.getElementById("carlito_cm");
        btn_calrlito_cm.addEventListener("click", clickCarlitoCm);

        function clickCarlitoCm() {
            resultadoPedidos.push(objCafeteria.carlitoComun);
        }

        // CARLITO ESPECIAL //
        let btn_carlito_esp = document.getElementById("carlito_esp");
        btn_carlito_esp.addEventListener("click", clickCarlitoEsp);

        function clickCarlitoEsp() {
            resultadoPedidos.push(objCafeteria.carlitoEspecial);
        }





                // CLICK PROMOS //

       let ver_promos = document.getElementById("ver_promos");
       ver_promos.addEventListener("click", pulsaPromos)
   
        function pulsaPromos (){
            document.getElementById("promos").style.display = 'flex';
            document.getElementById("menu").style.display = 'none';
   }
   
       // CLICK PROMO 1 //
       let btn_prom1 = document.getElementById("prom1");
       btn_prom1.addEventListener("click", clickProm1);
       
       function clickProm1() {
        resultadoPedidos.push(objPromos.prom0);
       }

        // CLICK PROMO 2 //
        let btn_prom2 = document.getElementById("prom2");
        btn_prom2.addEventListener("click", clickProm2);
        
        function clickProm2() {
            resultadoPedidos.push(objPromos.prom1);
        }
 

         // CLICK PROMO 3 //
       let btn_prom3 = document.getElementById("prom3");
       btn_prom3.addEventListener("click", clickProm3);
       
       function clickProm3() {
        resultadoPedidos.push(objPromos.prom2);
       }



        // VOLVER ATRAS //

        function volverAtras (){
            document.getElementById("menu").style.display = 'flex';
            document.getElementById("cafeteria").style.display = 'none';
            document.getElementById("promos").style.display = 'none';
        }
        

        // CARRITO //

        let btn_carrito = document.getElementById("ver_carrito");
        btn_carrito.addEventListener("click", carrito);

        function carrito() {
            
            alert(resultadoPedidos);   
        }

     








  
   