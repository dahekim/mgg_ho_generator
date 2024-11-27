import { initializeBracketButtons } from './common.js';

// 특수 괄호 복사 
document.addEventListener('DOMContentLoaded', function () {
    initializeBracketButtons();
});


// 프리뷰 카드의 폰트 크기 가져옴
function getFontSize(element) {
    if (element instanceof Element) {
        return window.getComputedStyle(element).fontSize;
    } else {
        return null; // 또는 기본 폰트 크기 값 지정
    }
}

// 프리뷰 카드의 줄간격 가져옴
function getLineHeight(element) {
    if (element instanceof Element){
        return window.getComputedStyle(element).lineHeight;
    } else {
        return null; // 또는 기본 줄간격 값 지정
    }
    
}

// 일반 핸드아웃 카드 생성 함수
function createHandoutCard(mission, secret) {
    const previewMissionContent = document.getElementById('missionContent');
    const previewSecretContent = document.getElementById('secretContent');

    const newCardHTML = `
        <div class="handout-card">
            <button class="delete-btn">X</button>
            <div class="handout-card__front">
                <div class="handout-card__front-header">⥼· · 〰개요〰· · ⥽</div>
                <div class="handout-card__front-content">
                    <div class="handout-card__mission-section">
                        <div class="content__mission" style="font-size: ${getFontSize(previewMissionContent)}; line-height:${getLineHeight(previewMissionContent)};">${mission}</div>
                    </div>
                </div>
            </div>
            <div class="handout-card__behind">
                <div class="handout-card__behind-header">· · · · ··· 비밀 ··· · · · ·</div>
                <div class="handout-card__behind-content">
                    <div class="handout-card__shock-secret-section">
                        <div class="content__secret" style="font-size: ${getFontSize(previewSecretContent)}; line-height:${getLineHeight(previewMissionContent)};">${secret}</div>                    
                    </div>
                </div>
            </div>
        </div>
    `;
    return newCardHTML;
}

