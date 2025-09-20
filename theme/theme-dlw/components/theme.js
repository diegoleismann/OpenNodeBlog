
const base_url = 'http://localhost/api'
const Theme = {
    getPosts: async () => {
        try {
            const response = await fetch(base_url + '/post', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            const posts = data.posts ? data.posts : [];
            return posts
        } catch (e) {
            console.log('Error on GetPosts check ' + base_url)
            return []
        }

    }
}
module.exports = {
    Theme
}

