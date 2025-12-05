import { reactive } from 'vue'
import Request from '../request'
export const UserStore = reactive({

  logged: {
    name: '',
    email: '',
    _id: null,
    role_id: '',
    image: '',
  },
  form: {
    name: '',
    email: '',
    _id: null,
    role_id: '',
    image: '',
  },
  users: [],

  setLogged({ name, email, _id, role_id, image }, token) {
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
    this.logged._id = _id
    this.logged.name = name
    this.logged.email = email
    this.logged.role_id = role_id
    this.logged.image = image
  },

  getLogged() {
    const userData = localStorage.getItem('user')
    if (userData) {
      const { name, email, _id, role_id, image } = JSON.parse(userData)
      this.logged.name = name
      this.logged.email = email
      this.logged._id = _id
      this.logged.role_id = role_id
      this.logged.image = image
    }
    return this.logged
  },

  clearLogged() {
    this.logged._id = ''
    this.logged.name = ''
    this.logged.email = ''
    this.logged.role_id = ''
    this.logged.image = ''
  },

  async auth(email, password) {
    const body = {
      email: email,
      password: password,
    }
    const data = await Request('POST', '/user/auth', body)
    if (data.error) {
      console.log(data.error)
    }
    if (data.user) {
      this.setLogged(data.user, data.access_token)
    }
    return this.logged;
  },
  async create() {

  },
  async update() {

  },
  async getBySearch(text = '') {
    const data = await Request('GET', `/user/search/${text}`)
    if (data.error) {
      console.log(data.error)
    }

    this.users = data.users
  },
  async getByPage(page = 0) {
    const data = await Request('GET', `/user/page/${page}`)
    if (data.error) {
      console.log(data.error)
    }
    this.users = data.users
  },
  async getById(id) {
    const data = await Request('GET', `/user/${id}`)
    if (data.error) {
      console.log(data.error)
    }
    this.form = data.user
  },

  isLogged() {
    this.getLogged();
    return this.logged._id ? true : false
  }
})