import { getPosts } from "../../../src/blog-posts";

const posts = getPosts();
export default (req, res) => {

    res.json({
        // post: {
        //     title: "Lorem Ipsum Nedir?",
        //     slug: "lorem-ipsum-nedir",
        //     details: require("../../../src/posts/loremIpsumNedir.md").default,
        //     date: "12.02.2020",

        // }
        post: posts.find(post => post.slug === req.query.postId)
    });
}
