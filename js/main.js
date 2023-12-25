$(".service-row").click(function () {
    $(this).parent().siblings().children(".service-row").removeClass("service-show");
    $(this).parent().siblings().children(".service-content").addClass("hidden");
    $(this).toggleClass("service-show");
    $(this).siblings().toggleClass("hidden")
});


$("#MenuOpen").click(function () {
    $("#Menu").toggleClass("max-[698px]:hidden");
    $("#Overlay").toggleClass("hidden");
});

$("#MenuClose").click(function () {
    $("#Menu").addClass("max-[698px]:hidden");
    $("#Overlay").addClass("hidden");
});

$("#Overlay").click(function () {
    $("#Menu").addClass("max-[698px]:hidden");
    $(this).addClass("hidden");
})

$(".MenuLink").click(function () {
    $("#Menu").addClass("max-[698px]:hidden");
    $("#Overlay").addClass("hidden");
})



$(document).ready(function () {
    var currentDate = new Date();

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var month = monthNames[currentDate.getMonth()];
    var dayOfWeek = dayNames[currentDate.getDay()];
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();

    var formattedDate = month + " " + date + ", " + year;


    function updateTime() {
        var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        $("#currentTime").text(currentTime);
    }

    updateTime();

    $("#currentDate").text(formattedDate);
    $("#currentDay").text(dayOfWeek);
    setInterval(updateTime, 1000);
});


function showModal() {
    document.getElementById("myModal").style.display = "flex";
}

function hideModal() {
    document.getElementById("myModal").style.display = "none";
}


function checkShopStatus() {
    var currentTime = new Date();
    var openingTime = new Date();
    var closingTime = new Date();
    var DayOfWeek = currentTime.getDay();



    if (DayOfWeek === 0) {
        openingTime.setHours(9, 30, 0);
        closingTime.setHours(12, 30, 0);
    } else {
        openingTime.setHours(9, 0, 0);
        closingTime.setHours(21, 0, 0);
    }

    if (currentTime < openingTime || currentTime >= closingTime) {
        showModal();
    }
}


checkShopStatus();


// $(document).ready(function () {
//     $(window).on("contextmenu", function (e) {
//         return false;
//     });
// });
// document.onkeydown = function (e) {
//     e = e || window.event;
//     if (e.ctrlKey) {
//         var c = e.which || e.keyCode;
//         switch (c) {
//             case 83://Block Ctrl+S
//             case 87://Block Ctrl+W
//             case 85://Block Ctrl+U
//             case 73://Block Ctrl+I
//             case 67: //Block Ctrl+C
//                 e.preventDefault();
//                 e.stopPropagation();
//                 break;
//         }
//     }
// };

// $(document).keydown(function (event) {
//     if (event.keyCode == 123) {
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//         return false;
//     }
// });