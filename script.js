(function(){
// -------------------------- LOGIN ------------------------------

	// var btn_logon = document.getElementById('btn_logon')
	// var aba_descritiva = document.getElementById('nav-profile-tab')
	// var aba_probabilidade = document.getElementById('nav-contact-tab')
	// var aba_correlacao = document.getElementById('nav-Correl-tab')
	
	// //Logout
	// btn_logon.addEventListener('click',function(){
	// 	window.location ="index.html"
	// })
	 
// ----------------------- FUNCOES ------------------------------
	
	// Destruir Elementos da Página
	function table_destroy(){
		//Apagando as tabelas
		document.getElementById('valoresdiv').innerHTML = ""
		document.getElementById('table_Quali_nomi').innerHTML = ""

		//Apagando Nome da Variável
		document.getElementById('nomeVar').innerHTML = ""
		document.getElementById('nomeVariavel').innerHTML = ""
	}

	// Tipo de estatística descritiva
	function type_desc(type){
		return document.querySelector('.type_desc').innerHTML = type
	}

	// Mensagem de Erros nos formulários
	function showError(classe, mensg){
       var div = document.getElementById('error-messages') 
       div.style.display  ='block'
       // div.className = 'col-md-12 alert alert-warning'
       // div.innerHTML = '<strong>Usuário ou Senha Inválidos!</strong>'
       div.className = classe;
       div.innerHTML = mensg;
       setTimeout(()=>{
          document.getElementById('error-messages').style.display = 'none';
          // document.getElementById('input_user').value = "";
          // document.getElementById('pwd').value = "";
          // document.getElementById('input_user').focus();
       },3000)
 	}	
// --------------------- FIM FUNCOES ------------------------------
 	// Qualitativa Nominal

 	let quali_nominal = document.getElementById('nav-profile-tab')

			quali_nominal.addEventListener('click',function(){
				table_destroy()
				//Recuperando a opção de estatística descritiva
				var quali_nominal_type = document.getElementById('nav-profile-tab').innerHTML
				type_desc(quali_nominal_type)

				var btn_calc_descr = document.getElementById('calc_quali_nomi')

				btn_calc_descr.addEventListener('click', function(){

				//Recupera o Nome da Variável
				var nomeVar = document.getElementById('nomeVar').value;
				
				if(nomeVar != ""){				
				
					var nomeVariavel = document.getElementById('nomeVariavel')

					//Inserindo Nome da variavel na tabela
					nomeVariavel.innerHTML+= "<span class='varName'>" + nomeVar + '</span>'

					//Recupera o que foi digitado na Entrada de Dados
					var dados = document.getElementById('dados').value;

					// separa os valores e insere no vetor
					var vetDiscreta = dados.toString().split(';'); 

					// deixa o vetor na ordem crescente/alfabetica
					vetDiscreta.sort((a,b) => {a - b}) 

					var quantDados ={} ; 

					var acum =0 ;

				
					//Função para alocar a quantidade de cada elemento
					for(let i = 0 ; i < vetDiscreta.length;i++){ //metodo para alocar a quantidade de cada elemento
						
						if(quantDados [vetDiscreta[i] ]){
							quantDados[vetDiscreta[i]]+=1
							acum++
						}else{
							quantDados[vetDiscreta[i]]=1
							acum++
						}			
					}

					for(var chave in quantDados){ // pega as variaveis
						table_Quali_nomi.innerHTML+= `<td> ${chave /*Inserção de variavel na tabela*/}  <td> ${quantDados[chave]/*Insere a quantidade de repetições da variavel*/} <td>${((quantDados[chave]/acum)*100).toFixed(2) /*Insere e calcula a porcentagem de vezes que o elemento foi inserido*/} % <td> <br> `
					}

					document.getElementById('nomeVar').value="";
					document.getElementById('dados').value="";
					document.getElementById('dados').focus();
				
				}else{
					var error_class = 'col-md-12 alert alert-danger'
					var error_messages = "<strong>Campos não preenchidos</strong>"
	                showError(error_class,error_messages)
				}
			})	
	})


	// Qualitativa Ordinal


	//Quantitativa Discreta
	let quant_discreta = document.getElementById('nav-profile-tab3')

			quant_discreta.addEventListener('click',function(){
				table_destroy()
				//Recuperando a opção de estatística descritiva
				quant_discreta_type = document.getElementById('nav-profile-tab3').innerHTML
				type_desc(quant_discreta_type)

				var btn_calc_descr = document.getElementById('calc_disc')

				btn_calc_descr.addEventListener('click', function(){

				//Recupera o Nome da Variável
				var nomeVar = document.getElementById('nomeVar').value;
				
				if(nomeVar != ""){				
				
					var nomeVariavel = document.getElementById('nomeVariavel')

					//Inserindo Nome da variavel na tabela
					nomeVariavel.innerHTML+= "<span class='varName'>" + nomeVar + '</span>'

					//Recupera o que foi digitado na Entrada de Dados
					var dados = document.getElementById('dados').value;

					// separa os valores e insere no vetor
					let vetDiscreta = dados.toString().split(';'); 

					// deixa o vetor na ordem crescente/alfabetica
					vetDiscreta.sort((a,b) => {a - b}) 

					var quantDados ={} ; 

					var acum =0 ;

				
					//Função para alocar a quantidade de cada elemento
					for(let i = 0 ; i < vetDiscreta.length;i++){ //metodo para alocar a quantidade de cada elemento
						
						if(quantDados [vetDiscreta[i] ]){
							quantDados[vetDiscreta[i]]+=1
							acum++
						}else{
							quantDados[vetDiscreta[i]]=1
							acum++
						}			
					}

					for(var chave in quantDados){ // pega as variaveis
						valoresdiv.innerHTML+= `<td> ${chave /*Inserção de variavel na tabela*/}  <td> ${quantDados[chave]/*Insere a quantidade de repetições da variavel*/} <td>${((quantDados[chave]/acum)*100).toFixed(2) /*Insere e calcula a porcentagem de vezes que o elemento foi inserido*/} % <td> <br> `
					}

					document.getElementById('nomeVar').value="";
					document.getElementById('dados').value="";
					document.getElementById('dados').focus();
				
				}else{
					var error_class = 'col-md-12 alert alert-danger'
					var error_messages = "<strong>Campos não preenchidos</strong>"
	                showError(error_class,error_messages)
				}
			})	
	})


	//Quantitativa Continua
})()