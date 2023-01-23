function dropdown() {
    let coll = document.getElementsByClassName("collapse");
    let index;
    for (index = 0; index < coll.length; index++) {
      coll[index].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }