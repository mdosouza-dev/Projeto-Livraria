const { 
    getTodosLivrosFavoritos, 
    insereLivrosFavoritos, 
    deletaFavoritosPorId 
} = require("../servicos/favorito")

function getFavoritos(req, res) {
    try {
        const Livros = getTodosLivrosFavoritos()
        res.send(Livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res){
        try {
            const id = req.params.id
            insereLivrosFavoritos(id)
            res.status(201)
            res.send("livro inserido com sucesso")
        }catch (error) {
            res.status(500)
            res.send(error.message)
        }

    }
    

function deleteFavorito(req, res){
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaFavoritosPorId(id)
            res.status(200)
            res.send("Item removido com sucesso")
        }else{
            res.status(422)
            res.send("Id Inválido")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    deleteFavorito,
    getFavoritos,
    postFavorito
}