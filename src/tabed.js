/**
* Author: Stefanos Vichas
* Version: 0.7.0
* Project: htts://github.com/svichas/tabed
* License: MIT
*/

class Tabed {

  /**
  * Main method
  */
  constructor(el, opts) {

    // set defaults options
    this.opts = typeof opts == "undefined" ? {} : opts;
    this.opts.tabOpen = typeof this.opts.tabOpen == "undefined" ? 0 : this.opts.tabOpen;
    this.opts.theme = typeof this.opts.theme == "undefined" ? "tabed_default_theme" : this.opts.theme;

    // get Element and children
    this.element = document.querySelector(el);
    this.tabs = this.element.children;

    // format tabed element to correct html stracture
    this.formatTabed();
  }


  /**
  * Method to format tabed element to correct html stracture
  */
  formatTabed() {

    this.element.classList.add("tabed_container");
    this.element.classList.add(this.opts.theme);

    // Create menu wrapper
    let menuWrapper = document.createElement("ul");
    menuWrapper.classList.add("tabed_menuwrapper");

    /**
    * Loop each tab
    */
    for (let i = 0; i < this.tabs.length; i++) {

      let currentTab = this.tabs[i];

      // Attach current tab data
      currentTab.classList.add("tabed_tab_wrapper");
      currentTab.setAttribute("data-id", i);

      // Create menu item
      let currentMenuItemTitle = currentTab.getAttribute("data-title");
      let currentMenuItem = document.createElement("li");

      // Attach menu item events and data
      currentMenuItem.innerHTML = currentMenuItemTitle;
      currentMenuItem.classList.add("tabed_menuitem");
      currentMenuItem.setAttribute("data-id", i);
      currentMenuItem.setAttribute("role", "button");
      currentMenuItem.setAttribute("aria-haspopup", "true");
      currentMenuItem.setAttribute("aria-expanded", "false");
      currentMenuItem.onclick = this.menuItemClickEvent;

      // menu first menu item
      if (i == this.opts.tabOpen) {
        currentTab.classList.add("open");
        currentMenuItem.classList.add("open");
        currentMenuItem.setAttribute("aria-expanded", "true");
      }

      menuWrapper.appendChild(currentMenuItem);

    }

    // prepend menu to tabed element
    this.element.insertBefore(menuWrapper, this.tabs[0]);

  }

  menuItemClickEvent() {

    // get tab menu items & tab elements
    let tabId = this.getAttribute("data-id");
    let tabElements = document.querySelectorAll(".tabed_tab_wrapper");
    let tabMenuItems = document.querySelectorAll(".tabed_menuitem");

    // loop items
    for (let i=0;i<tabElements.length;i++) {
      if (i==tabId) {
        tabElements[i].classList.add("open");
        tabMenuItems[i].classList.add("open");
        tabMenuItems[i].setAttribute("aria-expanded", "true");
      } else {
        tabElements[i].classList.remove("open");
        tabMenuItems[i].classList.remove("open");
        tabMenuItems[i].setAttribute("aria-expanded", "false");
      }
    }

  }

}
