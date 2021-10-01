function Get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(atividade){
	console.log(atividade)
	linha = document.createElement("tr");
	tdatividade = document.createElement("td");
	tdhora = document.createElement("td");
	
	tdatividade.innerHTML = atividade.atividade
	tdhora.innerHTML = atividade.hora
	
	linha.appendChild(tdatividade);
	linha.appendChild(tdhora);
	
	return linha;
	
}

function main(){
	let data = Get("https://run.mocky.io/v3/cb450a98-68bc-4d18-8958-c3cb4f6ae457")	
	let atividade = JSON.parse(data);
	let tabela = document.getElementById("tabela")
	atividade.forEach(element => {
		let linha = criarLinha(element);
		tabela.appendChild(linha);
	});
}

main()