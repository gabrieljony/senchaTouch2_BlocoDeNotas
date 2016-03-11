//Tela 1 do projeto
Ext.define('SenchaTouch2-Seminario.view.PreenchimentoDoFormulario',{
	extend:'Ext.form.Panel',
	alias:'widget.form',
	config:{
		items: [
			{
		        xtype : 'toolbar',
		        docked: 'top',
		        ui:'light',
		        title: 'Sencha Touch2 - Seminário',
		        items:[{
		            	xtype:'spacer',
		            },
		            {
		           	xtype:'button',
		            ui:'back',
		            action:'mudarPainel2',
		            text:'Avançar Tela 2',
		            ui:'forward',
		        }]
		    },
		    {
		    xtype:'fieldset',
		    itemId: 'TituloPreenchimentoDoFormulario',
		    margin: '5 200 10 200',
		    items:[
				    {
				    	xtype:'textfield',
				    	name:'first',
				    	label:'First Name'
				    },
				    {
				    	xtype:'textfield',
				    	name:'last',
				    	label:'Last Name'
				    },
				    {
				    	xtype:'textfield',
				    	name:'email',
				    	label:'E-mail'
				    },
				    {
				    	xtype:'textfield',
				    	name:'adress',
				    	label:'Adress'
				    },
				    {
				    	xtype:'textfield',
				    	name:'city',
				    	label:'City'
				    },
				    {
				    	xtype:'textfield',
				    	name:'state',
				    	label:'State'
				    },
		    	]
			},
			{
				xtype:'button',
				action:'salvarNovoCadastro',
				ui:'confirm',
				text:'Cadastrar',
				margin: '5 550 10 550'
			},
			{
				xtype:'button',
				action:'excluirCadastro',
				ui:'decline',
				text:'Excluir',
				margin: '5 550 10 550',
				hidden: true
			}
	  ]
	}
});