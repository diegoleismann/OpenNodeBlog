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
}

module.exports = PostController