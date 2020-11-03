
$(function(){
    let menuItems = $(".menu-item")
    let contentElements = $(".content")
    menuItems.on("click", function() {
        menuItems.removeClass("underline");
        $(this).addClass("underline");
        let dataContent = $(this).data("content")
        console.log(dataContent)
        contentElements.addClass("hidden");
        // contentElements.each(function(index, elem){
        //     if($(elem).hasClass(dataContent)){
        //         $(elem).removeClass("hidden");
        //     }
        //                OR USE
        //
        // let classDataContent = "." + dataContent
        // contentElements.filter(classDataContent).removeClass("hidden");
        //
        //              OR THE BACKTICK :
        contentElements.filter(`.${dataContent}`).removeClass("hidden");

        if(dataContent == "your-orders-wrapper"){
        $(".boundary-menu").addClass("hidden");
        } else {
        $(".boundary-menu").removeClass("hidden");
        }

        switch(dataContent) {
            case "your-orders-wrapper":
                $("#imgLogo").attr("src", "../navigation-layout/assets/logo-vip.png");
                break;
            case "reward-status-wrapper":
                $("#imgLogo").attr("src", "../navigation-layout/assets/logo-gold.png");
                break;
            case "account-settings-wrapper":
                $("#imgLogo").attr("src", "../navigation-layout/assets/logo-elite.png");
                break;
            case "payment-methods-wrapper":
                $("#imgLogo").attr("src", "../navigation-layout/assets/logo-member.png");
        }
    })
    $("#orderDetailsBtn").on("click", function(){
        contentElements.addClass("hidden");
        contentElements.filter(".order-details-wrapper").removeClass("hidden");
        $(".boundary-menu").removeClass("hidden");
    })

})