<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asif Ahmad | Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Open+Sans&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class="container">
            <a href="#" class="logo">Asif Ahmad</a>
            <div class="nav-links">
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <img src="assets/profile.jpg" alt="Asif Ahmad" class="profile-img">
            <h1>Asif Ahmad</h1>
            <p class="profession">Frontend Developer | Writer | Digital Marketer</p>
            <p class="bio">Crafting seamless web experiences and impactful digital solutions.</p>
            <a href="#contact" class="cta-button">Let's Connect!</a>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <h2>My Projects</h2>
            <div class="project-grid">
                <!-- Project 1 -->
                <div class="project-card">
                    <h3>Do You Love Me? (HTML)</h3>
                    <p>A fun interactive project.</p>
                    <div class="project-img">
                        <img src="assets/project1.png" alt="Do You Love Me Project">
                    </div>
                    <a href="https://asifahmad28.github.io/Do-You-Love-Me/" target="_blank" class="project-link">View Project</a>
                </div>
                
                <!-- Project 2 -->
                <div class="project-card">
                    <h3>NUBSAP</h3>
                    <p>Student's Org facebook page.</p>
                    <div class="project-img">
                        <img src="assets/project2.png" alt="NUBSAP Project">
                    </div>
                    <a href="https://www.facebook.com/NUBSAP2025" target="_blank" class="project-link">View Project</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <h2>My Skills</h2>
            <div class="skills-container">
                <div class="skill">HTML</div>
                <div class="skill">CSS</div>
                <div class="skill">JavaScript</div>
                <div class="skill">C</div>
                <div class="skill">C++</div>
                <div class="skill">Digital Marketing</div>
                <div class="skill">Canva Design</div>
                <div class="skill">Content Writing</div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2>About Me</h2>
            <p>A passionate Frontend Developer with expertise in HTML/CSS, JavaScript, C, and C++, dedicated to crafting seamless and responsive web experiences. As a skilled Writer and Digital Marketer, I blend creativity with strategy to drive engaging content and effective campaigns.</p>
            <p>With a knack for problem-solving and a love for clean code, I thrive at the intersection of technology and creativity. Always eager to learn, innovate, and deliver impactful digital solutions.</p>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>Get In Touch</h2>
            <div class="contact-methods">
                <a href="mailto:asifahmad280820ttp@gmail.com" class="contact-link">Email Me</a>
                <a href="https://wa.me/8801521514214" class="contact-link">WhatsApp</a>
            </div>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/asifahmad280820/" target="_blank">LinkedIn</a>
                <a href="https://github.com/asifahmad28" target="_blank">GitHub</a>
                <a href="https://www.facebook.com/asifahmad2808" target="_blank">Facebook</a>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
/* Global Styles */
:root {
    --primary: #0A2463;
    --secondary: #FFFFFF;
    --accent: #FFD700;
    --text: #333333;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: var(--text);
    background-color: var(--secondary);
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Navigation */
nav {
    background-color: var(--primary);
    color: var(--secondary);
    padding: 15px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.logo {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--secondary);
    text-decoration: none;
}

.nav-links a {
    color: var(--secondary);
    text-decoration: none;
    margin-left: 20px;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--accent);
}

/* Hero Section */
.hero {
    text-align: center;
    padding: 150px 0 100px;
    background: linear-gradient(135deg, var(--primary), #1a3a8f);
    color: var(--secondary);
}

.profile-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--accent);
    margin-bottom: 20px;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.profession {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: var(--accent);
}

.bio {
    max-width: 600px;
    margin: 0 auto 30px;
}

.cta-button {
    display: inline-block;
    background-color: var(--accent);
    color: var(--primary);
    padding: 12px 30px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* Projects Section */
.projects {
    padding: 100px 0;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.project-card {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.project-card:hover {
    transform: translateY(-10px);
}

.project-img img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-card h3 {
    padding: 20px 20px 10px;
    color: var(--primary);
}

.project-card p {
    padding: 0 20px 20px;
}

.project-link {
    display: block;
    padding: 10px 20px;
    background-color: var(--primary);
    color: white;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s;
}

.project-link:hover {
    background-color: var(--accent);
    color: var(--primary);
}

/* Skills Section */
.skills {
    padding: 100px 0;
    background-color: #f5f7fa;
}

.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 30px;
}

.skill {
    background-color: var(--primary);
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
}

/* About Section */
.about {
    padding: 100px 0;
}

.about p {
    margin-bottom: 20px;
    max-width: 800px;
}

/* Contact Section */
.contact {
    padding: 100px 0;
    background-color: var(--primary);
    color: white;
    text-align: center;
}

.contact-methods {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 30px 0;
}

.contact-link {
    display: inline-block;
    padding: 12px 30px;
    background-color: var(--accent);
    color: var(--primary);
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s;
}

.contact-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.social-links {
    margin-top: 30px;
}

.social-links a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    transition: color 0.3s;
}

.social-links a:hover {
    color: var(--accent);
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero {
        padding: 120px 0 80px;
    }
    
    .nav-links {
        display: none;
    }
    
    .contact-methods {
        flex-direction: column;
        align-items: center;
    }
}


