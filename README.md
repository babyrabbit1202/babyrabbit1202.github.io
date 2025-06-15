# 拜年文案生成器 (New Year Greeting Generator)

這是一個簡單的前端應用程式，用於隨機生成新年祝福語。使用者可以複製生成的祝福語並將其分享給親朋好友。

## 功能

*   **隨機祝福語生成:** 點擊按鈕即可獲得一條隨機的新年祝福。
*   **複製到剪貼簿:** 點擊生成的祝福語文本，即可將其複製到剪貼簿。
*   **音效提示:** 點擊生成按鈕時會播放新年音效，增添節日氣氛。
*   **即時反饋:** 複製成功或失敗（例如，因瀏覽器限制）時，會給出提示。

## 技術棧

*   **HTML5**
*   **CSS3:** 用於樣式和基本動畫。
*   **JavaScript (ES6+):** 使用原生 JavaScript 實現所有互動邏輯。
    *   DOM 操作
    *   `navigator.clipboard` API 用於複製
    *   `Audio` API 用於音效播放
*   **無外部框架或函式庫依賴。**

## 如何運行

1.  將所有檔案下載到本地資料夾。
    *   `index.html`
    *   `style.css`
    *   `script.js`
    *   `assets/audio/new-year.mp3`
    *   `LICENSE`
2.  在網頁瀏覽器中直接打開 `index.html` 檔案即可。

## 目錄結構

*   `index.html`: 主頁面。
*   `style.css`: 頁面樣式。
*   `script.js`: 互動邏輯。
*   `assets/audio/new-year.mp3`: 音效檔案。
*   `LICENSE`: MIT 授權文件。
*   `README.md`: 本檔案。

## 未來可能的改進

*   將祝福語列表移至外部 JSON 檔案，方便擴充。
*   引入更詳細的錯誤處理和日誌記錄。
*   增加更多樣的祝福語分類。
*   提供使用者自訂祝福語的功能。
*   使用 CSS 變數進一步優化樣式管理。
*   (開發者註: `showCopySuccess` 函數的重構未能成功應用，可作為後續優化點。)
