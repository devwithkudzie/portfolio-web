import { fetchGitHubProjects } from './github-api.js';

document.addEventListener('DOMContentLoaded', async function() {
    const projectsGrid = document.querySelector('.featured-projects-grid');
    
    try {
        const projects = await fetchGitHubProjects();
        
        // Clear loading spinner
        projectsGrid.innerHTML = '';
        
        // Get first 3 projects for featured section
        const featuredProjects = projects.slice(0, 3);
        
        // Render featured projects
        featuredProjects.forEach(project => {
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
    } catch (error) {
        console.error('Error loading projects:', error);
        projectsGrid.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>Failed to load projects. Please try again later.</p>
            </div>
        `;
    }
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