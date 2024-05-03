const dayButton = document.getElementById('daily');
const weekButton = document.getElementById('weekly');
const monthButton = document.getElementById('monthly');
let work = document.getElementById('workTime');
let lastWork = document.getElementById('lastWorkTime');
let play = document.getElementById('playTime');
let lastPlay = document.getElementById('lastPlayTime');
let study = document.getElementById('studyTime');
let lastStudy = document.getElementById('lastStudyTime');
let exercise = document.getElementById('exerciseTime');
let lastExercise = document.getElementById('lastExerciseTime');
let social = document.getElementById('socialTime');
let lastSocial = document.getElementById('lastSocialTime');
let selfCare = document.getElementById('selfCareTime');
let lastSelfCare = document.getElementById('lastSelfCareTime');


fetch('/challenges/time-tracking-dashboard-main/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    });