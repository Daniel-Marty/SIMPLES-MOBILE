const burgerMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const burger = document.getElementById('burger');
const questionWord = document.getElementById('questionWord');
const textAreaQuestion = document.getElementById('textAreaQuestion');
const textSolution = document.getElementById('textSolution');
const colorsList = document.getElementById('colorsList');
const generateBtn = document.getElementById('generateButton');
const mark = document.getElementById('mark');
const verbPrompt = document.getElementById('verbPrompt');
const input = document.getElementById('input');
const verbDiv = document.getElementById('verb');
const verbPic = document.getElementById('verbPic');
const subjectPic = document.getElementById('subject');
const subjectPrompt = document.getElementById('subjectPrompt');
const colorBlueBtn = document.getElementById('colorBlue');
const colorGreenBtn = document.getElementById('colorGreen');
const colorRedBtn = document.getElementById('colorRed');
const timeMarker = document.getElementById('timeMarker');
const connectionWord = document.getElementById('firstConnection');

const PrSStyle = 'rgb(19, 246, 49) 0px 0px 4px 5px, rgb(255, 255, 255) 0px 0px 10px 15px'
const FSStyle = 'rgb(255, 5, 5) 0px 0px 4px 5px, white 0px 0px 10px 15px'
const PSStyle = 'rgb(0, 87, 250) 0px 0px 4px 5px, white 0px 0px 10px 15px'

const marksFolder = './images-marks/'
const subjectFolder = './images-subject/'
const verbsFolder = './images-verbs/'

let marks_array = ['1.png', '2.png', '3.png']
let subject_array = ['he.jpg', 'it.jpg', 'I.jpg', 'she.jpg', 'they.jpg', 'we.jpg', 'you.jpg', 'nobody.jpg', 'cat.jpg', 'dog.jpg', 'somebody.jpg', 'David.jpg', 'Charlie.jpg', 'Emilia.jpg',]
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

    // if (selectedStyle === PSStyle) {

    // }
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
    testSimple();
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
let currentSentence = '';
function testCallback(question, who, connection, mark1, verb, style, time, sentence) {
    questionWord.innerHTML = `${question}`
    changeSubject(who);
    connectionWord.innerHTML = `${connection}`
    mark.src = `${marksFolder}${mark1}`
    verbPic.src = `${verbsFolder}${verb}`
    verbDiv.style.boxShadow = style;
    changeVerb(verb);
    timeMarker.innerHTML = `${time}`

    textSolution.innerHTML = `${sentence}`
    currentSentence = sentence;
}

