import { reactive } from 'vue'
import Request from '../request'
import { DateFormat } from '../helper/date'
export const PostStore = reactive({
    _id: null,
    title: null,
    status: 'public',
    created_at: DateFormat((new Date).toISOString()),
    created_at_ISOFormat: (new Date).toISOString(),
    content: null,
    url: null,
    author_id: null,
    loading: true,
    posts: [],

    async create() {
        const body = {
            _id: this._id,
            title: this.title,
            status: this.status,
            created_at: this.created_at_ISOFormat,
            content: this.content,
            url: this.url,
            author_id: this.author_id,
        }
        const data = await Request('POST', `/post`, body)
        if (data.error) {
            console.log(data.error);
        }
        this.posts = data.posts;
        this.loading = false;
    },

    async update() {
        const body = {
            _id: this._id,
            title: this.title,
            status: this.status,
            created_at: this.created_at_ISOFormat,
            content: this.content,
            url: this.url,
            author_id: this.author_id,
        }
        console.log(body);
        const data = await Request('PUT', `/post/${body._id}`, body)
        if (data.error) {
            console.log(data.error);
        }
        this.posts = data.posts;
        this.loading = false;
    },

    async getByPage(page = 0) {
        const data = await Request('GET', `/post/page/${page}`)
        if (data.error) {
            console.log(data.error);
        }
        this.posts = data.posts;
        this.loading = false;
    },
    async getById(id) {
        const data = await Request('GET', `/post/${id}`)
        if (data.error) {
            console.log(data.error);
        }
        this._id = data.post._id
        this.title = data.post.title
        this.url = data.post.url
        this.created_at = DateFormat(data.post.created_at)
        this.created_at_ISOFormat = data.post.created_at
        this.content = data.post.content
        this.status = data.post.status
        this.loading = false;
    },

    clear() {
        this._id = null;
        this.title = '';
        this.status = 'public';
        this.created_at = DateFormat((new Date()).toISOString());
        this.content = '';
        this.url = '';
        this.author_id = null;
    },


})