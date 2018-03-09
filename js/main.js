/*	Main App variable, this is where settings are stored, different to Storage variable.
	This is where the default settings are stored.
	<App Variable>
*/
var App = {
	CurrentPage: 'index',
	PreviousPage: 'index',
	MenuItemIDs: function () {
		let hideDocsArray =[];
		let hideDocs = document.getElementsByClassName('menu')[0].children;
		for (i = 0; i < hideDocs.length; i++) {
			hideDocsArray.push(hideDocs[i].id.substr(5));
		}
		return hideDocsArray;
	}
};
/* </App Variable> */


/*	<Menu Handling>
	Shows elements of the page by toggling the hide/show css classes.
	Problems: class "menu" requires elements of class "item",
	each item has to have an ID in the format "menu-<itemname>"
*/
var menuItem = document.getElementsByClassName('menu');
//var i;
var menuItems = menuItem[0].children;

for (i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click",function () {
		let activeId = this.id.substr(5);

		let el = document.getElementById('index-' + activeId);
		if (el != null && ( el.classList.contains('show') || el.classList.contains('hide'))) {
			if (App.CurrentPage !== activeId) {
				if (el.classList.contains('hide')) { //This handles Previous/currentPage
					App.PreviousPage = App.CurrentPage;
					App.CurrentPage = activeId;
				} else if (el.classList.contains('show')) {
					App.CurrentPage = App.PreviousPage;
					App.PreviousPage = activeId;
				};
				if (App.PreviousPage !== activeId) {
					document.getElementById('index-' + App.PreviousPage).classList.toggle('show')
					document.getElementById('index-' + App.PreviousPage).classList.toggle('hide');
				}

				el.classList.toggle('show');
				el.classList.toggle('hide');
			}
		}
	});
}

/* </Menu Handling>*/
