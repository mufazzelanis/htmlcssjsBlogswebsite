// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with JavaScript",
        category: "technology",
        date: "May 10, 2026",
        excerpt: "Learn the basics of JavaScript programming language. Perfect for beginners who want to start their coding journey.",
        content: "JavaScript is a versatile programming language that powers interactive web applications. In this comprehensive guide, we'll cover variables, functions, loops, and much more to get you started on your programming journey.",
        icon: "💻"
    },
    {
        id: 2,
        title: "Healthy Living Tips",
        category: "lifestyle",
        date: "May 8, 2026",
        excerpt: "Discover simple habits that can transform your daily lifestyle and improve your overall well-being.",
        content: "Living a healthy lifestyle doesn't have to be complicated. Start with simple changes like drinking more water, exercising regularly, and getting enough sleep. These small steps can lead to significant improvements in your health.",
        icon: "🏃"
    },
    {
        id: 3,
        title: "Exploring Japan",
        category: "travel",
        date: "May 5, 2026",
        excerpt: "A travel guide to Japan covering the best attractions, foods, and experiences you shouldn't miss.",
        content: "Japan is a fascinating blend of ancient tradition and modern technology. From the serene temples of Kyoto to the bustling streets of Tokyo, there's so much to explore and experience in this incredible country.",
        icon: "✈️"
    },
    {
        id: 4,
        title: "Best Web Development Practices",
        category: "technology",
        date: "May 3, 2026",
        excerpt: "Master the essential practices that every web developer should follow to write clean and maintainable code.",
        content: "Writing clean code is crucial for any web developer. Follow best practices like DRY (Don't Repeat Yourself), SOLID principles, and proper naming conventions to make your code more maintainable and scalable.",
        icon: "🌐"
    },
    {
        id: 5,
        title: "Delicious Pasta Recipes",
        category: "food",
        date: "April 28, 2026",
        excerpt: "Try these amazing pasta recipes that are easy to make and absolutely delicious for any occasion.",
        content: "Pasta is one of the most versatile and beloved dishes worldwide. Whether you prefer creamy sauces, tomato-based, or oil-based recipes, there's something for everyone. Learn how to cook pasta to perfection and create restaurant-quality dishes at home.",
        icon: "🍝"
    },
    {
        id: 6,
        title: "Meditation for Beginners",
        category: "lifestyle",
        date: "April 25, 2026",
        excerpt: "Start your meditation journey with our beginner-friendly guide to mindfulness and inner peace.",
        content: "Meditation is a powerful tool for reducing stress and improving mental clarity. Don't worry if you're new to it – everyone starts as a beginner. With consistent practice, you'll notice significant improvements in your focus and overall well-being.",
        icon: "🧘"
    }
];

let currentCategory = 'all';

// Initialize the blog
function init() {
    renderPosts('all');
    setupCategoryListeners();
    setupModalListeners();
}

// Render blog posts
function renderPosts(category) {
    const container = document.getElementById('postsContainer');
    container.innerHTML = '';

    const filteredPosts = category === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === category);

    if (filteredPosts.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 40px; grid-column: 1/-1;">No posts found in this category.</p>';
        return;
    }

    filteredPosts.forEach(post => {
        const postHTML = `
            <article class="blog-post" data-post-id="${post.id}">
                <div class="post-image">${post.icon}</div>
                <div class="post-content">
                    <span class="post-category">${post.category}</span>
                    <h2 class="post-title">${post.title}</h2>
                    <p class="post-date">📅 ${post.date}</p>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <button class="read-more" onclick="showFullPost(${post.id})">Read More →</button>
                </div>
            </article>
        `;
        container.innerHTML += postHTML;
    });
}

// Show full post in modal
function showFullPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        document.getElementById('detailIcon').textContent = post.icon;
        document.getElementById('detailTitle').textContent = post.title;
        document.getElementById('detailCategory').textContent = post.category;
        document.getElementById('detailDate').textContent = `📅 ${post.date}`;
        document.getElementById('detailContent').textContent = post.content;
        
        const modal = document.getElementById('detailsModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Setup modal listeners
function setupModalListeners() {
    const modal = document.getElementById('detailsModal');
    const closeBtn = document.getElementById('closeBtn');
    const backBtn = document.getElementById('backBtn');
    const overlay = document.getElementById('modalOverlay');

    closeBtn.addEventListener('click', closeModal);
    backBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('detailsModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Setup category button listeners
function setupCategoryListeners() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Render posts for selected category
            const category = this.dataset.category;
            currentCategory = category;
            renderPosts(category);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);



//map function
let newsNumber = [5,7,8,9,7,4,5];
let sqnewsNumber = newsNumber.map(function(digital){
    return digital * digital ;
});
console.log(sqnewsNumber[5]);


//arrow function
let adds=(f,j)=>f+j;
console.log(adds(100,2));


function isSearch (){
    console.log('Search Successfully');
}

document.getElementById('sec').addEventListener('click', isSearch);


(function(massesge){
    console.log('I am auto function',massesge)
}('Mufazzel'));


const myFName = {
    name : 'Mufazzel Hossain',
    game: ['Football', 'Cricket', 'Hockey'],
    age : 30,
    dateOfBirth : 1997,
}
console.log(myFName.game);


function mySuccess(){
    document.getElementById("text").innerHTML = 'Mufazzel Hossain';
}


//javascript math
 
let num = 50.858558585858;
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));  

//square root
console.log(Math.pow(3,3));


console.log(Math.floor(Math.random().toFixed(2) * 100 + 1));



let upperValue = 6;
let lowerValue = 1;

let resultVale = Math.ceil(Math.random() * upperValue);
console.log(resultVale);



function logoking(){
    let lodoNumber = Math.floor(Math.random() * 6) +1;
    let resultNumber = 'img/' + lodoNumber + '.png';
    document.getElementById('lodo').src = resultNumber;
}

