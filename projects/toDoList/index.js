// todolist using html, css, js

const container = document.querySelector('.container');

// this div contain heading 'Just Do It.'
const header = document.createElement('div');
header.classList.add('header');
container.append(header);
header.innerText = 'Just Do It.';

// this is a inner div which contain input and button tags
const inContainer = document.createElement('div');
inContainer.classList.add('in-Container');
container.append(inContainer);

// input tag
const input = document.createElement('input');
input.classList.add('in-box');
inContainer.append(input);
input.placeholder = 'Add a task.'

  //                   <----- TADIKONDA SAI MANIKANTA ----->

// button tag
const button = document.createElement('button');
button.classList.add('button');
button.innerText = 'I Got This.';
inContainer.append(button);

// div for time
const time = document.createElement('div');
time.classList.add('time');
container.append(time);


// Function to format the time and date
function formatTimeAndDate(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedTime = `${hours.toString().padStart(2, '0')} ${seconds % 2 === 0 ? ':' : ' '} ${minutes.toString().padStart(2, '0')}`;
  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

  return `${formattedTime} - ${formattedDate}`;
}

  // Update the div content with current time and date
  function updateTimeAndDate() {
    const currentDate = new Date();
    const formattedDateTime = formatTimeAndDate(currentDate);
    time.innerText = formattedDateTime;
  }

  // Call the updateTimeAndDate function initially and every second
  updateTimeAndDate();
  setInterval(updateTimeAndDate, 1000);

  // div for buttons for two themes
  const theme1 = document.createElement('button');
  theme1.classList.add('theme1');
  const theme2 = document.createElement('button');
  theme2.classList.add('theme2');


  const theme = document.createElement('div');
  theme.classList.add('theme');
  const body = document.querySelector('body');
  body.insertBefore( theme, container);
  theme.append(theme1);
  theme.append(theme2);

  theme1.addEventListener('click', () => {
    if(body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.add('light-mode');
    }
  });

theme2.addEventListener('click', () => {
  if(body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
  } else {
      body.classList.add('dark-mode');
  }
});

button.addEventListener( 'click', () => {
  if( input.value === '') {
    alert('Sai tadikonda says : please enter something');
  } else {
        const task = document.createElement('div');
        task.classList.add('task');
        const work = document.createElement('p');
        work.classList.add('work');
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        const done = document.createElement('button');
        done.classList.add('done');
        const deleted = document.createElement('button');
        deleted.classList.add('deleted');
        container.append(task);
        task.append(work);
        task.append(buttonContainer);
        buttonContainer.append(done);
        buttonContainer.append(deleted);
        work.innerText = input.value;
    setTimeout(() => {
        input.value = '';
    },100);


    deleted.addEventListener('click', () => {
      task.remove();
    });

    done.addEventListener('click', () => {
      work.style.textDecoration = 'line-through red 3px'
    });
  }
});


