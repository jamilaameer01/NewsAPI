import { createServer } from "miragejs";
export function makeServer() {
  createServer({
    routes() {
      this.get("/api/technology-news", () => [
        {
          id: "1",
          title: "AI Revolutionizing the Tech World",
          author: "John Doe",
          content:
            "Artificial intelligence (AI) is reshaping industries with unprecedented advancements. From self-driving cars to automated customer service, AI is playing a significant role in making our lives more efficient and improving technology across the board...",
          publishedDate: "2024-10-18",
        },
        {
          id: "2",
          title: "Quantum Computing: The Future is Here",
          author: "Jane Smith",
          content:
            "Quantum computers are now capable of performing complex calculations in seconds that would take traditional computers years. With companies like Google and IBM making strides, quantum computing is set to disrupt industries ranging from cryptography to pharmaceuticals...",
          publishedDate: "2024-10-17",
        },
        {
          id: "3",
          title: "Cybersecurity Trends in 2024",
          author: "Alice Johnson",
          content:
            "With the rise of cyberattacks, new technologies are emerging to safeguard businesses. Multi-factor authentication, AI-driven security solutions, and the adoption of Zero Trust architecture are among the leading trends in cybersecurity...",
          publishedDate: "2024-10-16",
        },
        {
          id: "4",
          title: "Blockchain Beyond Cryptocurrency",
          author: "Michael Green",
          content:
            "Blockchain technology has far-reaching applications beyond cryptocurrencies. From supply chain management to voting systems, blockchain is transforming industries by providing secure, transparent, and decentralized solutions...",
          publishedDate: "2024-10-15",
        },
        {
          id: "5",
          title: "The Impact of 5G on the Internet of Things (IoT)",
          author: "Sarah Brown",
          content:
            "With 5G networks rolling out globally, the Internet of Things (IoT) is experiencing unprecedented growth. The faster speeds and lower latency of 5G are enabling more connected devices, from smart homes to autonomous vehicles, to operate seamlessly...",
          publishedDate: "2024-10-14",
        },
        {
          id: "6",
          title: "Virtual Reality and Augmented Reality in 2024",
          author: "Robert King",
          content:
            "Virtual Reality (VR) and Augmented Reality (AR) are no longer just for gaming. These technologies are now used in fields like education, healthcare, and business. With advancements in hardware and software, immersive experiences are becoming more accessible to everyday consumers...",
          publishedDate: "2024-10-13",
        },
        {
          id: "7",
          title: "Green Tech: How Technology is Helping the Environment",
          author: "Emily Clark",
          content:
            "Sustainable technologies are gaining momentum as the world focuses on reducing its carbon footprint. Innovations such as solar energy, electric vehicles, and energy-efficient data centers are leading the way toward a greener future...",
          publishedDate: "2024-10-12",
        },
        {
          id: "8",
          title: "AI Ethics: Balancing Innovation with Responsibility",
          author: "James Adams",
          content:
            "As AI continues to evolve, questions around ethics and responsibility have come to the forefront. Ensuring that AI systems are transparent, unbiased, and accountable is becoming crucial as more industries integrate AI into their operations...",
          publishedDate: "2024-10-11",
        },
        {
          id: "9",
          title: "The Future of Work: Automation and Remote Jobs",
          author: "Jessica Parker",
          content:
            "Automation is changing the nature of work, with robots and AI performing tasks previously done by humans. Remote work is also becoming the new normal, with companies adopting digital tools to manage teams and projects across the globe...",
          publishedDate: "2024-10-10",
        },
        {
          id: "10",
          title: "Data Privacy in the Age of Big Data",
          author: "David Thompson",
          content:
            "With the increasing amount of data being collected by companies, concerns over data privacy are growing. Regulations like GDPR and CCPA are trying to protect consumers, but challenges remain as big data continues to evolve...",
          publishedDate: "2024-10-09",
        },
      ]);


      this.get("/api/all-news", () => [
        {
          id: 1,
          title: "AI Transforming the Future",
          author: "Jane Doe",
          content:
            "Artificial Intelligence is playing a critical role in transforming various industries, from healthcare to finance...",
          publishedDate: "2024-10-20",
          category: "Technology",
          image:
            "https://images.unsplash.com/photo-1729432535993-048bf87e1ceb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 2,
          title: "Global Climate Change Challenges",
          author: "John Smith",
          content:
            "The world is facing unprecedented challenges due to climate change. Experts believe that immediate action is necessary to combat rising global temperatures...",
          publishedDate: "2024-10-19",
          category: "Environment",
          image:
            "https://images.unsplash.com/photo-1604595704321-f24afaa2fa6e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 3,
          title: "Cryptocurrency Market Surge",
          author: "Alice Johnson",
          content:
            "Cryptocurrency markets are seeing an unprecedented surge, with Bitcoin hitting new highs. Analysts are debating whether this is a long-term trend or a speculative bubble...",
          publishedDate: "2024-10-18",
          category: "Finance",
          image:
            "https://images.unsplash.com/photo-1557804506-e969d7b32a4b?q=80&w=1445&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 4,
          title: "The Future of Remote Work",
          author: "Michael Lee",
          content:
            "With the pandemic accelerating the shift to remote work, companies are rethinking their strategies and work-from-home policies...",
          publishedDate: "2024-10-17",
          category: "Business",
          image:
            "https://images.unsplash.com/photo-1615403916271-e2dbc8cf3bf4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          id: 5,
          title: "Breakthrough in Cancer Research",
          author: "Sarah Brown",
          content:
            "Scientists have made a significant breakthrough in cancer research, discovering new treatment methods that could revolutionize the field...",
          publishedDate: "2024-10-16",
          category: "Health",
          image:
            "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=1383&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ]);



     const sportsNews = [
       {
         id: 1,
         name: "Cricket",
         description:
           "A popular sport played between two teams of eleven players with a bat and ball.",
         image: "/cc.png",
         releaseYear: "2001",
         founded: "Pakistan",
         popularity: "High",
         numberOfPlayers: 2,
       },
       {
         id: 2,
         name: "Football",
         description:
           "A team sport played by two teams of eleven players where the objective is to score goals.",
         image: "/football.jpg",
         releaseYear: "5000",
         founded: "UK",
         popularity: "High",
         numberOfPlayers: 2,
       },
       {
         id: 3,
         name: "Boxing",
         description:
           "A combat sport where two people, usually wearing protective gloves, throw punches at each other.",
         image: "/boxing.jpg",
         releaseYear: "1933",
         founded: "India",
         popularity: "Low",
         numberOfPlayers: 2,
       },
       {
         id: 4,
         name: "Tennis",
         description:
           "A racquet sport that can be played individually against a single opponent or between two teams of two players each.",
         image: "/tennis.jpg",
         releaseYear: "2033",
         founded: "America",
         popularity: "High",
         numberOfPlayers: 2,
       },
       {
         id: 5,
         name: "Basketball",
         description:
           "A team sport where two teams of five players try to score points by throwing a ball through the opponent's hoop.",
         image: "/basketball.jpg",
         releaseYear: 2293,
         founded: "England",
         popularity: "High",
         numberOfPlayers: 2,
       },
       {
         id: 6,
         name: "Swimming",
         description:
           "An individual or team sport that involves using one's entire body to move through water.",
         image: "/swimming.jpg",
         releaseYear: "1943",
         founded: "Austria",
         popularity: "High",
         numberOfPlayers: 2,
       },
       {
         id: 7,
         name: "Badminton",
         description:
           "A racquet sport played using racquets to hit a shuttlecock across a net.",
         image: "/badminton.jpg",
         releaseYear: "2023",
         founded: "France",
         popularity: "High",
         numberOfPlayers: 2,
       },
       {
         id: 8,
         name: "Golf",
         description:
           "A club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.",
         image: "/golf.jpg",
         releaseYear: "2017",
         founded: "Bangladesh",
         popularity: "High",
         numberOfPlayers: 2,
       },
     ];

     // Get all sports news
     this.get("/api/sports-news", () => sportsNews);

     // Get a specific sport news item by id
     this.get("/api/sports-news/:id", (schema, request) => {
       let id = request.params.id;
       return sportsNews.find((sport) => sport.id === Number(id));
     });
      
  
      
      
      
    },
  });
}
