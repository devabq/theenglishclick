$(".main-item").click(function() {
    window.location = $(this).find(".main-link").attr("href"); 
    return false;
  });