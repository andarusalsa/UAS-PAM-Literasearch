const PRODUCTS = [
    {
        id: 10,
        name: 'A Renegade in Springtime',
        author: 'Edward Upward (2003)',
        price: 60000,
        image: require('../assets/products/Renegade.jpg'),
        description: "A legendary figure among the 'Auden generation' of young writers in the 1930s, Edward Upward is still writing to this day. This new selection of his best short stories spans a literary career of almost eight decades, and is being published to celebrate his centenary. Beginning in 1928 with the fantastical world of Mortmere in The Railway Accident, the stories continue through the era of political engagement in the Thirties to the reflective and poignant studies of old age that have underpinned his revival in the past decade. Together they represent a lifetime of achievement in modern literature.'But why should he risk upsetting his parents by saying any of these things? Their happiness at having him here with them again was so evident. And why should he risk disturbing his own happy drowsiness which was increasing in him every moment as he sat here? 'Home is a place where I am well thought of,' he said to himself as he sank into the comfort of his armchair, as he slid more deeply, more and more deeply, downwards into its safety' - from The Scenic Railway"
    },
    {
        id: 11,
        name: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling, Mary GrandPré 2003',
        price: 100000,
        image: require('../assets/products/HarryPotter.jpg'),
        description: "There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror? Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named - a threat that neither the magical government nor the authorities at Hogwarts can stop."
    },
    {
        id: 12,
        name: 'Catching Fire (The Hunger Games #2)',
        author: 'Suzanne Collins',
        price: 800000,
        image: require('../assets/products/CatchingFire.jpg'),
        description: "Against all odds, Katniss Everdeen has won the Hunger Games. She and fellow District 12 tribute Peeta Mellark are miraculously still alive. Katniss should be relieved, happy even. After all, she has returned to her family and her longtime friend, Gale. Yet nothing is the way Katniss wishes it to be. Gale holds her at an icy distance. Peeta has turned his back on her completely. And there are whispers of a rebellion against the Capitol—a rebellion that Katniss and Peeta may have helped create."
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

