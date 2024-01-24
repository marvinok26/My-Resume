document.addEventListener('DOMContentLoaded', function () {
    // Encode the current window's URL
    const link = encodeURI(window.location.href);

    // Encode a message to be included in the social media links
    const msg = encodeURIComponent('Press The Links to visit my Socials');

    // Encode the title of the current document
    const title = encodeURIComponent(document.querySelector('title').textContent);

    // Log the encoded link, message, and title to the console
    console.log([link, msg, title]);

    // Function to open social media links
    function openSocialMediaLink(link) {
        window.open(link, '_blank');
    }

    // Select the Facebook link and add a click event listener
    const fb = document.querySelector('.facebook');
    fb.addEventListener('click', function () {
        openSocialMediaLink('https://web.facebook.com/marvinok26/');
    });

    // Select the Twitter link and add a click event listener
    const twitter = document.querySelector('.twitter');
    twitter.addEventListener('click', function () {
        openSocialMediaLink('https://x.com/marvo_codes?t=zePQWGZdwVVIaWi7e_Tzkw&s=09');
    });

    // Select the LinkedIn link and add a click event listener
    const linkedin = document.querySelector('.linkedin');
    linkedin.addEventListener('click', function () {
        openSocialMediaLink('https://www.linkedin.com/in/marvin-okongo-96b924233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app');
    });

    // Select the Instagram link and add a click event listener
    const instagram = document.querySelector('.instagram');
    instagram.addEventListener('click', function () {
        openSocialMediaLink('https://instagram.com/26seint?utm_source=qr&igshid=YzU1NGVlODEzOA==');
    });

    const github = document.querySelector('.github');
    github.addEventListener('click', function () {
        openSocialMediaLink('https://github.com/marvinok26');
    });

    const youtube = document.querySelector('.youtube');
    youtube.addEventListener('click', function () {
        openSocialMediaLink('https://www.youtube.com/@marvo_codes');
    });
});