

const users =[
  {
    "id": 1,
    "name": "Alice Johnson"
  },
  {
    "id": 2,
    "name": "Brian Lee"
  },
  {
    "id": 3,
    "name": "Carla Mendes"
  },
  {
    "id": 4,
    "name": "David Nguyen"
  }
];

const posts = [
  {
    "id": 1,
    "userId": 1,
    "title": "Exploring the Latest Smartphone Trends"
  },
  {
    "id": 2,
    "userId": 2,
    "title": "Top 10 Laptops for Developers in 2025"
  },
  {
    "id": 3,
    "userId": 3,
    "title": "How to Set Up a Smart Home on a Budget"
  },
  {
    "id": 4,
    "userId": 1,
    "title": "Benefits of Noise-Cancelling Headphones"
  },
  {
    "id": 5,
    "userId": 4,
    "title": "Gaming Consoles That Deliver the Best Experience"
  }
];

const postByUserID = posts.reduce((table,post)=>{
    const {userId}=post;
     
    if(!table[userId]){
        table[userId]= [];
    }
    table[userId].push(post);

    return table;
},{});

// console.log(postByUserID);

const userWithPost = users.map((user)=>{
    return{
        ...user,
        posts: postByUserID[user.id] || [],
    }
})

console.log(userWithPost)