// 단장 핸드아웃 카드 생성 함수
function createEnigmaHandoutCard(mission, secret, sheetname, initdepth, atk, def, bas, mp, magic, area, skill) {
    const previewMissionContent = document.getElementById('missionContent');
    const previewSecretContent = document.getElementById('secretnameContent');
    const previewSheetnameContent = document.getElementById('sheetnameContent');
    const previewInitdepthContent = document.getElementById('initdepthContent');
    const previewAtkContent = document.getElementById('atkContent');
    const previewDefContent = document.getElementById('defContent');
    const previewBasContent = document.getElementById('basContent');
    const previewMpContent = document.getElementById('mpContent');
    const previewMagicContent = document.getElementById('magicContent');
    const previewAreaContent = document.getElementById('areaContent');
    const previewSkillContent = document.getElementById('skillContent');

    const newCardHTML = `
        <div class="handout-card">
            <button class="delete-btn">X</button>
            <div class="handout-card__front">
                <div class="handout-card__front-header">⥼· · 〰개요〰· · ⥽</div>
                <div class="handout-card__front-content">
                    <div class="handout-card__mission-section">
                        <div class="content__mission" style="font-size: ${getFontSize(previewMissionContent)}; line-height:${getLineHeight(previewMissionContent)};">${mission}</div>
                    </div>
                </div>
            </div>
            <div class="handout-card__behind">
                <div class="handout-card__behind-header">· · · · ··· 비밀 ··· · · · ·</div>
                <div class="handout-card__behind-content">
                    <div class="handout-card__shock-secret-section">
                        <div class="content__sheet-secret" style="font-size: ${getFontSize(previewSecretContent)}; line-height:${getLineHeight(previewSecretContent)};">${secret}</div>
                        <div class="content__sheet-status">
                            <div>
                                <span>단장: </span>
                                <div class="content__sheetname" style="font-size: ${getFontSize(previewSheetnameContent)}; line-height:${getLineHeight(previewSheetnameContent)};">${sheetname}</div>
                            </div>
                            <div>
                                <span>초기빙의심도: </span>
                                <div class="content__initdepth" style="font-size: ${getFontSize(previewInitdepthContent)} ; line-height:${getLineHeight(previewInitdepthContent)};">${initdepth}</div>
                            </div>
                            <div class="content__mul">
                                <span>공격력: </span>
                                <div class="content__atk" style="font-size: ${getFontSize(previewAtkContent)}; line-height:${getLineHeight(previewAtkContent)};">${atk}</div>
                                <span>방어력: </span>
                                <div class="content__def" style="font-size: ${getFontSize(previewDefContent)}; line-height:${getLineHeight(previewDefContent)};">${def}</div>
                                <span>근원력: </span>
                                <div class="content__bas" style="font-size: ${getFontSize(previewBasContent)}; line-height:${getLineHeight(previewBasContent)};">${bas}</div>
                            </div>
                            <div>
                                <span>마력: </span>
                                <div class="content__mp" style="font-size: ${getFontSize(previewMpContent)}; line-height:${getLineHeight(previewMpContent)};">${mp}</div>
                            </div>
                            <div>
                                <span>마법: </span>
                                <div class="content__magic" style="font-size: ${getFontSize(previewMagicContent)}; line-height:${getLineHeight(previewMagicContent)};">${magic}</div>
                            </div>
                            <div>
                                <span>영역: </span>
                                <div class="content__area" style="font-size: ${getFontSize(previewAreaContent)}; line-height:${getLineHeight(previewAreaContent)};">${area}</div>
                            </div>
                            <div>
                                <span>특기: </span>
                                <div class="content__skill" style="font-size: ${getFontSize(previewSkillContent)}; line-height:${getLineHeight(previewSkillContent)};">${skill}</div>
                            </div>
                        </div>
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
    outputContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const cardToRemove = event.target.closest('.handout-card');
            if (cardToRemove) {
                cardToRemove.remove();
            }
        }
    });
});

// 인쇄 프리뷰 페이지 초기화
document.addEventListener('DOMContentLoaded', function () {
    const resetButton = document.querySelector('.handout-output__reset-btn');
    const cardContainer = document.querySelector('.card__container');

    resetButton.addEventListener('click', function () {
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
        link.addEventListener('click', function (event) {
            event.preventDefault();
            modal.style.display = "block";
            setTimeout(() => {
                modal.style.display = 'none';
            }, 800);
        });
    });


    // 모달 바깥을 클릭하면 모달을 닫음
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

// 일반 <-> 단장 핸드아웃 변경
document.addEventListener('DOMContentLoaded', function () {
    const switchToDefaultBtn = document.getElementById('switchToDefault');
    const switchToSheetBtn = document.getElementById('switchToSheet');

    const handoutPreview = document.getElementById('handoutPreview');
    const handoutEditor = document.getElementById('handoutEditor');
    

    // 버튼 배경색 업데이트
    function updateButtonBackground(selectedBtn, otherBtn) {
        selectedBtn.style.borderColor = '#ff0000';
        selectedBtn.style.backgroundColor = '#ff0000';
        selectedBtn.style.color = '#fff';
        selectedBtn.style.fontWeight = '700';

        otherBtn.style.backgroundColor = '';
        otherBtn.style.color = '';
        otherBtn.style.borderColor = '';
        otherBtn.style.fontWeight = '';
    }

    // 일반 핸드아웃 전환
    function switchToDefaultHandout() {
        loadDefaultHandoutContent();

        updateContent('missionInput', 'missionContent', '', adjustFontSizeMission);
        updateContent('secretInput', 'secretContent', '', adjustFontSizeSecret);

        updateButtonBackground(switchToDefaultBtn, switchToSheetBtn)
    }

    // 단장 핸드아웃 전환
    function switchToSheetHandout() {
        loadSheetHandoutContent();

        updateContent('missionInput', 'missionContent', '', adjustFontSizeMission);
        updateContent('secretInput', 'secretContent', '', adjustFontSizeSecretInfo);

        updateContent('sheetnametInput', 'sheetnameContent', '', adjustFontSizeSheetStatus);
        updateContent('initdepthInput', 'initdepthContent', '', adjustFontSizeSheetStatus);

        updateContent('atkInput', 'atkContent', '', adjustFontSizeSheetStatus);
        updateContent('defInput', 'defContent', '', adjustFontSizeSheetStatus);
        updateContent('basInput', 'basContent', '', adjustFontSizeSheetStatus);
        
        updateContent('mpInput', 'mpContent', '', adjustFontSizeSheetStatus);
        updateContent('magicInput', 'magicContent', '', adjustFontSizeSheetStatus);

        updateContent('areaInput', 'areaContent', '', adjustFontSizeSheetStatus);
        updateContent('skillInput', 'skillContent', '', adjustFontSizeSheetStatus);

        updateButtonBackground(switchToSheetBtn, switchToDefaultBtn)
    }

    switchToDefaultBtn.addEventListener('click', switchToDefaultHandout);
    switchToSheetBtn.addEventListener('click', switchToSheetHandout);


    // 일반 핸드아웃 HTML 불러오기
    function loadDefaultHandoutContent() {
        handoutEditor.classList.add('default');
        handoutEditor.classList.remove('sheet');

        handoutPreview.innerHTML = `
            <div class="handout-card">
                <div class="handout-card__front">
                    <div class="handout-card__front-header">⥼· · 〰개요〰· · ⥽</div>
                    <div class="handout-card__front-content">
                        <div class="handout-card__mission-section">
                            <div class="content__mission" id="missionContent"></div>
                            
                        </div>
                    </div>
                </div>
                <div class="handout-card__behind">
                    <div class="handout-card__behind-header">· · · · ··· 비밀 ··· · · · ·</div>
                    <div class="handout-card__behind-content">
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
                        <textarea id="missionInput" placeholder="개요 정보를 입력하세요." autocomplete="off"></textarea>
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

    // 단장 핸드아웃 HTML 불러오기
    function loadSheetHandoutContent() {
        handoutEditor.classList.add('sheet');
        handoutEditor.classList.remove('default');

        handoutPreview.innerHTML = `
            <div class="handout-card">
                <div class="handout-card__front">
                    <div class="handout-card__front-header">⥼· · 〰개요〰· · ⥽</div>
                    <div class="handout-card__front-content">
                        <div class="handout-card__mission-section">
                            <div class="content__mission" id="missionContent"></div>
                        </div>
                    </div>
                </div>
                <div class="handout-card__behind">
                    <div class="handout-card__behind-header">· · · · ··· 비밀 ··· · · · ·</div>
                    <div class="handout-card__behind-content">
                        <div class="handout-card__shock-secret-section">
                            <div class="content__sheet-secret" id="secretContent"></div>
                            <div class="content__sheet-status">
                                <div>
                                    <span>단장: </span>
                                    <div class="content__sheetname" id="sheetnameContent"></div>
                                </div>
                                <div>
                                    <span>초기빙의심도: </span>
                                    <div class="content__initdepth" id="initdepthContent"></div>
                                </div>
                                <div class="content__mul">
                                    <span>공격력: </span>
                                    <div class="content__atk" id="atkContent"></div>
                                    <span>방어력: </span>
                                    <div class="content__def" id="defContent"></div>
                                    <span>근원력: </span>
                                    <div class="content__bas" id="basContent"></div>
                                </div>
                                <div>
                                    <span>마력: </span>
                                    <div class="content__mp" id="mpContent"></div>
                                </div>
                                <div>
                                    <span>마법: </span>
                                    <div class="content__magic" id="magicContent"></div>
                                </div>
                                <div>
                                    <span>영역: </span>
                                    <div class="content__area" id="areaContent"></div>
                                </div>
                                <div>
                                    <span>특기: </span>
                                    <div class="content__skill" id="skillContent"></div>
                                </div>
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
                        <textarea id="missionInput" placeholder="개요 정보를 입력하세요." autocomplete="off"></textarea>
                    </div>
                </div>
                <div class="handout-editor__behind-inputs">
                    <p class="editor-section__header">뒷면</p>
                    <div class="input-group__behind">
                        <textarea id="secretInput" placeholder="비밀을 입력하세요." autocomplete="off"></textarea>
                        <textarea id="sheetnametInput" placeholder="단장이름" autocomplete="off"></textarea>
                        <textarea id="initdepthInput" placeholder="초기 빙의 심도" autocomplete="off"></textarea>
                        <div class="input-group__mul">
                            <textarea id="atkInput" placeholder="공" autocomplete="off"></textarea>
                            <textarea id="defInput" placeholder="방" autocomplete="off"></textarea>
                            <textarea id="basInput" placeholder="근" autocomplete="off"></textarea>
                        </div>
                        <textarea id="mpInput" placeholder="마력" autocomplete="off"></textarea>
                        <textarea id="magicInput" placeholder="마법" autocomplete="off"></textarea>
                        <textarea id="areaInput" placeholder="영역" autocomplete="off"></textarea>
                        <textarea id="skillInput" placeholder="특기" autocomplete="off"></textarea>
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


        resetBtn.addEventListener('click', resetSheetHandout);
        submitBtn.addEventListener('click', submitSheetHandout);
    }

    // 일반 핸드아웃 초기화
    function resetHandout() {
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(function (textarea) {
            textarea.value = '';
        });

        const contentElements = ['missionContent', 'secretContent'];
        contentElements.forEach(function (id) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = '';
                adjustFontSizeSecret(element, '');
            }
        });
    }

    // 단장 핸드아웃 초기화
    function resetSheetHandout() {
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(function (textarea) {
            textarea.value = '';
        });
        const contentElements = ['missionContent', 'secretContent', 
            'sheetnameContent', 'initdepthContent', 
            'atkContent', 'defContent', 'basContent', 'mpContent', 'magicContent', 'areaContent', 'skillContent'
        ];
        contentElements.forEach(function (id) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = '';
            }
        });
    }

    // 일반 핸드아웃 등록
    function submitHandout() {
        const outputContainer = document.querySelector('.card__container');

        let missionInput = document.getElementById('missionInput').value.trim();
        let secretInput = document.getElementById('secretInput').value.trim();

        missionInput = missionInput.replace(/\n/g, '<br>');
        secretInput = secretInput.replace(/\n/g, '<br>');

        const newCardHTML = createHandoutCard(missionInput, secretInput);

        outputContainer.innerHTML += newCardHTML;

        // 입력 필드 초기화
        document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');

        // 미리보기 내용 삭제
        document.getElementById('missionContent').textContent = '';
        document.getElementById('secretContent').textContent = '';
    }

    // 단장 핸드아웃 등록
    function submitSheetHandout() {
        const outputContainer = document.querySelector('.card__container');

        const missionInput = document.getElementById('missionInput').value.trim();
        const secretInput = document.getElementById('secretInput').value.trim();
        const sheetnametInput = document.getElementById('sheetnametInput').value.trim();
        const initdepthInput = document.getElementById('initdepthInput').value.trim();
        const atkInput = document.getElementById('atkInput').value.trim();
        const defInput = document.getElementById('defInput').value.trim();
        const basInput = document.getElementById('basInput').value.trim();
        const mpInput = document.getElementById('mpInput').value.trim();
        const magicInput = document.getElementById('magicInput').value.trim();
        const areaInput = document.getElementById('areaInput').value.trim();
        const skillInput = document.getElementById('skillInput').value.trim();

        const newCardHTML = createEnigmaHandoutCard(missionInput, secretInput, sheetnametInput, initdepthInput, atkInput, defInput, basInput, mpInput, magicInput, areaInput, skillInput );
        outputContainer.innerHTML += newCardHTML;

        // 입력 필드 초기화
        document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');

        // 미리보기 내용 삭제
        document.getElementById('missionContent').textContent = '';
        document.getElementById('secretContent').textContent = '';
        document.getElementById('sheetnameContent').textContent = '';
        document.getElementById('initdepthContent').textContent = '';
        document.getElementById('atkContent').textContent = '';
        document.getElementById('defContent').textContent = '';
        document.getElementById('basContent').textContent = '';
        document.getElementById('mpContent').textContent = '';
        document.getElementById('magicContent').textContent = '';
        document.getElementById('areaContent').textContent = '';
        document.getElementById('skillContent').textContent = '';
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

    // 일반 핸드아웃 앞면 사명정보 & 단장 핸드아웃 앞면 폰트크기 조절
    function adjustFontSizeMission(element, text) {
        if (text.length > 324) {
            element.style.fontSize = '11px';
            element.style.lineHeight = '0.95em';
        } else if (text.length > 276) {
            element.style.fontSize = '12px';
            element.style.lineHeight = '0.95em';
        } else if (text.length > 196) {
            element.style.fontSize = '12px';
            element.style.lineHeight = '1.1em';
        } else if (text.length > 169) {
            element.style.fontSize = '14px';
            element.style.lineHeight = '1.1em';
        } else if (text.length > 142) {
            element.style.fontSize = '14px';
            element.style.lineHeight = '1.3em';
        } else { // 디폴트
            element.style.fontSize = '14px';
            element.style.lineHeight = '1.5em';
        }
    }

    // 일반 핸드아웃 뒷면 비밀정보 폰트 크기 조절
    function adjustFontSizeSecret(element, text) {
        if (text.length > 337) {
            element.style.fontSize = '11px';
            element.style.lineHeight = '0.95em';
        } else if (text.length > 303) {
            element.style.fontSize = '12px';
            element.style.lineHeight = '0.95em';
        } else if (text.length > 221) {
            element.style.fontSize = '12px';
            element.style.lineHeight = '1.1em';
        } else if (text.length > 180) {
            element.style.fontSize = '14px';
            element.style.lineHeight = '1.1em';
        } else if (text.length > 152) {
            element.style.fontSize = '14px';
            element.style.lineHeight = '1.3em';
        } else { // 디폴트
            element.style.fontSize = '14px';
            element.style.lineHeight = '1.5em';
        }
    }

     // 단장 핸드아웃 뒷면 단장 비밀 개요 폰트크기 조절
    function adjustFontSizeSecretInfo(element, text) {
        if (text.length > 194) {
            element.style.fontSize = '11px';
            element.style.lineHeight = '0.95em';
        } else if (text.length > 179) {
            element.style.fontSize = '12px';
            element.style.lineHeight = '0.95em';
        } else if (text.length > 122) {
            element.style.fontSize = '12px';
            element.style.lineHeight = '1.1em';
        } else if (text.length > 108) {
            element.style.fontSize = '14px';
            element.style.lineHeight = '1.1em';
        } else if (text.length > 79) {
            element.style.fontSize = '14px';
            element.style.lineHeight = '1.3em';
        } else { // 디폴트
            element.style.fontSize = '14px';
            element.style.lineHeight = '1.5em';
        }
    }

    // 단장 핸드아웃 뒷면 단장 정보 폰트 크기 조절
    function adjustFontSizeSheetStatus(element, text) {
        if (text.length > 225) {
            element.style.fontSize = '8px';
            element.style.lineHeight = '1.1em';
        } else if (text.length > 20) {
            element.style.fontSize = '9px';
            element.style.lineHeight = '1.1em';
        } else if (text.length > 9) {
            element.style.fontSize = '10px';
            element.style.lineHeight = '1.1em';
        } else { // 디폴트
            element.style.fontSize = '12px';
            element.style.lineHeight = '1.1em';
        }
    }

    // 페이지 로드 시 일반 핸드아웃 불러오도록 설정
    switchToDefaultHandout();
});
