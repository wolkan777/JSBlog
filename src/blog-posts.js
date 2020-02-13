export const getPosts = () => {

    return [  
        {
            title: "Yazilim",
            slug: "yazilim",
            details: require("./posts/yazilim.md").default,
            date: "12.02.2020",
        },
        {
            title: "Lorem Ipsum Nedir?",
            slug: "lorem-ipsum-nedir",
            details: require("./posts/loremIpsumNedir.md").default,
            date: "12.02.2020",
        },

    ];
}

