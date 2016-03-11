Ext.define('Seminario.store.Formularios',{
	extend:'Ext.data.Store',
	config:{
		layout: {
	        type: 'vbox',
	        align: 'center'
	   	},
		model:'Seminario.model.Formulario',
		proxy:{
			type:'localstorage',
			id:'SenchaTouch2-Seminario'
		},
		autoLoad: true,
		autoSync:true
	}
});