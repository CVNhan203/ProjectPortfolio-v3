document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập (đây là ví dụ đơn giản)
    if (username === 'admin' && password === 'admin123') {
        // Lưu trạng thái đăng nhập
        localStorage.setItem('isLoggedIn', 'true');
        // Chuyển hướng đến trang admin
        window.location.href = 'admin.html';
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
});