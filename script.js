 const articles = [
  {
    title: "Digital Transformation: Navigating the Future of Business",
    category: "Technology",
    author: "Sarah Chen",
    date: "Oct 26, 2023",
    time: "7 min read"
  },
  {
    title: "The Ethics of AI: Ensuring Responsible Development",
    category: "Innovation",
    author: "Dr. Alex Kim",
    date: "Sep 15, 2023",
    time: "9 min read"
  },
  {
    title: "Building Sustainable Businesses for a Greener Tomorrow",
    category: "Sustainability",
    author: "Maria Garcia",
    date: "Aug 01, 2023",
    time: "6 min read"
  },
  {
    title: "Key Leadership Skills for the Modern Era",
    category: "Leadership",
    author: "David Lee",
    date: "Jul 10, 2023",
    time: "8 min read"
  },
  {
    title: "The Rise of Cloud Computing: A Strategic Imperative",
    category: "Technology",
    author: "Jessica Brown",
    date: "Jun 20, 2023",
    time: "7 min read"
  },
  {
    title: "Unlocking Market Insights: Data-Driven Growth",
    category: "Business",
    author: "Michael Green",
    date: "May 05, 2023",
    time: "6 min read"
  }
];

let currentIndex = 0;
const articlesContainer = document.getElementById("articles");

function loadMore(count = 3) {
  const end = currentIndex + count;
  const sliced = articles.slice(currentIndex, end);

  for (const article of sliced) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="" alt="Article Thumbnail">
      <small>${article.category}</small>
      <h4>${article.title}</h4>
      <small>By ${article.author} - ${article.date} • ${article.time}</small>
      <p>Short description about "${article.title}" article goes here.</p>
      <button>Read more →</button>
    `;
    articlesContainer.appendChild(card);
  }

  currentIndex += count;
  if (currentIndex >= articles.length) {
    document.querySelector(".load-more").style.display = "none";
  }
}

// Load initial articles
window.onload = () => loadMore();