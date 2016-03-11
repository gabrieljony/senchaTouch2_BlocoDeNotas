Ext.define('SenchaTouch2-Seminario.view.FormularioLista',{
	extend:'Ext.dataview.List',
	alias:'widget.formulariolista',
	config:{
		store:'Formularios',
		itemTpl: '{first} - {last}',
		onItemDisclosure: true,
		items: [{
	        xtype : 'toolbar',
	        docked: 'top',
	        ui:'light',
	        title: 'LISTA DE CONTATOS',
	        items:[{
	           	xtype:'button',
	            action:'mudarPainel1',
	            text:'New Contact',
	        }]
	    }]
	}
});