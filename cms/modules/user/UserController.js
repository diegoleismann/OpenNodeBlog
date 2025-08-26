const passwordHash = require('../core/passwordHash.js');
const UserModel = require('./UserModel.js')
const SessionModel = require('../session/SessionModel.js')
const { cipher } =require('../../modules/core/encript.js');
const RandomString = require('../core/randomString.js');
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

    await UserModel.findByIdAndUpdate(id, {update})
    const updated = await UserModel.findOne({"_id":id});
    updated.password="";
    res.json({updated});
  }

  async delete(req, res) { 
    const { id } = req.params;
    const User = await UserModel.findOne({"_id":id});
    if(User){
      User.status = 'inactive'
      User.save();
      User.password="";
      res.json({user: User});
    }else{
      res.json({error:'userNotFound'})
    }
    
  }

  async getById(req, res) {
    const { id } = req.params;
    const User = await UserModel.findOne({"_id":id, 'status':'active'});
    if(User){
      User.password="";
      res.json({user: User});
    }else{
      res.json({error:'userNotFound'})
    }
    
  }

  async getByPage(req, res) {
    let { page } = req.params;
    const limit = 10;
    const skip = Number(page) * limit
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

  async auth(req, res){
    const { email, password} = req.body;
    
    const query = {
      email,
      password: password ? passwordHash(password) : '-'
    }
    const User = await UserModel.findOne(query);
    if(User){
      User.password="";
      const Session = new SessionModel({user_id: User._id, token: RandomString()})
      const session_created = Session.save();
      if(session_created){
        const AccessToken = cipher(Session.user_id+":"+Session.token)
        res.json({user: User, access_token: AccessToken });
      }else{
        res.json({"error":"sessionError"})
      }
      
    }else{
      res.json({error:"authenticationError"})
    }
  }
}

module.exports = UserController;