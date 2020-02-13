// post details imports from a related md file //

export const getPosts = () => {

    return [
        {
            title: "Arkadaşlar kanalıma hoşgeldiniz",
            slug: "arkadaslar-kanalima-hosgeldiniz",
            details: require("./posts/arkadaslar-kanalima-hosgeldiniz.md").default,
            date: "20 şubat 2020",
        },

        {
            title: "İnsan Neden yaşar",
            slug: "insan-neden-yasar",
            details: require("./posts/insanNedenYasar.md").default,
            date: "13 şubat 2020",
        },
        {
            title: "Peki Mert Neyle Yaşar",
            slug: "peki-mert-neyle-yasar",
            details: require("./posts/peki-mert-neyle-yasar.md").default,
            date: "13 Şubat 2020 ",
        },

        {
            title: "Yazilim Nedir",
            slug: "yazilim",
            details: require("./posts/yazilim.md").default,
            date: "12 Şubat 2020",
        },
        {
            title: "Lorem Ipsum Nedir?",
            slug: "lorem-ipsum-nedir",
            details: require("./posts/loremIpsumNedir.md").default,
            date: "11 Şubat 2020",
        },
        {
            title: "Göğe Bakma Durağı / Turgutcum",
            slug: "goge-bakma-duragi",
            details: require("./posts/goge-bakma-duragı.md").default,
            date: "13 Şubat 2020 ",
        },
    ];
}

