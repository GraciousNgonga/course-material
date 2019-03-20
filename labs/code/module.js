let ul = document.getElementById('list');

let li = document.createElement('li');
li.style.color = 'red'
li.innerHTML = "John";
li.setAttribute('id', 'john');

let li1 = document.createElement('li');
li1.innerHTML = "James";
li1.addEventListener('click', function() {
    li1.style.color = 'blue';
})

let li2 = document.createElement('li');
li2.innerHTML = "Joice";
li2.addEventListener('click', function() {
    li2.style.color = 'yellow';
})

ul.appendChild(li);
ul.appendChild(li1);

ul.insertBefore(li2, document.getElementById('john'));

const setListElement = (innerHTML) => {
    let career = document.createElement('li');
    career.innerHTML = innerHTML;
    return career;
}

const fetch = () => {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.status == 200 && this.readyState == 4) {

            let careers = JSON.parse(this.responseText);

            careers.map(career => {

                ul.appendChild(setListElement(career.name));

            });

        } 

    }

    xhttp.onerror = function() {

        console.log('Errored');

    }

    xhttp.onloadstart = function() {

        console.log('Started loading...');
    }

    xhttp.onprogress = function() {

        console.log('Progress loading...');

    }

    xhttp.onloadend = function() {

        console.log('Finished loading...');

    }

    xhttp.ontimeout = function() {

        console.log('Request timout...');

    }

    // you can replace any link instead of the one given
    // make sure you modify the functions that recieves data from the remote server
    // instead of careers
    xhttp.open('GET', `http://localhost:8000/api/careers`, true);
    xhttp.send();

}

li2.addEventListener('click', fetch);




