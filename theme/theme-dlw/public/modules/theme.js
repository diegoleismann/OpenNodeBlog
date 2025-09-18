const Theme = {
    getPosts: async (config) => {
        let posts = []
        try {
            const response = await fetch(config.base_url + '/post', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            posts = data.posts ? data.posts : data;
        } catch (e) {
            console.log('Error on GetPosts check ' + config.base_url)
        }
        return posts
    }
}
export default Theme