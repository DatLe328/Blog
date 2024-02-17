fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Hiển thị dữ liệu trong một phần tử HTML
        var outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';

        // Lặp qua các mục trong JSON và hiển thị chúng
        data.forEach(item => {
            var p = document.createElement('p');
            p.textContent = 'Name: ' + item.name + ', Age: ' + item.age;
            outputDiv.appendChild(p);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });