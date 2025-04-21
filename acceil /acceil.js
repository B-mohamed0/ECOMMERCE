document.addEventListener('DOMContentLoaded', function() {
    const profileIcon = document.querySelector('.profile-icon');
    const profileDropdown = document.getElementById('profileDropdown');

    profileIcon.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        if (profileDropdown.style.display === 'block') {
            profileDropdown.style.display = 'none';
        } else {
            profileDropdown.style.display = 'block';
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!profileIcon.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.style.display = 'none';
        }
    });
});
function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.querySelector('.profile-icon').addEventListener('click', function(e) {
    e.preventDefault();
    toggleProfileMenu();
});
