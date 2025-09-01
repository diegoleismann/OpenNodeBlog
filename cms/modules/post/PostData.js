module.exports = (PostModel) => {
    return {
        _id: PostModel._id,
        title: PostModel.title,
        status: PostModel.status,
        created_at: PostModel.created_at,
        content: PostModel.content,
        url: PostModel.url,
        author_id: PostModel.author_id,
    }
}