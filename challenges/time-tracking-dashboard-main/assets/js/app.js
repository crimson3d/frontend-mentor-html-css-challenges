let dataTime = [];


// Función para recuperar datos del JSON
async function fetchData() {
    try {
        const response = await fetch('https://crimson3d.github.io/frontend-mentor-html-css-challenges/challenges/time-tracking-dashboard-main/data.json');
        dataTime = await response.json();
        showData('monthly');
        updateActiveClass('monthly');
    } catch (error) {
        console.error('Error:', error);
    }
};

document.addEventListener('DOMContentLoaded', fetchData);

// Función para actualizar los divs según el botón pulsado
function showData(time) {
   // Aquí buscamos los objetos de los que queremos recuperar los datos
   let work = dataTime.find(actividad => actividad.title === 'Work');
   let play = dataTime.find(actividad => actividad.title === 'Play');
   let study = dataTime.find(actividad => actividad.title === 'Study');
   let exercise = dataTime.find(actividad => actividad.title === 'Exercise');
   let social = dataTime.find(actividad => actividad.title === 'Social');
   let selfCare = dataTime.find(actividad => actividad.title === 'Self Care');
   
     // Mostramos los datos según la opción elegida
     document.getElementById('workTime').textContent = work.timeframes[time].current + 'hrs';
     document.getElementById('lastWorkTime').textContent = 'Last Week - ' + work.timeframes[time].previous + 'hrs';
     document.getElementById('playTime').textContent = play.timeframes[time].current + 'hrs';
     document.getElementById('lastPlayTime').textContent = 'Last Week - ' + play.timeframes[time].previous + 'hrs';
     document.getElementById('studyTime').textContent = study.timeframes[time].current + 'hrs';
     document.getElementById('lastStudyTime').textContent = 'Last Week - ' + study.timeframes[time].previous + 'hrs';
     document.getElementById('exerciseTime').textContent = exercise.timeframes[time].current + 'hrs';
     document.getElementById('lastExerciseTime').textContent = 'Last Week - ' + exercise.timeframes[time].previous + 'hrs';
     document.getElementById('socialTime').textContent = social.timeframes[time].current + 'hrs';
     document.getElementById('lastSocialTime').textContent = 'Last Week - ' + social.timeframes[time].previous + 'hrs';
     document.getElementById('selfCareTime').textContent = selfCare.timeframes[time].current + 'hrs';
     document.getElementById('lastSelfCareTime').textContent = 'Last Week - ' + selfCare.timeframes[time].previous + 'hrs';
};

function updateActiveClass(activeId) {
    const buttonIds = ['daily', 'weekly', 'monthly'];
    buttonIds.forEach(id => {
        document.getElementById(id).classList.remove('active');
        document.getElementById(id).classList.add('timeframes__text');
    });
    document.getElementById(activeId).classList.add('active');
    document.getElementById(activeId).classList.remove('timeframes__text');
}

document.addEventListener ('DOMContentLoaded', () => {
    document.getElementById('daily').onclick = () => {
        showData('daily');
        updateActiveClass('daily');
    };
    document.getElementById('weekly').onclick = () => {
        showData('weekly');
        updateActiveClass('weekly');
    };
    document.getElementById('monthly').onclick = () => {
        showData('monthly');
        updateActiveClass('monthly');
    };
});

                         
