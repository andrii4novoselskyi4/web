document.addEventListener('mouseup', function () {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
        const input = document.getElementById('textInput');
        input.value = selectedText;
    }
});
