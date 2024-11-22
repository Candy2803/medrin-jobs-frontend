export const blogPosts = [
  {
    id: '1',
    title: 'The Future of Remote Work: Trends and Predictions for 2024',
    excerpt: 'Explore how remote work is evolving and what it means for both employers and employees in the coming years.',
    content: `<p>The landscape of remote work continues to evolve rapidly as we move through 2024. Companies worldwide are adapting to new ways of working, and the trends we're seeing suggest that remote work is here to stay – but with some interesting new developments.</p>

<p>One of the most significant trends we're observing is the rise of hybrid work models. Organizations are finding that a mix of remote and office work often provides the best of both worlds: the flexibility and focus that comes with working from home, combined with the collaboration and culture-building benefits of in-person interaction.</p>

<p>Technology is playing a crucial role in shaping this future. Virtual reality meetings, advanced project management tools, and AI-powered productivity assistants are becoming increasingly common in the remote worker's toolkit. These tools are not just making remote work possible – they're making it more efficient and engaging than ever before.</p>

<p>However, challenges remain. Companies are grappling with questions about maintaining company culture, ensuring effective communication, and managing remote teams across different time zones. The solutions to these challenges are evolving just as quickly as the problems themselves, with innovative approaches emerging regularly.</p>`,
    image: 'https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    author: 'Sarah Wilson',
    date: 'March 15, 2024',
    category: 'remote work',
    tags: ['remote work', 'future of work', 'workplace trends']
  },
  {
    id: '2',
    title: 'Essential Skills for Tech Industry Success in 2024',
    excerpt: 'Discover the most in-demand technical and soft skills that employers are looking for in the technology sector.',
    content: `<p>The technology industry continues to evolve at a rapid pace, and staying competitive requires a combination of technical expertise and soft skills. In 2024, we're seeing several key skills emerge as essential for success in the tech sector.</p>

<p>On the technical side, artificial intelligence and machine learning expertise remains highly sought after. However, it's not just about understanding the algorithms – professionals need to grasp the ethical implications and real-world applications of AI systems. Cloud computing skills, particularly multi-cloud architecture experience, are also in high demand.</p>

<p>Cybersecurity knowledge has become non-negotiable across all tech roles. With the rising frequency and sophistication of cyber threats, understanding security best practices is crucial for everyone from developers to project managers.</p>

<p>Equally important are soft skills. The ability to communicate complex technical concepts to non-technical stakeholders, collaborate effectively in remote teams, and adapt quickly to new technologies and methodologies is essential. Leadership skills, even for individual contributors, are increasingly valued as organizations adopt flatter, more agile structures.</p>`,
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    author: 'Michael Chen',
    date: 'March 14, 2024',
    category: 'career development',
    tags: ['technology', 'skills', 'career growth']
  },
  {
    id: '3',
    title: 'Mastering the Art of Job Interviews in a Digital Age',
    excerpt: 'Learn effective strategies for succeeding in virtual interviews and standing out in the digital hiring process.',
    content: `<p>The digital transformation of the hiring process has fundamentally changed how job interviews are conducted. Virtual interviews have become the norm, and mastering this format is crucial for job seekers in 2024.</p>

<p>First impressions matter just as much in virtual settings. Professional presentation, including appropriate lighting, camera angle, and background, can significantly impact your interview success. Technical preparation is equally important – ensuring stable internet connection and familiarity with the video conferencing platform can help avoid unnecessary stress.</p>

<p>Body language remains crucial, though it needs to be adapted for the camera. Maintaining eye contact by looking at the camera, sitting with good posture, and using hand gestures effectively can help create engagement and connection with interviewers.</p>

<p>The digital format also offers unique opportunities. Having notes nearby (out of camera view) can help you stay focused and organized, and screen sharing capabilities allow for more dynamic presentations of your work. However, it's important to use these advantages judiciously and maintain natural conversation flow.</p>`,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    author: 'Emily Davis',
    date: 'March 13, 2024',
    category: 'interviews',
    tags: ['interviews', 'job search', 'career tips']
  },
  // Add more blog posts here...
];

// Export the 3 featured posts for the homepage
export const featuredPosts = blogPosts.slice(0, 3);