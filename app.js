Ext.Loader.setConfig({
	enabled:true
});
Ext.application({
	name:'Seminario',
	views:[
		'PreenchimentoDoFormulario',
		'FormularioLista',
	],
	models:[
		'Formulario'
	],
	controllers: [
		'Main'
	],
	stores:[
		'Formularios'
	],
	viewport:{
		layout:{
			type:'card',
			animation:{
				type:'slide',
				duration: 300
			}
		}
	},
	launch: function()
	{
		//passa as classes criadas Painel1 e Painel2
		//Ext.Viewport.add(Ext.create('Seminario.view.FormularioLista'));
	}
});