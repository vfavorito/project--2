$(document).ready(() => {
  const currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  const moodBar = $("#myBar");
  const username = $("#username");
  const petNeeds = [
    "I am hungy. Please feed me!",
    "I have too much energy! Lets go for a walk.",
    "I missed you. Lets play a game!",
  ];

  const petHappy = [
    "Yumm, thank you for feeding me my favorite food",
    "Thanks for playing with me!",
  ];
  function increaseBar(int) {
    let num = int.toString();
    let sendInt = {
      requester: username,
      value: num,
    }
    $.post("/api/updatePet", sendInt).then(() => {
      let x = int.toString();
      x += "0%";
      moodBar.width(x);
    })
  };

  //display the virtual pets need
  //const viewPet = $("#viewPetBtn");
  const petStatus = $("#petStatusDiv");
  const sleepCat = $("#sleepCat");
  sleepCat.attr("src", "./assets/images/cat2.png");
  petStatus.text(petNeeds[0]);
  increaseBar(0);

  /*
  viewPet.on("click", () => {
    petStatus.text(petNeeds[0]);
    sleepCat.attr("src", "./assets/images/cat2.png");
    increaseMood("0%");
  });
  */

  const eatBtn = $("#eat");
  eatBtn.on("click", () => {
    feedMe();
    petStatus.text(petHappy[0]);
    increaseBar(5);
  });

  function feedMe() {
    //const food1 = $("#food");
    //food1.prepend("<img src=./assets/images/fish.JPG>");
    sleepCat.attr("src", "./assets/images/cat1.png");
    const lastFeed = currentTime;
    petStatus.text(petHappy[1]);
    console.log(lastFeed);
    moodTimer(3000);
  }

  const playBtn = $("#play");
  playBtn.on("click", () => {
    //playFunction();
    petStatus.text(petHappy[2]);
    increaseBar(8);
<<<<<<< HEAD
    increaseMood("80%");
=======
>>>>>>> cb079e77101426625ed1f3fdbf223d9b4bee88d4
    moodTimer(2000);
  });

  /*function playFunction() {
    alert("This will display a game... to come tomorrow afternoon!");
  }
  */

  // function increaseMood(MoodLevel) {
  //   moodBar.width(MoodLevel);
  // }
<<<<<<< HEAD
  function increaseMood(MoodLevel) {
    moodBar.width(MoodLevel);
  }
=======
>>>>>>> cb079e77101426625ed1f3fdbf223d9b4bee88d4

  function moodTimer(setTime) {
    setInterval(() => {
      increaseBar(0);
    }, setTime);
  }
<<<<<<< HEAD
=======
});
const catEl = document.querySelector(".cat");
const btnRoll = document.querySelector(".btnMove");

btnRoll.addEventListener("click", () => {
  catEl.classList.toggle("rotator");
  console.log("You clicked");
>>>>>>> cb079e77101426625ed1f3fdbf223d9b4bee88d4
});
