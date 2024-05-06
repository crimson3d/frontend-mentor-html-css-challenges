let dataTime = [];


// Función para recuperar datos del JSON
async function fetchData() {
    try {
        const response = await fetch('https://crimson3d.github.io/frontend-mentor-html-css-challenges/challenges/time-tracking-dashboard-main/data.json');
        dataTime = await response.json();
        showData('option1');
        showData('option2');
        showData('option3');
        cleanDivs();
    } catch (error) {
        console.error('Error:', error);
    }
};

document.addEventListener('DOMContentLoaded', fetchData);

// Función para limpiar divs que muestran la info del JSON
function cleanDivs() {
    document.getElementById('workTime').textContent = '';
    document.getElementById('lastWorkTime').textContent = '';
    document.getElementById('playTime').textContent = '';
    document.getElementById('lastPlayTime').textContent = '';
    document.getElementById('studyTime').textContent = '';
    document.getElementById('lastStudyTime').textContent = '';
    document.getElementById('exerciseTime').textContent = '';
    document.getElementById('lastExerciseTime').textContent = '';
    document.getElementById('socialTime').textContent = '';
    document.getElementById('lastSocialTime').textContent = '';
    document.getElementById('selfCareTime').textContent = '';
    document.getElementById('lastSelfCareTime').textContent = '';
};




// Función para actualizar los divs según el botón pulsado
function showData(option) {
   // Aquí buscamos los objetos de los que queremos recuperar los datos
   let work = dataTime.find(actividad => actividad.title === 'Work');
   let play = dataTime.find(actividad => actividad.title === 'Play');
   let study = dataTime.find(actividad => actividad.title === 'Study');
   let exercise = dataTime.find(actividad => actividad.title === 'Exercise');
   let social = dataTime.find(actividad => actividad.title === 'Social');
   let selfCare = dataTime.find(actividad => actividad.title === 'Self Care');

    // Decidimos que datos mostrar según la opción elegida
    switch (option) {
        case 'option1':
            document.getElementById('workTime').textContent = work.timeframes.daily.current;
            document.getElementById('lastWorkTime').textContent = work.timeframes.daily.previous;
            document.getElementById('playTime').textContent = play.timeframes.daily.current;
            document.getElementById('lastPlayTime').textContent = play.timeframes.daily.previous;
            document.getElementById('studyTime').textContent = study.timeframes.daily.current;
            document.getElementById('lastStudyTime').textContent = study.timeframes.daily.previous;
            document.getElementById('exerciseTime').textContent = exercise.timeframes.daily.current;
            document.getElementById('lastExerciseTime').textContent = exercise.timeframes.daily.previous;
            document.getElementById('socialTime').textContent = social.timeframes.daily.current;
            document.getElementById('lastSocialTime').textContent = social.timeframes.daily.previous;
            document.getElementById('selfCareTime').textContent = selfCare.timeframes.daily.current;
            document.getElementById('lastSelfCareTime').textContent = selfCare.timeframes.daily.previous;
            break;
        case 'option2':
            document.getElementById('workTime').textContent = work.timeframes.weekly.current;
            document.getElementById('lastWorkTime').textContent = work.timeframes.weekly.previous;
            document.getElementById('playTime').textContent = play.timeframes.weekly.current;
            document.getElementById('lastPlayTime').textContent = play.timeframes.weekly.previous;
            document.getElementById('studyTime').textContent = study.timeframes.weekly.current;
            document.getElementById('lastStudyTime').textContent = study.timeframes.weekly.previous;
            document.getElementById('exerciseTime').textContent = exercise.timeframes.weekly.current;
            document.getElementById('lastExerciseTime').textContent = exercise.timeframes.weekly.previous;
            document.getElementById('socialTime').textContent = social.timeframes.weekly.current;
            document.getElementById('lastSocialTime').textContent = social.timeframes.weekly.previous;
            document.getElementById('selfCareTime').textContent = selfCare.timeframes.weekly.current;
            document.getElementById('lastSelfCareTime').textContent = selfCare.timeframes.weekly.previous;
            break;
        case 'option3':
            document.getElementById('workTime').textContent = work.timeframes.monthly.current;
            document.getElementById('lastWorkTime').textContent = work.timeframes.monthly.previous;
            document.getElementById('playTime').textContent = play.timeframes.monthly.current;
            document.getElementById('lastPlayTime').textContent = play.timeframes.monthly.previous;
            document.getElementById('studyTime').textContent = study.timeframes.monthly.current;
            document.getElementById('lastStudyTime').textContent = study.timeframes.monthly.previous;
            document.getElementById('exerciseTime').textContent = exercise.timeframes.monthly.current;
            document.getElementById('lastExerciseTime').textContent = exercise.timeframes.monthly.previous;
            document.getElementById('socialTime').textContent = social.timeframes.monthly.current;
            document.getElementById('lastSocialTime').textContent = social.timeframes.monthly.previous;
            document.getElementById('selfCareTime').textContent = selfCare.timeframes.monthly.current;
            document.getElementById('lastSelfCareTime').textContent = selfCare.timeframes.monthly.previous;
            break;
    }
};

document.addEventListener ('DOMContentLoaded', () => {
    document.getElementById('daily').onclick = () => showData('option1');
    document.getElementById('weekly').onclick = () => showData('option2');
    document.getElementById('monthly').onclick = () => showData('option3');
});
