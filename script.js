// 本地祝福語數據庫
const greetings = [
    "新春快樂，萬事如意！",
    "恭喜發財，紅包拿來！",
    "年年有餘，歲歲平安！",
    "福星高照，吉祥如意！",
    "事業蒸蒸日上，家庭幸福美滿！",
    "財源廣進，心想事成！",
    "龍馬精神，身體健康！",
    "闔家歡樂，幸福安康！"
];

// DOM元素
const generateBtn = document.getElementById('generateBtn');
const resultContent = document.getElementById('resultContent');

// 生成隨機祝福語
function generateGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
}

// 顯示祝福語
function showGreeting() {
    const greeting = generateGreeting();
    resultContent.textContent = greeting;
    resultContent.style.opacity = 1;
}

// 複製祝福語
function copyToClipboard() {
    const text = resultContent.textContent;
    navigator.clipboard.writeText(text)
        .then(() => {
            showCopySuccess();
        })
        .catch(err => {
            console.error('複製失敗:', err);
        });
}

// 顯示複製成功提示
function showCopySuccess() {
    const successMsg = document.createElement('div');
    successMsg.className = 'copy-success';
    successMsg.textContent = '複製成功！';
    document.body.appendChild(successMsg);
    
    setTimeout(() => {
        successMsg.remove();
    }, 1500);
}

// 事件監聽
generateBtn.addEventListener('click', () => {
    // 播放音效
    const audio = new Audio('new-year.mp3');
    audio.play();
    
    // 按鈕動畫
    generateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        generateBtn.style.transform = 'scale(1)';
    }, 100);
    
    // 生成並顯示祝福語
    showGreeting();
});

resultContent.addEventListener('click', () => {
    if (resultContent.textContent) {
        copyToClipboard();
    }
});

// 初始化
resultContent.style.opacity = 0;
