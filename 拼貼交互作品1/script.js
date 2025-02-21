document.addEventListener("DOMContentLoaded", function () {
    // 第一張圖片：點擊後變模糊，再點擊恢復清晰 + 單詞更豐富（隨機顏色 + 大字體）
    const img1 = document.getElementById("img1");
    let isBlurred = false;

    img1.addEventListener("click", function () {
        isBlurred = !isBlurred;
        if (isBlurred) {
            img1.classList.add("blur");
        } else {
            img1.classList.remove("blur");
        }

        let wordIndex = 0;
        const words = ["Love", "Hate", "Affection", "Indifference", "Passion", "Coldness", "Desire", "Apathy", "Adore", "Detest"];
        const colors = ["red", "blue", "green", "purple", "orange"];

        function createWord() {
            const word = document.createElement("span");
            word.textContent = words[Math.floor(Math.random() * words.length)];
            word.classList.add("floating-text");

            // 設置隨機位置
            word.style.position = "absolute";
            word.style.left = Math.random() * window.innerWidth + "px";
            word.style.top = Math.random() * window.innerHeight + "px";

            // 設置隨機顏色與較大字體
            word.style.color = colors[Math.floor(Math.random() * colors.length)];
            word.style.fontSize = "28px";
            word.style.fontWeight = "bold";

            document.body.appendChild(word);

            setTimeout(() => {
                word.remove();
            }, 2000);

            // 讓下一個單詞延遲 300ms 出現
            if (wordIndex < 5) {
                wordIndex++;
                setTimeout(createWord, 300);
            }
        }

        createWord(); // 開始創建單詞
    });

    // 第二張圖片：錯誤訊息變大 + 底色改為藍色 + 多語言 + 不會自動消失
    const img2 = document.getElementById("img2");
    img2.addEventListener("click", function () {
        let errorIndex = 0;

        // 多語言錯誤訊息
        const errorMessages = [
            "⚠️ ERROR 404 - Not Found",
            "⚠️ ERRORE 404 - Pagina Non Trovata",
            "⚠️ 错误 404 - 页面未找到",
            "⚠️ エラー 404 - ページが見つかりません",
            "⚠️ 오류 404 - 페이지를 찾을 수 없습니다",
            "⚠️ ERREUR 404 - Page non trouvée",
            "⚠️ ERROR 404 - Página No Encontrada",
            "⚠️ FEHLER 404 - Seite nicht gefunden"
        ];

        function createError() {
            const errorBox = document.createElement("div");
            errorBox.classList.add("error-box");

            // 設置隨機位置
            errorBox.style.position = "absolute";
            errorBox.style.left = Math.random() * (window.innerWidth - 200) + "px";
            errorBox.style.top = Math.random() * (window.innerHeight - 100) + "px";

            // 設置藍色背景 + 大字體
            errorBox.style.backgroundColor = "blue";
            errorBox.style.color = "white";
            errorBox.style.padding = "10px";
            errorBox.style.borderRadius = "8px";
            errorBox.style.fontSize = "24px";
            errorBox.style.fontWeight = "bold";

            // 隨機選擇語言
            errorBox.innerHTML = errorMessages[Math.floor(Math.random() * errorMessages.length)];

            document.body.appendChild(errorBox);

            // 點擊後關閉錯誤訊息
            errorBox.addEventListener("click", function () {
                errorBox.remove();
            });

            // 讓下一個錯誤訊息延遲 500ms 出現
            if (errorIndex < 3) {
                errorIndex++;
                setTimeout(createError, 500);
            }
        }

        createError(); // 開始創建錯誤訊息
    });

    // 第三張圖片：旋轉 + YES 文字紅色 + 大字體 + 隨機散開
    const img3 = document.getElementById("img3");
    let rotated = false;
    img3.addEventListener("click", function () {
        rotated = !rotated;
        img3.style.transform = rotated ? "rotate(180deg)" : "rotate(0deg)";

        let yesIndex = 0;

        function createYes() {
            const yesText = document.createElement("span");
            yesText.textContent = "YES";
            yesText.classList.add("yes-text");

            // 設置隨機位置
            yesText.style.position = "absolute";
            yesText.style.left = Math.random() * window.innerWidth + "px";
            yesText.style.top = Math.random() * window.innerHeight + "px";

            // 設置紅色 + 大字體
            yesText.style.color = "red";
            yesText.style.fontSize = "32px";
            yesText.style.fontWeight = "bold";

            document.body.appendChild(yesText);

            setTimeout(() => {
                yesText.remove();
            }, 2000);

            // 讓下一個 YES 延遲 400ms 出現
            if (yesIndex < 5) {
                yesIndex++;
                setTimeout(createYes, 400);
            }
        }

        createYes(); // 開始創建 YES 文字
    });

    // 第四張圖片：心跳聲 + 抖動
    const img4 = document.getElementById("img4");
    img4.addEventListener("click", function () {
        const audio = new Audio("images/heartbeat.mp3");
        audio.play();

        img4.classList.add("shake");

        setTimeout(() => img4.classList.remove("shake"), 2000);
    });
});document.getElementById("img1").addEventListener("click", function () {
    this.classList.toggle("blur"); // 點擊切換模糊
});

document.getElementById("img4").addEventListener("click", function () {
    this.classList.add("shake"); // 點擊後開始抖動
    setTimeout(() => {
        this.classList.remove("shake"); // 2秒後停止抖動
    }, 2000);
});let rotation = 0; // 设定初始角度
const img3 = document.getElementById("img3");

img3.addEventListener("click", function () {
    rotation += 180; // 每次点击，旋转角度 +180°
    img3.style.transform = `rotate(${rotation}deg)`;
    img3.style.transition = "transform 0.8s ease-in-out"; // 让旋转有动画效果
});