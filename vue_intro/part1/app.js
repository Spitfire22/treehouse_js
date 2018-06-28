const helloWorld = new Vue({
    el: '#helloVue',
    data: {
        title: "Hallo, Allen",
        message: "this is my first Vue template!"
    }
});

const example = new Vue({
    el: '#example',
    data: {
        title: "Hallo",
        message: "Han Solo is his pet!",
        name: "Chewbacca",
        img: {
            src: 'https://placeimg.com/200/200/animals',
            alt: 'A placeholder image of animals'
        }
    }
});