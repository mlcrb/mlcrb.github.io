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
      content = '<span style="color: #ffff55">Устройство</span><br><span style="color: #fff">Возраждатель</span>';
      break;
    case 'Смесь для выпечки пирога':
      content = `<span style="color: #55ffff">${name}</span>`;
      break;
    case 'Железийный топор Эффективность II':
      content = '<span style="color: #fff">Железийный топор</span><br><span style="color: #aaa">Эффективность II</span>';
      break;
    case 'Смесь для выпечки печенья':
    case 'Заготовка под броню':
    case 'Уплотнённый снег':
    case 'Стальная заготовка под броню':
    case 'Средний энергоосколок':
    case 'Свекольный набор':
    case 'Грибной набор':
      content = `<span style="color: #55ff55">${name}</span>`
      break;
    case 'Деконструктор':
      content = `<span style="color: #ffff55">${name}</span>`
      break;
    case 'Содалит':
    case 'Содалитовый кристалл':
    case 'Капля энергии':
      content = `<span style="color: #5555ff">${name}</span>`
      break;
    case 'Ножницы Стальные ножницы Пальцы не совать':
      content = '<span style="color: #fff">Ножницы</span><br><span style="color: #aaa">Стальные ножницы</span><br><span style="color: #aaa">Пальцы не совать</span>';
      break;

    default:
      content = `<span style="color: #fff">${name}</span>`
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