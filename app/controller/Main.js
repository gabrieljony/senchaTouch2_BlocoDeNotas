Ext.define('Seminario.controller.Main',{
	//qual classe esta herdando
	extend:'Ext.app.Controller',
	config:{
		//routes são "enroutes" do nosso controler, mapeia de acordo com uma determinada url executar uma determinada coisa
		//fica dentro do controle
		//fz a rota do seu controle e mapeia uma determinada url para uma determinada função
		routes:{
			'':'showPreenchimentoDoFormulario',
			'index.html':'showPreenchimentoDoFormulario'
		},
		refs:{
			PreenchimentoDoFormulario:{
				xtype:'form',
				selector:'form',
				autoCreate: true
			},
			FormularioLista:{
				xtype:'formulariolista',
				selector:'formulariolista',
				autoCreate: true
			},
			btnSalvarNovoCadastro:'button[action=salvarNovoCadastro]',
			BtnExcluirCadastro:'button[action=excluirCadastro]',
			TituloPreenchimentoDoFormulario:'#TituloPreenchimentoDoFormulario'						
		},
		//responsavel para captar e controlar os eventos
		control:{
				'button[action=mudarPainel1]':{
					tap:'showPreenchimentoDoFormulario'
				},
				'button[action=mudarPainel2]':{
					tap:'showFormularioLista'
				},
				FormularioLista:{
					itemtap:'showPreenchimentoDoFormulario'
				},
				btnSalvarNovoCadastro:{
					tap:'salvarNovoCadastro'
				},
				BtnExcluirCadastro:{
 					tap:'excluirCadastro'
				}
		}
		
	},
	showPreenchimentoDoFormulario: function(view, index, target, record, evt, opts){
		if(record && record.data){
			this.getPreenchimentoDoFormulario().setRecord(record);
			this.getTituloPreenchimentoDoFormulario().setTitle('Atualizar o que digitou?');
			this.getBtnExcluirCadastro().show();
		}else{
			this.getPreenchimentoDoFormulario().reset();
			this.getPreenchimentoDoFormulario().setRecord(null);
			this.getTituloPreenchimentoDoFormulario().setTitle('Bloco de Notas:');
			this.getBtnExcluirCadastro().hide();
		}
		Ext.Viewport.setActiveItem(this.getPreenchimentoDoFormulario());
		//console.log(Ext.Viewport.getInnerItems());
	},
	showFormularioLista: function(button){
		Ext.Viewport.setActiveItem(this.getFormularioLista());
	},
	salvarNovoCadastro: function(button){
		var form = this.getPreenchimentoDoFormulario();
			cadastro = Ext.create('Seminario.model.Formulario', this.getPreenchimentoDoFormulario().getValues());
			store = Ext.getStore('Formularios');
			if(form.getRecord()!==null){
				var record = store.findRecord('id', form.getRecord().getId());
				record.set(form.getValues());
				console.log('Editando cadastro com sucesso');
			}else{
				store.add(cadastro);
				console.log('Novo cadastro realizado');
			}
		this.showFormularioLista();
	},
	excluirCadastro: function(){
					Ext.getStore('Formularios').remove(this.getPreenchimentoDoFormulario().getRecord());
					this.showFormularioLista();
	}
});