/** Task 1:
 * create 3 objects with the name movie1, movie2, movie3
 * Add 3 properties to it
 * - id -> just a unique id, you can start with 1
 * - name -> a movie name (e.g. COCO)
 * - image  -> an http link of the image on the internet
 * rating -> a rating number from 1 to 10
 *
 * After you create the movies, console log them.
 * Open the live server, and see the logs in the console of the browser
 *
 */

// add the movies variables here ....

const movie1 = {
  id: "1",
  name: "The Hobbit",
  image:
    "https://www.pluggedin.com/wp-content/uploads/2020/01/hobbit-cover-1340x2048.jpg",
  rating: 7.8,
};
const movie2 = {
  id: "2",
  name: "The gladiator",
  image:
    "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/gladiator-poster.jpg?itok=wJ_O8kje",
  rating: 8.5,
};
const movie3 = {
  id: "3",
  name: "COCO",
  image:
    "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
  rating: 8.4,
};

console.log(movie1);
console.log(movie2);
console.log(movie3);

/** Task 2:
 * Create an array `movies`
 * Add to it the movies that you created on top.
 * Once you add one movie,
 * you will see the movie card in the html page!
 *
 * Don't add to the array the movies variables,
 * just copy paste the content to be in the following format
 * [
 *    {
 *       prop: value,
 *       prop: value,
 *       prop: value,
 *    },
 * ]
 */

movies = [
  {
    name: "The Hobbit",
    image:
      "https://www.pluggedin.com/wp-content/uploads/2020/01/hobbit-cover-1340x2048.jpg",
    rating: 7.8,
  },
  {
    name: "The gladiator",
    image:
      "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/gladiator-poster.jpg?itok=wJ_O8kje",
    rating: 8.5,
  },
  {
    name: "COCO",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    rating: 8.4,
  },
];

/** TASK 3:
 * Create a new file call it `movies.json`
 * Copy paste the content of the array inside the json file
 * Make sure it's a json format.
 */
