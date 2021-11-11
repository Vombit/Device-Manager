let base;
// Объявление вед сокета
const myWs = new WebSocket('ws://26.255.29.65:9000');

// действие при подключении к сокету
myWs.onopen = function () {
  console.log('подключено');
  GETDATA();
};

// обработчик сообщений от сервера
myWs.onmessage = function (message) {
  base = JSON.parse(message.data)

 maindata()
};

// Отрисовка данных
  // Получение данных для главной страницы
function maindata() {
  X1();
  X2();
  document.getElementsByClassName('X1checkbox')[0].click();
  document.getElementsByClassName('X2checkbox')[0].click();
};
function X1() {
  new Vue({
    el: "#power_monitoringX1",
    data: {
      items: base
    }
  });
}
function X2() {
  new Vue({
    el: "#power_monitoringX2",
    data: {
      items: base
    }
  });
}
var X1checkbox = new Vue({
el: '#X1checkbox',
data: {
},
methods:{
  X1checkbox(){
    var keys = Object.keys(this.$refs);
    var i = 0;
    while (i < keys.length) {
      if (base.X1[this.$refs[keys[i]].id]) document.getElementById(this.$refs[keys[i]].id).checked = true;
      i++;
    }
  }
}
});
var X2checkbox = new Vue({
  el: '#X2checkbox',
  data: {
  },
  methods:{
    X2checkbox(){
      var keys = Object.keys(this.$refs);
      var i = 0;
      while (i < keys.length) {
        if (base.X2[this.$refs[keys[i]].id]) document.getElementById(this.$refs[keys[i]].id).checked = true;
        i++;
      }
    }
  }
  });
// /Отрисовка данных

// Запросы на сервер
  // Получение данных для главной страницы
function GETDATA() {
  myWs.send(JSON.stringify({action: 'GetDATA'}));
}
  // Получение данных для НАСТРОЕК
function GETSETTING() {
  myWs.send(JSON.stringify({action: 'GetSettings'}));
}
// /Запросы на сервер