document.addEventListener('DOMContentLoaded', () => {
    const avatarImages = ['avatar.svg', 'kumari.png', 'sasini.jpg'];
    const avatarContainer = document.querySelector('.avatar-container');
    const avatarImg = avatarContainer.querySelector('.avatar');
    const callerName = avatarContainer.querySelector('.caller-name');

    // Fetch and parse names from names.txt
    fetch('assets/names.txt')
        .then(response => response.text())
        .then(data => {
            const names = data.trim().split('\n');
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomAvatar = avatarImages[Math.floor(Math.random() * avatarImages.length)];

            // Update the DOM
            callerName.textContent = randomName;
            avatarImg.src = `assets/${randomAvatar}`;
            avatarImg.alt = `${randomName}'s Avatar`;
        })
        .catch(error => console.error('Error loading names:', error));
});