// 籃球圖標生成器
document.addEventListener('DOMContentLoaded', function() {
    // 不再创建动态元素
    // createBasketballIcons(15);
    // createCourtElements();
    // initInteractiveBasketball();
    
    // 移除特效，只保留基本交互
    initBasicInteractions();
});

// 基本交互功能，不添加视觉特效
function initBasicInteractions() {
    // 为所有标题添加简单的悬停效果，不使用动画
    const headings = document.querySelectorAll('h2, h3');
    
    headings.forEach(heading => {
        heading.addEventListener('mouseover', function() {
            this.style.color = '#0BF9E3';
        });
        
        heading.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });
    
    // 为.ai-highlight元素添加简单的点击效果，不使用动画
    const highlightElements = document.querySelectorAll('.ai-highlight');
    
    highlightElements.forEach(el => {
        el.addEventListener('click', function() {
            // 简单改变颜色，不添加特效
            this.style.color = '#00ff9d';
            
            setTimeout(() => {
                this.style.color = '';
            }, 800);
        });
        
        // 简单的鼠标悬停效果
        el.addEventListener('mouseover', function() {
            this.style.color = '#00f7ff';
        });
        
        el.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });
}

// 移除所有其他功能和特效
/* 原始代码已注释掉
function createBasketballIcons(count) {...}
function createCourtElements() {...}
function initInteractiveBasketball() {...}
function createExplosion(element) {...}
function initSportsHeadings() {...}
function initAiScanningEffects() {...}
function initTypingEffect() {...}
*/ 