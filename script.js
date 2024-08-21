function checkComposition() {
    const result = document.getElementById('result');
    const group1 = document.getElementById('player-1-1').value;

    if (!group1) {
        result.textContent = "Please select classes for all slots.";
        result.style.color = 'red';
    } else {
        result.textContent = "Raid composition looks good!";
        result.style.color = 'green';
    }
}
