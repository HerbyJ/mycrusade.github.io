// ======================================
// My Crusade
// Embedded Video Loader
// ======================================


async function loadVideos() {

    const reels = await loadData("data/reels.json");

    const tiktoks = await loadData("data/tiktok.json");

    const youtube = await loadData("data/youtube.json");


    createVideoEmbeds(
        reels,
        "reelsContainer"
    );


    createVideoEmbeds(
        tiktoks,
        "tiktokContainer"
    );


    createVideoEmbeds(
        youtube,
        "youtubeContainer"
    );


}



// Create embeds

function createVideoEmbeds(videos, containerID) {


    const container =
        document.getElementById(containerID);


    if (!container || videos.length === 0) {

        return;

    }


    container.innerHTML = "";


    videos.forEach(video => {


        const wrapper =
            document.createElement("div");


        wrapper.className =
            "embedded-video";


        wrapper.innerHTML = `

            <h4>
                ${video.title}
            </h4>

            ${createEmbed(video)}

        `;


        container.appendChild(wrapper);


    });

    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }

}



// Determine embed type

function createEmbed(video) {


    switch(video.platform) {


        case "youtube":

            return `

            
            <iframe 
                width="560" 
                height="315" 
                src="${video.embed}" 
                title="${video.title}"
                frameborder="0" 
                allow="accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture; 
                web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>

            `;

        case "instagram":

            return `

            <blockquote

                class="instagram-media"

                data-instgrm-permalink="${video.url}"

                data-instgrm-version="14">

            </blockquote>

            `;
        
        case "facebook":

            return `

                <iframe

                    src="https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}&show_text=false"

                    width="500"

                    height="500"

                    style="border:none;overflow:hidden"

                    scrolling="no"

                    frameborder="0"

                    allowfullscreen="true">

                </iframe>

            `;



        case "tiktok":

            return `

            <blockquote

                class="tiktok-embed"

                cite="${video.url}"

                data-video-id="${video.id}">

            </blockquote>

            `;



        default:

            return `

            <p>
                Video format not supported.
            </p>

            `;

    }

}

// ======================================
// Carousel Navigation
// ======================================

function scrollVideos(containerID, amount) {

    const container =
        document.getElementById(containerID);


    if (!container) {

        return;

    }


    container.scrollBy({

        left: amount,

        behavior: "smooth"

    });

}


// Initialize

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadVideos();

    }
);