// 특수 괄호 복사 
document.addEventListener('DOMContentLoaded', function() {    
    document.querySelectorAll('.bracket-btn').forEach(button => {
        button.addEventListener('click', function() {
            const bracketText = this.getAttribute('data-bracket');
            copyToClipboard(bracketText);
        });
    });

    function copyToClipboard(text) {
        // http 환경
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
});

// 프리뷰 카드의 폰트 크기 가져옴
function getFontSize(element) {
    return window.getComputedStyle(element).fontSize;
}

// 일반 핸드아웃 카드 생성 함수
function createHandoutCard(name, mission, secret) {
    const previewNameContent = document.getElementById('nameContent');
    const previewMissionContent = document.getElementById('missionContent');
    const previewSecretContent = document.getElementById('secretContent');

    const newCardHTML = `
        <div class="handout-card">
            <button class="delete-btn">X</button>
            <div class="handout-card__front">
                <div class="handout-card__front-header">핸드아웃</div>
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
                <div class="handout-card__behind-header">핸드아웃</div>
                <div class="handout-card__behind-footer">
                    <div class="footer__disclaimer">
                        이 비밀을<br>
                        스스로 밝힐 수는 없다.
                    </div>
                </div>
                <div class="handout-card__behind-content">
                    <div class="handout-card__secret-section">비밀</div>
                    <div class="handout-card__shock-secret-section">
                        <div class="content__secret" style="font-size: ${getFontSize(previewSecretContent)}">${secret}</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return newCardHTML;
}

// 에니그마 핸드아웃 카드 생성 함수
function createEnigmaHandoutCard(name, mission, enigma, condition, effect) {
    const previewNameContent = document.getElementById('nameContent');
    const previewMissionContent = document.getElementById('missionContent');
    const previewEnigmaContent = document.getElementById('enigmaContent');
    const previewConditionContent = document.getElementById('conditionContent');
    const previewEffectContent = document.getElementById('effectContent');

    const newCardHTML = `
        <div class="handout-card">
            <button class="delete-btn">X</button>
            <div class="handout-card__front">
                <div class="handout-card__front-header">에니그마</div>
                <div class="handout-card__front-content">
                    <div class="handout-card__name-section">
                        <span class="label__name">이름</span>
                        <div class="content__name" style="font-size: ${getFontSize(previewNameContent)}">${name}</div>
                    </div>
                    <div class="handout-card__mission-section">
                        <span class="label__mission">위장</span>
                        <div class="content__mission" style="font-size: ${getFontSize(previewMissionContent)}">${mission}</div>
                    </div>
                </div>
            </div>
            <div class="handout-card__behind">
                <div class="handout-card__behind-header">에니그마</div>
                <div class="handout-card__behind-content">
                    <div class="handout-card__enigma-section">
                        <span class="label__enigma">이름</span>
                        <div class="content__enigma" style="font-size: ${getFontSize(previewEnigmaContent)}">${enigma}</div>
                    </div>
                    <div class="handout-card__secret-section">전력</div>
                    <div class="handout-card__enigma-info-section">
                        <div class="handout-card__condition-section">
                            <span class="label__condition">---------해제 조건---------</span>
                            <div class="content__condition" style="font-size: ${getFontSize(previewConditionContent)}">${condition}</div>
                        </div>
                        <div class="handout-card__effect-section">
                            <span class="label__effect">------------효과------------</span>
                            <div class="content__effect" style="font-size: ${getFontSize(previewEffectContent)}">${effect}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return newCardHTML;
}

// 페르소나 핸드아웃 카드 생성 함수
function createPersonaHandoutCard(name, mission, persona, secret){
    const previewNameContent = document.getElementById('nameContent');
    const previewMissionContent = document.getElementById('missionContent');
    const previewPersonaContent = document.getElementById('personaContent');
    const previewSecretContent = document.getElementById('secretContent');

    const newCardHTML = `
        <div class="handout-card">
            <button class="delete-btn">X</button>
            <div class="handout-card__front">
                <div class="handout-card__front-header">페르소나</div>
                <div class="handout-card__front-content">
                    <div class="handout-card__name-section">
                        <span class="label__name">이름</span>
                        <div class="content__name" style="font-size: ${getFontSize(previewNameContent)}">${name}</div>
                    </div>
                    <div class="handout-card__mission-section">
                        <span class="label__mission">위장</span>
                        <div class="content__mission" style="font-size: ${getFontSize(previewMissionContent)}">${mission}</div>
                    </div>
                </div>
            </div>
            <div class="handout-card__behind">
                <div class="handout-card__behind-header">페르소나</div>                
                <div class="handout-card__behind-content">
                    <div class="handout-card__persona-section">
                            <span class="label__persona">이름</span>
                            <div class="content__persona"style="font-size: ${getFontSize(previewPersonaContent)}">${persona}</div>
                    </div>
                    <div class="handout-card__secret-section">진실</div>
                    <div class="handout-card__shock-secret-section">
                        <div class="content__secret" style="font-size: ${getFontSize(previewSecretContent)}">${secret}</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return newCardHTML;

}

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

// 인쇄 프리뷰 페이지 초기화
document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.querySelector('.handout-output__reset-btn');
    const cardContainer = document.querySelector('.card__container');

    resetButton.addEventListener('click', function() {
        cardContainer.innerHTML = '';
    });
});

// 인쇄
document.addEventListener('DOMContentLoaded', () => {
    const printButton = document.querySelector('.handout-output__print-btn');
    printButton.addEventListener('click', () => {
        window.print();
    });
});

// 모달 열기 및 닫기 기능
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("comingSoonModal");
    const comingSoonLinks = document.querySelectorAll('.coming-soon');
    comingSoonLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            modal.style.display = "block"; 
            setTimeout(() => {
                modal.style.display = 'none';
            }, 800); 
        });
    });


    // 모달 바깥을 클릭하면 모달을 닫음
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

// 일반 <-> 에니그마 <-> 페르소나 핸드아웃 변경
document.addEventListener('DOMContentLoaded', function() {
    const switchToDefaultBtn = document.getElementById('switchToDefault');
    const switchToEnigmaBtn = document.getElementById('switchToEnigma');    
    const switchToPersonaBtn = document.getElementById('switchToPersona');    
    
    const handoutPreview = document.getElementById('handoutPreview');
    const handoutEditor = document.getElementById('handoutEditor');

    // 버튼 배경색 업데이트
    function updateButtonBackground(selectedBtn, ...otherBtn) {
        selectedBtn.style.borderColor= '#ff0000';  
        selectedBtn.style.backgroundColor = '#ff0000';  
        selectedBtn.style.color = '#fff';
        selectedBtn.style.fontWeight = '700';
        
        otherBtn.forEach(btn => {
            btn.style.backgroundColor = ''; 
            btn.style.color = '';
            btn.style.borderColor = '';  
            btn.style.fontWeight = '';
        });
    }

    // 일반 핸드아웃 전환
    function switchToDefaultHandout() {        
        loadDefaultHandoutContent();

        updateContent('nameInput', 'nameContent', '', adjustFontSizeNameShock);
        updateContent('missionInput', 'missionContent', '', adjustFontSizeMission);
        updateContent('secretInput', 'secretContent', '', adjustFontSizeSecret);

        updateButtonBackground(switchToDefaultBtn, switchToEnigmaBtn, switchToPersonaBtn)
    }
    
    // 에니그마 핸드아웃 전환
    function switchToEnigmaHandout() {
        loadEnigmaHandoutContent();

        updateContent('nameInput', 'nameContent', '', adjustFontSizeNameShock);
        updateContent('missionInput', 'missionContent', '', adjustFontSizeMission);
        updateContent('enigmaInput', 'enigmaContent', '', adjustFontSizeNameShock);
        updateContent('conditionInput', 'conditionContent', '', adjustFontSizeCondition);
        updateContent('effectInput', 'effectContent', '', adjustFontSizeEffect);
        
        updateButtonBackground(switchToEnigmaBtn, switchToDefaultBtn, switchToPersonaBtn)
    }

    // 페르소나 핸드아웃
    function switchToPersonaHandout() {
        loadPersonaHandoutContent();

        updateContent('nameInput', 'nameContent', '', adjustFontSizeNameShock);
        updateContent('missionInput', 'missionContent', '', adjustFontSizeMission);
        updateContent('personaInput', 'personaContent', '', adjustFontSizeNameShock);
        updateContent('secretInput', 'secretContent', '', adjustFontSizeSecret);
        
        updateButtonBackground(switchToPersonaBtn, switchToEnigmaBtn, switchToDefaultBtn)
    }

    switchToDefaultBtn.addEventListener('click', switchToDefaultHandout);
    switchToEnigmaBtn.addEventListener('click', switchToEnigmaHandout);
    switchToPersonaBtn.addEventListener('click', switchToPersonaHandout);
    
    // 일반 핸드아웃 HTML 불러오기
    function loadDefaultHandoutContent() {
        handoutPreview.innerHTML = `
            <div class="handout-card">
                <div class="handout-card__front">
                    <div class="handout-card__front-header">핸드아웃</div>
                    <div class="handout-card__front-content">
                        <div class="handout-card__name-section">
                            <span class="label__name">이름</span>
                            <div class="content__name" id="nameContent"></div>
                        </div>
                        <div class="handout-card__mission-section">
                            <span class="label__mission">사명</span>
                            <div class="content__mission" id="missionContent"></div>
                        </div>
                    </div>
                </div>
                <div class="handout-card__behind">
                    <div class="handout-card__behind-header">핸드아웃</div>
                    <div class="handout-card__behind-footer">
                        <div class="footer__disclaimer">
                            이 비밀을<br>
                            스스로 밝힐 수는 없다.
                        </div>
                    </div>
                    <div class="handout-card__behind-content">
                        <div class="handout-card__secret-section">비밀</div>
                        <div class="handout-card__shock-secret-section">
                            <div class="content__secret" id="secretContent"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        handoutEditor.innerHTML = `
            <div class="handout-editor__inputs">
                <div class="handout-editor__front-inputs">
                    <p class="editor-section__header">앞면</p>
                    <div class="input-group__front">
                        <textarea id="nameInput" placeholder="이름을 입력하세요." autocomplete="off"></textarea>
                        <textarea id="missionInput" placeholder="사명 정보를 입력하세요." autocomplete="off"></textarea>
                    </div>
                </div>
                <div class="handout-editor__behind-inputs">
                    <p class="editor-section__header">뒷면</p>
                    <div class="input-group__behind">
                        <textarea id="secretInput" placeholder="비밀 정보를 입력하세요." autocomplete="off"></textarea>
                    </div>
                </div>
            </div>
            <div class="handout-editor__button-group">
                <button type="reset" class="handout-editor__reset-btn">초기화</button>
                <button type="submit" class="handout-editor__submit-btn">등록</button>
            </div>
        `;

        const resetBtn = document.querySelector('.handout-editor__reset-btn');
        const submitBtn = document.querySelector('.handout-editor__submit-btn');
        
        resetBtn.addEventListener('click', resetHandout);
        submitBtn.addEventListener('click', submitHandout);
    }

    // 에니그마 핸드아웃 HTML 불러오기
    function loadEnigmaHandoutContent() {
        handoutPreview.innerHTML = `
            <div class="handout-card">
                <div class="handout-card__front">
                    <div class="handout-card__front-header">에니그마</div>
                    <div class="handout-card__front-content">
                        <div class="handout-card__name-section">
                            <span class="label__name">이름</span>
                            <div class="content__name" id="nameContent"></div>
                        </div>
                        <div class="handout-card__mission-section">
                            <span class="label__mission">위장</span>
                            <div class="content__mission" id="missionContent"></div>
                        </div>
                    </div>
                </div>
                <div class="handout-card__behind">
                    <div class="handout-card__behind-header">에니그마</div>
                    <div class="handout-card__behind-content">
                        <div class="handout-card__enigma-section">
                            <span class="label__enigma">이름</span>
                            <div class="content__enigma" id="enigmaContent"></div>
                        </div>
                        <div class="handout-card__secret-section">전력</div>
                        <div class="handout-card__enigma-info-section">
                            <div class="handout-card__condition-section">
                                <span class="label__condition">---------해제 조건---------</span>
                                <div class="content__condition" id="conditionContent"></div>
                            </div>
                            <div class="handout-card__effect-section">
                                <span class="label__effect">------------효과------------</span>
                                <div class="content__effect" id="effectContent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        handoutEditor.innerHTML = `
            <div class="handout-editor__inputs">
                <div class="handout-editor__front-inputs">
                    <p class="editor-section__header">앞면</p>
                    <div class="input-group__front">
                        <textarea id="nameInput" placeholder="이름을 입력하세요." autocomplete="off"></textarea>
                        <textarea id="missionInput" placeholder="위장 정보를 입력하세요." autocomplete="off"></textarea>
                    </div>
                </div>
                <div class="handout-editor__behind-inputs">
                    <p class="editor-section__header">뒷면</p>
                    <div class="input-group__behind">
                        <textarea id="enigmaInput" placeholder="이름을 입력하세요." autocomplete="off"></textarea>
                        <textarea id="conditionInput" placeholder="조건을 입력하세요." autocomplete="off"></textarea>
                        <textarea id="effectInput" placeholder="효과를 입력하세요." autocomplete="off"></textarea>
                    </div>
                </div>
            </div>
            <div class="handout-editor__button-group">
                <button type="reset" class="handout-editor__reset-btn">초기화</button>
                <button type="submit" class="handout-editor__submit-btn">등록</button>
            </div>
        `;

        const resetBtn = document.querySelector('.handout-editor__reset-btn');
        const submitBtn = document.querySelector('.handout-editor__submit-btn');


        resetBtn.addEventListener('click', resetSCPHandout);
        submitBtn.addEventListener('click', submitSCPHandout);
    }

    // 페르소나 핸드아웃 HTML 불러오기
    function loadPersonaHandoutContent() {
        handoutPreview.innerHTML = `
            <div class="handout-card">
                <div class="handout-card__front">
                    <div class="handout-card__front-header">페르소나</div>
                    <div class="handout-card__front-content">
                        <div class="handout-card__name-section">
                            <span class="label__name">이름</span>
                            <div class="content__name" id="nameContent"></div>
                        </div>
                        <div class="handout-card__mission-section">
                            <span class="label__mission">위장</span>
                            <div class="content__mission" id="missionContent"></div>
                        </div>
                    </div>
                </div>
                <div class="handout-card__behind">
                    <div class="handout-card__behind-header">페르소나</div>
                    <div class="handout-card__behind-content">
                        <div class="handout-card__persona-section">
                            <span class="label__persona">이름</span>
                            <div class="content__persona" id="personaContent"></div>
                        </div>
                        <div class="handout-card__secret-section">진실</div>
                        <div class="handout-card__shock-secret-section">
                            <div class="content__secret" id="secretContent"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        handoutEditor.innerHTML = `
            <div class="handout-editor__inputs">
                <div class="handout-editor__front-inputs">
                    <p class="editor-section__header">앞면</p>
                    <div class="input-group__front">
                        <textarea id="nameInput" placeholder="이름을 입력하세요." autocomplete="off"></textarea>
                        <textarea id="missionInput" placeholder="위장 정보를 입력하세요." autocomplete="off"></textarea>
                    </div>
                </div>
                <div class="handout-editor__behind-inputs">
                    <p class="editor-section__header">뒷면</p>
                    <div class="input-group__behind">
                        <textarea id="personaInput" placeholder="이름을 입력하세요." autocomplete="off"></textarea>
                        <textarea id="secretInput" placeholder="진실 정보를 입력하세요." autocomplete="off"></textarea>
                    </div>
                </div>
            </div>
            <div class="handout-editor__button-group">
                <button type="reset" class="handout-editor__reset-btn">초기화</button>
                <button type="submit" class="handout-editor__submit-btn">등록</button>
            </div>
        `;

        const resetBtn = document.querySelector('.handout-editor__reset-btn');
        const submitBtn = document.querySelector('.handout-editor__submit-btn');
        
        resetBtn.addEventListener('click', resetPersonaHandout);
        submitBtn.addEventListener('click', submitPersonaHandout);
    }

    // 일반 핸드아웃 초기화
    function resetHandout(){
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(function(textarea) {
            textarea.value = ''; 
        });

        const contentElements = ['nameContent', 'missionContent', 'secretContent'];
        contentElements.forEach(function(id) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = '';
                adjustFontSizeNameShock(element, '');
            }
        });
    }

    // 에니그마 핸드아웃 초기화
    function resetSCPHandout(){
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(function(textarea) {
            textarea.value = '';
        });        
        const contentElements = [ 'nameContent', 'missionContent', 'enigmaContent', 'conditionContent', 'effectContent'];
        contentElements.forEach(function(id) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = '';
            }
        });

    }

    // 페르소나 핸드아웃 초기화
    function resetPersonaHandout(){
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(function(textarea) {
            textarea.value = ''; 
        });

        const contentElements = ['nameContent', 'missionContent', 'personaContent', 'secretContent'];
        contentElements.forEach(function(id) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = '';
                adjustFontSizeNameShock(element, '');
            }
        });

    }

    // 일반 핸드아웃 등록
    function submitHandout(){
        const outputContainer = document.querySelector('.card__container');

        const nameInput = document.getElementById('nameInput').value.trim();
        const missionInput = document.getElementById('missionInput').value.trim();
        const secretInput = document.getElementById('secretInput').value.trim();

        const newCardHTML = createHandoutCard(nameInput, missionInput, secretInput);
        
        outputContainer.innerHTML += newCardHTML;

        // 입력 필드 초기화
        document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');

        // 미리보기 내용 삭제
        document.getElementById('nameContent').textContent = '';
        document.getElementById('missionContent').textContent = '';
        document.getElementById('secretContent').textContent = '';
    }

    // 에니그마 핸드아웃 등록
    function submitSCPHandout(){
        const outputContainer = document.querySelector('.card__container');

        const nameInput = document.getElementById('nameInput').value.trim();
        const missionInput = document.getElementById('missionInput').value.trim();
        const enigmaInput = document.getElementById('enigmaInput').value.trim();
        const conditionInput = document.getElementById('conditionInput').value.trim();
        const effectInput = document.getElementById('effectInput').value.trim();

        const newCardHTML = createEnigmaHandoutCard(nameInput, missionInput, enigmaInput, conditionInput, effectInput);
        outputContainer.innerHTML += newCardHTML;

        // 입력 필드 초기화
        document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');

        // 미리보기 내용 삭제
        document.getElementById('nameContent').textContent = '';
        document.getElementById('missionContent').textContent = '';
        document.getElementById('enigmaContent').textContent = '';
        document.getElementById('conditionContent').textContent = '';
        document.getElementById('effectContent').textContent = '';
    }

    // 페르소나 핸드아웃 등록
    function submitPersonaHandout(){
        const outputContainer = document.querySelector('.card__container');

        const nameInput = document.getElementById('nameInput').value.trim();
        const missionInput = document.getElementById('missionInput').value.trim();
        const personaInput = document.getElementById('personaInput').value.trim();
        const secretInput = document.getElementById('secretInput').value.trim();

        const newCardHTML = createPersonaHandoutCard(nameInput, missionInput, personaInput, secretInput);
        
        outputContainer.innerHTML += newCardHTML;

        // 입력 필드 초기화
        document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');

        // 미리보기 내용 삭제
        document.getElementById('nameContent').textContent = '';
        document.getElementById('missionContent').textContent = '';
        document.getElementById('personaContent').textContent = '';
        document.getElementById('secretContent').textContent = '';
    }

    // 에디터 textarea에 텍스트 입력 시 카드 프리뷰에 실시간으로 텍스트 업데이트
    function updateContent(id, targetId, defaultValue, adjustFontSize) {
        const inputElement = document.getElementById(id);
        const targetElement = document.getElementById(targetId);

        if (inputElement && targetElement) {
            inputElement.addEventListener('input', () => {
                const text = inputElement.value || defaultValue;
                targetElement.innerText = text;
                adjustFontSize(targetElement, text);
            });
        } else {
            console.error(`Element with ID '${id}' or '${targetId}' not found.`);
        }
    }

    // 일반 핸드아웃 앞면 이름, 쇼크 범위 & 페르소나 핸드아웃 앞면뒷면 이름 폰트크기 조절
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

    // 일반 핸드아웃 앞면 사명정보 & 페르소나 핸드아웃 앞면 위장정보 및 뒷면 진실 정보 폰트 크기 조절
    function adjustFontSizeMission(element, text) {
        if (text.length > 225) {
            element.style.fontSize = '8px';
            element.style.lineHeight = '1.1em';
        } else if (text.length > 144) {
            element.style.fontSize = '10px';
            element.style.lineHeight = '1.3em';
        } else if (text.length > 90) {
            element.style.fontSize = '12px';
            element.style.lineHeight = '1.3em';
        } else { // 디폴트
            element.style.fontSize = '14px'; 
            element.style.lineHeight = '1.5em'; 
        }
    }

    // 일반 핸드아웃 뒷면 비밀정보 폰트 크기 조절
    function adjustFontSizeSecret(element, text) {
        if (text.length > 165) {
            element.style.fontSize = '8px';
            element.style.lineHeight = '1.1em';
        } else if (text.length > 117) {
            element.style.fontSize = '10px';
            element.style.lineHeight = '1.3em';
        } else if (text.length > 76) {
            element.style.fontSize = '12px';
            element.style.lineHeight = '1.3em';
        } else { // 디폴트
            element.style.fontSize = '14px'; 
            element.style.lineHeight = '1.5em'; 
        }
    }

    // 에니그마 뒷면 해제 조건 폰트 크기 조절
    function adjustFontSizeCondition(element, text) {
        if (text.length > 55) {
            element.style.fontSize = '7px';
            element.style.lineHeight = '1.1em';
        } else if (text.length > 25) {
            element.style.fontSize = '8px';
            element.style.lineHeight = '1.2em';
        } else if (text.length > 12) {
            element.style.fontSize = '12px';
            element.style.lineHeight = '1.1em';
        } else { // 디폴트
            element.style.fontSize = '14px'; 
            element.style.lineHeight = '1.5em'; 
        }
    }

    // 에니그마 핸드아웃 뒷면 효과 폰트 크기 조절
    function adjustFontSizeEffect(element, text) {
        if (text.length > 132) {
            element.style.fontSize = '8px';
            element.style.lineHeight = '1.1em';
        } else if (text.length > 94) {
            element.style.fontSize = '10px';
            element.style.lineHeight = '1.3em';
        } else if (text.length > 58) {
            element.style.fontSize = '12px';
            element.style.lineHeight = '1.3em';
        } else { // 디폴트
            element.style.fontSize = '14px'; 
            element.style.lineHeight = '1.5em'; 
        }
    }
    
    // 페이지 로드 시 일반 핸드아웃 불러오도록 설정
    switchToDefaultHandout();
});
