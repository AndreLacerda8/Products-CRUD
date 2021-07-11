const db = require('./db')

module.exports = {
    async create(req, res){

        if(req.body.productName == '' ||
            req.body.productName.trim() == '' ||
            req.body.price == '' ||
            req.body.image == '' ||
            req.body.image.trim() == ''){
                return res.send('Preencha todos os campos') 
        }

        if(Number(req.body.price) < 0){
            return res.send('Coloque um valor positivo')
        }

        try {
            await db.collection('produtos').add({
                name: req.body.productName,
                price: req.body.price,
                image: req.body.image
            })
            
            res.send('Produto criado com Sucesso!')
        } catch (error) {
            console.log(error)
            res.send('Algo deu errado!')
        }
    },

    async read(req, res){
        try {
            const products = await db.collection('produtos').get()
            const result = []
            products.forEach((product) => {
                const finalProduct = product.data()
                finalProduct.id = product.id
                result.push(finalProduct)
            })
            res.send(result)
        } catch (error) {
            res.send('Algo deu errado!')
        }
    },

    async update(req, res){
        if(req.body.productName == '' ||
            req.body.price == '' ||
            req.body.image == ''){
                return res.send('Preencha todos os campos') 
        }

        if(req.body.productId == '') return res.send('Algo deu errado, tente novamente!')

        try {
            const currentProduct = await db.collection('produtos').doc(req.body.productId)
            await currentProduct.update({
                name: req.body.productName,
                price: req.body.price,
                image: req.body.image
            })
            
            res.send('Produto atualizado com Sucesso!')
        } catch (error) {
            console.log(error)
            res.send('Algo deu errado!')
        }
    },

    async delete(req, res){
        if(req.body.productId == '') return res.send('Algo deu errado, tente novamente!')

        try {
            await db.collection('produtos').doc(req.params.id).delete()
            res.send('Produto deletado com Sucesso!')
        } catch (error) {
            console.log(error)
            res.send('Algo deu errado!')
        }
    }
}