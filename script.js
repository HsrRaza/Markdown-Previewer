document.addEventListener('DOMContentLoaded', function () {


    const input = document.getElementById('textarea');
    const output = document.getElementById('preview');
    const copyBtn = document.getElementById('copy')
    const resetBtn = document.getElementById('reset')
    const notifyMsg = document.getElementById('notify-Msg')


    // to check whether marke.js loaded or not
    console.log("Is Marked.js Loaded?", typeof marked !== "undefined");

    // ex
    console.log(marked.parse("## Prerequisites (H2 header)"));




    function updatedInput() {
        const inputValue = input.value;
        output.innerHTML = marked.parse(inputValue)
    }
    input.addEventListener('input', updatedInput)



    function deleteInput() {
        input.value = "";
        output.innerHTML = "";

    }
    resetBtn.addEventListener('click', deleteInput)


    function copyToClipBoard() {
        const inputValue = input.value;
        navigator.clipboard.writeText(inputValue).then(() => {
            notifyMsg.style.visibility = 'visible'
            notifyMsg.style.opacity = '1'

            setTimeout(() => {
                notifyMsg.style.opacity = '0'
                notifyMsg.style.visibility = 'hidden'
            }, 1500)
        }).catch(err => {
            console.error("failed to copy text :", err);

        })
    }

    copyBtn.addEventListener('click', copyToClipBoard)



})


