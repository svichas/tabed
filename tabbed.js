/**
* Author: Stefanos Vichas
* Version: 0.1.0
* Project: https://github.com/svichas/Tabbed
* License: MIT
*/

function tabbed(selector="") {

  // get all tabs with selector
  let tabWrappers = document.querySelectorAll(selector);

  // foreach tab wrapper
  tabWrappers.forEach(function(tabWrapper) {

    // create menu element for tabs
    let tabMenuWrapper = document.createElement("ul");
    tabMenuWrapper.className = "tabbed-menu-wrapper";

    // get all children from parent
    let tabs = tabWrapper.children;
    let tabId = 1;

    for (tab of tabs) {

      let menuItem = document.createElement("li");
      menuItem.innerHTML = tab.getAttribute("data-title");
      menuItem.className = "tabbed-tab-open";
      menuItem.setAttribute("data-id", tabId);
      menuItem.onclick = function() {

        // remove selected tab class
        this.parentElement.querySelector(".tabbed-selected-tab").classList.remove("tabbed-selected-tab");
        // add selected tab class to new tab
        this.classList.add("tabbed-selected-tab");

        // get all tabs
        let childrenTabs = this.parentElement.parentElement.children;
        let menuId = this.getAttribute("data-id");

        let childrenId = 1;
        for (childrenTab of childrenTabs) {

          // ignore tab menu wrapper
          if (childrenTab.className == "tabbed-menu-wrapper") continue;

          // show and hide tab contents
          if (childrenId == menuId) {
            childrenTab.classList.remove("tabbed-hidden");
          } else {
            childrenTab.classList.add("tabbed-hidden");
          }

          childrenId++;
        }

        childrenTabs[this.getAttribute("data-id")].classList.remove("tabbed-hidden");

      }

      // select first tab and hide all others
      if (tabId != 1) {
        tab.classList.add("tabbed-hidden");
      } else {
        menuItem.classList.add("tabbed-selected-tab");
      }

      // append menu item to menu wrapper for tab
      tabMenuWrapper.appendChild(menuItem);
      tabId++;
    }


    // prepend tab menu to wrapper
    tabWrapper.insertBefore(tabMenuWrapper, tabs[0]);

  });


}
