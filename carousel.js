document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.querySelector('.featured-projects-grid');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentPage = 0;
    const projectsPerPage = 3;
    let allProjects = [];

    async function loadProjects() {
        try {
            const response = await fetch('projects.json');
            const data = await response.json();
            allProjects = data.projects;
            showProjects(currentPage);
        } catch (error) {
            console.error('Error loading projects:', error);
            projectsGrid.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Failed to load projects. Please try again later.</p>
                </div>
            `;
        }
    }

    function showProjects(page) {
        const start = page * projectsPerPage;
        const end = start + projectsPerPage;
        const projectsToShow = allProjects.slice(start, end);

        projectsGrid.innerHTML = '';

        projectsToShow.forEach(project => {
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

        // Update button visibility
        prevBtn.style.display = currentPage > 0 ? 'flex' : 'none';
        nextBtn.style.display = (currentPage + 1) * projectsPerPage < allProjects.length ? 'flex' : 'none';
    }

    // Event Listeners
    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            showProjects(currentPage);
        }
    });

    nextBtn.addEventListener('click', () => {
        if ((currentPage + 1) * projectsPerPage < allProjects.length) {
            currentPage++;
            showProjects(currentPage);
        }
    });

    // Initial load
    loadProjects();
}); 