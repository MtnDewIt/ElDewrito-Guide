//const pages = ['about', 'installation', 'issues', 'seeding', 'hosting', 'community', 'support', 'appendix'];
const pages = ['about', 'installation', 'issues', 'seeding', 'community', 'support', 'appendix'];
let currentPageIndex = 0;

function navigatePage(direction) 
{
    document.getElementById(pages[currentPageIndex]).classList.remove('active');
    
    if (direction === 'next' && currentPageIndex < pages.length - 1) 
    {
        currentPageIndex++;
    } 
    else if (direction === 'prev' && currentPageIndex > 0) 
    {
        currentPageIndex--;
    }
    
    document.getElementById(pages[currentPageIndex]).classList.add('active');

    document.querySelectorAll('.tabs li').forEach(tab => 
    {
        tab.classList.remove('selected');
    });
    document.querySelector(`.tabs li[data-page="${pages[currentPageIndex]}"]`).classList.add('selected');

    updateButtonStates();
}

function goToPage(pageId) 
{
    document.getElementById(pages[currentPageIndex]).classList.remove('active');

    const newIndex = pages.indexOf(pageId);
    
    if (newIndex !== -1) 
    {
        currentPageIndex = newIndex;

        document.getElementById(pageId).classList.add('active');

        updateButtonStates();
    }
}

function updateButtonStates() 
{
    document.getElementById('prev-button').disabled = (currentPageIndex === 0);
    document.getElementById('next-button').disabled = (currentPageIndex === pages.length - 1);
}

function showPlatform(platform) 
{
    document.querySelectorAll('.platform-content').forEach(content => 
    {
        content.classList.remove('active');
    });
    
    document.querySelectorAll('.platform-tab').forEach(tab => 
    {
        tab.classList.remove('active');
    });
    
    document.getElementById(platform + '-content').classList.add('active');
    
    event.target.classList.add('active');
}

document.querySelectorAll('.tabs li').forEach(tab => 
{
    tab.addEventListener('click', function(e) 
    {
        e.preventDefault();

        const pageId = this.getAttribute('data-page');

        goToPage(pageId);

        document.querySelectorAll('.tabs li').forEach(t => {
            t.classList.remove('selected');
        });

        this.classList.add('selected');
    });
});

updateButtonStates();