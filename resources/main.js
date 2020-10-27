document.addEventListener("DOMContentLoaded", function(event) {
    const menuItems = document.getElementsByClassName("menu-item");
    for(let i=0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        menuItem.addEventListener("click", function() {
            for(let j=0; j < menuItems.length; j++) {
                if(menuItems[j].classList.contains("underline")) {
                    menuItems[j].classList.remove("underline");
                } else {
                    continue;
                }
            }
            menuItem.classList.add("underline");


            const dataContent = menuItem.dataset.content;
            const contentElements = document.getElementsByClassName("content");
            for(let k=0; k < contentElements.length; k++) {
                if(contentElements[k].classList.contains("hidden")) {
                    continue;
                } else {
                    contentElements[k].classList.add("hidden");
                }
            }
            document.getElementsByClassName(dataContent)[0].classList.remove("hidden");
            let imgLogo = document.getElementById("imgLogo");
            let boundaryMenu = document.getElementsByClassName("boundary-menu");
            // este mai recomandat sa implementezi un switch aici, decat atatea if..else-uri
            // if(dataContent == "your-orders-wrapper") {
            //     imgLogo.src = "../navigation-layout/assets/logo-vip.png";
            // } else if(dataContent == "reward-status-wrapper") {
            //     imgLogo.src = "../navigation-layout/assets/logo-gold.png";
            // } else if(dataContent == "account-settings-wrapper") {
            //     imgLogo.src = "../navigation-layout/assets/logo-elite.png";
            // } else if(dataContent == "payment-methods-wrapper") {
            //     imgLogo.src = "../navigation-layout/assets/logo-member.png";
            // }
            switch(dataContent) {
                case "your-orders-wrapper": 
                    imgLogo.src = "../navigation-layout/assets/logo-vip.png";
                    break;
                case "reward-status-wrapper":
                    imgLogo.src = "../navigation-layout/assets/logo-gold.png";
                    break;
                case "account-settings-wrapper":
                    imgLogo.src = "../navigation-layout/assets/logo-elite.png";
                    break;
                case "payment-methods-wrapper":
                    imgLogo.src = "../navigation-layout/assets/logo-member.png";                
            }
            if(dataContent=="your-orders-wrapper") {
                Array.from(boundaryMenu).forEach(function(item){
                    item.classList.add("hidden");
                })
            } else {
                Array.from(boundaryMenu).forEach(function(item){
                    item.classList.remove("hidden");
                })
            }
        })
    }
    const orderDetails = document.getElementById("orderDetails");
    const orderDetailsBtn = document.getElementById("orderDetailsBtn");
    let boundaryMenu = document.getElementsByClassName("boundary-menu");
    orderDetailsBtn.addEventListener("click", function() {
        const contentElements = document.getElementsByClassName("content");
            for(let k=0; k < contentElements.length; k++) {
                if(contentElements[k].classList.contains("hidden")) {
                    continue;
                } else {
                    contentElements[k].classList.add("hidden");
                }
            }
        orderDetails.classList.remove("hidden");
        Array.from(boundaryMenu).forEach(function(item){
            item.classList.remove("hidden");
        })
    })
})