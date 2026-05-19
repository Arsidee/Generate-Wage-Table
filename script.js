function formatMoney(amount) {
  return '$' + amount.toLocaleString();
}

document.getElementById('generate-btn').addEventListener('click', function() {
  var tbody = document.getElementById('table-body');
  tbody.innerHTML = '';

  for (var rate = 1; rate <= 12; rate++) {
    var day        = rate * 8;
    var week       = day * 5;
    var twoWeeks   = day * 10;
    var month      = day * 20;
    var quarter    = day * 65;
    var twoQuarters = day * 130;
    var year       = day * 260;

    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td>' + formatMoney(rate)        + '</td>' +
      '<td>' + formatMoney(day)         + '</td>' +
      '<td>' + formatMoney(week)        + '</td>' +
      '<td>' + formatMoney(twoWeeks)    + '</td>' +
      '<td>' + formatMoney(month)       + '</td>' +
      '<td>' + formatMoney(quarter)     + '</td>' +
      '<td>' + formatMoney(twoQuarters) + '</td>' +
      '<td>' + formatMoney(year)        + '</td>';

    tbody.appendChild(tr);
  }
});

document.getElementById('reset-btn').addEventListener('click', function() {
  document.getElementById('table-body').innerHTML = '';
});
