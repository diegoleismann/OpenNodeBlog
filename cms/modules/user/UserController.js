const passwordHash = require('../core/passwordHash.js');
const UserModel = require('./UserModel.js')

class UserController {
  constructor() { }

  async create(req, res){
    const {
      name,
      email,
      password,
      image,
      status,
      role_id,
    } = req.body;
    const User = new UserModel({
      name,
      email,
      password: passwordHash(password),
      image,
      status,
      role_id,
    })
    try{
      const created = await User.save()
      created.password="";
      res.json({created});
    }catch(err){
      console.log(err);
      res.json({err:'connection'});
    }
  }

  async update(req, res) { 
    const { id } = req.params;
    const {
      name,
      email,
      role_id,
    } = req.body;

    const update = {
      name,
      email,
      role_id,
    }

    await UserModel.findByIdAndUpdate(id, { $set: update})
    const updated = await UserModel.findOne({"_id":id});
    updated.password="";
    res.json({updated});
  }

  async delete(req, res) { 
    const { id } = req.params;
    const User = await UserModel.findOne({"_id":id});
    User.status = 'inactive'
    User.save();
    User.password="";
    res.json({user: User});
  }

  async getById(req, res) {
    const { id } = req.params;
    const User = await UserModel.findOne({"_id":id, 'status':'active'});
    User.password="";
    res.json({user: User});
  }

  async getByPage(req, res) {
    const { page } = req.params;
    const limit = 10;
    const skip = page * limit
    const userList = await UserModel.find({'status': 'active'})
    .skip(skip)
    .limit(limit)
    .exec()
    
    const total = await UserModel.countDocuments();
    const userFormated = userList.map(item=>{
      item.password="";
      return item;
    })
    res.json({users: userFormated, total, page: Number(page)});
  }

  getBySearch(req, res) {

  }
}

module.exports = UserController;