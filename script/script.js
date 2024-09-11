// 문자열 길이를 콘솔에 출력하는 함수
// function logTextareaLength(id) {
//     const textarea = document.getElementById(id);

//     if (textarea) {
//         textarea.addEventListener('input', () => {
//             console.log(`Textarea ID: ${id}, Length: ${textarea.value.length}`);
//         });
//     } else {
//         console.error(`No textarea found with ID: ${id}`);
//     }
// }

// // 사용 예시: 각각의 textarea 필드에 대해 함수 호출
// document.addEventListener('DOMContentLoaded', () => {
//     logTextareaLength('nameInput');
//     logTextareaLength('missionInput');
//     logTextareaLength('shockInput');
//     logTextareaLength('secretInput');
// });

// 특수 괄호 복사 
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    
    document.querySelectorAll('.bracket-btn').forEach(button => {
        button.addEventListener('click', function() {
            const bracketText = this.getAttribute('data-bracket');
            copyToClipboard(bracketText);
            // showModal(`${bracketText}이 클립보드에 복사되었습니다.`);
        });
    });

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('클립보드에 복사됨: ', text);
        }).catch(err => {
            console.error('클립보드 복사 실패: ', err);
        });
    }
});

// 핸드아웃 앞면 이름, 쇼크 범위 폰트 크기 조절
function adjustFontSizeNameShock(element, text) {
    if (text.length > 25) {
        element.style.fontSize = '7px';
        element.style.lineHeight = '1.1em';
    } else if (text.length > 13) {
        element.style.fontSize = '8px';
        element.style.lineHeight = '1.2em';
    } else if (text.length > 7) {
        element.style.fontSize = '12px';
        element.style.lineHeight = '1.1em';
    } else { // 디폴트
        element.style.fontSize = '14px'; 
        element.style.lineHeight = '1.5em'; 
    }
}

// 핸드아웃 앞면 사명 폰트크기 조절
function adjustFontSizeMission(element, text) {
    if (text.length >225){
        element.style.fontSize = '8px';
        element.style.lineHeight = '1.1em';
    }
    else if (text.length > 156) {
        element.style.fontSize = '10px';
        element.style.lineHeight = '1.3em';
    } 
    else if (text.length > 99) {
        element.style.fontSize = '12px';
        element.style.lineHeight = '1.3em';
    } else { // 디폴트
        element.style.fontSize = '14px'; 
        element.style.lineHeight = '1.5em'; 
    }
}

// 핸드아웃 뒷면 비밀정보 폰트크기 조절
function adjustFontSizeSecret(element, text) {
    if (text.length >165){
        element.style.fontSize = '8px';
        element.style.lineHeight = '1.1em';
    }
    else if (text.length > 117) {
        element.style.fontSize = '10px';
        element.style.lineHeight = '1.3em';
    } 
    else if (text.length > 76) {
        element.style.fontSize = '12px';
        element.style.lineHeight = '1.3em';
    } else { // 디폴트
        element.style.fontSize = '14px'; 
        element.style.lineHeight = '1.5em'; 
    }
}

// 인풋 필드 핸들러
function updateContent(id, targetId, defaultValue, adjustFontSize) {
    const inputElement = document.getElementById(id);
    const targetElement = document.getElementById(targetId);

    inputElement.addEventListener('input', () => {
        const text = inputElement.value || defaultValue;
        targetElement.innerText = text;
        adjustFontSize(targetElement, text);
    });
}

// 실시간 반영
document.addEventListener('DOMContentLoaded', () => {
    updateContent("nameInput", "nameContent", "", adjustFontSizeNameShock);
    updateContent("shockInput", "shockContent", "", adjustFontSizeNameShock);
    updateContent("missionInput", "missionContent", "", adjustFontSizeMission);
    updateContent("secretInput", "secretContent", "", adjustFontSizeSecret);
});

// 입력필드 초기화
document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.querySelector('.handout-editor__reset-btn');
    
    resetButton.addEventListener('click', function() {
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(function(textarea) {
            textarea.value = '';
        });        
        const contentElements = ['nameContent', 'missionContent', 'shockContent', 'secretContent'];
        contentElements.forEach(function(id) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = '';
            }
        });
    });
});

// 프리뷰 카드의 폰트 크기 가져옴
function getFontSize(element) {
    return window.getComputedStyle(element).fontSize;
}

// 핸드아웃 카드 생성 함수
function createHandoutCard(name, mission, shock, secret) {
    // 미리보기 카드에서 폰트 크기를 가져오기
    const previewNameContent = document.getElementById('nameContent');
    const previewMissionContent = document.getElementById('missionContent');
    const previewShockContent = document.getElementById('shockContent');
    const previewSecretContent = document.getElementById('secretContent');

    const newCardHTML = `
        <div class="handout-card">
            <button class="delete-btn">X</button>
            <div class="handout-card__front">
                <div class="handout-card__front-header">Handout</div>
                <div class="handout-card__front-content">
                    <div class="handout-card__name-section">
                        <span class="label__name">이름</span>
                        <div class="content__name" style="font-size: ${getFontSize(previewNameContent)}">${name}</div>
                    </div>
                    <div class="handout-card__mission-section">
                        <span class="label__mission">사명</span>
                        <div class="content__mission" style="font-size: ${getFontSize(previewMissionContent)}">${mission}</div>
                    </div>
                </div>
            </div>
            <div class="handout-card__behind">
                <div class="handout-card__behind-header">Handout</div>
                <div class="handout-card__behind-content">
                    <div class="handout-card__secret-section">비밀</div>
                    <div class="handout-card__shock-secret-section">
                        <div class="handout-card__shock-section">
                            <span class="label__shock">쇼크</span>
                            <div class="content__shock" style="font-size: ${getFontSize(previewShockContent)}">${shock}</div>
                        </div>
                        <div class="content__secret-info" style="font-size: ${getFontSize(previewSecretContent)}">${secret}</div>
                    </div>
                    <div class="handout-card__behind-footer">
                        <div class="footer__disclaimer">
                            이 비밀을<br>
                            스스로 밝힐 수는 없다.
                        </div>
                        <i class="fa-solid fa-hand"></i>
                    </div>
                </div>
            </div>
        </div>
    `;

    return newCardHTML;
}

