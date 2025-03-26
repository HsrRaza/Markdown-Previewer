document.addEventListener('DOMContentLoaded',function(){


    const input = document.getElementById('textarea');
    const output = document.getElementById('preview');

    console.log("Is Marked.js Loaded?", typeof marked !== "undefined");


    console.log(marked.parse("## Prerequisites (H2 header)"));
    
    

    input.addEventListener('input', updatedInput)

    function updatedInput(){
        const inputValue = input.value;
        output.innerHTML= marked.parse(inputValue)
    }

    updatedInput() // for inital rendering the value
})


