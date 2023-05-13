// calendar using HTML, CSS, JavaScript

const calendar = document.getElementById('calendar');

const drawBlankCalendar = () => {
    for( let k=0; k<35; k++ ) {
        const day = document.createElement('div');
        day.classList.add('day');

        const dayText = document.createElement('p');
        dayText.classList.add('dayText');

        const dayNumber = document.createElement('p');
        dayNumber.classList.add('dayNumber');

        const eventName = document.createElement('small');
        eventName.classList.add('eventName');

        day.appendChild(dayText);
        day.appendChild(dayNumber);
        day.appendChild(eventName);

        calendar.appendChild(day);

    }
}

drawBlankCalendar();
