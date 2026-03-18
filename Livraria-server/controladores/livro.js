const { getTodosLivros, getLivroPorId, insereLivro, modificaLivros, removedorDeLivros } = require("../servicos/livro")


function getLivros(req, res) {
    try {
        const Livros = getTodosLivros()
        res.send(Livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

function getLivroId(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            // Number(2) -> 2 -> True
            //Number("Batata") -> NaN -> False
            const livro = getLivroPorId(id)
            res.send(livro)
        } else{
            res.status(422)
            res.sen("Id Inválido")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

function postLivro(req, res){
    try {
        const livroNovo = req.body
        if (req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("livro inserido com sucesso")
        }else{
            res.status(422)
            res.send("Campo nome é OBRIGATÓRIO")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function patchLivro(req, res){
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            modificaLivros(body, id)
            res.send("item alterado com sucesso")
        }else{
            res.status(422)
            res.send("Id Inválido")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try {
        const id = req.params.id

        if (id && Number(id)) {
            removedorDeLivros(id)
            res.status(200)
            res.send("Item removido com sucesso")
        }else{
            res.status(422)
            res.send("Id Inválido")
        }
        
    } catch (error) {
        req.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivroId,
    postLivro,
    patchLivro,
    deleteLivro
}
