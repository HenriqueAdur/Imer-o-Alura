function pesquisar() {
    // console.log(dados);
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Digite o nome de um artista ou banda</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultado = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        if (titulo.includes(campoPesquisa)) {
            resultado += `
            <div class="item-resultado">
                            <h2>
                            <a href="" target="_blank">${dado.titulo}</a>
                            </h2>
                            <p class="descricao-meta"> RESUMO : ${dado.descricao}</p>
                            <p class="descricao-meta">Genero : ${dado.genero}</p>
                            <p class="descricao-meta">ACORDES : ${dado.acordes}</p>
                             <p class="descricao-meta">SEQUENCIA ACORDES : ${dado.sequencia}</p>
                            <A href="${dado.linkm}" target="_blank">Link Musica</A>
                             <p class="descricao-meta"></p>
                            <A href="${dado.linkc}" target="_blank">Link Cifra</A>
                        </div>
            `
        }
        if (!resultado) {
            resultado = "<p>Nada foi encontrado</p>"

        }
        section.innerHTML = resultado
    }
}
