let Projects = [];

function MyProject() {
  // event.preventDefault();
  let title = document.getElementById("project").value;
  let content = document.getElementById("description").value;
  let image = document.getElementById("upload");
  let dateStart = document.getElementById("start-input").value;
  let dateEnd = document.getElementById("end-input").value;
  // console.log(title);
  // console.log(content);
  // console.log(image);

  if (
    title == "" ||
    content == "" ||
    dateStart == "" ||
    dateEnd == "" ||
    image == ""
  ) {
    return alert("All input fields must be not empty");
  }

  image = URL.createObjectURL(image.files[0]);

  let Project = {
    dateStart: dateStart,
    dateEnd: dateEnd,
    title: title,
    content: content,
    image: image,
    author: "Agus Alfandi",
    postAt: new Date(),
  };

  console.log(Project);
  Projects.push(Project);
  renderProject();
}

// ${getDistanceTime(Projects[i].postAt)}

function renderProject() {
  let projectWrapper = document.getElementById("contents");

  projectWrapper.innerHTML = "";

  for (let i = 0; i < Projects.length; i++) {
    projectWrapper.innerHTML += `
    <div class="project-list-item">
      <a href="./Page/ProjectDetail.html">
        <div class="card-img">
           <img src=${Projects[i].image}>
        </div>
        <div style="display: flex;">
          <div class="card-title" style="flex: 60%;">
              <h3 style="margin-top: 80px; width: 150px;">
              ${Projects[i].title}</h3>
          </div>
          <div style="flex: 40%; justify-content: center;">
            <p style="margin-left: 5px; width: 130px; margin-top: 80px; text-align: center">
            ${getDistanceTime(Projects[i].dateStart, Projects[i].dateEnd)}
            </p>
            </div>
        </div>
        <div class="card-drs">
        <p style="padding-left: 10px; padding-right: 10px;">
        ${getFullTime(Projects[i].postAt)} | ${Projects[i].author}
        </p>
        </div>
        <div class="card-desc">
            <p>
                ${Projects[i].content}
              </p>
        </div>
        <div class="card-icon">
            <img src="Assets/img/javascript.png">
            <img src="Assets/img/node.png">
            <img src="Assets/img/react.png">
            <img src="Assets/img/type.png">
        </div>
      </a>
      <div class="card-btn">
        <div class="edit">
            <button>edit</button>
        </div>
        <div class="card-delete">
            <button>delete</button>
        </div>
      </div>

    </div>`;
  }
}
function getFullTime(time) {
  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  //   console.log("get data", time);
  let minutes = time.getMinutes();
  let hours = time.getHours();
  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();

  //   console.log(minutes);
  //   console.log(hours);
  //   console.log(date);
  //   console.log(month);
  //   console.log(year);

  let result = `${date} | ${hours} : ${minutes} WIB`;
  return result;
}
// hari = milisecondInSecond * secondInMinute * minuteInHours * hourInDay= 1000 * 60 * 60 * 24
// jam = milisecondInSecond * secondInMinute * minuteInHours = 1000 * 60 * 60
// menit = milisecondInSecond * secondInMinute = 1000 * 60
// detik = milisecondInSecond = 1000 x

function getDistanceTime(time, time1) {
  let projectPostAt = new Date(time);
  let currentTime = new Date(time1);

  let distance = currentTime - projectPostAt;
  // console.log(distance);
  // conver to daylet
  let dayDistance = Math.floor(distance / (1000 * 60 * 60));

  if (dayDistance > 0) {
    return `${dayDistance} day ago`;
  } else {
    // Convert to Hour
    let hourDistance = Math.floor(distance / (1000 * 60 * 60));

    if (hourDistance > 0) {
      return `${hourDistance} hours ago`;
    } else {
      // Convert to Minute
      let minuteDistance = Math.floor(distance / (1000 * 60));

      return `${minuteDistance} minute ago`;
    }
    //  else {
    //   // Convert to Second
    //   let secondDistance = Math.floor(distance / 1000);

    //   return `${secondDistance} second ago`;
    // }
  }
}
setInterval(() => {
  renderProject();
}, 1000);

// function setInterval() {
//   clearInterval(myInterval);
// }
