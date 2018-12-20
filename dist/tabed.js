"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Author: Stefanos Vichas
* Version: 0.7.2
* Project: htts://github.com/svichas/tabed
* License: MIT
*/
var Tabed =
/*#__PURE__*/
function () {
  /**
  * Main method
  */
  function Tabed(el, opts) {
    _classCallCheck(this, Tabed);

    // set defaults options
    this.opts = typeof opts == "undefined" ? {} : opts;
    this.opts.tabOpen = typeof this.opts.tabOpen == "undefined" ? 0 : this.opts.tabOpen;
    this.opts.theme = typeof this.opts.theme == "undefined" ? "tabed_default_theme" : this.opts.theme; // get Element and children

    this.element = document.querySelector(el);
    this.tabs = this.element.children; // check if tabed element exists

    if (this.element == null) return false; // format tabed element to correct html stracture

    this.formatTabed();
  }
  /**
  * Method to format tabed element to correct html stracture
  */


  _createClass(Tabed, [{
    key: "formatTabed",
    value: function formatTabed() {
      this.element.classList.add("tabed_container");
      this.element.classList.add(this.opts.theme); // Create menu wrapper

      var menuWrapper = document.createElement("ul");
      menuWrapper.classList.add("tabed_menuwrapper");
      /**
      * Loop each tab
      */

      for (var i = 0; i < this.tabs.length; i++) {
        var currentTab = this.tabs[i]; // Attach current tab data

        currentTab.classList.add("tabed_tab_wrapper");
        currentTab.setAttribute("data-id", i); // Create menu item

        var currentMenuItemTitle = currentTab.getAttribute("data-title");
        var currentMenuItem = document.createElement("li"); // Attach menu item events and data

        currentMenuItem.innerHTML = currentMenuItemTitle;
        currentMenuItem.classList.add("tabed_menuitem");
        currentMenuItem.setAttribute("data-id", i);
        currentMenuItem.setAttribute("role", "button");
        currentMenuItem.setAttribute("aria-haspopup", "true");
        currentMenuItem.setAttribute("aria-expanded", "false");
        currentMenuItem.onclick = this.menuItemClickEvent; // menu first menu item

        if (i == this.opts.tabOpen) {
          currentTab.classList.add("open");
          currentMenuItem.classList.add("open");
          currentMenuItem.setAttribute("aria-expanded", "true");
        }

        menuWrapper.appendChild(currentMenuItem);
      } // prepend menu to tabed element


      this.element.insertBefore(menuWrapper, this.tabs[0]);
    }
  }, {
    key: "menuItemClickEvent",
    value: function menuItemClickEvent() {
      // get tab menu items & tab elements
      var tabId = this.getAttribute("data-id");
      var tabElements = document.querySelectorAll(".tabed_tab_wrapper");
      var tabMenuItems = document.querySelectorAll(".tabed_menuitem"); // loop items

      for (var i = 0; i < tabElements.length; i++) {
        if (i == tabId) {
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
  }]);

  return Tabed;
}();