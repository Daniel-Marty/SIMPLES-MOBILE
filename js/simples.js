const burgerMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const burger = document.getElementById('burger');
const textAreaQuestion = document.getElementById('textAreaQuestion');
const textSolution = document.getElementById('textSolution');
const colorsList = document.getElementById('colorsList');
const generateBtn = document.getElementById('generateButton');
const mark = document.getElementById('mark');
const verbPrompt = document.getElementById('verbPrompt');
const input = document.getElementById('input');
const verb = document.getElementById('verb');
const verbPic = document.getElementById('verbPic');
const subjectPic = document.getElementById('subject');
const subjectPrompt = document.getElementById('subjectPrompt');
const colorBlueBtn = document.getElementById('colorBlue');
const colorGreenBtn = document.getElementById('colorGreen');
const colorRedBtn = document.getElementById('colorRed');

const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 5px, rgb(255, 255, 255) 0px 0px 10px 15px'
const FSStyle = 'rgb(255, 5, 5) 0px 0px 4px 5px, white 0px 0px 10px 15px'
const PSStyle = 'rgb(0, 87, 250) 0px 0px 4px 5px, white 0px 0px 10px 15px'

const marksFolder = './images-marks/'
const subjectFolder = './images-subject/'
const verbsFolder = './images-verbs/'

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg', 'it.jpg', 'me.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'nobody.jpg', 'cat.jpg', 'dog.jpg', 'somebody.jpg', 'David.jpg', 'Charlie.jpg', 'Emilia.jpg',]
let verbs_array = ['be.jpg', 'need.jpg', 'can.jpg', 'want.jpg', 'fight.gif', 'drive.gif',]

// =========================================FUNCTIONS CHANGE===============================
function changeVerb(verbName) {
    verbPic.src = `./images-verbs/${verbName}`;
    verbPrompt.innerHTML = `${verbName.slice(0, -4)}`
};
function changeSubject(subjectName) {
    subjectPic.src = `./images-subject/${subjectName}`;
    subjectPrompt.innerHTML = `${subjectName.slice(0, -4)}`
};
function changeMark(markName) {
    mark.src = `./images-marks/${markName}`
};
function changeVerbStyle(selectedStyle) {
    verb.style.boxShadow = selectedStyle;
};

// ===============================================GET RANDOMS===========================
function randomArrayElement(array, changeFunction) {
    random_subject = Math.floor(Math.random() * array.length);
    selected_image = array[random_subject]
    changeFunction(selected_image);
}
function get_random_subject() {
    randomArrayElement(subject_array, changeSubject);
}
function get_random_mark() {
    randomArrayElement(marks_array, changeMark);
}
function get_random_verb() {
    randomArrayElement(verbs_array, changeVerb);
}
// =======================================EVENT LISTENERS==============================
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
    console.log('fucking burger');
});
verbPic.addEventListener('click', () => {
    get_random_verb();
    console.log('fucking verb');
});
mark.addEventListener('click', () => {
    get_random_mark();
})
subjectPic.addEventListener('click', () => {
    get_random_subject();
})
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
colorBlueBtn.addEventListener('click', () => {
    changeVerbStyle(PSStyle);
    console.log('fuck');
});
colorGreenBtn.addEventListener('click', () => {
    changeVerbStyle(PrSStyle);
    console.log('fuck');
});
colorRedBtn.addEventListener('click', () => {
    changeVerbStyle(FSStyle);
    console.log('fuck');
});

//=========================================  TEST  ================================== 