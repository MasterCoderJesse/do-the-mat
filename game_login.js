function addUser(){
    p1Name=document.getElementById("player1_name_input").value;
    p2Name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",p1Name);
    localStorage.setItem("player2_name",p2Name);


    window.location="game_page.html"
}