// script.js
document.addEventListener('DOMContentLoaded', function() {
    // 保留基本功能，移除特效和干扰滚动的代码
    setupSimpleInteractions();
    
    // 简单的页面加载效果，不干扰滚动
    document.body.classList.add('loaded');
});

// 设置基本交互
function setupSimpleInteractions() {
    // 语言切换功能
    setupLanguageToggle();
    
    // 设置简单的点击效果
    setupSimpleClickEffects();
}

// 语言切换功能
function setupLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    if (!languageToggle) return;
    
    languageToggle.addEventListener('click', function() {
        document.body.classList.toggle('chinese');
        document.body.classList.toggle('english');
        
        // 更新按钮文本
        if (document.body.classList.contains('chinese')) {
            this.textContent = 'English';
        } else {
            this.textContent = '中文';
        }
    });
}

// 设置简单的点击效果
function setupSimpleClickEffects() {
    // 为所有按钮添加简单的点击效果
    const buttons = document.querySelectorAll('button, .btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 简单的视觉反馈，不使用动画
            this.style.backgroundColor = '#ff8c00';
            
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 300);
        });
    });
    
    // 为AI高亮文本添加简单效果
    const aiElements = document.querySelectorAll('.ai-highlight');
    
    aiElements.forEach(el => {
        el.addEventListener('click', function() {
            this.style.color = '#00ff9d';
            
            setTimeout(() => {
                this.style.color = '';
            }, 500);
        });
    });
}

// 移除其他可能干扰滚动的函数
/* 原代码已注释
function setupScrollEffects() {...}
function createRandomBasketballs() {...}
function setupKeyboardNavigation() {...}
function playSound(type) {...}
function updateBackgroundOnScroll() {...}
*/

// 平滑滾動效果
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// 為球員圖片添加動畫效果
const playerImages = document.querySelectorAll('.player-image img');

playerImages.forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
        playSound('bounce');
    });
    
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// 添加頁面加載動畫
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    playSound('welcome');
});

// 滾動時添加淡入效果
const fadeElements = document.querySelectorAll('.player-info, .about-me');

/*
function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // 檢查元素是否在視窗中
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('fade-in');
        }
    });
}

// 初始檢查
checkFade();

// 滾動時檢查
window.addEventListener('scroll', checkFade);
*/

// 直接添加淡入效果而不依赖滚动
fadeElements.forEach(element => {
    element.classList.add('fade-in');
});

// 添加互動籃球效果
const basketball = document.querySelector('.interactive-basketball');
if (basketball) {
    basketball.addEventListener('click', function() {
        playSound('bounce');
        this.style.transform = 'scale(1.2) rotate(180deg)';
        
        setTimeout(() => {
            this.style.transform = '';
        }, 500);
        
        // 創建隨機籃球圖標
        createRandomBasketball();
    });
}

// 數字翻轉動畫
const jerseyNumbers = document.querySelectorAll('.jersey-number');

jerseyNumbers.forEach(number => {
    number.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(360deg)';
        this.style.transition = 'transform 0.5s ease';
        
        setTimeout(() => {
            this.style.transform = '';
        }, 500);
    });
});

// 添加雙語切換效果
const bilingualItems = document.querySelectorAll('.bilingual-list li');

bilingualItems.forEach(item => {
    item.addEventListener('click', function() {
        const chinese = this.querySelector('.chinese');
        const english = this.querySelector('.english');
        
        if (chinese.style.fontSize === '1.2em') {
            chinese.style.fontSize = '';
            english.style.fontSize = '';
            english.style.color = '';
        } else {
            chinese.style.fontSize = '1.2em';
            english.style.fontSize = '1.2em';
            english.style.color = '#ff6b6b';
        }
        
        playSound('click');
    });
});

// 添加聲音效果
function playSound(type) {
    let sound;
    
    switch(type) {
        case 'bounce':
            sound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-basketball-ball-hard-hit-2093.mp3');
            sound.volume = 0.3;
            break;
        case 'welcome':
            sound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-game-level-completed-2059.mp3');
            sound.volume = 0.3;
            break;
        case 'click':
            sound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-mouse-click-close-1113.mp3');
            sound.volume = 0.2;
            break;
        default:
            return;
    }
    
    sound.play().catch(e => console.log('音效播放失敗:', e));
}

// 創建隨機籃球圖標
function createRandomBasketball() {
    const ball = document.createElement('div');
    ball.classList.add('random-basketball');
    
    // 隨機位置
    const posX = Math.random() * (window.innerWidth - 50);
    const posY = window.scrollY + Math.random() * (window.innerHeight - 50);
    
    // 設置樣式
    ball.style.cssText = `
        position: absolute;
        top: ${posY}px;
        left: ${posX}px;
        width: 40px;
        height: 40px;
        background-image: url('https://via.placeholder.com/40x40?text=🏀');
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 999;
        cursor: pointer;
        transform: rotate(${Math.random() * 360}deg);
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // 設置替代背景
    ball.style.backgroundImage = "url('https://via.placeholder.com/40x40?text=🏀')";
    
    document.body.appendChild(ball);
    
    // 顯示動畫
    setTimeout(() => {
        ball.style.opacity = '1';
    }, 10);
    
    // 點擊事件
    ball.addEventListener('click', function() {
        playSound('bounce');
        this.style.transform = 'scale(3)';
        this.style.opacity = '0';
        
        setTimeout(() => {
            this.remove();
        }, 500);
    });
    
    // 自動消失
    setTimeout(() => {
        ball.style.opacity = '0';
        setTimeout(() => {
            ball.remove();
        }, 500);
    }, 5000);
}

// 根據滾動位置添加不同的背景顏色
const sections = document.querySelectorAll('section');
const colors = ['#0D1B36', '#121935', '#18132A', '#1E0F2D', '#190D1E', '#0F0D1E', '#0D1126', '#0D1731', '#0D1C36', '#0D223B'];

/*
window.addEventListener('scroll', function() {
    // 获取.hero-content和.hero-section元素，确保不干扰它们的滚动行为
    const heroContent = document.querySelector('.hero-content');
    const heroSection = document.querySelector('.hero-section');
    
    const scrollY = window.scrollY;
    
    sections.forEach((section, index) => {
        // 确保不处理.hero-section
        if (section !== heroSection) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollY >= sectionTop - 300 && scrollY < sectionTop + sectionHeight - 300) {
                // 為當前區塊添加背景顏色
                const color = colors[index % colors.length];
                section.style.backgroundColor = color;
                section.style.transition = 'background-color 0.5s ease';
            } else {
                // 恢復原來的深色背景
                if (index % 2 === 0) {
                    section.style.backgroundColor = '#050A20';
                } else {
                    section.style.backgroundColor = '#070D2C';
                }
            }
        }
    });
}, { passive: true }); // 添加passive属性以改善滚动性能
*/

// 为所有区块设置固定的背景颜色
sections.forEach((section, index) => {
    if (index % 2 === 0) {
        section.style.backgroundColor = '#050A20';
    } else {
        section.style.backgroundColor = '#070D2C';
    }
});

// 添加雙語高亮效果
const englishTexts = document.querySelectorAll('.english-text, .english-subtitle, .english-title, .nav-en, .english-footer');

englishTexts.forEach(text => {
    text.addEventListener('mouseover', function() {
        this.style.color = '#ff6b6b';
        this.style.transition = 'color 0.3s ease';
    });
    
    text.addEventListener('mouseout', function() {
        this.style.color = '';
    });
});