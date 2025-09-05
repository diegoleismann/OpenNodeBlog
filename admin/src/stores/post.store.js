import { reactive } from 'vue'
import Request from '../request'
export const PostStore = reactive({
    _id: null,
    title: null,
    status: null,
    created_at: null,
    content: null,
    url: null,
    author_id: null,
    loading: true,
    posts: [],

    create() {

    },

    get() {

    },

    async getByPage(page = 0) {
        const data = await Request('GET', `/post/page/${page}`)
        if (data.error) {
            console.log(data.error);
        }
        this.posts = data.posts;
        this.loading = false;
    },

    clear() {
        this._id = null;
        this.title = '';
        this.status = '';
        this.created_at = '';
        this.content = '';
        this.url = '';
        this.author_id = '';
    },


})