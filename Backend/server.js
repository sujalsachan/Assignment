const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const users = [
  { id: 0, name: "Rahul Jain", email: "rahuljain@gmail.com" },
  { id: 1, name: "Rohan Kumar", email: "kumar@gmail.com" },
  { id: 2, name: "Rehan Khan", email: "rehankhan@gmail.com" },
  { id: 3, name: "Aisha Khan", email: "aisha.khan@example.com" },
  { id: 4, name: "Samir Patel", email: "samir.patel@example.com" },
  { id: 5, name: "Nina Sethi", email: "nina.sethi@example.com" },
  { id: 6, name: "Arjun Mehta", email: "arjun.mehta@example.com" },
  { id: 7, name: "Zara Ali", email: "zara.ali@example.com" },
  { id: 8, name: "Ravi Singh", email: "ravi.singh@example.com" },
  { id: 9, name: "Meera Nair", email: "meera.nair@example.com" },
  { id: 10, name: "Vikram Desai", email: "vikram.desai@example.com" },
  { id: 11, name: "Fatima Noor", email: "fatima.noor@example.com" },
  { id: 12, name: "Karan Gupta", email: "karan.gupta@example.com" },
  { id: 13, name: "Isha Sharma", email: "isha.sharma@example.com" },
  { id: 14, name: "Dev Patel", email: "dev.patel@example.com" },
];

