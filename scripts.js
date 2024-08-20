function geturl(giatri) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(giatri).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Copy thành công!");
}