function testSimple() {
    let testRandomNumber = Math.floor(Math.random() * 62)
    console.log(testRandomNumber);
    if (testRandomNumber === 0) {
        testCallback('Usually', 'she.jpg', '', '1.png', 'walk.gif', PrSStyle, 'to school', "Usually she walks to school"), questionWord.style.opacity = '1', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 1) {
        testCallback('Usually', 'he.jpg', '', '2.png', 'cook.gif', PrSStyle, '', "Usually he doesn't cook"), questionWord.style.opacity = '1', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 2) {
        testCallback('', 'he.jpg', '', '1.png', 'cook.gif', PSStyle, ' fish last time', "He cooked fish last time"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 3) {
        testCallback('', 'he.jpg', '', '2.png', 'cook.gif', PSStyle, 'anything yesterday', "He didn't cook anything yesterday"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 4) {
        testCallback('', 'she.jpg', '', '3.png', 'cook.gif', PSStyle, 'anything yesterday', "Did she cook anything yesterday"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 5) {
        testCallback('I promise', 'I.jpg', '', '1.png', 'cook.gif', FSStyle, 'something tomorrow', "I promise I'll cook something tomorrow"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 6) {
        testCallback('', 'I.jpg', '', '1.png', 'cook.gif', PrSStyle, 'from time to time', "I cook from time to time"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 7) {
        testCallback('', 'I.jpg', '', '2.png', 'like.gif', PrSStyle, 'cooking at all', "I don't like cooking at all"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 8) {
        testCallback('', 'she.jpg', '', '3.png', 'like.gif', PrSStyle, 'cooking at all', "Does she like cooking at all"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 9) {
        testCallback('', 'she.jpg', 'never', '1.png', 'like.gif', PSStyle, 'cooking', "She never liked cooking"), questionWord.style.opacity = '0', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 10) {
        testCallback('', 'he.jpg', 'ever', '3.png', 'cry.gif', PrSStyle, '', "Does he ever cry"), questionWord.style.opacity = '0', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 11) {
        testCallback('', 'he.jpg', 'never', '1.png', 'cry.gif', PrSStyle, '', "He never cries"), questionWord.style.opacity = '0', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 12) {
        testCallback('', 'he.jpg', 'never', '1.png', 'fight.gif', PrSStyle, 'at school', "He never fights at school"), questionWord.style.opacity = '0', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 13) {
        testCallback('Can', 'she.jpg', '', '3.png', 'fight.gif', PrSStyle, '', "Can she fight"), questionWord.style.opacity = '1', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 14) {
        testCallback('', 'she.jpg', "can", '2.png', 'fight.gif', PrSStyle, '', "She can't fight"), questionWord.style.opacity = '0', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 15) {
        testCallback('', 'she.jpg', "can", '1.png', 'sing.gif', PrSStyle, '', "She can sing"), questionWord.style.opacity = '0', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 16) {
        testCallback('', 'he.jpg', "can", '1.png', 'sing.gif', PSStyle, 'when he was 9', "He could sing when he was 9"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 17) {
        testCallback('', 'I.jpg', "", '1.png', 'explain.gif', PSStyle, 'twice', "I explained twice"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 18) {
        testCallback('', 'he.jpg', "", '2.png', 'explain.gif', PSStyle, 'anything', "He didn't explain anything"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 18) {
        testCallback('', 'I.jpg', "can", '1.png', 'explain.gif', PrSStyle, 'it', "I can explain it"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 19) {
        testCallback('', 'you.jpg', "need to", '2.png', 'explain.gif', PrSStyle, 'it', "You don't need to explain it"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 20) {
        testCallback('', 'she.jpg', "need to", '2.png', 'explain.gif', PrSStyle, 'it', "She doesn't need to explain it"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 21) {
        testCallback('Can', 'you.jpg', "", '3.png', 'explain.gif', PrSStyle, 'it', "Can you explain it"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 22) {
        testCallback('', 'you.jpg', "have to", '1.png', 'do.gif', PrSStyle, 'it', "You have to do it"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 23) {
        testCallback('', 'you.jpg', "have to", '2.png', 'do.gif', PrSStyle, 'it', "You don't have to do it"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 24) {
        testCallback('', 'you.jpg', "", '3.png', 'need.jpg', PrSStyle, 'it now', "Do you need it now"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 25) {
        testCallback('', 'you.jpg', "", '3.png', 'need.jpg', PrSStyle, 'it now', "Do you need it now"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 26) {
        testCallback('', 'I.jpg', "", '1.png', 'need.jpg', PrSStyle, 'your help', "I need your help"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 27) {
        testCallback('', 'she.jpg', "", '2.png', 'need.jpg', PrSStyle, 'your help', "She doesn't need your help"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 28) {
        testCallback('', 'she.jpg', "", '1.png', 'need.jpg', PSStyle, 'your help yesterday', "She needed your help yesterday"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 29) {
        testCallback('', 'she.jpg', "never", '1.png', 'need.jpg', PrSStyle, '', "She never helps"), questionWord.style.opacity = '0', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 30) {
        testCallback('', 'I.jpg', "", '1.png', 'help.gif', FSStyle, '', "I'll help"), questionWord.style.opacity = '0', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 31) {
        testCallback('', 'he.jpg', "usually", '1.png', 'help.gif', PrSStyle, '', "He usually helps"), questionWord.style.opacity = '0', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 32) {
        testCallback('', 'he.jpg', "usually", '1.png', 'go.gif', PrSStyle, 'there on Sundays', "He usually goes there on Sundays"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 33) {
        testCallback('', 'he.jpg', "", '1.png', 'go.gif', PSStyle, 'there a day ago', "He went there a day ago"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 34) {
        testCallback('', 'somebody.jpg', "", '1.png', 'go.gif', FSStyle, 'there some day', "Somebody will go there some day"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 35) {
        testCallback('', 'I.jpg', "", '2.png', 'go.gif', FSStyle, 'there', "I won't go there"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 36) {
        testCallback('', 'she.jpg', "", '3.png', 'go.gif', PSStyle, 'there alone', "Did she go there alone"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 37) {
        testCallback('', 'she.jpg', "", '3.png', 'go.gif', PSStyle, 'there alone', "Did she go there alone"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 38) {
        testCallback('', 'I.jpg', "normally", '1.png', 'drink.gif', PrSStyle, 'coffee in the morning', "I normally drink coffee in the morning"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 39) {
        testCallback('', 'she.jpg', "never", '1.png', 'drink.gif', PrSStyle, 'vodka in the morning', "She never drinks vodka in the morning"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 40) {
        testCallback('There is', 'nobody.jpg', "to", '1.png', 'help.gif', PrSStyle, 'you', "There is nobody to help you"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 41) {
        testCallback('There was', 'nobody.jpg', "to", '1.png', 'help.gif', PSStyle, 'you yesterday', "There was nobody to help you yesterday"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 42) {
        testCallback('', 'somebody.jpg', "", '1.png', 'be.jpg', PSStyle, 'here 5 minutes ago', "Somebody was here 5 minutes ago"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 43) {
        testCallback('', 'it.jpg', "", '1.png', 'be.jpg', PSStyle, 'empty in 1995', "It was empty in 1995"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 44) {
        testCallback('', 'it.jpg', "", '1.png', 'be.jpg', PSStyle, 'empty in 1995', "It was empty in 1995"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 45) {
        testCallback('', 'I.jpg', "just", '1.png', 'arrive.gif', PSStyle, 'yesterday', "I just arrived yesterday"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 46) {
        testCallback('When', 'he.jpg', "", '3.png', 'arrive.gif', PSStyle, '', "When did he arrive"), questionWord.style.opacity = '1', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 47) {
        testCallback('I think', 'she.jpg', "", '1.png', 'arrive.gif', FSStyle, 'on Friday', "I think she will arrive on Friday"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 48) {
        testCallback('Where', 'he.jpg', "", '3.png', 'work.gif', PSStyle, 'last year', "Where did he work last year"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 49) {
        testCallback('Where', 'he.jpg', "", '3.png', 'work.gif', PSStyle, 'last year', "Where did he work last year"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 50) {
        testCallback('Where', 'she.jpg', "", '3.png', 'work.gif', PrSStyle, '', "Where does she work"), questionWord.style.opacity = '1', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 51) {
        testCallback('I think', 'you.jpg', "", '1.png', 'quit.gif', FSStyle, '', "I think you'll quit"), questionWord.style.opacity = '1', timeMarker.style.opacity = '0';
    } else if (testRandomNumber === 52) {
        testCallback('I think', 'she.jpg', "definitely", '1.png', 'tell.gif', FSStyle, 'you', "I think she'll definitely tell you"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 53) {
        testCallback('I think', 'dog.jpg', "surely", '1.png', 'come back.gif', FSStyle, 'to you', "I think the dog will surely come back to you"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 54) {
        testCallback('I think', 'dog.jpg', "", '1.png', 'be.jpg', PSStyle, 'here a moment ago', "I think the dog was here a moment ago"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 55) {
        testCallback('It seems like', 'he.jpg', "", '2.png', 'understand.gif', PrSStyle, 'what his job is', "It seems like he doesn't understand what his job is"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 56) {
        testCallback("It doesn't seem like", 'she.jpg', "", '1.png', 'understand.gif', PrSStyle, "what's going on", "It doesn't seem like she understands what's going on"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 57) {
        testCallback("It doesn't seem like", 'you.jpg', "", '1.png', 'understand.gif', PrSStyle, "what it is", "It doesn't seem like you understand what it is"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 58) {
        testCallback("It doesn't seem like", 'you.jpg', "", '1.png', 'know.gif', PrSStyle, "him", "It doesn't seem like you know him"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 59) {
        testCallback("It seems like", 'she.jpg', "", '2.png', 'can.jpg', PrSStyle, "drive", "It seems like she can't drive"), questionWord.style.opacity = '1', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 60) {
        testCallback("", 'I.jpg', "can", '2.png', 'hear.gif', PrSStyle, "you", "I can't hear you"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    } else if (testRandomNumber === 61) {
        testCallback("", 'I.jpg', "can", '2.png', 'hear.gif', FSStyle, "you", "I won't be able to hear you"), questionWord.style.opacity = '0', timeMarker.style.opacity = '1';
    }
}