const posts = [
  {
    userId: 0,
    id: 1,
    title: "Exploring the Mountains",
    body: "Just got back from a weekend hiking trip in the Himalayas. The views were breathtaking!",
  },
  {
    userId: 0,
    id: 2,
    title: "My Cooking Adventure",
    body: "Tried making homemade pasta for the first time. It turned out surprisingly well!",
  },

  {
    userId: 1,
    id: 3,
    title: "Weekend Getaway",
    body: "Spent the weekend in Goa. The beaches were pristine and the food was delicious!",
  },
  {
    userId: 1,
    id: 4,
    title: "Photography Tips",
    body: "Just took a photography class! Can't wait to share my new skills.",
  },

  {
    userId: 2,
    id: 5,
    title: "Travel Dreams",
    body: "Planning a trip to Europe next summer. Any recommendations?",
  },
  {
    userId: 2,
    id: 6,
    title: "Gardening Tips",
    body: "Started my own vegetable garden. Can't wait to harvest my first tomatoes!",
  },

  {
    userId: 3,
    id: 7,
    title: "Fashion Trends",
    body: "Exploring sustainable fashion brands that are making a difference.",
  },
  {
    userId: 3,
    id: 8,
    title: "Favorite Recipes",
    body: "Just perfected my mom's biryani recipe! Cooking is so therapeutic.",
  },

  {
    userId: 4,
    id: 9,
    title: "Healthy Living",
    body: "Learning about nutrition and how it impacts our health.",
  },
  {
    userId: 4,
    id: 10,
    title: "Home Renovation",
    body: "Working on renovating my home office. Excited to create a productive space!",
  },

  {
    userId: 5,
    id: 11,
    title: "Mindfulness Practices",
    body: "Incorporating mindfulness into my daily routine has been life-changing.",
  },
  {
    userId: 5,
    id: 12,
    title: "Weekend Projects",
    body: "Tackled some DIY projects at home. Always feels rewarding.",
  },

  {
    userId: 6,
    id: 13,
    title: "Starting a New Hobby",
    body: "Picked up painting during quarantine. It's so relaxing!",
  },
  {
    userId: 6,
    id: 14,
    title: "Community Engagement",
    body: "Getting involved with local charities. Giving back feels great.",
  },

  {
    userId: 7,
    id: 15,
    title: "Mental Health Awareness",
    body: "Taking time for self-care is essential. Let's normalize it!",
  },
  {
    userId: 7,
    id: 16,
    title: "Home Workouts",
    body: "Trying out different home workout routines to stay fit.",
  },

  {
    userId: 8,
    id: 17,
    title: "Travel Blogging",
    body: "Started a travel blog to document my adventures!",
  },
  {
    userId: 8,
    id: 18,
    title: "Tech Innovations",
    body: "Excited about the latest advancements in AI and machine learning.",
  },

  {
    userId: 9,
    id: 19,
    title: "Book Recommendations",
    body: "Currently reading 'The Silent Patient.' Can't put it down!",
  },
  {
    userId: 9,
    id: 20,
    title: "Culinary Exploration",
    body: "Trying out new recipes from different cultures. It's delicious!",
  },

  {
    userId: 10,
    id: 21,
    title: "Artistic Expressions",
    body: "Exploring different mediums in art. Recently tried watercolor.",
  },
  {
    userId: 10,
    id: 22,
    title: "Sustainable Living",
    body: "Adopting eco-friendly practices in my daily life.",
  },

  {
    userId: 11,
    id: 23,
    title: "Fitness Goals",
    body: "Working towards my fitness goals one step at a time.",
  },
  {
    userId: 11,
    id: 24,
    title: "Weekend Escapes",
    body: "Love spontaneous weekend trips to recharge.",
  },

  {
    userId: 12,
    id: 25,
    title: "Creative Writing",
    body: "Trying my hand at short stories. It's a fun creative outlet!",
  },
  {
    userId: 12,
    id: 26,
    title: "Cultural Festivals",
    body: "Excited to attend the upcoming Diwali festival!",
  },

  {
    userId: 13,
    id: 27,
    title: "Outdoor Adventures",
    body: "Planning a camping trip this summer. Can't wait!",
  },
  {
    userId: 13,
    id: 28,
    title: "Fitness Classes",
    body: "Joining a local yoga class next week. Looking forward to it!",
  },

  {
    userId: 14,
    id: 29,
    title: "Community Service",
    body: "Volunteering at a local shelter this weekend.",
  },
  {
    userId: 14,
    id: 30,
    title: "Art Workshops",
    body: "Excited about the upcoming art workshop in my neighborhood!",
  },

  {
    userId: 15,
    id: 31,
    title: "Exploring New Hobbies",
    body: "Learning how to play the guitar. It's challenging but fun!",
  },
  {
    userId: 15,
    id: 32,
    title: "Cooking New Dishes",
    body: "Experimenting with different cuisines at home. So much fun!",
  },
  {
    userId: 0,
    id: 33,
    title: "Rahul's First Post",
    body: "This is the first post by Rahul Jain, where he discusses his love for programming.",
  },
  {
    userId: 0,
    id: 34,
    title: "Rahul's Second Post",
    body: "In this post, Rahul shares tips on how to improve your coding skills.",
  },
  {
    userId: 0,
    id: 35,
    title: "Rahul's Third Post",
    body: "Rahul talks about his journey in learning React and its ecosystem.",
  },
  {
    userId: 0,
    id: 36,
    title: "Rahul's Fourth Post",
    body: "This post covers the importance of version control in software development.",
  },
  {
    userId: 0,
    id: 37,
    title: "Rahul's Fifth Post",
    body: "Rahul shares his thoughts on the future of web development.",
  },

  {
    userId: 1,
    id: 38,
    title: "Rohan's First Post",
    body: "Rohan Kumar writes about the benefits of agile methodology in software projects.",
  },
  {
    userId: 1,
    id: 39,
    title: "Rohan's Second Post",
    body: "In this post, Rohan shares his experiences with different programming languages.",
  },
  {
    userId: 1,
    id: 40,
    title: "Rohan's Third Post",
    body: "Rohan discusses the importance of testing in software development.",
  },
  {
    userId: 1,
    id: 41,
    title: "Rohan's Fourth Post",
    body: "This post highlights the best practices for coding standards.",
  },
  {
    userId: 1,
    id: 42,
    title: "Rohan's Fifth Post",
    body: "Rohan shares his insights on team collaboration tools.",
  },

  {
    userId: 2,
    id: 43,
    title: "Rehan's First Post",
    body: "Rehan Khan introduces his favorite frameworks for building web applications.",
  },
  {
    userId: 2,
    id: 44,
    title: "Rehan's Second Post",
    body: "In this post, Rehan explains how to get started with machine learning.",
  },
  {
    userId: 2,
    id: 45,
    title: "Rehan's Third Post",
    body: "Rehan shares his journey of building a full-stack application.",
  },
  {
    userId: 2,
    id: 46,
    title: "Rehan's Fourth Post",
    body: "This post covers common pitfalls in software development.",
  },
  {
    userId: 2,
    id: 47,
    title: "Rehan's Fifth Post",
    body: "Rehan discusses the role of APIs in modern web applications.",
  },

  {
    userId: 3,
    id: 48,
    title: "Anita's First Post",
    body: "Anita Sharma talks about her experience with UI/UX design.",
  },
  {
    userId: 3,
    id: 49,
    title: "Anita's Second Post",
    body: "In this post, Anita shares design principles that every developer should know.",
  },
  {
    userId: 3,
    id: 50,
    title: "Anita's Third Post",
    body: "Anita discusses how to conduct user research effectively.",
  },
  {
    userId: 3,
    id: 51,
    title: "Anita's Fourth Post",
    body: "This post highlights the importance of responsive design.",
  },
  {
    userId: 3,
    id: 52,
    title: "Anita's Fifth Post",
    body: "Anita shares her favorite design tools and resources.",
  },

  {
    userId: 4,
    id: 53,
    title: "Priya's First Post",
    body: "Priya Verma writes about the significance of mentorship in tech.",
  },
  {
    userId: 4,
    id: 54,
    title: "Priya's Second Post",
    body: "In this post, Priya shares how to build a strong professional network.",
  },
  {
    userId: 4,
    id: 55,
    title: "Priya's Third Post",
    body: "Priya discusses the challenges of being a woman in tech.",
  },
  {
    userId: 4,
    id: 56,
    title: "Priya's Fourth Post",
    body: "This post covers strategies for negotiating your salary.",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id/posts", (req, res) => {
  const userId = parseInt(req.params.id);
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const userPosts = posts.filter((post) => post.userId === userId);
  const paginatedPosts = userPosts.slice(startIndex, endIndex);

  res.json(paginatedPosts);
});

// Create a new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Create a new post
app.post("/posts", (req, res) => {
  const newPost = req.body;
  newPost.id = posts.length + 1;
  posts.push(newPost);
  res.status(201).json(newPost);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
