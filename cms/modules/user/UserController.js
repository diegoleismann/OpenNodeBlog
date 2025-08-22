const UserModel = require('./UserModel.js')

class UserController{
    constructor(){}

    create(req, res){}

    update(req, res){}

    delete(req, res){}

    getById(req, res){
       const { id } = req.params; 
    }

    getByPage(req, res){
       const { page } = req.params;  
    }

    getBySearch(req, res){

    }
}

export default UserController