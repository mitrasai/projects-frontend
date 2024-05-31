function setGithubButtonLink(){
    const githubButton = document.getElementById("git-btn");

    const gitProfileUrl = "https://github.com/mitrasai";

    githubButton.addEventListener("click", () => {
        window.location.href = gitProfileUrl;
    });
}

function setLinkedInButtonLink(){
    const linkedinButton = document.getElementById("linkedin-btn");

    const linkedInProfileUrl = "https://www.linkedin.com/in/sai-mithra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

    linkedinButton.addEventListener("click", () => {
        window.location.href - linkedInProfileUrl;
    });
}

function setProtfolioButtonLink(){
    const portfolioButton = document.getElementById("protfolio-btn");

    const protfolioUrl = "https://mitrasai.github.io/cv/";

    portfolioButton.addEventListener("click", () => {
        window.location.href = protfolioUrl;
    });
}

function setInstagramButtonLink(){
    const instagramButton = document.getElementById("insta-btn");

    const instagramProfileUrl = 'https://www.instagram.com/mithraa82/?igshid=MzNlNGNkZWQ4Mg%3D%3D';

    instagramButton.addEventListener('click', () => {
        window.location.href = instagramProfileUrl;
    });
}