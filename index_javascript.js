// 開關導覽列
function openbtn() {
      document.getElementById("noneNav").style.height = '100%'
}

function closenav() {
      document.getElementById("noneNav").style.height = '0%'
}


function loadeing() {
      setTimeout(function () {
            document.getElementById("loader").style.height = "0%";
         }, 500);
      
}

function chair() {
      document.getElementById("team_chair").style.display = "flex";
      document.getElementById("team_sofa").style.display = "none";
      document.getElementById("team_stool").style.display = "none";
      document.getElementById("team_table").style.display = "none";
      document.getElementById("team_other").style.display = "none";
}
function sofa() {
      document.getElementById("team_chair").style.display = "none";
      document.getElementById("team_sofa").style.display = "flex";
      document.getElementById("team_stool").style.display = "none";
      document.getElementById("team_table").style.display = "none";
      document.getElementById("team_other").style.display = "none";
}
function stool() {
      document.getElementById("team_chair").style.display = "none";
      document.getElementById("team_sofa").style.display = "none";
      document.getElementById("team_stool").style.display = "flex";
      document.getElementById("team_table").style.display = "none";
      document.getElementById("team_other").style.display = "none";
}
function table() {
      document.getElementById("team_chair").style.display = "none";
      document.getElementById("team_sofa").style.display = "none";
      document.getElementById("team_stool").style.display = "none";
      document.getElementById("team_table").style.display = "flex";
      document.getElementById("team_other").style.display = "none";
}
function other() {
      document.getElementById("team_chair").style.display = "none";
      document.getElementById("team_sofa").style.display = "none";
      document.getElementById("team_stool").style.display = "none";
      document.getElementById("team_table").style.display = "none";
      document.getElementById("team_other").style.display = "flex";
}

function itembtnop() {
      document.getElementById("itemopen").style.display = "none";
      document.getElementById("itemclose").style.display = "inline-block";
      document.getElementById("itemlist").style.height = "100%";
}
function itembtned() {
      document.getElementById("itemopen").style.display = "inline-block";
      document.getElementById("itemclose").style.display = "none";
      document.getElementById("itemlist").style.height = "0";
}