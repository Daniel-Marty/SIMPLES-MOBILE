const burgerMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const textAreaQuestion = document.getElementById('textAreaQuestion');
const textSolution = document.getElementById('textSolution');
const colorsList = document.getElementById('colorsList');
const generateBtn = document.getElementById('generateButton');
const mark = document.querySelector('.mark');
const verbPrompt = document.getElementById('');
const input = document.getElementById('input');
const verbPic = document.getElementById('verbPic');

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg', 'it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'nobody.jpg', 'cat.jpg', 'dog.jpg', 'somebody.jpg', 'David.jpg', 'Charlie.jpg', 'Emilia.jpg',]
let verbs_array = ['be.jpg', 'need.jpg', 'can.jpg', 'want.jpg', 'fight.gif', 'drive.gif',]
function get_random_subject() {
    random_subject = Math.floor(Math.random() * subject_array.length);
    selected_image = subject_array[random_subject]
    document.getElementById('subject').src = `./images-subject/${selected_image}`
}
function get_random_mark() {
    random_mark = Math.floor(Math.random() * marks_array.length);
    selected_image = marks_array[random_mark]
    document.getElementById('mark').src = `./images-marks/${selected_image}`

}
verbPic.addEventListener('click', () => {
    get_random_verb();
});
function get_random_verb() {
    random_verb = Math.floor(Math.random() * verbs_array.length);
    selected_image = verbs_array[random_verb]
    document.getElementById('verbPic').src = `./images-verbs/${selected_image}`

}
const changePrompt = text => document.getElementById('secondVerb_prompt').innerHTML = `${text}`;
const changeVerb = verbName => document.getElementById('verb').src = `./images-verbs/${verbName}`

let button = document.getElementById('mark');
button.addEventListener('click', function () {
    get_random_mark();
    get_random_subject();
    console.log('changing the mark');
})

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    headerMenu.classList.toggle('active')
});

textAreaQuestion.addEventListener('click', () => {
    textAreaQuestion.style.opacity = '0';
    textSolution.style.opacity = '1';
})
textSolution.addEventListener('click', () => {
    textSolution.style.opacity = '0';
    textAreaQuestion.style.opacity = '1';
})
generateBtn.addEventListener('click', () => {
    colorsList.classList.add('hidden');

})