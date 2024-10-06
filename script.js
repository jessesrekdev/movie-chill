import cards from '/movies.js'; // Adjust the path as necessary

const cardContainer = document.getElementById("main");
const sidebarSubscriptions = document.getElementById("subscription");

const generateCard = (thumbnail, duration, profile, title, channelName, released, more) => {

    const card = document.createElement("div");
    card.classList.add('card');

    card.innerHTML = `<div class="thumbnail"><img src="${thumbnail}"alt="Thumbnail"><div class="duration">${duration}</div></div><div class="content"><div class="profile-pic"><img src="${profile}"alt="profile"></div><span class="title">${title}</span><span class="channel-name">${channelName}<span class="verified"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg></span></span><span class="views">${released} Movie <span class="time">${more}</span></span></div>`

    return card;
}

cards.forEach((card) => {
    const finalCard = generateCard(card.thumbnail, card.duration, card.profile, card.title, card.channelName, card.released, card.more);
    cardContainer.appendChild(finalCard);
});