let app = window.app || {},
	business_paypal = ''; // aquí va tu correo electrónico de paypal



	

(function ($) {
	'use strict';

	//no hay conflictos con los guiones bajos

	app.init = function () {
		//totalItems totalAmount
		let total = 0,
			items = 0

		let cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] };

		if (undefined != cart.items && cart.items != null && cart.items != '' && cart.items.length > 0) {
			_.forEach(cart.items, function (n, key) {
				items = (items + n.cant)
				total = total + (n.cant * n.price)
			});

		}

		$('#totalItems').text(items)
		$('.totalAmount').text('$ ' + total)

	}
//conectar json no funciona
	// let productos = ('./datos.json');

	// fetch(productos)
	// .then(res => res.json())
	// .then(data = masVendidos(data))

//conectar json no funciona

	app.masVendidos = function () {
		let productos = [

// array
			{
				"id": 1,
				"img": "https://www.air-intra.com/imgart/HPE064.jpg",
				"name": "MicroServer Gen10",
				"price": 1299.00,
				"desc": "Servidor de nivel básico compacto asequible, pero potente que puedes personalizar de forma local o para las posibilidades que brinda la nube híbrida",
				"stock": 4
			},
			{
				"id": 2,
				"img": "https://www.air-intra.com/imgart/29317.jpg",
				"name": "Notebook DELL 14 INSP 5840",
				"price": 799.00,
				"desc": "Laptop de 14 pulgadas con portabilidad y estilo pulido. Con un borde angosto y una cubierta de aluminio con un diseño delgado.",
				"stock": 2
			},
			{
				"id": 3,
				"img": "https://www.air-intra.com/imgart/25129.jpg",
				"name": "Camara tp-link Cloud nc450",
				"price": 199.00,
				"desc": "El NC450 es su compañero favorable que satisface las necesidades de vigilancia de su hogar y oficina, manteniéndolo en contacto con lo que más le importa.",
				"stock": 10
			},
			{
				"id": 4,
				"img": "https://www.air-intra.com/imgart/36559.jpg",
				"name": "Celular Xiaomi note 7",
				"price": 580.00,
				"desc": "l Redmi Note 7 la estrategia cambia radicalmente y se apuesta por un cuerpo de cristal en la parte trasera protegido por Gorilla Glass 5.",
				"stock": 4
			},
			{
				"id": 5,
				"img": "https://www.air-intra.com/imgart/51488.jpg",
				"name": "Smartwatch Xiaomi Mi Watch",
				"price": 180.00,
				"desc": "Pantalla de alta resolución de 1,39 pulgadas y 326 ppp Soporta Always on Display Notificaciones whatsapp, llamadas, redes sociales, mails, etc Diseño ligero de 32 g.",
				"stock": 41
			},
			{
				"id": 6,
				"img": "https://www.air-intra.com/imgart/53891.jpg",
				"name": "Monitor 32 CX PF236K",
				"price": 680.00,
				"desc": "El nuevo monitor gamer CX PF236R tiene una pantalla curva FHD (1920 x 1080) de 32 pulgadas para jugadores profesionales y aquellos que buscan una experiencia de juego más inmersiva. Con un refresh rate de 144/165HZ no te perderás ningún detalle.",
				"stock": 24
			},
			{
				"id": 7,
				"img": "https://www.air-intra.com/imgart/210072.jpg",
				"name": "Auriculares HAYLOU BC01",
				"price": 80.00,
				"desc": "HAYLOU PurFree Auriculares de conducción ósea Auriculares Deportivos Bluetooth 5.2 de oído Abierto - Auriculares inalámbricos Impermeables IP67 para Entrenamientos y Correr - Gris Negro",
				"stock": 4
			},
			{
				"id": 8,
				"img": "https://www.air-intra.com/imgart/36570.jpg",
				"name": "Tablet 7 Amazon Fire",
				"price": 380.00,
				"desc": "Disfrutá de ver películas, series, programas de tv, leer libros y muchas cosas más con esta Tablet Amazon Fire 7.",
				"stock": 34
			},
			{
				"id": 9,
				"img": "https://www.air-intra.com/imgart/48456.jpg",
				"name": "JBL Flip 5 Bluetooth Rosa",
				"price": 280.00,
				"desc": "Disfruta de un sonido para llevar con el potente Flip 5 de JBL. Nuestro ligero altavoz Bluetooth va adonde quieras.",
				"stock": 24
			}
		],
		
			wrapper = $('.productosWrapper'),
			contenido = ''

		for (let i = 0; i < productos.length; i++) {

			if (productos[i].stock > 0) {

				contenido += '<div class="coin-wrapper">'
				contenido += '		<img src="' + productos[i].img + '" alt="' + productos[i].name + '">'
				contenido += '		<span class="large-12 columns product-details">'
				contenido += '			<h3>' + productos[i].name + ' <span class="price">$ ' + productos[i].price + ' </span></h3>'
				contenido += '			<h3>Tenemos: <span class="stock">' + productos[i].stock + '</span></h3>'
				contenido += '		</span>'
				contenido += '		<a class="large-12 columns btn submit ladda-button prod-' + productos[i].id + '" data-style="slide-right" onclick="app.addtoCart(' + productos[i].id + ');">Añadir a la canasta</a>'
				contenido += '		<div class="clearfix"></div>'
				contenido += '</div>'

			}

		}

		wrapper.html(contenido)

		localStorage.setItem('productos', JSON.stringify(productos))
	}

	// 
	app.createProducts = function () {
		let productos = [
			{
				"id": 5,
				"img": "https://www.air-intra.com/imgart/51488.jpg",
				"name": "Smartwatch Xiaomi Mi Watch Negro",
				"price": 180.00,
				"desc": "Pantalla de alta resolución de 1,39 pulgadas y 326 ppp Soporta Always on Display Notificaciones whatsapp, llamadas, redes sociales, mails, etc Diseño ligero de 32 g.",
				"stock": 41
			},
			{
				"id": 6,
				"img": "https://www.air-intra.com/imgart/53891.jpg",
				"name": "Monitor 32 CX PF236K",
				"price": 680.00,
				"desc": "El nuevo monitor gamer CX PF236R tiene una pantalla curva FHD (1920 x 1080) de 32 pulgadas para jugadores profesionales y aquellos que buscan una experiencia de juego más inmersiva. Con un refresh rate de 144/165HZ no te perderás ningún detalle.",
				"stock": 24
			},
			{
				"id": 7,
				"img": "https://www.air-intra.com/imgart/210072.jpg",
				"name": "Auriculares HAYLOU BC01",
				"price": 80.00,
				"desc": "HAYLOU PurFree Auriculares de conducción ósea Auriculares Deportivos Bluetooth 5.2 de oído Abierto - Auriculares inalámbricos Impermeables IP67 para Entrenamientos y Correr - Gris Negro",
				"stock": 4
			},
		],
			wrapper = $('.masVendidos'),
			contenido = ''

		for (let i = 0; i < productos.length; i++) {

			if (productos[i].stock > 0) {

				contenido += '<div class="coin-wrapper">'
				contenido += '		<img src="' + productos[i].img + '" alt="' + productos[i].name + '">'
				contenido += '		<span class="large-12 columns product-details">'
				contenido += '			<h3>' + productos[i].name + ' <span class="price">$ ' + productos[i].price + ' </span></h3>'
				contenido += '			<h3>Tenemos: <span class="stock">' + productos[i].stock + '</span></h3>'
				contenido += '		</span>'
				contenido += '		<div class="clearfix"></div>'
				contenido += '</div>'

			}

		}

		wrapper.html(contenido)

		localStorage.setItem('productos', JSON.stringify(productos))
	}

	app.addtoCart = function (id) {
		let l = Ladda.create(document.querySelector('.prod-' + id));

		l.start();
		let productos = JSON.parse(localStorage.getItem('productos')),
			producto = _.find(productos, { 'id': id }),
			cant = 1
		if (cant <= producto.stock) {
			if (undefined != producto) {
				if (cant > 0) {
					setTimeout(function () {
						let cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] };
						app.searchProd(cart, producto.id, parseInt(cant), producto.name, producto.price, producto.img, producto.stock)
						l.stop();
					}, 2000)
				} else {
					alert('Solo se permiten cantidades mayores a cero')
				}
			} else {
				alert('Oops! algo malo ocurrió, inténtalo de nuevo más tarde')
			}
		} else {
			alert('No se pueden añadir más de este producto')
		}
	}

	app.searchProd = function (cart, id, cant, name, price, img, available) {
		//si le pasamos un valor negativo a la cantidad, se descuenta del carrito
		let curProd = _.find(cart.items, { 'id': id })

		if (undefined != curProd && curProd != null) {
			//ya existe el producto, aÃ±adimos uno mÃ¡s a su cantidad
			if (curProd.cant < available) {
				curProd.cant = parseInt(curProd.cant + cant)
			} else {
				alert('No se pueden añadir más de este producto')
			}

		} else {
			//sino existe lo agregamos al carrito
			let prod = {
				id: id,
				cant: cant,
				name: name,
				price: price,
				img: img,
				available: available
			}
			cart.items.push(prod)

		}
		localStorage.setItem('cart', JSON.stringify(cart))
		app.init()
		app.getProducts()
		app.updatePayForm()
	}

	app.getProducts = function () {
		let cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] },
			msg = '',
			wrapper = $('.cart'),
			total = 0
		wrapper.html('')

		if (undefined == cart || null == cart || cart == '' || cart.items.length == 0) {
			wrapper.html('<li>Tu canasta está vacía</li>');
			$('.cart').css('left', '-400%')
		} else {
			let items = '';
			_.forEach(cart.items, function (n, key) {

				total = total + (n.cant * n.price)
				items += '<li>'
				items += '<img src="' + n.img + '" />'
				items += '<h3 class="title">' + n.name + '<br><span class="price">' + n.cant + ' x $ ' + n.price + '</span> <button onclick="app.deleteProd(' + n.id + ')" ><i class="icon ion-close-circled"></i></button><div class="clearfix"></div></h3>'
				items += '</li>'
			});

			//agregar el total al carrito
			items += '<li id="total">Total : $ ' + total + ' <div id="submitForm"></div></li>'
			wrapper.html(items)
			$('.cart').css('left', '-500%')
		}
	}

	app.updateItem = function (id, available) {
		//resta uno a la cantidad del carrito de compras
		let cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] },
			curProd = _.find(cart.items, { 'id': id })
		//actualizar el carrito
		curProd.cant = curProd.cant - 1;
		//validar que la cantidad no sea menor a 0
		if (curProd.cant > 0) {
			localStorage.setItem('cart', JSON.stringify(cart))
			app.init()
			app.getProducts()
			app.updatePayForm()
		} else {
			app.deleteProd(id, true)
		}
	}

	app.delete = function (id) {
		let cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] };
		let curProd = _.find(cart.items, { 'id': id })
		_.remove(cart.items, curProd);
		localStorage.setItem('cart', JSON.stringify(cart))
		app.init()
		app.getProducts()
		app.updatePayForm()
	}

	app.deleteProd = function (id, remove) {
		if (undefined != id && id > 0) {

			if (remove == true) {
				app.delete(id)
			} else {
				let conf = confirm('¿Deseas eliminar este producto?')
				if (conf) {
					app.delete(id)
				}
			}

		}
	}

	app.updatePayForm = function () {
		//eso va a generar un formulario dinamico para paypal
		//con los productos y sus precios
		let cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : { items: [] };
		let statics = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_cart"><input type="hidden" name="upload" value="1"><input type="hidden" name="currency_code" value="USD" /><input type="hidden" name="business" value="' + business_paypal + '">',
			dinamic = '',
			wrapper = $('#submitForm')

		wrapper.html('')

		if (undefined != cart && null != cart && cart != '') {
			let i = 1;
			_.forEach(cart.items, function (prod, key) {
				dinamic += '<input type="hidden" name="item_name_' + i + '" value="' + prod.name + '">'
				dinamic += '<input type="hidden" name="amount_' + i + '" value="' + prod.price + '">'
				dinamic += '<input type="hidden" name="item_number_' + i + '" value="' + prod.id + '" />'
				dinamic += '<input type="hidden" name="quantity_' + i + '" value="' + prod.cant + '" />'
				i++;
			})

			statics += dinamic + '<button type="submit" class="pay">Pagar &nbsp;<i class="ion-chevron-right"></i></button></form>'

			wrapper.html(statics)
		}
	}

	$(document).ready(function () {
		app.init()
		app.getProducts()
		app.updatePayForm()
		app.createProducts()
		app.masVendidos()
	})

})(jQuery)

	//llamar fetch para traer los productos  + json
	//recorrer el array
	// push al array
//no funciona

// fetch('datos.json')
// 	.then(response=> response.json())
// 	.then(data=>{
// 		wrapper = $('.productosWrapper'),
// 			contenido = ''
// 		for (let i = 0; i < productos.length; i++) {
// 			if (productos[i].stock > 0) {
// 				contenido += '<div class="coin-wrapper">'
// 				contenido += '		<img src="' + productos[i].img + '" alt="' + productos[i].name + '">'
// 				contenido += '		<span class="large-12 columns product-details">'
// 				contenido += '			<h3>' + productos[i].name + ' <span class="price">$ ' + productos[i].price + ' </span></h3>'
// 				contenido += '			<h3>Tenemos: <span class="stock">' + productos[i].stock + '</span></h3>'
// 				contenido += '		</span>'
// 				contenido += '		<a class="large-12 columns btn submit ladda-button prod-' + productos[i].id + '" data-style="slide-right" onclick="app.addtoCart(' + productos[i].id + ');">Añadir a la canasta</a>'
// 				contenido += '		<div class="clearfix"></div>'
// 				contenido += '</div>'
// 			}
// 		}
// 		wrapper.html(contenido)
// 		localStorage.setItem('productos', JSON.stringify(productos))	
// 	});
//no funciona