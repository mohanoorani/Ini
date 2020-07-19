
        //این برای احراز هویت با گوگل نوشته شده تا وقتی که از گوگل استفاده میشه نباید پاک بشه
        var isAuthenticated = 'False' === 'True' ? true : false;

        var isMobile = false;

        function decrementCountNotification() {
            var val = parseInt(Persian2EnglishNumbers($('.notif > .img-circle').html()));
            if (val > 1) {
                $('.notif > .img-circle').html(ReplaceNumbersToPersian(val - 1));
            } else {
                $('.notif > .img-circle').remove();
                $('.box-notif').html('<li style="color: white;margin-top: 15px; height: 40px;text-align: center"><span>شما هیچ پیامی ندارید</span></li>');
            }
        }

        $(document).ready(function () {

            let deferredPrompt;
            const addBtn = document.querySelector('.add-button');
            addBtn.style.display = 'none';


            (function (a) {
                (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
            })(navigator.userAgent || navigator.vendor || window.opera);
            isMobile = jQuery.browser;
            var deviceAgent = navigator.userAgent.toLowerCase();
            var isIos = deviceAgent.match(/(iphone|ipod|ipad)/);
            //
            if (isMobile.mobile == true && isIos == null && /Chrome/i.test(deviceAgent)) {
                //
                if (typeof (Storage) !== "undefined") {
                    var fullKey = 'flyer_pwa';
                    if (localStorage.getItem(fullKey) == null && 'False' == 'True') {
                        addBtn.style.display = 'initial';
                        flyerpwa();
                        localStorage.setItem(fullKey, true);
                        $('#flyerpwa').modal('show');
                    }
                    else {
                        //do nothing

                    }

                }
            }


            function flyerpwa() {
                window.addEventListener('beforeinstallprompt', (e) => {
                    // Prevent Chrome 67 and earlier from automatically showing the prompt
                    e.preventDefault();
                    // Stash the event so it can be triggered later.
                    deferredPrompt = e;
                    // Update UI to notify the user they can add to home screen
                    addBtn.style.display = 'initial';

                    addBtn.addEventListener('click', (e) => {
                        // hide our user interface that shows our A2HS button
                        addBtn.style.display = 'none';
                        // Show the prompt
                        deferredPrompt.prompt();

                        // Wait for the user to respond to the prompt
                        deferredPrompt.userChoice.then((choiceResult) => {
                            if (choiceResult.outcome === 'accepted') {
                                console.log('User accepted the A2HS prompt');
                            } else {
                                console.log('User dismissed the A2HS prompt');
                            }
                            deferredPrompt = null;
                        });
                    });
                });
            }
            //$('ul>li>a.toggleNotifIcon').click(function () {
            //       $("span.hide-section").text(CutString($('span.hide-section').text(), 50));
            //});

            var charCount = $('a.UlLoginName').text().length - 96;
            if (charCount > 30) {
                $('.UlLoginName').addClass("UlLoginNameFontSize");
            }

            $('.async').each(function (k, v) {
                $(v).unbind("load");
                $(v).attr("src", $(v).attr("data-img-url"));
            });

            //$('#btn-create-newJobpost').click(function () {
            //    $("#notCompletedFa").hide();
            //    $("#notCompletedEn").hide();
            //    $("#CreateProfile").hide();
            //    $('#jobpost-creation-language-selection').modal('show');
            //});
            $('.btn-create-newJobpost').click(function () {
                $("#notCompletedFa").hide();
                $("#notCompletedEn").hide();
                $("#CreateProfile").hide();
                $('#jobpost-creation-language-selection').modal('show');
            });

            //$('.jv-pre-loader').hide();
            $(document).ajaxSend(function () {
                if ($('.jv-pre-loader').attr('data-preventshow') == "no") {
                    $(".container").addClass('overlay');
                    $('.jv-pre-loader').show();
                }
            });

            $(document).ajaxError(function (a, b, c) {
                if (b.status == 500) {

                    $('#errormessageheholder').text('خطای سیستمی');
                    $('#errocodeholder').text('متاسفانه درخواست شما با خطا مواجه گردید، لطفا دوباره تلاش نمایید!!');

                    $('#errorModal').modal('show');

                    return;
                }
                if (b.status == 403) {

                    $('#errormessageheholder').text('عدم دسترسی');
                    $('#errocodeholder').text('شما مجوز دسترسی به این بخش از سایت را ندارید!!');

                    $('#errorModal').modal('show');
                    return;
                }
                try {
                    if (b.statusText == 'abort') {
                        return;
                    }
                    var erroObj = JSON.parse(b.responseText);

                    $('#errormessageheholder').empty();
                    $('#errormessageheholder').text('');
                    $('#errocodeholder').text('');

                    if (erroObj.errorid && !erroObj.isloginerror) {
                        $('#errormessageheholder').text(erroObj.message);
                        $('#errocodeholder').text(' کد خطا : ' + erroObj.errorid);

                    }
                    else {
                        $('#errormessageheholder').empty().html(erroObj.message);
                    }

                    $('#errorModal').modal('show');
                } catch (e) {

                }


            });

            $(document).ajaxStop(function () {
                if ($('.jv-pre-loader').attr('data-prevent') != "yes") {
                    $(".container").removeClass('overlay');
                    $('.jv-pre-loader').hide();
                }
            });

            $(".li_tree").click(function (e) {
                e.preventDefault();

                $(".li_tree").find(".fadeInLeft").removeClass("fadeInLeft").css("animation-name", "");
                $(".li_tree").find(".fadeInRight").removeClass("fadeInRight").css("animation-name", "");

                if ($(this).find(".active").hasClass("r")) {
                    $(".li_tree").find(".d").removeClass("active").hide();
                    $(".li_tree").find(".r").addClass("active").show();
                    $(".li_tree").find("ul").hide();
                    $(this).find(".r").removeClass("active").hide();
                    $(this).find(".d").addClass("active").show();
                    $(this).find("ul").show();
                } else {
                    $(this).find(".active").removeClass("active").hide();
                    $(this).find(".r").addClass("active").show();
                    $(this).find("ul").hide();
                }
            });


            var wow = new WOW(
                {
                    boxClass: 'wow',      // animated element css class (default is wow)
                    animateClass: 'animated', // animation css class (default is animated)
                    offset: "0",          // distance to the element when triggering the animation (default is 0)
                    mobile: true,       // trigger animations on mobile devices (default is true)
                    live: true,       // act on asynchronously loaded content (default is true)
                    callback: function (box) {
                        // the callback is fired every time an animation is started
                        // the argument that is passed in is the DOM node being animated
                    },
                    scrollContainer: null // optional scroll container selector, otherwise use window
                });

            wow.init();

            $('#english-language-submit').click(function () {
                $("#notCompletedFa").css('display', 'none');
                $("#notCompletedEn").css('display', 'none');
                $("#CreateProfile").hide();
                $.ajax({
                    type: "POST",
                    url: '/EmployerProfile/IsCreatedProfile?language=English',
                    data: "{}",
                    async: true,
                    dataType: "text",
                    success: function (response) {
                        if (response === "false") {
                            $("#notCompletedEn").css('display', 'block');
                            $("#CreateProfile").attr('href', '/Employer/Home/CreateOrEdit?language=English');
                            $("#CreateProfile").show();
                        }
                        else if (response === "true") {
                            location.href = '/EmployerProfile/RedirectToJobPostCreation?language=' + 1;
                        }
                    },
                    failure: function (msg) {
                        alert(msg);
                    }
                });
            });

            $('#persian-language-submit').click(function () {
                $("#notCompletedFa").css('display', 'none');
                $("#notCompletedEn").css('display', 'none');
                $("#CreateProfile").hide();
                $.ajax({
                    type: "POST",
                    url: '/EmployerProfile/IsCreatedProfile?language=Persian',
                    data: "{}",
                    async: true,
                    dataType: "text",
                    success: function (response) {
                        if (response === "false") {
                            $("#notCompletedFa").css('display', 'block');
                            $("#CreateProfile").attr('href', '/Employer/Home/CreateOrEdit?language=Persian');
                            $("#CreateProfile").show();
                        }
                        else if (response === "true") {
                            location.href = '/EmployerProfile/RedirectToJobPostCreation?language=' + 0;
                        }
                    },
                    failure: function (msg) {
                        alert(msg);
                    }
                });
            });

            $("button.navbar-toggle").click(function () {
                $(".togglable-collapse").toggleClass("hidden");
            });

        });

        $('.dropdown').on('show.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        });

        $('.dropdown').on('hide.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        });

        $('.showSearchPanelDemo').click(function () {
            $('#buycvsearchmodal').modal();
        });
