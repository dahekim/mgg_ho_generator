document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");
    const fontSizeSelector = document.getElementById("fontSizeSelector");

    // 폰트 크기 적용
    fontSizeSelector.addEventListener("change", () => {
        const selectedFontSize = fontSizeSelector.value + "px";
        document.execCommand("fontSize", false, 3);  // 기존 폰트 크기 설정
        const selectedText = window.getSelection().toString();
        
        // 선택한 텍스트의 폰트 크기 변경
        if (selectedText) {
            document.execCommand("fontSize", false, 3);  // fontSize 적용
            const span = document.createElement("span");
            span.style.fontSize = selectedFontSize;
            span.textContent = selectedText;
            editor.innerHTML = editor.innerHTML.replace(selectedText, span.outerHTML);  // 선택된 텍스트에 적용
        } else {
            // 선택된 텍스트가 없다면 에디터 자체에 폰트 크기 적용
            editor.style.fontSize = selectedFontSize;  
        }

    // 선택한 텍스트의 폰트 크기 감지
    editor.addEventListener("mouseup", () => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const parentElement = selection.anchorNode?.parentElement;
            if (parentElement && parentElement !== editor) {
                const fontSize = window.getComputedStyle(parentElement).fontSize;
                const fontSizeValue = parseInt(fontSize);

                // 셀렉트박스의 값을 선택한 글자 크기에 맞게 변경
                fontSizeSelector.value = fontSizeValue;
            }
        }
    });

    
    });

    // 이미지 삽입
    // document.getElementById("imageBtn").addEventListener("click", () => {
    //     const url = prompt("이미지 URL을 입력하세요:");
    //     if (url) {
    //         document.execCommand("insertImage", false, url);
    //     }
    // });

    // 볼드
    document.getElementById("boldBtn").addEventListener("click", () => {
        document.execCommand("bold");
    });

    // 이탤릭
    document.getElementById("italicBtn").addEventListener("click", () => {
        document.execCommand("italic");
    });
});
