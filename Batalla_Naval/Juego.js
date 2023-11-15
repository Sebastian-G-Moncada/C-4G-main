class Juego{

    constructor(dimensionTablero,nombre){
        this.dimensionTablero = dimensionTablero;
        this.nombre = nombre;
        this.nombreBot = "C#";
        this.generarTablero(dimensionTablero); //Variable global del tablero
    }

    generarTablero(dimensionTablero){
        //llamar el tablero
        let tablero = [];
        let tableroBot = [];
                for(let i = 0; i < dimensionTablero; i++){   
                    tablero.push(0);
                    tableroBot.push(0);
                }     
                console.log("--Tablero jugador "+ this.nombre+"--");
                console.log(tablero);
                console.log("**Tablero bot "+this.nombreBot+"**");
                console.log(tableroBot);
                this.tablero = tablero;
                this.tableroBot = tableroBot;
                // return tablero;
    }
    
    ingresarBarco(){
        //acomodar barcos
        //llamar el tablero desde el constructor
        let tablero = this.tablero;
        let resultado = this.dimensionTablero -1;
        let numBarcos = 5;
        //contar el tamano del tablero
        let tamanioTablero = tablero.length;
        for(let i =0; i < numBarcos;i++ ){
            let lugarBarco = prompt("--Ingresa tu Barco al tablero contando el numero 0 hasta el numero " + resultado+"--");
            if (tamanioTablero > lugarBarco ) {
                if(tablero[lugarBarco]==1){
                    alert("--Esta casilla se encuentra ocupada--");
                    i--
                }else if(tablero[lugarBarco]==0){  
                tablero[lugarBarco]=1;
                }
            }else{
                alert("--No puedes insertar en esta Casilla es Mayor a la dimension del tablero--");
                i--
            }
        }
        console.log("--Bien Hecho , asi queda tu tablero "+ this.nombre+"--");
        console.log(tablero);
    }  

    ingresarBarcoBot(){
        let tableroBot = this.tableroBot;
        // console.log("arreglo desde IngresarBarcoBot");
        // console.log(tableroBot);
        let tamanioTablero = tableroBot.length -1;
        console.log("**Tablero vacio del bot " + this.nombreBot+"**");
        console.log(tableroBot);
        for(let i =0 ; i < 5 ; i++){
            let num = this.numeroAleatorio(1,tamanioTablero);
            if(tableroBot[num]==1){
                 i--
            }else if(tableroBot[num]==0){   
                 tableroBot[num]=1;
                var newTableroBot = tableroBot;
            }
        }
        console.log("**Se a generado el tablero del Bot " + this.nombreBot+"**");
        console.log(newTableroBot);
    }


    numeroAleatorio(x,y){
        return Math.floor(Math.random()*(y-x+1)+x);
        }

    disparar(){
        let tablero = this.tablero;
        let tableroBot = this.tableroBot;
        console.log("--Tablero antes de que se realice el disparo del jugador " +this.nombre+ " a bot "+this.nombreBot+"--");
        console.log(tableroBot);
        //let tablero = this.tablero;
        //tamanio del tablero
        let ingresar = prompt("--Ingresa la coordenada donde desea disparar el Jugador "+this.nombre+ " al Bot--");
            if(tableroBot[ingresar]==0){
                tableroBot[ingresar]=2;
                alert("--Disparaste en una casilla vacia (agua)--")   
            }else if(tableroBot[ingresar]==1){
                tableroBot[ingresar]=3;
                alert("--Disparaste en una casilla con un barco--");
            }else if(tableroBot[ingresar]==2){
                alert("--Ya disparaste en esta casilla--");
            }else if(tableroBot[ingresar]==3){
                alert("--En esta casilla se encuentra un barco hundido--");
            }
            console.log("--Tablero despues de disparar el Jugador al bot--");
            console.log(tableroBot);

        //Bucle para que el bot y el jugador disparen hasta que se hundan todos los barcos
        while(tableroBot.includes(1) && tablero.includes(1)){
            //Disparo del bot
            let disparoBot = Math.floor(Math.random() * tablero.length);
            if(tablero[disparoBot]==0){
                tablero[disparoBot]=2;
                alert("**Disparaste en una casilla vacia (agua) " +this.nombreBot+" **");
            }else if(tablero[disparoBot]==1){
                tablero[disparoBot]=3;
                alert("**Disparaste en una casilla con un barco " +this.nombreBot+" **");
            }else if(tablero[disparoBot]==2){
                alert("**Ya disparaste en esta casilla " +this.nombreBot+"**");
            }else if(tablero[disparoBot]==3){
                alert("**En esta casilla se encuentra un barco hundido "+this.nombreBot+" **");
            }
            console.log("**Tablero despues de que disparara "+this.nombreBot+"**");
            console.log(tablero);
            //Disparo del jugador
            ingresar = prompt("--Ingresa la coordenada donde desea disparar " +this.nombre+ " al Bot--");
            if(tableroBot[ingresar]==0){
                tableroBot[ingresar]=2;
                alert("--Disparaste en una casilla vacia (agua) "+this.nombre+"--")   
            }else if(tableroBot[ingresar]==1){
                tableroBot[ingresar]=3;
                alert("--Disparaste en una casilla con un barco "+this.nombre+"--");
            }else if(tableroBot[ingresar]==2){
                alert("--Ya disparaste en esta casilla "+this.nombre+" --");
            }else if(tableroBot[ingresar]==3){
                alert("--En esta casilla se encuentra un barco hundido "+this.nombre+"--");
            }
            console.log("--Tablero despues de disparar el Jugador "+this.nombre+"--");
            console.log(tablero);
        }// Ganador
        if(tableroBot.includes(1)==false){ //Includes devuelve true si el elemento está en el array
            alert("--El Jugador "+this.nombre+" ha ganado--");
        }else if(tablero.includes(1)==false){
            alert("**El Bot "+this.nombreBot+" ha ganado**");
        }
    
    }
}


 
