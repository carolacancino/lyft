var paises = [
	{
		nombre: "Chile",
		prefijo: "+569",
		bandera: "images/bandera_chile.png"
	},
	{
		nombre: "Peru",
		prefijo: "+519",
		bandera: "images/peru.png"
	},
	{
		nombre: "Mexico",
		prefijo: "+529",
		bandera: "images/bandera_mexico.png"
	},
	{
		nombre: "Canada",
		prefijo: "+550",
		bandera: "images/canada.png"
	},
	{
		nombre: "United Kingdom",
		prefijo: "+666",
		bandera: "images/UnitedKingdom.png"
	},
	{
		nombre: "Francia",
		prefijo: "+777",
		bandera: "images/Bandera_de_Francia"
	}
];

// traerme el nombre del pais desde localStorage
var nombre_pais = window.localStorage.getItem("nombre_pais") || "Chile";

// recuperar el objeto pais, desde el arreglo de paises
var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == nombre_pais) {
		pais = paises[i];
		break;
	}
}
// solo queda modificar el DOM
$('#pais img').attr('src', pais.bandera);
$('#prefijo').html(pais.prefijo);