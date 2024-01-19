document.addEventListener("DOMContentLoaded", (event)=>{

    setTimeout(() =>{
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d417.9061859128655!2d-75.69592001060934!3d4.801610933768183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3887c813d7f44b%3A0x5263414a1ca271cf!2sBOSQUES%20DE%20LA%20SALLE!5e0!3m2!1ses!2sco!4v1705632677916!5m2!1ses!2sco"></iframe>
        `;
    }, 500)

});