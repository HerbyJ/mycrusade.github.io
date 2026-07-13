// ======================================
// My Crusade
// Encouraging Videos Loader
// ======================================


async function loadVideos() {

    const reels = await loadData("data/reels.json");

    const tiktoks = await loadData("data/tiktok.json");

    const youtube = await loadData("data/youtube.json");


    displayVideos(
        reels,
        "reelsContainer"
    );


    displayVideos(
        tiktoks,
        "tiktokContainer"
    );


    displayVideos(
        youtube,
        "youtubeContainer"
    );

}



// Create video cards

function displayVideos(videos, containerID) {


    const container =
        document.getElementById(containerID);


    if (!container || videos.length === 0) {

        return;

    }


    container.innerHTML = "";


    videos.forEach(video => {


        const card =
            document.createElement("div");


        card.className = "video-card";


        card.innerHTML = `

            <div class="video-thumbnail">

                <span>
                    ▶
                </span>

            </div>


            <h4>
                ${video.title}
            </h4>


            <p>
                ${video.creator}
            </p>


            <a href="${video.url}"
               target="_blank">

                Watch →

            </a>

        `;


        container.appendChild(card);


    });

}



// Initialize

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadVideos();

    }
);