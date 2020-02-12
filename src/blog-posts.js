export const getPosts = async () => {
    const content = await require("./posts/yeni-yazi.md");

    return [  // başına export koymak cok onemli...
        {
            title: "Lorem Ipsum Nedir?",
            details: content.default,
            date: "12.02.2020",
        },
        {
            title: "Lorem Ipsum Şudur!",
            details: " Matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardısahte metinler olarak kullanılmıştır.Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları daiçeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsumsürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
            date: "11.02.2020",
        },
    ];
}

