import { fetchGitHubProjects } from './github-api.js';

document.addEventListener('DOMContentLoaded', async function() {
    const projectsGrid = document.querySelector('.featured-projects-grid');
    
    // Clear loading spinner
    projectsGrid.innerHTML = '';
    
    // Static project data
    const projects = [
        {
            title: "Recommendation System",
            icon: "fas fa-robot",
            description: "An intelligent e-commerce platform featuring AI-driven personalized recommendations based on user behavior and interactions.",
            techStack: ["React", "Node.js", "Python", "TensorFlow"],
            links: {
                github: "https://github.com/kudziemuks/ai-recommendation-system",
                demo: "https://ai-recommendations.devwithkudzi.com"
            }
        },
        {
            title: "E-commerce Platform",
            icon: "fas fa-shopping-cart",
            description: "A full-featured e-commerce platform with product management, shopping cart, and secure payment integration.",
            techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
            links: {
                github: "https://github.com/kudziemuks/ecommerce-platform",
                demo: "https://shop.devwithkudzi.com"
            }
        },
        {
            title: "Task Manager",
            icon: "fas fa-tasks",
            description: "A real-time task management system with notifications together with team collaboration features.",
            techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
            links: {
                github: "https://github.com/kudziemuks/task-manager",
                demo: "https://tasks.devwithkudzi.com"
            }
        }
    ];
    
    // Render projects
    projects.forEach(project => {
        const projectCard = `
            <div class="project-card">
                <div class="project-header">
                    <h3>
                        <i class="${project.icon} project-icon"></i>
                        ${project.title}
                    </h3>
                </div>
                <div class="project-content">
                    <p class="project-description">${project.description}</p>
                    <div class="tech-stack">
                        ${project.techStack.map(tech => `
                            <span>${tech}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="project-footer">
                    <div class="project-links">
                        <a href="${project.links.github}" class="project-link" target="_blank">
                            <i class="fab fa-github"></i>
                            <span>Source Code</span>
                        </a>
                        <a href="${project.links.demo}" class="project-link" target="_blank">
                            <i class="fas fa-external-link-alt"></i>
                            <span>Live Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
        projectsGrid.insertAdjacentHTML('beforeend', projectCard);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}); 