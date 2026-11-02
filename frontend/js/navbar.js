document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.getElementById("top-navbar");

    if (!navbar) {
        return;
    }

    navbar.innerHTML = `

        <nav class="admin-navbar">

            <!-- ================= LOGO ================= -->

            <a href="admin_dashboard.html"
               class="admin-logo">

                <i class="bi bi-book-half"></i>

                <span>Smart Library</span>

            </a>


            <!-- ================= TOP MENU ================= -->

            <div class="admin-navbar-right">


                <a href="admin_dashboard.html"
                   class="top-nav-link">

                    Dashboard

                </a>


                <a href="add_book.html"
                   class="top-nav-link">

                    Add Book

                </a>


                <a href="available_books.html"
                   class="top-nav-link">

                    Available Books

                </a>


                <a href="issue_book.html"
                   class="top-nav-link">

                    Issued Books

                </a>


                <a href="return_book.html"
                   class="top-nav-link">

                    Return Books

                </a>


                <a href="students.html"
                   class="top-nav-link">

                    Students

                </a>


                <a href="scanner.html"
                   class="top-nav-link">

                    Scanner

                </a>


                <!-- ================= ADMIN ================= -->

                <a href="admin_profile.html"
                   class="admin-profile-link">

                    <i class="bi bi-person-circle"></i>

                    <span>Admin</span>

                </a>

            </div>

        </nav>

    `;

});