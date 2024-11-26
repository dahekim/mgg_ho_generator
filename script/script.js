// 특수 괄호 복사 
function initializeBracketButtons() {
    document.querySelectorAll('.bracket-btn').forEach(button => {
        button.addEventListener('click', function() {
            const bracketText = this.getAttribute('data-bracket');
            copyToClipboard(bracketText);
        });
    });

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
}


// 프리뷰 카드의 폰트 크기 가져옴
function getFontSize(element) {
    return window.getComputedStyle(element).fontSize;
}

// 일반 핸드아웃 카드 생성 함수
function createHandoutCard(name, mission, shock, secret) {
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
                        <div class="content__secret" style="font-size: ${getFontSize(previewSecretContent)}">${secret}</div>
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

// SCP 핸드아웃 카드 생성 함수
function createSCPHandoutCard(shock, infection, secret) {
    const previewShockContent = document.getElementById('shockContent');
    const previewInfectionContent = document.getElementById('infectionContent');
    const previewSecretContent = document.getElementById('secretContent');

    const newCardHTML = `
        <div class="handout-card scp-handout">
            <button class="delete-btn">X</button>
            <div class="handout-card__front">
                <div class="handout-card__front-header">Handout</div>
                <div class="handout-card__front-content">
                    정<br />
                    보<br />
                    재<br />
                    해<br />
                </div>
            </div>
            <div class="handout-card__behind scp-handout">
                <div class="handout-card__behind-header">Handout</div>
                <div class="handout-card__behind-content">
                    <div class="handout-card__secret-section">비밀</div>
                    <div class="handout-card__shock-secret-section">
                        <div class="handout-card__shock-section">
                            <span class="label__shock">쇼크</span>
                            <div class="content__shock" style="font-size: ${getFontSize(previewShockContent)}">${shock}</div>
                        </div>
                        <div class="handout-card__shock-section">
                                <span class="label__infection">2차감염</span>
                                <div class="content__infection" style="font-size: ${getFontSize(previewInfectionContent)}">${infection}</div>
                            </div>
                        <div class="content__secret" style="font-size: ${getFontSize(previewSecretContent)}">${secret}</div>
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

// 핸드아웃 개별 삭제
document.addEventListener('DOMContentLoaded', () => {
    const outputContainer = document.querySelector('.card__container');
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

// 인세인 <-> 인세인SCP 핸드아웃 변경
document.addEventListener('DOMContentLoaded', function() {
    const switchToDefaultBtn = document.getElementById('switchToDefault');
    const switchToSCPBtn = document.getElementById('switchToSCP');    
    const handoutPreview = document.getElementById('handoutPreview');
    const handoutEditor = document.getElementById('handoutEditor');

    // 버튼 배경색 업데이트
    function updateButtonBackground(selectedBtn, otherBtn) {
        selectedBtn.style.borderColor= '#ff0000';  
        selectedBtn.style.backgroundColor = '#ff0000';  
        selectedBtn.style.color = '#fff';
        selectedBtn.style.fontWeight = '700';
        
        otherBtn.style.backgroundColor = '';            
        otherBtn.style.color = '';
        otherBtn.style.borderColor= '';  
        otherBtn.style.fontWeight = '';
    }


    // 일반 핸드아웃 전환
    function switchToDefaultHandout() {
        handoutPreview.classList.add('general-handout');
        handoutPreview.classList.remove('scp-handout');
        handoutEditor.classList.add('general-handout');
        handoutEditor.classList.remove('scp-handout');
        
        loadDefaultHandoutContent();

        updateContent('nameInput', 'nameContent', '', adjustFontSizeNameShock);
        updateContent('missionInput', 'missionContent', '', adjustFontSizeMission);
        updateContent('shockInput', 'shockContent', '', adjustFontSizeNameShock);
        updateContent('secretInput', 'secretContent', '', adjustFontSizeSecret);

        updateButtonBackground(switchToDefaultBtn, switchToSCPBtn)
    }
    
    // SCP 핸드아웃 전환
    function switchToSCPHandout() {
        handoutPreview.classList.add('scp-handout');
        handoutPreview.classList.remove('general-handout');
        handoutEditor.classList.add('scp-handout');
        handoutEditor.classList.remove('general-handout');

        loadSCPHandoutContent();

        updateContent('shockInput', 'shockContent', '', adjustFontSizeNameShock);
        updateContent('infectionInput', 'infectionContent', '', adjustFontSizeNameShock);
        updateContent('secretInput', 'secretContent', '', adjustFontSizeSecretSCP);

        updateButtonBackground(switchToSCPBtn, switchToDefaultBtn)
    }

    switchToDefaultBtn.addEventListener('click', switchToDefaultHandout);
    switchToSCPBtn.addEventListener('click', switchToSCPHandout);

    // 일반 핸드아웃 HTML 불러오기
    function loadDefaultHandoutContent() {
        handoutPreview.innerHTML = `
            <div class="handout-card">
                <div class="handout-card__front">
                    <div class="handout-card__front-header">Handout</div>
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
                    <div class="handout-card__behind-header">Handout</div>
                    <div class="handout-card__behind-content">
                        <div class="handout-card__secret-section">비밀</div>
                        <div class="handout-card__shock-secret-section">
                            <div class="handout-card__shock-section">
                                <span class="label__shock">쇼크</span>
                                <div class="content__shock" id="shockContent"></div>
                            </div>
                            <div class="content__secret" id="secretContent"></div>
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
            <div class="handout-card__FontManager">
                <button id="fontToggleBtn">▼ 폰트 사이즈 및 줄간격 조정</button>
                
                <div class="font-settings" id="fontSettings" style="display: none;">
                    <label for="fontSize">폰트 크기:</label>
                    <input type="number" id="fontSize" value="14" min="9" max="50"> px<br>
                    
                    <label for="lineHeight">줄 간격:</label>
                    <input type="number" id="lineHeight" value="1.5" step="0.1" min="1" max="3"> em
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
                        <textarea id="shockInput" placeholder="쇼크를 입력하세요." autocomplete="off"></textarea>
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
        const fontToggleBtn = document.getElementById('fontToggleBtn');
        const fontSettings = document.getElementById('fontSettings');

        resetBtn.addEventListener('click', resetHandout);
        submitBtn.addEventListener('click', submitHandout);

        // 토글 버튼 클릭 시 폰트 설정 영역을 보이거나 숨깁니다.
        fontToggleBtn.addEventListener('click', () => {
            if (fontSettings.style.display === 'none') {
                fontSettings.style.display = 'block';
            } else {
                fontSettings.style.display = 'none';
            }
        });
    }

    // SCP 핸드아웃 HTML 불러오기
    function loadSCPHandoutContent() {
        handoutPreview.innerHTML = `
            <section class="handout-preview__container">
                <div class="handout-card">
                    <div class="handout-card__front">
                        <div class="handout-card__front-header">Handout</div>
                        <div class="handout-card__front-content">
                            정<br />
                            보<br />
                            재<br />
                            해<br />
                        </div>
                    </div>
                    <div class="handout-card__behind">
                        <div class="handout-card__behind-header">Handout</div>
                        <div class="handout-card__behind-content">
                            <div class="handout-card__secret-section">비밀</div>

                            <div class="handout-card__shock-secret-section">
                                <div class="handout-card__range-section">
                                    <div class="handout-card__shock-section">
                                        <span class="label__shock">쇼크</span>
                                        <div class="content__shock" id="shockContent"></div>
                                    </div>
                                    <div class="handout-card__shock-section">
                                        <span class="label__infection">2차감염</span>
                                        <div class="content__infection" id="infectionContent"></div>
                                    </div>
                                </div>
                                
                                <div class="content__secret" id="secretContent"></div>
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
            </section>
        `;

        handoutEditor.innerHTML = `
            <div class="handout-editor__inputs">
                <div class="handout-editor__behind-inputs">
                    <p class="editor-section__header">뒷면</p>
                    <div class="input-group__behind">
                        <textarea id="shockInput" placeholder="쇼크를 입력하세요." autocomplete="off"></textarea>
                        <textarea id="infectionInput" placeholder="감염정보를 입력하세요." autocomplete="off"></textarea>
                        <textarea id="secretInput" placeholder="비밀정보를 입력하세요." autocomplete="off"></textarea>
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

    // 일반 핸드아웃 초기화
    function resetHandout(){
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(function(textarea) {
            textarea.value = ''; 
        });

        const contentElements = ['nameContent', 'missionContent', 'shockContent', 'secretContent', 'infectionContent'];
        contentElements.forEach(function(id) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = '';
                adjustFontSizeNameShock(element, '');
            }
        });

    }

    // SCP 핸드아웃 초기화
    function resetSCPHandout(){
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(function(textarea) {
            textarea.value = '';
        });        
        const contentElements = [ 'shockContent', 'infectionContent', 'secretContent'];
        contentElements.forEach(function(id) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = '';
            }
        });

    }

    // 일반 핸드아웃 등록
    function submitHandout(){
        const outputContainer = document.querySelector('.card__container');

        let nameInput = document.getElementById('nameInput').value.trim();
        let missionInput = document.getElementById('missionInput').value.trim();
        let shockInput = document.getElementById('shockInput').value.trim();
        let secretInput = document.getElementById('secretInput').value.trim();
        
        // nameInput = nameInput.replace(/\n/g, '<br>');
        missionInput = missionInput.replace(/\n/g, '<br>');
        // shockInput = shockInput.replace(/\n/g, '<br>');
        secretInput = secretInput.replace(/\n/g, '<br>');

        const newCardHTML = createHandoutCard(nameInput, missionInput, shockInput, secretInput);
        
        outputContainer.innerHTML += newCardHTML;

        // 입력 필드 초기화
        document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');

        // 미리보기 내용 삭제
        document.getElementById('nameContent').textContent = '';
        document.getElementById('missionContent').textContent = '';
        document.getElementById('shockContent').textContent = '';
        document.getElementById('secretContent').textContent = '';
    }

    //SCP 핸드아웃 등록
    function submitSCPHandout(){
        const outputContainer = document.querySelector('.card__container');

        let shockInput = document.getElementById('shockInput').value.trim();
        let infectionInput = document.getElementById('infectionInput').value.trim();
        let secretInput = document.getElementById('secretInput').value.trim();

        // shockInput = shockInput.replace(/\n/g, '<br>');
        // infectionInput = infectionInput.replace(/\n/g, '<br>');
        secretInput = secretInput.replace(/\n/g, '<br>');

        const newCardHTML = createSCPHandoutCard(shockInput, infectionInput, secretInput);
        outputContainer.innerHTML += newCardHTML;

        // 입력 필드 초기화
        document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');

        // 미리보기 내용 삭제
        document.getElementById('shockContent').textContent = '';
        document.getElementById('infectionContent').textContent = '';
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

    // 일반 핸드아웃 앞면 이름, 쇼크 범위 & SCP 핸드아웃 2차감염 폰트 크기 조절
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

    // 일반 핸드아웃 앞면 사명정보 폰트 크기 조절
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

    // SCP 핸드아웃 뒷면 비밀정보 폰트 크기 조절
    function adjustFontSizeSecretSCP(element, text) {
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
    
    // 페이지 로드 시 인세인(일반) 핸드아웃 불러오도록 설정
    switchToDefaultHandout();
});
