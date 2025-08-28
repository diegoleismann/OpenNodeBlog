const userImageDefault = (image) => {
    return image == '' ? 'http://localhost:3000/default.jpg' : image
}
module.exports = (UserModel) => {
    return {
        _id: UserModel._id,
        name: UserModel.name,
        email: UserModel.email,
        image: userImageDefault(UserModel.image),
        role_id: UserModel.role_id,
        status: UserModel.status
    }
}