const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('language') || 'en';  // 从 localStorage 读取或默认英文

// 根据语言初始化页面文字
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
  langToggle.textContent = currentLang === 'en' ? '中文' : 'EN';
});

// 点击按钮切换语言
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'cn' ? 'en' : 'cn';
  localStorage.setItem('language', currentLang);  // 保存当前语言设置
  langToggle.textContent = currentLang === 'en' ? '中文' : 'EN';

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
});

// 菜单展开/收起
const toggleBtn = document.getElementById('menuToggle');
const navList = document.querySelector('nav ul');
toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('show');
});