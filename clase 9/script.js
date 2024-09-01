document.addEventListener('DOMContentLoaded', function() {
    const radiusInput = document.getElementById('radius');
    const calculateButton = document.getElementById('calculate');
    const resultParagraph = document.getElementById('result');

    calculateButton.addEventListener('click', function() {
        const radius = parseFloat(radiusInput.value);
        
        if (isNaN(radius) || radius <= 0) {
            resultParagraph.textContent = 'Por favor, introduce un radio válido mayor que 0.';
            resultParagraph.style.color = 'red';
        } else {
            const area = Math.PI * Math.pow(radius, 2);
            resultParagraph.textContent = `El área del círculo es: ${area.toFixed(2)}`;
            resultParagraph.style.color = 'black';
        }
    });
});
