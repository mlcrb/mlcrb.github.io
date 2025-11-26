$('.sprite').hover(function () {
  var name = this.getAttribute("name").toString();
  $('#tooltip').css({
    'position': 'absolute',
    'z-index': '4',
    'background-color': 'rgba(16,0,17,0.9)',
    'padding': '2px',
    'box-shadow': '0 2px 0 rgba(16,0,17,0.95), 0 -2px 0 rgba(16,0,17,0.95), 2px 0 0 rgba(16,0,17,0.95), -2px 0 0 rgba(16,0,17,0.95)',
    'border': '2px solid #210565',
    'line-height': '1.5'
  });
  var content;
  switch (name) {
    case 'Нити лозы':
      content = `<span style="color: #00aa00">${name}</span>`
      break;
    case 'Устройство Возраждатель':
      content = `
        <span style="color: #ffff55">Устройство</span>
        <br style="line-height: 2">
        <span style="color: #ffffff">Возраждатель</span>
      `;
      break;
    case 'Смесь для выпечки пирога':
    case 'Смесь для выпечки торта':
      content = `<span style="color: #55ffff">${name}</span>`;
      break;
    case 'Торт':
      content = `
        <span style="color: #ffffff">Торт</span>
        <br style="line-height: 2">
        <span style="color: #55ffff">Крайне сладкий</span>
        <br>
        <span style="color: #55ffff">+5 сахара</span>
      `;
      break;
    case 'Железийный топор Эффективность II':
      content = `
        <span style="color: #ffffff">Железийный топор</span>
        <br style="line-height: 2">
        <span style="color: #aaaaaa">Эффективность II</span>
      `;
      break;
    case 'Смесь для выпечки печенья':
    case 'Заготовка под броню':
    case 'Уплотнённый снег':
    case 'Стальная заготовка под броню':
    case 'Средний энергоосколок':
    case 'Свекольный набор':
    case 'Грибной набор':
    case 'Литая заготовка под броню':
    case 'Укреплённый булыжник':
      content = `<span style="color: #55ff55">${name}</span>`
      break;
    case 'Деконструктор':
      content = `<span style="color: #ffff55">${name}</span>`
      break;
    case 'Содалит':
    case 'Содалитовый кристалл':
    case 'Содаловая кислота':
    case 'Капля энергии':
      content = `<span style="color: #5555ff">${name}</span>`
      break;
    case 'Ножницы':
      content = `
        <span style="color: #ffffff">Ножницы</span>
        <br style="line-height: 2">
        <span style="color: #aaaaaa">Стальные ножницы</span>
        <br>
        <span style="color: #aaaaaa">Пальцы не совать</span>
      `;
      break;
     case 'Пыль лита Мелкий порошок лита':
      content = `
        <span style="color: #ffff55">Пыль лита</span>
        <br style="line-height: 2">
        <span style="color: #ffaa00">Мелкий порошок лита</span>
      `;
      break;
     case 'Кристалл лита Небольшой кристалл лита':
      content = `
        <span style="color: #ffff55">Кристалл лита</span>
        <br style="line-height: 2">
        <span style="color: #ffaa00">Небольшой кристалл лита</span>
      `;
      break;
     case 'Литой слиток':
     case 'Кристалл огня':
     case 'Ботинки с литыми вставками':
     case 'Крапивозащитные штаны':
     case 'Огнеупорный литой нагрудник':
     case 'Чистый литой шлем':
      content = `<span style="color: #ffaa00">${name}</span>`
     break;
     case 'Очищенный слиток лита':
     case 'Очищенный лит':
     case 'Литовое стекло':
     case 'Литой шлем':
     case 'Литой нагрудник':
     case 'Литые штаны':
     case 'Литые ботинки':
     case 'Пластина лита':
     case 'Литовое стекло':
      content = `<span style="color: #ffff55">${name}</span>`
     break;
     case 'Красный пищальник':
     case 'Красно-пищальниковые ступеньки':
     case 'Красно-пищальниковый полублок':
      content = `<span style="color: #ff5555">${name}</span>`
     break;
     case 'Камни с литом':
      content = `<span style="color: #555555">${name}</span>`
     break;
     case 'Булочка Без наполнителя':
      content = `
        <span style="color: #ffffff">Булочка</span>
        <br style="line-height: 2">
        <span style="color: #aaaaaa">Без наполнителя</span>
      `;
     break;
     case 'Булочка Со слабой защитой от огня':
      content = `
        <span style="color: #ffffff">Булочка</span>
        <br style="line-height: 2">
        <span style="color: #aaaaaa">Со слабой защитой от огня</span>
      `;
     break;
     case 'Булочка С обычной защитой от огня':
      content = `
        <span style="color: #ffffff">Булочка</span>
        <br style="line-height: 2">
        <span style="color: #aaaaaa">Со обычной защитой от огня</span>
      `;
     break;
     case 'Булочка С расширенной защитой от огня':
      content = `
        <span style="color: #ffffff">Булочка</span>
        <br style="line-height: 2">
        <span style="color: #aaaaaa">С расширенной защитой от огня</span>
      `;
     break;
     case 'Ядро роста Шерсть':
      content = `
        <span style="color: #ffaa00">Ядро роста</span>
        <br style="line-height: 2">
        <span style="color: #ffffff">Специализация:</span>
        <br>
        <span style="color: #55ff55">Шерсть</span>
      `;
      break;
      case 'Ядро роста Озеленение':
      content = `
        <span style="color: #ffaa00">Ядро роста</span>
        <br style="line-height: 2">
        <span style="color: #ffffff">Специализация:</span>
        <br>
        <span style="color: #55ff55">Озеленение</span>
      `;
      break;
      case 'Ядро роста Плетение':
      content = `
        <span style="color: #ffaa00">Ядро роста</span>
        <br style="line-height: 2">
        <span style="color: #ffffff">Специализация:</span>
        <br>
        <span style="color: #55ff55">Плетение</span>
      `;
      break;
      

    default:
      content = `<span style="color: #ffffff">${name}</span>`
      break;
  }
  $('#tooltip').html(content);
  $('#tooltip').show();
}, function () {
  $('#tooltip').hide();
});

$(document).mousemove(function (e) {
  $('#tooltip').css({
    left: e.pageX + 15,
    top: e.pageY - 15
  });
});

function copyToClipboard(elem) {
  let temp = $("<input>");
  $("body").append(temp);
  temp.val($(elem).text()).select();
  document.execCommand("copy");
  temp.remove();
  let next = $(elem).next()
  if (next.is(":hidden")) {
    next.fadeIn(100);
    setTimeout(function () { next.fadeOut() }, 2000);
  }
}

$(document).ready(
  function (e) {
    setInterval(function () {
      $("body").find('.animated').each(function () {
        advanceFrame(this, '.animated');
      });
    }, 2000);
  }
);
var advanceFrame = function (parentElem, parentSelector) {
  var curFrame = parentElem.querySelector(parentSelector + ' > .animated-frame-active');
  $(curFrame).removeClass('animated-frame-active');
  var nextFrame = $($(curFrame.nextElementSibling).hasClass('animated-frame') && curFrame.nextElementSibling || parentElem.firstElementChild);
  return nextFrame.addClass('animated-frame-active');
};
