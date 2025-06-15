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
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => {
                showCopySuccess();
            })
            .catch(err => {
                console.error('複製失敗 (navigator.clipboard):', err);
                showCopyError(); // Default error message for modern API failure
            });
    } else {
        // Fallback for browsers that don't support navigator.clipboard.writeText
        console.warn('navigator.clipboard.writeText not supported. Suggesting manual copy.');
        showCopyError('瀏覽器不支援自動複製，請手動複製');
    }
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

// 通用通知顯示函數
function showNotification(message, className, duration) {
    const notificationMsg = document.createElement('div');
    notificationMsg.className = className;
    notificationMsg.textContent = message;
    document.body.appendChild(notificationMsg);

    setTimeout(() => {
        notificationMsg.remove();
    }, duration);
}

// 顯示複製失敗提示
function showCopyError(message) {
    const defaultMessage = '複製失敗，請重試或手動複製';
    showNotification(message || defaultMessage, 'copy-error', 3000);
}

// 事件監聽
generateBtn.addEventListener('click', () => {
    // 播放音效
    const audio = new Audio('assets/audio/new-year.mp3');
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
