//Tela 1 do projeto
Ext.define('Seminario.view.PreenchimentoDoFormulario',{
	extend:'Ext.form.Panel',
	alias:'widget.form',
	config:
		{	
		layout: {
	        type: 'vbox',
	        align: 'center'
	   	},
		items: [
			{
		        xtype : 'toolbar',
		        docked: 'top',
		        ui:'light',
		        title: 'Seminário',
		        items:[{
		            	xtype:'spacer',
		            },
		            {
		           	xtype:'button',
		            ui:'back',
		            action:'mudarPainel2',
		            text:'Avançar',
		            ui:'forward',
		        }]
		    },

		    {
		    xtype:'fieldset',
		    itemId: 'TituloPreenchimentoDoFormulario', //Bloco de notas
		    
		    items:
		    	[
				    {
				    	xtype:'textfield',
				    	name:'form'
				    }
		    	]
			},

			{
				xtype:'button',
				action:'salvarNovoCadastro',
				ui:'confirm',
				text:'Salvar',
				margin: 10,
				padding: 5,
			},

			{
				xtype:'button',
				action:'excluirCadastro',
				ui:'decline',
				text:'Excluir',
				margin: 10,
				padding: 5,
				hidden: true
			},
	  ]
	}
});