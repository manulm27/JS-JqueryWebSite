$(document).ready(function(){

/*NOTA: este codigo JS es usado por multiples archivos html, de manera que parte del codigo contara con
  condicionales para que en algunos casos se ejecute es trozo de codigo y en otros no.*/

//Slider

//Condicion con metodo de busqueda de un valor especificado en la llamada a la url (window.location.href)
  if(window.location.href === 'https://manulm27.github.io/developInGit/'){
	$('.slider').bxSlider({
		mode: 'fade',
		captions: true,
		slideWidth: 1200,
		pager: false
	});
};

//Contenido de la pagina (Post) en formato JSON

  if(window.location.href.indexOf === 'https://manulm27.github.io/developInGit/'){
    var posts = [
        {
        	title: 'Practica JS 1',
        	date: 'Publicado el: '+moment().format('LLL'),
        	content: 'Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la mezcló para hacer un libro de muestras tipo. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus PageMaker que incluye versiones de Lorem Ipsum.'
        },
        {
        	title: 'Practica JS 2',
        	date: 'Publicado el: '+moment().format('LLL'),
        	content: 'Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la mezcló para hacer un libro de muestras tipo. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus PageMaker que incluye versiones de Lorem Ipsum.'
        },
        {
        	title: 'Practica JS 3',
        	date: 'Publicado el: '+moment().format('LLL'),
        	content: 'Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la mezcló para hacer un libro de muestras tipo. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus PageMaker que incluye versiones de Lorem Ipsum.'
        },
        {
        	title: 'Practica JS 4',
        	date: 'Publicado el: '+moment().format('LLL'),
        	content: 'Lorem Ipsum es simplemente un texto ficticio de la industria de impresión y composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando una impresora desconocida tomó una galera de tipo y la mezcló para hacer un libro de muestras tipo. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de las hojas de Letraset que contienen pasajes de Lorem Ipsum, y más recientemente con software de publicación de escritorio como Aldus PageMaker que incluye versiones de Lorem Ipsum.'
        },
	];

	posts.forEach((element, index) => {

     //Plantilla HTML en JS
        var contenido = `
                 <article class="post2">
	        			<h2>${element.title}</h2>
	        			<span class="date">${element.date}</span>
	        			<p>
	        			  ${element.content}
	        			</p>
	        			<a href="" class="boton-more">Leer mas...</a>
	        		 </article><br>
                `;

       $('#post').append(contenido)

    });
};

//Cambiador de temas

    var themes = $('#Themes')

    $('#orange').click(function(){
        themes.attr("href", "Css/Styleorange.css")
        localStorage.setItem("href", "Css/Styleorange.css")
    })

    $('#blue').click(function(){
        themes.attr("href", "Css/Styleblue.css")
        localStorage.setItem("href", "Css/Styleblue.css")
    })

        var tema = localStorage.getItem("href")
        themes.attr("href", tema)

//Scroll-top (subir al principio de la pagina)

   $('.scroll-top').click(function(none){
    none.preventDefault()

     $('html, body').animate({
        scrollTop: 0
     }, 500);

   })

//Login de prueba

   $('#login form').submit(function(){

       var name = $('#login_name').val()
      if(name.length > 0){
         var set_name = localStorage.setItem("login_name", name)
         window.reload()
     }else{
        alert("Introduce los datos correctamente.")
     };

   });

       var get_name = localStorage.getItem("login_name");

      if(get_name != null){
        var login = $('#login');
        login.html("Bienvenido "+"<strong>"+get_name+"</strong><br><br>");
        login.append("<a href='#' id='logout'>Cerrar sesión</a>")
    };

    $('#logout').click(function(){
        localStorage.removeItem("login_name")
        location.reload()
    })

//Acordeon

   if(window.location.href.indexOf('Sobre') > -1){
     $('#Acordeon').accordion()
   }

//Reloj

   if(window.location.href.indexOf('Reloj') > -1){

     setInterval(function(){
        $('#date').html(moment().format('hh:mm:ss a'));
    }, 1000);

   };

//Validacion formulario de contacto
   if(window.location.href.indexOf('Contacto') > -1){

    $('form input[name="year"]').datepicker({
        dateFormat:"dd/mm/yy"
    })

    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
    });

    $('#calendar').datepicker()

   };


});

