let randomButton = document.getElementById('generate'),
    randomField = document.getElementById('random-student');

const students = ['Jonathan Stewart', 'Joseph Perez','Nimish Lal','Jose angel Pantoja','Trevor Edwards','Jose Martinez','Johny Uribe','Deon Simmons','Robert Burns','Carter Galvez',
'Zach Davis','Francisco Chavez','Kevin Cabello','Stephani Singh','Esteban Zaragoza','Carson Huber','Abraham Lopez','Bisola Awujoola','David Abdallah','Lourn Selga','Alex Nguyen','Nayo Ortz','Kurt Nipkau'];


function getRandomStudents(){
    return students[Math.floor(Math.random() * students.length)];
}

randomButton.addEventListener('click', function () {
    console.log('');
    randomField.innerText = getRandomStudents();
    
})

