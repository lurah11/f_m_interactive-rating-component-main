const a_submit = document.getElementById('a_submit')

const ratings= document.getElementById('rating_number')

const click_rating = (e) => {
    e.preventDefault()
    console.log("satu")
    for (var a of ratings.children) {
        a.style.backgroundColor = 'rgb(41, 50, 61)'  //dark grey rgb(41, 50, 61)
    }
    e.target.style.backgroundColor='rgb(149, 158, 172)' //light grey  rgb(149, 158, 172)
    console.log("empat")
}

const mouse_over = (e) => {
    if (!(e.target.style.backgroundColor=='rgb(149, 158, 172)')) {
    e.target.style.backgroundColor = 'rgb(251, 116, 19)' //orange  rgb(251, 116, 19)
    console.log("dua")
    }
    
}
const mouse_leave = (e) => {
    if (e.target.style.backgroundColor == 'rgb(251, 116, 19)') {
        e.target.style.backgroundColor = 'rgb(41, 50, 61)'
        console.log("tiga_1")
    }     
    }
        


for (var a of ratings.children) {
    a.addEventListener('click',click_rating)
    a.addEventListener('mouseover',mouse_over)
    a.addEventListener('mouseleave',mouse_leave)
}






const submit_button = (e) => {
    e.preventDefault()
    var check_rating = 0 
    for (var a of ratings.children) {
        if (a.style.backgroundColor=='rgb(149, 158, 172)') {
            var rating_score = a.textContent
            check_rating += 1
            console.log(a.textContent)
        }
    }
    if (check_rating == 0) {
        alert("please rate us :(")
    }
    else {
    document.getElementById('rating_state').style.display = 'none'
    document.getElementById('thank_state').style.display = 'inline-block'
    span_score = document.getElementById('span_score')
    span_score.innerHTML = rating_score

    }
    
    
}

a_submit.addEventListener('click',submit_button)