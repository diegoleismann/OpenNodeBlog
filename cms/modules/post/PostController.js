const PostModel = require('./PostModel.js')
const PostData = require('./PostData.js')

class PostController {
  constructor() { }

  async create(req, res) {
    const {
      title,
      status,
      content,
      url,
      author_id,
    } = req.body
    const Post = new PostModel({
      title,
      status,
      created_at: (new Date()).toISOString(),
      content,
      url,
      author_id,
    })
    try {
      const created = await Post.save()
      res.json({ created: PostData(created) });
    } catch (error) {
      res.json({ error: 'PostNotCreated' });
    }
  }

  async update() {
    const {
      title,
      status,
      content,
      url,
      author_id,
    } = req.body

    const update = {
      title,
      status,
      content,
      url,
      author_id,
    }
    try {
      await PostModel.findByIdAndUpdate(id, { update })
      const updated = await PostModel.findOne({ "_id": id });
      res.json({ updated: PostData(updated) });
    } catch (e) {
      res.json({ error: "PostNotUpdated" })
    }
  }

  async delete() {
    const { id } = req.params;
    const Post = await PostModel.findOne({ "_id": id });
    if (Post) {
      Post.status = 'inactive'
      Post.save();
      res.json({ success: 'PostDeletedMessage' });
    } else {
      res.json({ error: 'PostNotFound' })
    }
  }


  async getById(req, res) {
    const { id } = req.params;
    if (!id) {
      res.json({ error: 'ParamIdNotFound' })
    }
    const PostObjectId = new ObjectId(id);
    const Post = await PostModel.findOne({ "_id": id, 'status': 'active' });
    if (Post) {
      res.json({ post: PostData(Post) });
    } else {
      res.json({ error: 'userNotFound' })
    }

  }

  async getByPage(req, res) {
    let { page } = req.params;
    const limit = 10;
    const skip = Number(page) * limit
    const postList = await PostModel.find({ 'status': 'public' })
      .skip(skip)
      .limit(limit)
      .exec()

    const total = await PostModel.countDocuments();
    const postFormated = postList.map(item => { return PostData(item) })
    res.json({ posts: postFormated, total, page: Number(page) });
  }

  async getBySearch(req, res) {
    let { text, page } = req.params;
    const limit = 10;
    const skip = Number(page) * limit
    const postList = await PostModel.find({
      'status': 'active',
      '$or': [
        { 'title': { '$regex': new RegExp(text, 'i') } },
        { 'content': { '$regex': new RegExp(text, 'i') } },
        { 'url': { '$regex': new RegExp(text, 'i') } },
      ]
    })
      .skip(skip)
      .limit(limit)
      .exec()

    const total = await PostModel.countDocuments();
    const postFormated = postList.map(item => { return PostData(item) })
    res.json({ posts: postFormated, total, page: Number(page) });
  }
}

module.exports = PostController