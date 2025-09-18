import Theme from '../modules/theme.js'
const getPosts = async () => { return await Theme.getPosts({ base_url: 'http://localhost/api' }) };
const template = /*html*/`
  <div id="blog">
    <v-container>
      <v-row>
        <v-col>
          <h2 class="section-title text-center">BLOG</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(post, index) in posts"
          :key="index"
          cols="4"
        >
          <a :href="'/post/' + post.url">
            <img
              class="blog-image"
              :src="post.image ? post.image : '/images/blog-image.png'"
            />
            <h3 class="blog-title">
              {{ post.title }}
            </h3>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
`
export default {
  name: "BlogComponent",
  data() {
    return {
      posts: []
    }
  },
  async serverPrefetch() {
    this.posts = await getPosts();
  },
  template
}