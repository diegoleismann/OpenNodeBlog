import { reactive } from 'vue'
import Request from '../request'
export const UserStore = reactive({
  name: '',
  email: '',
  _id: '',
  role_id: '',
  image: '',

  save({ name, email, _id, role_id, image, token }) {
    localStorage.setItem('authorization', token)
    localStorage.setItem('user', JSON.stringify(
      {
        _id: _id,
        name: name,
        email: email,
        role_id: role_id,
        image: image
      }
    ))
    this._id = _id
    this.name = name
    this.email = email
    this.role_id = role_id
    this.image = image
  },

  get() {
    const userData = localStorage.getItem('user')
    if (userData) {
      const { name, email, _id, role_id, image } = JSON.parse(userData)
      this.name = name
      this.email = email
      this._id = _id
      this.role_id = role_id
      this.image = image
    }
    return this
  },

  clear() {
    localStorage.removeItem('user')
    this._id = ''
    this.name = ''
    this.email = ''
    this.role_id = ''
    this.image = ''
  },

  async auth(email, password) {
    const body = {
      email: email,
      password: password,
    }
    const data = await Request('POST', '/users/auth', body)
    if (data.error) {
      console.log(data.error)
    }
    if (data.user) {
      this.save(data.user)
    }
    return this;
  },

  isLogged() {
    this.get();
    return this._id ? true : false
  }
})