/**
 * site-helper.js — 页面辅助组件：提示卡片、关键词徽章和访问说明
 * 用于 https://www.downgate-kaiyun.com.cn
 */

(function () {
  'use strict';

  // 配置数据
  var CONFIG = {
    siteUrl: 'https://www.downgate-kaiyun.com.cn',
    keyword: '开云',
    badgeColor: '#1a73e8',
    cardBg: '#f0f7ff'
  };

  // 创建提示卡片
  function createTipCard() {
    var card = document.createElement('div');
    card.className = 'site-tip-card';
    card.style.cssText = [
      'background:' + CONFIG.cardBg + ';',
      'border:1px solid #b3d4fc;',
      'border-radius:8px;',
      'padding:16px 20px;',
      'margin:12px 0;',
      'font-size:14px;',
      'color:#333;',
      'line-height:1.6;',
      'box-shadow:0 2px 6px rgba(0,0,0,0.05);'
    ].join('');

    var title = document.createElement('strong');
    title.textContent = '💡 访问提示';
    title.style.display = 'block';
    title.style.marginBottom = '6px';

    var desc = document.createElement('span');
    desc.textContent = '欢迎访问「' + CONFIG.keyword + '」官方站点：';
    var link = document.createElement('a');
    link.href = CONFIG.siteUrl;
    link.textContent = CONFIG.siteUrl;
    link.target = '_blank';
    link.style.color = CONFIG.badgeColor;
    link.style.wordBreak = 'break-all';

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);
    return card;
  }

  // 创建关键词徽章
  function createBadge(text) {
    var badge = document.createElement('span');
    badge.className = 'keyword-badge';
    badge.textContent = text || CONFIG.keyword;
    badge.style.cssText = [
      'display:inline-block;',
      'background:' + CONFIG.badgeColor + ';',
      'color:#fff;',
      'padding:4px 12px;',
      'border-radius:16px;',
      'font-size:13px;',
      'font-weight:500;',
      'margin:4px 6px 4px 0;',
      'letter-spacing:0.3px;'
    ].join('');
    return badge;
  }

  // 创建访问说明区块
  function createAccessInfo() {
    var wrapper = document.createElement('div');
    wrapper.className = 'site-access-info';
    wrapper.style.cssText = [
      'border-left:4px solid ' + CONFIG.badgeColor + ';',
      'padding:12px 16px;',
      'margin:16px 0;',
      'background:#fafafa;',
      'border-radius:0 6px 6px 0;',
      'font-size:13px;',
      'color:#444;'
    ].join('');

    var heading = document.createElement('p');
    heading.style.margin = '0 0 6px 0';
    heading.style.fontWeight = '600';
    heading.textContent = '📌 访问说明';

    var list = document.createElement('ul');
    list.style.margin = '0';
    list.style.paddingLeft = '20px';

    var items = [
      '本页面与 ' + CONFIG.siteUrl + ' 关联',
      '关键词「' + CONFIG.keyword + '」用于内容标识',
      '所有链接指向官方资源，请放心使用'
    ];

    items.forEach(function (txt) {
      var li = document.createElement('li');
      li.textContent = txt;
      li.style.marginBottom = '4px';
      list.appendChild(li);
    });

    wrapper.appendChild(heading);
    wrapper.appendChild(list);
    return wrapper;
  }

  // 嵌入组件到页面
  function init() {
    var container = document.getElementById('site-helper-root');
    if (!container) {
      container = document.createElement('div');
      container.id = 'site-helper-root';
      document.body.appendChild(container);
    }

    var card = createTipCard();
    var badgeContainer = document.createElement('div');
    badgeContainer.style.margin = '8px 0';
    badgeContainer.appendChild(createBadge(CONFIG.keyword));
    badgeContainer.appendChild(createBadge('官方'));

    var info = createAccessInfo();

    container.appendChild(card);
    container.appendChild(badgeContainer);
    container.appendChild(info);
  }

  // 等待 DOM 加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();