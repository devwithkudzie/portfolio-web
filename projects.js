document.addEventListener('DOMContentLoaded', async function() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        
        // Clear loading spinner
        projectsGrid.innerHTML = '';
        
        // Render all projects
        data.projects.forEach(project => {
            const projectCard = `
                <div class="project-card">
                    <div class="project-header">
                        <h3>
                            <i class="${project.icon} project-icon"></i>
                            ${project.title}
                        </h3>
                    </div>
                    
                    <div class="project-body">
                        <p class="project-description">${project.description}</p>
                        
                        <ul class="project-features">
                            ${project.features.map(feature => `
                                <li>${feature}</li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="tech-stack">
                        ${project.techStack.map(tech => `
                            <span>${tech}</span>
                        `).join('')}
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

// Add mouse move effect
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