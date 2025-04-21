let currentPage = 1;
const pages = document.querySelectorAll('.product-page');
const pageBtns = document.querySelectorAll('.page-btn:not(.prev-next)');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showPage(pageNumber) {
    pages.forEach(page => page.classList.remove('active'));
    document.querySelector(`.product-page[data-page="${pageNumber}"]`).classList.add('active');
    
    pageBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.page-btn[data-page="${pageNumber}"]`).classList.add('active');
    
    currentPage = pageNumber;
}

pageBtns.forEach(btn => {
    btn.addEventListener('click', () => showPage(parseInt(btn.dataset.page)));
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) showPage(currentPage - 1);
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length) showPage(currentPage + 1);
});

showPage(1);