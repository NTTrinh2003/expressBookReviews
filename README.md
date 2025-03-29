# Express Books Preview  
- This is the final backend study project for the IBM Backend Apps with Node.js and Express Course  
- Use only for adding/removing books reviews, also for viewing books to reviews (Simple enough :)))
- Usage:  
  - GET localhost:5000/ -> View all books  
  - GET localhost:5000/isbn/:isbn -> View certain books with isbn  
  - GET localhost:5000/author/:author -> View certain books with author's name  
  - GET localhost:5000/title/:title -> View certain books with books' title  
  - GET localhost:5000/review/:isbn -> View certain book's reviews with isbn  
  - POST localhost:5000/register -> Register with username and password body  
  - POST localhost:5000/customer/login -> Login with username and password body  
  - PUT localhost:5000/customer/auth/review/:isbn -> Add book review with book's isbn (Using token returned from login + username + review)  
  - DELETE localhost:5000/customer/auth/review/:isbn -> Remove book review with book's isbn (Using token returned from login + username + review)
 
That's all, thank you for visting!
