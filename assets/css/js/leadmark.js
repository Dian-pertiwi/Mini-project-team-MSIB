/*!
=========================================================
* LeadMark Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Logo Scroll
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var navbar = document.getElementById('navbar');
        var logoMain = document.getElementById('logoMain');
        var logoScroll = document.getElementById('logoScroll');

        // Jika posisi scroll > 10px, tampilkan logo kedua dan ubah warna navbar menjadi putih
        if (window.scrollY > 10) {
            navbar.classList.add('bg-light'); // Menambah kelas untuk mengubah warna navbar menjadi putih
            navbar.classList.remove('bg-transparent'); // Menghapus kelas untuk transparansi navbar
            logoMain.style.display = 'none';
            logoScroll.style.display = 'inline-block';
        } else {
            navbar.classList.remove('bg-light'); // Menghapus kelas untuk warna navbar putih
            navbar.classList.add('bg-transparent'); // Menambah kelas untuk transparansi navbar
            logoMain.style.display = 'inline-block';
            logoScroll.style.display = 'none';
        }
    });
});

//moreInfoLink

document.addEventListener("DOMContentLoaded", function() {
    var moreInfoLinks = document.querySelectorAll('.moreInfoLink');

    moreInfoLinks.forEach(function(moreInfoLink) {
        // Tambahkan event listener untuk mendengarkan klik pada setiap tautan
        moreInfoLink.addEventListener("click", function(event) {
            // Mencegah aksi default dari link (misalnya, mengarahkan ke halaman baru)
            event.preventDefault();
            
            // Tampilkan alert
            var confirmation = confirm("Ingin Melanjutkan Membaca?");
            
            // Jika pengguna mengklik OK pada alert, arahkan ke URL
            if (confirmation) {
                // Mengambil URL dari atribut href
                var url = moreInfoLink.getAttribute('href');
                
                // Mengarahkan pengguna ke URL
                window.location.href = url;
            } else {
                // Jika pengguna mengklik Cancel, tidak melakukan apa-apa
                // Anda dapat menambahkan tindakan tambahan di sini jika diperlukan
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var navbarCollapse = document.querySelector('.navbar-collapse');

    // Tambahkan event listener untuk saat pengguna mengklik di area dokumen
    document.addEventListener('click', function(event) {
        // Periksa apakah navbar sedang terbuka
        var isNavbarOpen = navbarCollapse.classList.contains('show');

        // Periksa apakah pengguna mengklik di luar navbar saat navbar terbuka
        if (isNavbarOpen && !event.target.closest('.navbar')) {
            // Tutup navbar
            navbarCollapse.classList.remove('show');
        }
    });
});



//Efek Zoom
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.img-zoom');

    // Tambahkan event listener untuk setiap gambar
    images.forEach(function(image) {
      image.addEventListener('mouseover', function() {
        // Menambahkan efek zoom saat kursor mengarah ke atas gambar
        image.style.transform = 'scale(1.1)';
      });

      image.addEventListener('mouseout', function() {
        // Menghapus efek zoom saat kursor meninggalkan gambar
        image.style.transform = 'scale(1)';
      });
    });
  });


// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});
window.addEventListener('scroll', function() {
    var element = document.getElementById('scrollText');
    if (window.scrollY > 0) {
      element.classList.add('scrolled');
    } else {
      element.classList.remove('scrolled');
    }
  });
  
// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})