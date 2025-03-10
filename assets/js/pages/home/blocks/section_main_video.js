// Открытие промо-видео
// Open promo-video

export function mainVideo () { 
  document.querySelector(".play-button").addEventListener("click", function () {
    const singleVideo = document.querySelector(".video_solo");
    const singleOverlay = document.querySelector(".video-overlay");
  
    singleOverlay.classList.add("hidden");  
  
    singleVideo.style.visibility = "visible";
    singleVideo.play();
  });
}