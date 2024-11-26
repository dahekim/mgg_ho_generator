export function initializeBracketButtons() {
    document.querySelectorAll('.bracket-btn').forEach(button => {
        button.addEventListener('click', function () {
            const bracketText = this.getAttribute('data-bracket');
            copyToClipboard(bracketText);
        });
    });
}

function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('복사 실패', err);
    }
    textArea.setSelectionRange(0, 0);
    document.body.removeChild(textArea);
}
