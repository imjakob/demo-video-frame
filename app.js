const videoFrameSettled = (
  setFrameRate = 24,
  videoTag = !{},
  cb = () => {}
) => {
  setInterval(
    () => {
      if (!videoTag.paused && !videoTag.ended) {
        cb(
          videoTag && Math.floor(videoTag.currentTime.toFixed(5) * setFrameRate)
        );
      }
    },
    videoTag ? videoTag : 1e3 / setFrameRate / 2
  );
};

const videoTag = document.getElementById("video");
const playVideo = document.getElementById("mainPlay");
const toPlay = document.getElementById("toplay");
const currentFrame = document.getElementById("currentFrame");
const toggleModal = document.getElementById("toggleModal");

toPlay.style.display = "none";

playVideo.addEventListener("click", function (_e) {
  if (videoTag.paused) {
    const frameLive = (frame) => {
      currentFrame.innerHTML = frame;

      switch (frame) {
        case 200:
          videoTag.pause();
          toggleModal.click();

          playVideo.style.display = "none";

          toPlay.style.display = "unset";
          toPlay.innerHTML = "Next";
          toPlay.addEventListener("click", (_e) => {
            videoTag.play();
            toPlay.innerHTML = "Next Station...";
          });

          break;

        case 400:
          videoTag.pause();
          toggleModal.click();

          playVideo.style.display = "none";

          toPlay.style.display = "unset";
          toPlay.innerHTML = "Next";
          toPlay.addEventListener("click", (_e) => {
            videoTag.play();
            toPlay.innerHTML = "Next Station...";
          });

          break;

        case 600:
          videoTag.pause();
          toggleModal.click();

          playVideo.style.display = "none";

          toPlay.style.display = "unset";
          toPlay.innerHTML = "Next";
          toPlay.addEventListener("click", (_e) => {
            videoTag.play();
            toPlay.innerHTML = "Next Station...";
          });
          break;

        case 800:
          videoTag.pause();
          toggleModal.click();

          playVideo.style.display = "none";

          toPlay.style.display = "unset";
          toPlay.innerHTML = "Next";
          toPlay.addEventListener("click", (_e) => {
            videoTag.play();
            toPlay.innerHTML = "Next Station...";
          });
          break;

        case 1000:
          videoTag.pause();
          toggleModal.click();

          playVideo.style.display = "none";

          toPlay.style.display = "unset";
          toPlay.innerHTML = "Next";
          toPlay.addEventListener("click", (_e) => {
            videoTag.play();
            toPlay.innerHTML = "Next Station...";
          });
          break;

        case 1200:
          videoTag.pause();
          toggleModal.click();

          playVideo.style.display = "none";

          toPlay.style.display = "unset";
          toPlay.innerHTML = "Next";
          toPlay.addEventListener("click", (_e) => {
            videoTag.play();
            toPlay.innerHTML = "Next Station...";
          });
          break;

        default:
      }
    };

    videoFrameSettled(60, videoTag, frameLive);

    videoTag.play();
  }
});
