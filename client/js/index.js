let base;
const myWs = new WebSocket('ws://26.255.29.65:9000');
// обработчик проинформирует в консоль когда соединение установится
myWs.onopen = function () {
  console.log('подключено');
  GETDATA();
};
// обработчик сообщений от сервера
myWs.onmessage = function (message) {
  base = JSON.parse(message.data)
 // console.log(base);

};
// get json data
function GETDATA() {
  myWs.send(JSON.stringify({action: 'GetDATA'}));
}

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

  var seee = new Vue({
  el: '#testtt',
  data: {
  },
  methods:{
    getNameId(){
      var keys = Object.keys(this.$refs);
      var i = 0;
      while (i < keys.length) {
        if (base.X1[this.$refs[keys[i]].id]) document.getElementById(this.$refs[keys[i]].id).checked = true;
        i++;
      }
    }
  }
  });
