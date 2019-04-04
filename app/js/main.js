(function () {
   function nombrar(nombre) {
       return nombre;
   } 
   function saludar(nombre) {
       console.info(nombre, ', Un saludo desde DO podcast');
       
   }
   saludar(nombrar('juan'));
})();