/**
* Author: Stefanos Vichas
* Version: 0.6.0
* Project: https://github.com/svichas/tabed
* License: MIT
*/



/**
* @param string selector
* @param object settings
*/
function tabed(selector, settings) {

  // default value for settings
  if (typeof settings == "undefined") settings = {};

  // TODO: add costum theme setting.

  // get all tabs with selector
  var tabWrappers = document.querySelectorAll(selector);

  // get theme name
  var themeName   = typeof settings.theme != "undefined" ? settings.theme : "default";


  // foreach tab wrapper
  for (var tabWrapperNumber=0;tabWrapperNumber<tabWrappers.length;tabWrapperNumber++) {
    var tabWrapper = tabWrappers[tabWrapperNumber];

    // set theme name as class
    tabWrapper.classList.add("tabed-" + themeName);

    // create menu element for tabs
    var tabMenuWrapper = document.createElement("ul");
    tabMenuWrapper.className = "tabed-menu-wrapper";

    // get all children from parent
    var tabs = tabWrapper.children;
    var tabId = 1;

    for (i=0;i<tabs.length;i++) {
      var tab = tabs[i];
      var menuItem = document.createElement("li");
      menuItem.innerHTML = tab.getAttribute("data-title");
      menuItem.className = "tabed-tab-open";
      menuItem.setAttribute("data-id", tabId);
      menuItem.onclick = function() {

        // remove selected tab class
        this.parentElement.querySelector(".tabed-selected-tab").classList.remove("tabed-selected-tab");
        // add selected tab class to new tab
        this.classList.add("tabed-selected-tab");

        // get all tabs
        var childrenTabs = this.parentElement.parentElement.children;
        var menuId = this.getAttribute("data-id");

        var childrenId = 1;
        for (i=0;i<childrenTabs.length;i++) {

          var childrenTab = childrenTabs[i];
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
  }


}
