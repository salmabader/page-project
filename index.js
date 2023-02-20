const url = './questionsToPrint.html'; // replace with the URL of the HTML page you want to convert
const options = {
    margin: [10, 10, 10, 10],
    filename: 'my-file.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};
function download() {
    html2pdf().fromURL(url).set(options).save();
}



