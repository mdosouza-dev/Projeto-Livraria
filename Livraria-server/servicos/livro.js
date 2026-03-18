const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado
    // [{id: 2, nome: "Livro Top"}]
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivros (modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

}

function removedorDeLivros(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const removeLivros = livros.filter(livros => livros.id != id)

    fs.writeFileSync("livros.json", JSON.stringify(removeLivros, null, 2))

}


module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivros,
    removedorDeLivros
}