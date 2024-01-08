const app = Vue.createApp({
  // data, functions and the template
  //   template: "<h2>I am the Template</h2>",
  data() {
    return {
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          age: 45,
          cover: "assets/images/1.jpg",
          favourite: false,
        },
        {
          title: "Oathbringer",
          author: "Clive Cleeson",
          age: 53,
          cover: "assets/images/2.jpg",
          favourite: true,
        },
        {
          title: "Druss the Legend",
          author: "David Gemmell",
          age: 63,
          cover: "assets/images/3.jpg",
          favourite: true,
        },
        {
          title: "Wayfinder",
          author: "David Gemmell",
          age: 33,
          cover: "assets/images/4.jpg",
          favourite: false,
        },
      ],
      showBooks: true,
      x: 0,
      y: 0,
      url: "https://globalwebsystems.co.uk",
    };
  },
  methods: {
    changeTitle(str) {
      console.log("here");
      this.title = str;
    },
    toggleBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log("event triggered");
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouse(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    handleFavToggle(book) {
      console.log(book, "event");
      book.favourite = !book.favourite;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((b) => b.favourite);
    },
  },
});

app.mount("#app");
