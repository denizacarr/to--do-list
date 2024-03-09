var items = ["item1", "item2", "item3"];

var list = document.querySelector("#myList");
items.forEach(function(item) {

    CreateItem(item);
});

list.addEventListener("click", function(item) {
    if (item.target.tagName = "li") {
        item.target.classList.toggle("checked");
    }
});


document.querySelector("#btnCreate").onclick = function() {
    var item = document.querySelector("#txtItem").value;
    if (item === "") {

        alert
            ("lütfen bir değer giriniz");


        return;
    }
    CreateItem(item);

};

function CreateItem(item) {
    var li = document.createElement("li");
    var t = document.createTextNode(item);
    li.className = "list-group-item";
    li.appendChild(t);
    list.appendChild(li);
    document.getElementById("txtItem").value = "";
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);
    span.onclick = function() {
        var li = this.parentElement;
        li.style.display = "none";
    }
    var li = document.querySelector('li');
    list.addEventListener('click', function() {
        if (item.target.tagName === 'li') {
            item.target.classList.toggle('checkbox');
        }
    }, false);
}