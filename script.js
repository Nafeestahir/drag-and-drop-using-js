$(document).ready(function () {
    // let list = document.getElementsByClassName("list");
    let r, g, b, LeftBlock, firstindex, secindex, lastindex;

    $("#btn").on("click", function () {
        let inputVal = $("#InputVal").val();
        secindex = 1;
        for (let index = 1; index <= inputVal; index++) {
            r = Math.floor(Math.random(255) * 255);
            g = Math.floor(Math.random(255) * 255);
            b = Math.floor(Math.random(255) * 255);
            // element = list[index];
            LeftBlock = `<div class="list" id="${index}" draggable="true" ondragstart="drag(event)">${index}</div> `;
            $("#left").append($(LeftBlock).css({ background: `rgb(${r},${g},${b})` }))
            secindex = 1;
            $(".list").each(function () {
                $(this).text(secindex++);
            })
            // $(element).css({ background: `rgb(${r},${g},${b})` });
        }
    })
});
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(data));
    firstindex = 1;
    $("#left .list").each(function () {
        $(this).text(firstindex++);
    })
    lastindex = 1;
    $("#right .list").each(function () {
        $(this).text(lastindex++);
        console.log("rightsss");

    })

}

