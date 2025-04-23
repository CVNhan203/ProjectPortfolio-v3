// Tạo hàm exportToPDF để xửa lý việc xuất file
function exportToPDF() {
    // Dùng thư viện jsPDF và tạo file PDF mới
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    // Chọn phần tử HTML chứa nội dung cv
    const element = document.querySelector(".cv-container");

    // Dùng thư viên html2canvas để chụp nội dung cv thành hình ảnh
    html2canvas(element, { 
        scale: 2,
        useCORS: true,
        logging: true,
        letterRendering: 1,
        allowTaint: true,
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210;
        const pageHeight = 291;  
        const imgHeight = canvas.height * imgWidth / canvas.width; // Tính chiều cao ảnh giữ cho ko méo
        let heightLeft = imgHeight;
        let position = 0;

        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        doc.save('my-cv.pdf');
    });
}

document.getElementById("exportBtn").addEventListener("click", exportToPDF);