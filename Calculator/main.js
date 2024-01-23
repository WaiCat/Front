const submonitor = document.getElementById('subMonitor');
const tmpbox = document.getElementById('tmpbox');

function insertnum(num) {
  let text = submonitor.textContent;
  text += num;
  console.log(text);
  submonitor.textContent = text;
}

function operator(op) {
  text = submonitor.textContent;
  if (op == 'x') {
    tmpbox.textContent = text + ' *';
  } else if (op == '/') {
    tmpbox.textContent = text + ' /';
  } else if (op == '+') {
    tmpbox.textContent = text + ' +';
  } else if (op == '-') {
    tmpbox.textContent = text + ' -';
  }
  submonitor.textContent = '';
}

function negation() {
  text = submonitor.textContent;
  console.log(text);
  if (submonitor.textContent.charAt(0) == '-') {
    text = text.slice(1);
  } else {
    text = '-' + text;
  }
  submonitor.textContent = text;
}

function total() {
  submonitor.textContent = eval(tmpbox.textContent + submonitor.textContent);
  tmpbox.textContent = '';
}
