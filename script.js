function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.textContent = '';
    
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    element.appendChild(cursor);
    
    function type() {
        if (i < text.length) {
            const char = text.charAt(i);
            
            if (text.substr(i, 4) === '<br>') {
                const br = document.createElement('br');
                element.insertBefore(br, cursor);
                i += 4; // Skip the '<br>' characters
            } else {
                const textNode = document.createTextNode(char);
                element.insertBefore(textNode, cursor);
                i++;
            }
            
            setTimeout(type, speed);
        } else {
            cursor.remove();
            if (callback) callback();
        }
    }
    
    type();
}

window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter(
            document.getElementById('typedTitle'),
            "Hi, I'm Mick Verboven 👋",
            80,
            () => {
                setTimeout(() => {
                    typeWriter(
                        document.getElementById('typedSubtitle'),
                        "I'm a student of the Software Developer course<br>currently studying at ROC Nijmegen",
                        30
                    );
                }, 300);
            }
        );
    }, 500);
});