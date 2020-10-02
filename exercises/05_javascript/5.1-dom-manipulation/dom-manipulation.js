/**
 * Sort table rows alphabetically based on the values in a column
 *
 * @param {Number} col column index (zero based)
 * @param {HTMLTableElement} table the table to be sorted
 */
function sortTableByColumn(col, table) {

  //true for ascending sorting, false for descending
  var ascending = true;
  //variables needed in sorting
  var keep_looping = true;
  var make_switch = false;
  var x;
  var y;

  while(keep_looping) {

    keep_looping = false;

    for(i = 1; i < (table.rows.length - 1); i++) {
      make_switch = false;

      x = table.rows[i].getElementsByTagName("td")[col];
      y = table.rows[i + 1].getElementsByTagName("td")[col];

      if((x.textContent.localeCompare(y.textContent) > 0) === ascending) {
        make_switch = true;
        break;
      }
    }

    if(make_switch) {
      //switch rows
      table.rows[i].parentNode.insertBefore(table.rows[i + 1], table.rows[i]);
      keep_looping = true;
    }
  }
}

/**
 * DO NOT EDIT THE CODE BELOW!
 *
 * The code below is there just to make it easier to test the code.
 *
 * If your function works correctly you should be able to sort the table
 * simply by clicking any column heading and the table should be immediately
 * sorted by values in that column.
 */

// find the table element
const table = document.getElementById('sortable');

// attach an event listener to each th element's click event
table.querySelectorAll('thead th').forEach((th, i) =>
  th.addEventListener('click', () => {
    sortTableByColumn(i, table);
  })
);
