$(document).ready(function () {
    if (window.matchMedia('(max-width: 991px)').matches) {
        // Mobilde input group'un gizli olması
        $(".input-group, .face-icon, .back-button, .swiper-button-prev").hide();
        $(".navbar-toggler").show();

        // Searchbox'a tıklanınca input group açılacak
        $(".search-box").click(function () {
            $(".input-group, .back-button, .face-text").show();
            $(".navbar-toggler, .face-icon").hide();
        });

        $(".back-button").click(function () {
            $(".input-group, .back-button").hide();
            $(".face-text").show();
            $(".navbar-toggler").show();
        });
    }

    // Menü açma kapama
    $(".down-arrow").click(function () {
        $(".left-hiddenMenu").toggle("slow");
        $(".down-arrow").hide();
        $(".up-arrow, .viewmore").show();
    });

    $(".up-arrow").click(function () {
        $(".left-hiddenMenu").toggle();
        $(".down-arrow").show();
        $(".up-arrow, .viewmore").hide();
    });

    $(".down-arrow-2").click(function () {
        $(".left-hiddenMenu-2").toggle("slow");
        $(".down-arrow-2").hide();
        $(".up-arrow-2, .viewmore-2").show();
    });

    $(".up-arrow-2").click(function () {
        $(".left-hiddenMenu-2").toggle();
        $(".down-arrow-2").show();
        $(".up-arrow-2, .viewmore-2").hide();
    });

    // threedots-dropdown başlatma
    $('#threedots-dropdown').hide();

    $('#threedots-img').click(function () {
        $('#threedots-dropdown').toggle();

        var offcanvasElement = $('#offcanvasScrolling');
        if (offcanvasElement.hasClass('show')) {
            offcanvasElement.offcanvas('hide');
        }

        $('#big-menu, #messenger-dropdown, #notification').hide();
    });

    $('#threedots-search').click(function () {
        $('#threedots-dropdown').hide();

        var offcanvasElement = $('#offcanvasScrolling');
        if (offcanvasElement.hasClass('show')) {
            offcanvasElement.offcanvas('hide');
        } else {
            offcanvasElement.offcanvas('show');
        }

        $('#big-menu, #messenger-dropdown, #notification').hide();
    });

    $('#threedots-dropdown').on('click', function () {
        $(this).hide();
    });




    // Menü butonları
    //big menu
    $("#big-menu").hide();
    $("#big-menubtn").click(function () {
        $("#big-menu").toggle();
        $(".face-icon").show();
        $("#messenger-dropdown, #see-profile-dropdown, #search-dropdown, #notification, .back-button, #threedots-dropdown").hide();
    });

    //notification
    $("#notification").hide();
    $("#notification-btn").click(function () {
        $("#notification").toggle();
        $(".face-icon").show();
        $("#big-menu, #messenger-dropdown, #see-profile-dropdown, #search-dropdown, .back-button, #threedots-dropdown").hide();
    });
    //messenger btn

    $("#messenger-dropdown").hide();
    $("#messenger-btn").click(function () {
        $("#messenger-dropdown").toggle();
        $(".face-icon").show();
        $("#big-menu, #notification, #see-profile-dropdown, #search-dropdown, .back-button, #threedots-dropdown").hide();
    });

    // Profil dropdown
    $("#see-profile-dropdown").hide();
    $("#see-profile").click(function () {
        $("#see-profile-dropdown").toggle();
        $(".face-icon").show();
        $("#big-menu, #messenger-dropdown, #notification, #search-dropdown, .back-button").hide();
    });
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    $("#big-menu2").hide();
    $("#big-menubtn2").click(function () {
        $("#big-menu2").toggle();
        $(".face-icon").show();
        $("#messenger-dropdown, #see-profile-dropdown2, #search-dropdown, #notification2, .back-button, #threedots-dropdown").hide();
    });


    $("#notification2").hide();
    $("#notification-btn2").click(function () {
        $("#notification2").toggle();
        $(".face-icon").show();
        $("#big-menu2, #messenger-dropdown, #see-profile-dropdown2, #search-dropdown, .back-button, #threedots-dropdown").hide();
    });


    $("#see-profile-dropdown2").hide();
    $("#see-profile2").click(function () {
        $("#see-profile-dropdown2").toggle();
        $(".face-icon").show();
        $("#big-menu2, #messenger-dropdown, #notification2, #search-dropdown, .back-button").hide();
    });
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////



    $("#big-menu3").hide();
    $("#big-menubtn3").click(function () {
        $("#big-menu3").toggle();
        $(".face-icon").show();
        $(".see-profile-3, #notification3, ").hide();
    });

    $("#notification3").hide();
    $("#notification-btn3").click(function () {
        $("#notification3").toggle();
        $(".face-icon").show();
        $("#big-menu3, #see-profile-dropdown3, .see-profile-3, ").hide();
    });



    
    

    
  



  




 












    // Modal actions
    $("#content3-btn").click(function () {
        $("#emotes-modal").show();
        $(".modal-backdrop").show();
    });

    $("#share-button").click(function () {
        $(".modal, .modal-backdrop").hide();
    });
    // Search box actions
    $(".search-box").click(function () {
        $("#search-dropdown").show();
        $("#big-menu, #messenger-dropdown, #notification, #see-profile-dropdown").hide();
        $(".face-icon").hide();
        $(".back-button, .input-group").show();
        $(".face-text, .navbar-toggler").hide();
    });

    $(".back-button").click(function () {
        $("#search-dropdown, #search-dropdown-2").hide();
        $(".back-button").hide();
        $(".face-icon").show();
    });

    // Settings dropdown
    $("#settings-dropdown-button").click(function () {
        $("#settings-dropdown").toggle();
    });

    // Help and support dropdown
    $("#yardimdestek-button").click(function () {
        $("#search-dropdown").toggle();
    });

    // Right menu hover
    $(".right-menu").hover(function () {
        $(this).show();
    });

    // Scrollable div actions
    $(".scrollable-div").hover(
        function () {
            $(this).css('overflowY', 'scroll');
        },
        function () {
            $(this).css('overflowY', 'hidden');
        }
    );

    // Like button action
    $('#like-button').click(function () {
        $(this).find('span, i').toggleClass('text-primary');
    });
    $('#like-button2').click(function () {
        $(this).find('span, i').toggleClass('text-primary');
    });
    $('#like-button3').click(function () {
        $(this).find('span, i').toggleClass('text-primary');
    });
    $('#like-button4').click(function () {
        $(this).find('span, i').toggleClass('text-primary');
    });
    // Fotoğraf/video önizleme
    $('#fileInput').on('change', function (event) {
        const $mediaPreview = $('#mediaPreview');
        $mediaPreview.empty();
        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileReader = new FileReader();

            fileReader.onload = function (e) {
                const mediaElement = $(file.type.startsWith('image/') ? '<img>' : '<video>');
                mediaElement.attr('src', e.target.result);
                mediaElement.addClass('img-thumbnail me-2 mt-2');
                mediaElement.css({ width: '100px', height: '100px' });

                if (file.type.startsWith('video/')) {
                    mediaElement.attr('controls', true);
                }

                $mediaPreview.append(mediaElement);
            };

            fileReader.readAsDataURL(file);
        }
    });

    // Canlı video geçiş
    $(document).ready(function () {
        $('#like-button').on('click', function () {
            $('.raise1').toggle(); // click-raise görünürlüğünü değiştirir
            $('.click-raise1').toggle(); // click-raise2 görünürlüğünü değiştirir
        });
        $('#like-button2').on('click', function () {
            $('.raise2').toggle(); // click-raise görünürlüğünü değiştirir
            $('.click-raise2').toggle(); // click-raise2 görünürlüğünü değiştirir
        });
        $('#like-button3').on('click', function () {
            $('.raise3').toggle(); // click-raise görünürlüğünü değiştirir
            $('.click-raise3').toggle(); // click-raise2 görünürlüğünü değiştirir
        });
    });


    $('#user-add-btn').click(function () {
        $('#photovideo-modal').modal('hide');
        setTimeout(function () {
            $('#users-add').modal('show');
        }, 300);
    });

    $('#gönderi-geri-btn').click(function () {
        $('#users-add').modal('hide');
        $('#photovideo-modal').modal('show');
    });

    $('#canli-2').modal('hide');

    // Modal geçişler
    $('#konumBtn').click(function () {
        $('#photovideo-modal').modal('hide');
        setTimeout(function () {
            $('#konumara').modal('show');
        }, 300);
    });

    $('#gönderi-threedots-btn').click(function () {
        $('#photovideo-modal').modal('hide');
        setTimeout(function () {
            $('#gönderi-threedots-modal').modal('show');
        }, 300);
    });


    $('#emote-btn').click(function () {
        $('#photovideo-modal').modal('hide');
        setTimeout(function () {
            $('#emotes-modal').modal('show');
        }, 300);
    });


    $('#emote-geribtn').click(function () {
        $('#emotes-modal').modal('hide');
        $('#photovideo-modal').modal('show');
    });

    $('#gönderi-geri-btn').click(function () {
        $('#konumara, #gönderi-threedots-modal').modal('hide');
        $('#photovideo-modal').modal('show');
    });

    $('#photovideo-btn').click(function () {
        $('#konumara').modal('hide');
        $('#photovideo-modal').show();
        $('.modal-backdrop').show();
    });

    // $('.btn-close').click(function () {
    //     $('.modal, .modal-backdrop').hide(); //////////////////////////////////////////////////////
    // });

    // Modal opacity adjustment
    $(document).on('shown.bs.modal', function () {
        $('.modal-backdrop').css('opacity', '0.5');
    });

    $("#close-content").click(function () {
        $("#content-wrapper").hide();
    });

    $("#close-content2").click(function () {
        $("#content-wrapper2").hide();
    });

    $("#close-content3").click(function () {
        $("#content-wrapper3").hide();
    });
    $("#content-comment").hide();
    $("#yorumyapbtn").click(function () {
        $("#content-comment").toggle();
    });
    $("#yorumyapbtn4").click(function () {
        $("#content-comment4").toggle();
    });
    $(document).ready(function () {
        $('#content-threedotsBtn').on('click', function (event) {
            event.stopPropagation(); // Butona tıklanmasını izole etmek için
            let dropdown = $('#content1-threedots-dropdown');

            if (dropdown.is(':visible')) {
                dropdown.hide(); // Eğer dropdown açıksa kapat
            } else {
                dropdown.show(); // Eğer dropdown kapalıysa aç
            }
        });

        // Sayfadaki herhangi bir yere tıklayınca dropdown'ı kapat
        $(document).on('click', function (event) {
            if (!$(event.target).closest('#content-threedotsBtn, #content1-threedots-dropdown').length) {
                $('#content1-threedots-dropdown').hide(); // Dropdown menüsünü gizle
            }
        });
    });

    // Button toggle
    const $button1 = $('#btn1');
    const $button2 = $('#btn2');

    $button1.click(function () {
        $button1.addClass('active-button').removeClass('inactive-button');
        $button2.addClass('inactive-button').removeClass('active-button');
    });

    $button2.click(function () {
        $button2.addClass('active-button').removeClass('inactive-button');
        $button1.addClass('inactive-button').removeClass('active-button');
    });



    // btn close ismine sahip olanlara tıklanınca modal-backdrop ile birlikte kapatma 
    document.querySelectorAll('.btn-close').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.modal-backdrop').forEach(function (backdrop) {
                backdrop.style.display = 'none';
            });
        });
    });
    // hikaye oluştur içinde ayarlara tıklayınca çıkan modal'da  kaydet çıkış butonu
    document.querySelectorAll('.story-closeBtn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.modal-backdrop').forEach(function (backdrop) {
                backdrop.style.display = 'none';
            });
            document.getElementById('smallModal2').style.display = 'none';
        });
    });
















});
