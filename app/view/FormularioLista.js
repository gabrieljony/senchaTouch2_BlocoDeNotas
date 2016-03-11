Ext.define('Seminario.view.FormularioLista',{
	extend:'Ext.dataview.List',
	alias:'widget.formulariolista',
	config:{
		store:'Formularios',
		itemTpl: '{form}',
		items: [{
	        xtype : 'toolbar',
	        docked: 'top',
	        ui:'light',
	        title: 'Seminário',
	        items:[{
	           	xtype:'button',
	            action:'mudarPainel1',
	            text:'Voltar',
	        }]
	    }]
	}
});