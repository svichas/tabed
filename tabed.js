/**
* Author: Stefanos Vichas
* Version: 0.1.0
* Project: https://github.com/svichas/tabed
* License: MIT
*/

function tabed(selector="") {

  // get all tabs with selector
  let tabWrappers = document.querySelectorAll(selector);

  // foreach tab wrapper
  tabWrappers.forEach(function(tabWrapper) {

    // create menu element for tabs
    let tabMenuWrapper = document.createElement("ul");
    tabMenuWrapper.className = "tabed-menu-wrapper";

    // get all children from parent
    let tabs = tabWrapper.children;
    let tabId = 1;

    for (tab of tabs) {

      let menuItem = document.createElement("li");
      menuItem.innerHTML = tab.getAttribute("data-title");
      menuItem.className = "tabed-tab-open";
      menuItem.setAttribute("data-id", tabId);
      menuItem.onclick = function() {

        // remove selected tab class
        this.parentElement.querySelector(".tabed-selected-tab").classList.remove("tabed-selected-tab");
        // add selected tab class to new tab
        this.classList.add("tabed-selected-tab");

        // get all tabs
        let childrenTabs = this.parentElement.parentElement.children;
        let menuId = this.getAttribute("data-id");

        let childrenId = 1;
        for (childrenTab of childrenTabs) {

          // ignore tab menu wrapper
          if (childrenTab.className == "tabed-menu-wrapper") continue;

          // show and hide tab contents
          if (childrenId == menuId) {
            childrenTab.classList.remove("tabed-hidden");
          } else {
            childrenTab.classList.add("tabed-hidden");
          }

          childrenId++;
        }

        childrenTabs[this.getAttribute("data-id")].classList.remove("tabed-hidden");

      }

      // select first tab and hide all others
      if (tabId != 1) {
        tab.classList.add("tabed-hidden");
      } else {
        menuItem.classList.add("tabed-selected-tab");
      }

      // append menu item to menu wrapper for tab
      tabMenuWrapper.appendChild(menuItem);
      tabId++;
    }


    // prepend tab menu to wrapper
    tabWrapper.insertBefore(tabMenuWrapper, tabs[0]);

  });


}
