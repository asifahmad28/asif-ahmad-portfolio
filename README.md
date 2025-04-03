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
