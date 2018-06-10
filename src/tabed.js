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

  /**
  * Method to add class to a element
  */
  HTMLElement.prototype.tabedAddClass = function(className) {
    
    var arr = this.className.split(" ");

    // check if class already exists
    if (arr.indexOf(className) == -1) {
      this.className += ((this.className[this.className.length-1] == " " || this.className == "") ? "" : " ") + className;
    }
    return this;
  }

  /**
  * Method to remove class to a element
  */
  HTMLElement.prototype.tabedRemoveClass = function(className) {
    this.className = this.className.replace(className, "");
    return this;
  }

  // default value for settings
  if (typeof settings == "undefined") settings = {};

  settings.nav = (typeof settings.nav != "undefined") ? settings.nav : false;

  // get all tabs with selector
  var tabWrappers = document.querySelectorAll(selector);

  // get theme name
  var themeName   = typeof settings.theme != "undefined" ? settings.theme : "default";


  // foreach tab wrapper
  for (var tabWrapperNumber=0;tabWrapperNumber<tabWrappers.length;tabWrapperNumber++) {
    var tabWrapper = tabWrappers[tabWrapperNumber];

    // set theme name as class
    //tabWrapper.classList.add("tabed-" + themeName);
    tabWrapper.tabedAddClass("tabed_" + themeName);
    // create menu element for tabs
    var tabMenuWrapper = document.createElement("ul");
    tabMenuWrapper.className = "tabed_wrapper";

    // get all children from parent
    var tabs = tabWrapper.children;
    var tabId = 1;

    for (var i=0;i<tabs.length;i++) {
      
      var tab = tabs[i];
      
      tab.tabedAddClass("tabed_tab_wrapper");

      var menuItem = document.createElement("li");
      menuItem.innerHTML = tab.getAttribute("data-title");

      // add class to tab open listener
      menuItem.className = "tabed_tab_listener";
      menuItem.setAttribute("data-id", tabId);

      menuItem.onclick = function() {

        // remove selected tab class
        this.parentElement
        .querySelector(".tabed_open")
        .tabedRemoveClass("tabed_open");

        // add selected tab class to new tab
        this.tabedAddClass("tabed_open");

        // get all tabs
        var childrenTabs = this.parentElement.parentElement.children;
        var menuId = this.getAttribute("data-id");

        var childrenId = 1;
        for (var c=0;c<childrenTabs.length;c++) {

          var childrenTab = childrenTabs[c];
          // ignore tab menu wrapper
          if (childrenTab.className == "tabed_wrapper") continue;

          // show and hide tab contents
          if (childrenId == menuId) {
            childrenTab.tabedRemoveClass("tabed_hidden");
          } else {
            childrenTab.tabedAddClass("tabed_hidden");
          }

          childrenId++;
        }


        // remove hidden class from selected tab
        childrenTabs[this.getAttribute("data-id")].tabedRemoveClass("tabed_hidden");

      }

      // select first tab and hide all others
      if (tabId != 1) {
        tab.tabedAddClass("tabed_hidden");
      } else {
        menuItem.tabedAddClass("tabed_open");
      }

      // append menu item to menu wrapper for tab
      tabMenuWrapper.appendChild(menuItem);
      tabId++;
    }

    // prepend tab menu to wrapper
    tabWrapper.insertBefore(tabMenuWrapper, tabs[0]);
  }


}
