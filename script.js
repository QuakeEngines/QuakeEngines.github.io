// search filter
function filterRepo() {
  var input, filter, ul, item, a, i, txtValue;
  input = document.getElementById("filter-repo");
  filter = input.value.toUpperCase();
  div = document.getElementById("maindiv");
  item = div.getElementsByClassName("item");

  // change display state of every item
  for (i = 0; i < item.length; i++) {
    itemText = item[i].textContent;
    // if text inside item (div) matches search filter - display it
    if (itemText.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else { // if not - hide it
      item[i].style.display = "none";
    }
  }

  sections = div.getElementsByClassName("section-title");
  h4 = div.getElementsByTagName("h4");

  // if anything typed into search field - hide all h4 tags and section titles
  if (input.value.length > 0) {
    for (i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    for (i = 0; i < h4.length; i++) {
      h4[i].style.display = "none";
    }
    expandAll();
  } else { // display them again when search field cleared
    for (i = 0; i < sections.length; i++) {
      sections[i].style.display = "";
    }
    for (i = 0; i < h4.length; i++) {
      h4[i].style.display = "";
    }
    collapseAll();
  }
}


// collapsible divs
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active"); // switch arrow symbol direction
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// expand everything (when clicked on respective link or when searching)
function expandAll() {
  var i, hiddenDivs, coll;
  hiddenDivs = document.getElementsByClassName("hidden");
  coll = document.getElementsByClassName("collapsible");
  for (i = 0; i < hiddenDivs.length; i++) {
    hiddenDivs[i].style.maxHeight = hiddenDivs[i].scrollHeight + "px";
    coll[i].classList.add("active"); // switch arrow symbol direction
  }

}

// collapse everything (when search input field cleared after search)
function collapseAll() {
  var i, hiddenDivs, coll;
  hiddenDivs = document.getElementsByClassName("hidden");
  coll = document.getElementsByClassName("collapsible");
  for (i = 0; i < hiddenDivs.length; i++) {
    hiddenDivs[i].style.maxHeight = null;
    coll[i].classList.remove("active"); // switch arrow symbol direction
  }

}