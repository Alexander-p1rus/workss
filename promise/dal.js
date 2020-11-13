function getData(page,callback){
    $.ajax(`https://repetitora.net/api/JS/Images?page=${page}&count=2`,{
        success:callback
    });
}