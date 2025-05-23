document.querySelectorAll('.profileContainer > a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Fecha outros submenus
        document.querySelectorAll('.submenu').forEach(menu => {
            if (menu !== this.nextElementSibling) {
                menu.style.display = 'none';
                
            }
        });

        // Toggle submenu atual
        const submenu = this.nextElementSibling;
        submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
});