let Projects = [];

function MyProject() {
  // event.preventDefault();
  let title = document.getElementById("project").value;
  let dateStart = document.getElementById("start-input").value;
  let dateEnd = document.getElementById("end-input").value;
  let content = document.getElementById("description").value;
  let node = document.getElementById("node");
  let react = document.getElementById("react");
  let next = document.getElementById("next");
  let type = document.getElementById("type");
  let image = document.getElementById("upload");
  // console.log(title);
  // console.log(content);
  // console.log(image);

  let printIcon = "";

  if (node.checked == true) {
    printIcon += '<img value="node" id="node" src="./Assets/img/node.png">';
  }
  if (react.checked == true) {
    printIcon += '<img value="react" id="react" src="./Assets/img/react.png">';
  }
  if (next.checked == true) {
    printIcon += '<img value="next" id="next" src="./Assets/img/next.png">';
  }
  if (type.checked == true) {
    printIcon += '<img value="type" id="type" src="./Assets/img/type.png">';
  }
  image = URL.createObjectURL(image.files[0]);
  dateStart = new Date(dateStart);
  dateEnd = new Date(dateEnd);

  let Project = {
    dateStart,
    dateEnd,
    title,
    content,
    image,
    printIcon,
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
            <div class="card-title">
                <h3 style="margin-top: 80px; width: 150px;">
                ${Projects[i].title}</h3>
            </div>
          <div class="card-drs">
          <p style="padding-left: 10px; padding-right: 10px;">
          ${getFullTime(Projects[i].dateEnd, Projects[i].dateStart)}
          </p>
          </div>
          <div class="card-desc">
              <p>
                  ${Projects[i].content}
                </p>
          </div>
          <div class="card-icon">
            ${Projects[i].printIcon}
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
  alert("Your Project is upload");
}

function getFullTime(endDate, startDate) {
  let startMonth = startDate.getMonth();
  let endMonth = endDate.getMonth();
  let startYear = startDate.getFullYear();
  let endYear = endDate.getFullYear();

  if (startYear == endYear) {
    if (startMonth == endMonth) {
      month = 1;
      return "durasi " + month + " bulan";
    } else {
      month = endMonth - startMonth;
      return "durasi " + month + " bulan";
    }
  }

  if (endYear > startYear) {
    if (endYear - startYear == 1) {
      if (startMonth == endMonth) {
        return "durasi 1 tahun";
      } else if (startMonth > endMonth) {
        month = (startMonth - endMonth - 12) * -1;
        return "durasi " + month + " bulan";
      } else if (startMonth < endMonth) {
        month = endMonth - startMonth;
        return "durasi 1 tahun " + month + bulan;
      }
    } else {
      year = endYear - startYear;
      if (startMonth == endMonth) {
        return "durasi " + year + " tahun";
      } else if (startMonth > endMonth) {
        year -= 1;
        month = (startMonth - endMonth - 12) * -1;
        return "durasi " + year + " tahun " + month + " bulan";
      } else if (startMonth < endMonth) {
        month = endMonth - startMonth;
        return "durasi " + year + " tahun " + month + " bulan";
      }
    }
  }
}

/* == auto refresh == */

// hari = milisecondInSecond * secondInMinute * minuteInHours * hourInDay= 1000 * 60 * 60 * 24
// jam = milisecondInSecond * secondInMinute * minuteInHours = 1000 * 60 * 60
// menit = milisecondInSecond * secondInMinute = 1000 * 60
// detik = milisecondInSecond = 1000 x

// function getDistanceTime(time, time1) {
//   let projectPostAt = new Date(time);
//   let currentTime = new Date(time1);

//   let distance = currentTime - projectPostAt;
//   // console.log(distance);
//   // conver to daylet
//   let dayDistance = Math.floor(distance / (1000 * 60 * 60 * 24));

//   if (dayDistance > 0) {
//     return `durasi ${dayDistance} bulan`;
//   } else {
//     // Convert to Hour
//     let hourDistance = Math.floor(distance / (1000 * 60 * 60));

//     if (hourDistance > 0) {
//       return `${hourDistance} hours ago`;
//     } else {
//       // Convert to Minute
//       let minuteDistance = Math.floor(distance / (1000 * 60));
//       if (minuteDistance > 0) {
//         return `${minuteDistance} minute ago`;
//       } else {
//         // Convert to Second
//         let secondDistance = Math.floor(distance / 1000);

//         return `${secondDistance} second ago`;
//       }
//     }
//   }
// }

// setInterval(() => {
//   renderProject();
// }, 1000);

// function setInterval() {
//   clearInterval(myInterval);
// }
