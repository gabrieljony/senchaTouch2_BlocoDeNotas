Ext.define('SenchaTouch2-Seminario.store.Formularios',{
	extend:'Ext.data.Store',
	config:{
		model:'SenchaTouch2-Seminario.model.Formulario',
		proxy:{
			type:'localstorage',
			id:'SenchaTouch2-Seminario'
		},
		autoLoad: true,
		autoSync:true
	}
});