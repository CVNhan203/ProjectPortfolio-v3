// Kiểm tra đăng nhập khi vào trang admin
function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
}

// Xử lý đăng xuất
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
});

// Kiểm tra đăng nhập khi trang được tải
checkLogin();