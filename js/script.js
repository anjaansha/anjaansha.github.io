function opens(){
    $(".menu").css("right", "0px");
    setTimeout(function(){ 
        $(".closing").css("display","block");
        $(".navigation").css("display","block");
     }, 450);
    
}
function closed(){
    $(".menu").css("right", "-200px");
    // $(".closing").css("display","none");
    // $(".navigation").css("display","none");
}