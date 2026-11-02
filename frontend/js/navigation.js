document.addEventListener("DOMContentLoaded", function () {

    // Current page name
    let currentPage = window.location.pathname
        .split("/")
        .pop();

    if (currentPage === "") {
        currentPage = "admin_dashboard.html";
    }


    // ==============================
    // NAVIGATION LINKS
    // ==============================

    const navigationLinks = [

        {
            name: "Overview",
            icon: "bi-grid",
            page: "overview.html"
        },

        {
            name: "Dashboard",
            icon: "bi-house-door",
            page: "admin_dashboard.html"
        },

        {
            name: "Add Book",
            icon: "bi-plus-circle",
            page: "add_book.html"
        },

        {
            name: "Available Books",
            icon: "bi-bookmark-check",
            page: "available_books.html"
        },

        {
            name: "Issued Books",
            icon: "bi-bookmark-plus",
            page: "issue_book.html"
        },

        {
            name: "Return Books",
            icon: "bi-arrow-return-left",
            page: "return_book.html"
        },

        {
            name: "Total Students",
            icon: "bi-people",
            page: "students.html"
        },
        
        {
            name: "Logout",
            icon: "bi-box-arrow-right",
            page: "login.html"
        }

    ];


    // ==============================
    // CREATE NAVIGATION
    // ==============================

    const navigation = document.createElement("nav");

    navigation.className = "dark-blue-navigation";


    // Create navigation links
    navigationLinks.forEach(function (item) {

        const link = document.createElement("a");

        link.href = item.page;

        link.className = "dark-nav-link";


        // Active page
        if (currentPage === item.page) {

            link.classList.add("active");

        }


        link.innerHTML = `
            <i class="bi ${item.icon}"></i>
            <span>${item.name}</span>
        `;


        navigation.appendChild(link);

    });


    // ==============================
    // INSERT NAVIGATION
    // ==============================

    const topNavbar =
        document.querySelector("nav.navbar");


    if (topNavbar) {

        topNavbar.insertAdjacentElement(
            "afterend",
            navigation
        );

    }

});