// 핸드아웃 등록
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.handout-editor__submit-btn');
    const outputContainer = document.querySelector('.card__container');

    submitButton.addEventListener('click', function(event) {
        const nameInput = document.getElementById('nameInput').value.trim();
        const missionInput = document.getElementById('missionInput').value.trim();
        const shockInput = document.getElementById('shockInput').value.trim();
        const secretInput = document.getElementById('secretInput').value.trim();

        const newCardHTML = createHandoutCard(nameInput, missionInput, shockInput, secretInput);
        outputContainer.innerHTML += newCardHTML;

        // 입력 필드 초기화
        document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');

        // 미리보기 내용 삭제
        document.getElementById('nameContent').textContent = '';
        document.getElementById('missionContent').textContent = '';
        document.getElementById('shockContent').textContent = '';
        document.getElementById('secretContent').textContent = '';
    });
});


// 핸드아웃 개별 삭제
document.addEventListener('DOMContentLoaded', () => {
    const outputContainer = document.querySelector('.handout-output__container');
    outputContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const cardToRemove = event.target.closest('.handout-card');
            if (cardToRemove) {
                cardToRemove.remove();
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.querySelector('.handout-output__reset-btn');
    const cardContainer = document.querySelector('.card__container');
    const messageElement = document.querySelector('.handout-output__message');

    resetButton.addEventListener('click', function() {
        // card__container 내부 내용물을 삭제
        cardContainer.innerHTML = '';

        // 메시지를 다시 표시
        messageElement.style.display = 'block';
    });
});

// 인쇄
document.addEventListener('DOMContentLoaded', () => {
    const printButton = document.querySelector('.handout-output__print-btn');
    printButton.addEventListener('click', () => {
        window.print();
    });
});

// 디폴트 메시지
document.addEventListener('DOMContentLoaded', function() {
    const outputMessageContainer = document.querySelector('.handout-output__message');
    const cardContainer = document.querySelector('.card__container');
    const noHandoutsMessage = document.createElement('p');
    noHandoutsMessage.textContent = '현재 추가된 핸드아웃이 없습니다.';
    noHandoutsMessage.className = 'no-handouts-message';

    // 카드가 없을 때 메시지 업데이트 함수
    function updateNoHandoutsMessage() {
        const handoutCards = cardContainer.querySelectorAll('.handout-card');
        if (handoutCards.length === 0) {
            // 카드가 없으면 메시지를 보여줌
            if (!outputMessageContainer.querySelector('.no-handouts-message')) {
                outputMessageContainer.appendChild(noHandoutsMessage);
            }
        } else {
            // 카드가 있으면 메시지를 숨김
            const existingMessage = outputMessageContainer.querySelector('.no-handouts-message');
            if (existingMessage) {
                existingMessage.remove();
            }
        }
    }

    // 핸드아웃 추가 버튼 클릭 이벤트
    document.querySelector('.handout-editor__submit-btn').addEventListener('click', function(event) {
        // 카드 추가 로직이 실행된 후 메시지 업데이트
        updateNoHandoutsMessage();
    });

    // 카드 삭제 버튼 클릭 이벤트
    cardContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.closest('.handout-card').remove();
            updateNoHandoutsMessage();
        }
    });

    // 초기화 버튼 클릭 이벤트
    document.querySelector('.handout-output__reset-btn').addEventListener('click', function() {
        // 카드 컨테이너 안의 모든 카드를 제거
        cardContainer.innerHTML = '';
        // 메시지 업데이트
        updateNoHandoutsMessage();
    });

    // 페이지 로드 시 초기 메시지 상태 확인
    updateNoHandoutsMessage();
});

// 모달 열기 및 닫기 기능
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("comingSoonModal");
    const comingSoonLinks = document.querySelectorAll('.coming-soon');
    const closeBtn = document.getElementById("closeComingSoonModal");

    // "준비중" 링크를 클릭하면 모달을 표시
    comingSoonLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 링크 동작 방지
            modal.style.display = "block"; // 모달 표시
            setTimeout(() => {
                modal.style.display = 'none';
            }, 800); // 0.85초 후에 모달을 숨깁니다.
        });
    });


    // 모달 바깥을 클릭하면 모달을 닫음
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

// 인세인 <-> 인세인SCP 핸드아웃 변경
document.addEventListener('DOMContentLoaded', () => {
    const handoutTypeRadios = document.querySelectorAll('input[name="handout-type"]');
    const handoutPreviewContainer = document.querySelector('.handout-preview__container');

    handoutTypeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                if (radio.value === 'special') {
                    handoutPreviewContainer.classList.add('special');
                    handoutPreviewContainer.classList.remove('general');
                } else {
                    handoutPreviewContainer.classList.add('general');
                    handoutPreviewContainer.classList.remove('special');
                }
            }
        });
    });
});