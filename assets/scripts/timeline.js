$(function(){
    var inputs = $('.input');
    var paras = $('.description-flex-container').find('p');
    $(inputs).click(function(){
        var t = $(this),
            ind = t.index(),
            matchedPara = $(paras).eq(ind);
            console.log(ind);
            console.log(matchedPara);
            console.log(t);


        $(t).add(matchedPara).addClass('active');
        $(inputs).not(t).add($(paras).not(matchedPara)).removeClass('active');
    });
});