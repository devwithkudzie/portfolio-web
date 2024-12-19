const GITHUB_TOKEN = 'your_personal_access_token';
const GITHUB_USERNAME = 'kudziemuks';

async function fetchGitHubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub projects');
        }

        const repos = await response.json();
        
        // Filter and map the repositories to match your project format
        const projects = repos.map(repo => ({
            id: repo.id,
            title: repo.name,
            icon: 'fas fa-code', // Default icon
            description: repo.description || 'No description available',
            techStack: [repo.language].filter(Boolean), // Add more if needed
            links: {
                github: repo.html_url,
                demo: repo.homepage || '#'
            }
        }));

        return projects;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return [];
    }
}

// Export the function
export { fetchGitHubProjects }; 