const projectsContainer = document.querySelector('.projectsContainer');

function createElement(elementName, propertyName, value) {
    const element = document.createElement(elementName);
    element[propertyName] = value;
    return element;
}

for (var i = 0; i < projects.length; i++) {
    const cardContainer = createElement('div', 'className', 'cardContainer');
    const card = createElement('div', 'className', 'card');

    const thumbnail = createElement('img', 'className', 'thumbnail');
    thumbnail.src = 'img/' + projects[i].img_url;
    card.appendChild(thumbnail);
    
    const cardContent = createElement('div', 'className', 'cardContent');
    card.appendChild(cardContent);

    const title = createElement('div', 'className', 'title');
    title.textContent = projects[i].name;
    cardContent.appendChild(title);

    const description = createElement('div', 'className', 'description');
    description.textContent = projects[i].description;
    cardContent.appendChild(description);

    const btnGroup = createElement('div', 'className', 'btnGroup clearfix');
    const btnCont = createElement('div', 'className', 'btnCont');
    const url = createElement('a', 'className', 'btn btn-view');
    url.textContent = 'view';
    url.target = '_blank';
    url.href = 'https://fwzmhmd.github.io/' + projects[i].source;
    btnCont.appendChild(url);
    btnGroup.appendChild(btnCont);
    card.appendChild(btnGroup);

    const btnCont2 = createElement('div', 'className', 'btnCont2');
    const source = createElement('a', 'className', 'btn btn-source');
    source.textContent = 'source code';
    source.target = '_blank';
    source.href = 'https://github.com/fwzmhmd/' + projects[i].source;
    btnCont2.appendChild(source);
    btnGroup.appendChild(btnCont2);
    card.appendChild(btnGroup);
    cardContainer.appendChild(card);
    projectsContainer.appendChild(cardContainer);
}

$(document).ready(function(){
    $('a').on('click', function(e){
        e.preventDefault();
        
        var offset = 80;
        var target = this.hash;
        if ($(this).data('offset') != undefined) offset = $(this).data('offset');
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - offset
        }, 800);
    });
});

function recaptchaCallback() {
    $('.btn-send').removeAttr('disabled');
};

function resetSend() {
    $('.btn-send').prop('disabled', true);
};

$(".form").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
        type: "POST",
        dataType: "json",
        url: href,
        data: $(this).serialize(),
        success: function (response) {
            const successMsg = 'Thank You 😃. Your Message has been Sent.';
            const errorMsg = 'An Error has Occured 😟. ' + response.message;

            if (response.status == "success") {
                $('.message').text(successMsg).fadeIn(800).delay(5000).fadeOut(800);
                $('.form')[0].reset();
            } else {
                $('.message').text(errorMsg).removeClass('message').addClass('messageError').fadeIn(800).delay(5000).fadeOut(800);
            }
            grecaptcha.reset();
            resetSend();
        }
    });
});