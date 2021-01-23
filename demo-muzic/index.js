const selectfilesInput = document.querySelector("input");
const songContainer = document.querySelector(".song-constainer");

let songUrlArr = [];

selectfilesInput.addEventListener("change", (event) => {
  console.log();
  let filesArr = Array.from(event.target.files);

  for (let file of filesArr) {
    let url = URL.createObjectURL(new Blob([file], { type: "audio" }));
    songUrlArr.push(url);
  }

  console.log(songUrlArr);
  createSong(songUrlArr);
});

function createSong(urlArr) {
  urlArr.forEach((songUrl) => {
    let songTag = document.createElement("audio");
    songTag.setAttribute("src", `${songUrl}`);
    songTag.setAttribute("controls", "true");
    songContainer.append(songTag);
  });
}
