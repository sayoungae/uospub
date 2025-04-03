
/* 구글 번역 초기화 */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: "en",
        includedLanguages: 'ko,en,ja,zh-CN,zh-TW,vi',
        autoDisplay: false
    },
        "google_translate_element"
    );
}
document.addEventListener('DOMContentLoaded', function () {
    const googleTranslate = document.getElementById('googleTranslate01');

    googleTranslate.querySelector('.translation-links').addEventListener('click', function (event) {
        let el = event.target;
        if (el != null) {
            // a 안에 span 태그 클릭시, 부모로 올라가도록 처리
            while (el.nodeName == 'SPAN' || el.nodeName == 'FONT') {
                el = el.parentElement;
            }
            const tolang = el.dataset.lang;
            const gtcombo = document.querySelector('.goog-te-combo');

            console.log(tolang + "/" + gtcombo);

            if (gtcombo == null) {
                alert('Error: Could not find Google translate Combolist.');
                return false;
            }
            // 리로드하지 않음 _250403
            gtcombo.value = tolang;
            gtcombo.dispatchEvent(new Event('change'));
            return false; 
        }
        return false;
    });

    const dropBox = document.querySelector('.drop-box');
    const tipButton = document.querySelector('.tip button');
    
    //dropBox 클릭 시 on 클래스 추가
    dropBox.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        this.classList.add('on');

        if (dropBox.classList.contains('expanded')) {
            dropBox.classList.remove('on', 'expanded');
        }
    });

    // tip 안의 버튼 클릭 시 dropBox에 expanded 추가 + on 제거
    tipButton.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        dropBox.classList.add('expanded');
        dropBox.classList.remove('on');
    });
    // 외부 클릭시 클레스 제거
    document.addEventListener('click', function () {
        dropBox.classList.remove('on', 'expanded');
    });
});
