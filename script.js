function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        if (((i % 3) == 0 ) && ((i % 5 == 0))) {
            console.log('FizzBuzz');
        } else if ((i % 3) == 0) {
            console.log('Fizz');
        } else if ((i % 5) == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();

// alternate version pushing print out to html

function fizzbuzzHtml() {
    for (var i = 1; i <= 100; i++) {
        if (((i % 3) == 0 ) && ((i % 5 == 0))) {
            const para = document.createElement('p');
            para.innerText = `${i} is FizzBuzz`;
            document.body.appendChild(para);
        } else if ((i % 3) == 0) {
            const para = document.createElement('p');
            para.innerText = `${i} is Fizz`;
            document.body.appendChild(para);
        } else if ((i % 5) == 0) {
            const para = document.createElement('p');
            para.innerText = `${i} is Buzz`;
            document.body.appendChild(para);
        } else {
            const para = document.createElement('p');
            para.innerText = i;
            document.body.appendChild(para);
        }
    }
}

fizzbuzzHtml();