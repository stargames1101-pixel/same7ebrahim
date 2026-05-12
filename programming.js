function redirectToLink() {
    // استبدل الرابط أدناه بالرابط الذي تريده
    const targetUrl = "https://docs.google.com/forms/d/e/1FAIpQLSczzFVBpSCZLZNJc40NUAw7u1rKmXLoymNK83RbLON4ksxNSA/viewform?pli=1";
    
    // إضافة تأثير بسيط عند النقر قبل التحويل
    console.log("جاري التحويل إلى: " + targetUrl);
    
    window.location.href = targetUrl;
}
function redirectToLink5(){
    const targetUrl = "https://www.facebook.com/share/1BMAtF8eyR/";
    console.log("جاري التحويل إلى: " + targetUrl);

    window.location.href = targetUrl;
}
function redirectToLink2(){
    const targetUrl = "https://t.me/+m57wdLcycjMzOTNk";
    console.log("جاري التحويل إلى: " + targetUrl);

    window.location.href = targetUrl;
}
function redirectToLink3(){
    const targetUrl = "https://www.youtube.com/@samehmahmoud7033";
    console.log("جاري التحويل إلى: " + targetUrl);
    
    window.location.href = targetUrl;
}
function redirectToLink4(){
    const targetUrl = "https://chat.whatsapp.com/BZsNx3JA69EFopsoZDyYdt";
    console.log("جاري التحويل إلى: " + targetUrl);
    
    window.location.href = targetUrl;
}

// إضافة تفاعل عند تحميل الصفحة (اختياري)
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    card.style.opacity = '0';
    
    setTimeout(() => {
        card.style.transition = 'opacity 1s ease-in';
        card.style.opacity = '1';
    }, 100);
});
