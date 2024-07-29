(function(){
    const titleQuestions = [...document.querySelectorAll('.preguntas__title')];

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let example = question.parentElement.querySelector('.preguntas__example .preguntas__show');
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('preguntas__padding--add');
            question.children[0].classList.toggle('preguntas__arrow--rotate');

            if(example.style.height === '0px' || example.style.height === ''){
                example.style.height = `${example.scrollHeight}px`;
            } else {
                example.style.height = '0px';
            }
        });
    });
})();
