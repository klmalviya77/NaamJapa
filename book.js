//nav//
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function showDialog() {
            document.getElementById('dialog-container').style.display = 'flex';
        }

    function closeDialog() {
    document.getElementById('dialog-container').style.display = 'none';
        }
//nav//



document.getElementById('list-search').addEventListener('input', filterItems);
        document.getElementById('categorySelect').addEventListener('change', filterItems);
        
        function filterItems() {
          let filter = document.getElementById('list-search').value.toLowerCase();
          let category = document.getElementById('categorySelect').value;
          let items = document.querySelectorAll('#itemList li');
          let found = false;
        
          items.forEach(function(item) {
            let text = item.textContent.toLowerCase();
            let itemCategory = item.getAttribute('data-category');
        
            if ((category === 'all' || category === itemCategory) && text.includes(filter)) {
              item.style.display = '';
              found = true;
            } else {
              item.style.display = 'none';
            }
          });
        
          document.getElementById('not-found').style.display = found ? 'none' : 'block';
        }