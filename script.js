window.onload = function(){
    let who = ['El gato','Mi tia','Mi Mascota','El cartero','La Mana'];
    let action = ['se comio','aplasto','robo','rompio', 'ensucio'];
    let what =['Mi lagartija', 'mi helado', 'mi tarea', 'mi chimuelo']
    let when = ['justo cuando termine','mientras desayunaba','mientas me duchaba'];
        
        
         var rdm1 = Math.floor((Math.random() * who.length) );
         var rdm2 = Math.floor((Math.random() * action.length) );
         var rdm3 = Math.floor((Math.random() * what.length) );
         var rdm4 = Math.floor((Math.random() * when.length) );
        
        
        
          document.querySelector('#theexcuse').innerHTML =who[rdm1] + ' ' + action[rdm2] + ' '+ what[rdm3] + ' ' + when[rdm4]; 
          
        
      }