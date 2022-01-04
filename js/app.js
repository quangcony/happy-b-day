
// initial value

// screen
const loggon_screen = document.querySelector('#loggon-screen')
const main_screen = document.querySelector('#main-screen')
const footer = document.querySelector('#footer')

const name_input = document.querySelector('#input-name')
const pass_input = document.querySelector('#input-password')

const audio = document.querySelector('#birthday-greetings-audio')

var countDown

const users = [
    {
        name: "Ngọc Quang",
        password: "13102001",
        birthday: "2001/10/13",
        birthday_En: "13 Oct 2001",
        path: '',
        audio: './audios/hpbd.mp3',
        greetings: ''
    },

    {
        name: "Kiều Linh",
        password: "17122001",
        birthday: "2001/12/17",
        birthday_En: "17 Dec 2001",
        path: './images/klinh.jpg',
        audio: './audios/hpbd.mp3',
        greetings: 'chúc mừng sinh nhật Kiều Linh. chúc Kiều Linh tuổi mới ăn mau chóng lép, sức khỏe dồi dào, thành công rực rỡ.'
    },

    {
        name: "Anh Việt",
        password: "04052001",
        birthday: "2001/05/04",
        birthday_En: "04 May 2001",
        path: '',
        audio: './audios/hpbd.mp3',
        greetings: 'Con người, có thể thua cả trăm lần. Nhưng mà, nhất định phải thắng được trận cuối cùng.'
    }

]

const startParty = (user) => {
    loggon_screen.classList.remove('active')
    main_screen.classList.add('active')

    footer.classList.add('active')

    loadInfo(user)
}

loadInfo = (user) => {

    // get age to logo
    document.querySelector('#info-name').textContent = user.name
    document.querySelector('#info-birthday').textContent = user.birthday_En
    document.querySelector('#birthday-greetings-audio').src = user.audio
    document.querySelector('#img-thumb img').src = user.path
    document.querySelector('#b-greetings').textContent = user.greetings

    // document.querySelector('#collection').innerHTML = ''

    // user.paths.forEach((e, i) => {
    //     let row =  `
    //         <div class="item item-${i + 1}">
    //             <img src="${e}" alt="">
    //         </div>
    //     `
    //     document.querySelector('#collection').innerHTML += row

    // })

    var birthday = user.birthday_En.substring(0, 6)

    countDown = setInterval(() => {
        loadCountDown(birthday)
        document.querySelector('#age').textContent = getAge(user.birthday)
    }, 1000)

}

getAge = (date) => {
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

initCountDown = (distance) => {

    var second = 1000
    var minute = second * 60
    var hour = minute * 60
    var day = hour * 24

    var d = Math.floor(distance / (day))
    var h = Math.floor((distance % (day)) / (hour))
    var m = Math.floor((distance % (hour)) / (minute))
    var w = Math.floor((distance % (minute)) / second)

    document.querySelector('#day').textContent = d + 'd'
    document.querySelector('#hour').textContent = h + 'h'
    document.querySelector('#minute').textContent = m + 'm'
    document.querySelector('#seconds').textContent = w + 's'

    if (d <= 0) document.querySelector('#day').classList.remove('ring')
    if (h <= 0) document.querySelector('#hour').classList.remove('ring')
    if (m <= 0) document.querySelector('#minute').classList.remove('ring')
    if (w <= 0) document.querySelector('#seconds').classList.remove('ring')
}

loadCountDown = (birthday) => {

    var nowYear = new Date().getFullYear()
    var countDate = new Date(`${birthday}, ${nowYear} 00:00:00`).getTime()

    var now = new Date().getTime()

    var distance = countDate - now

    if (distance <= 0) {

        // nowYear ++;
        // countDate = new Date(`${birthday}, ${nowYear} 00:00:00`).getTime()
        // now = new Date().getTime()
        // distance = countDate - now

        // stop time
        clearInterval(countDown)

        document.querySelector('#day').textContent = 0 + 'd'
        document.querySelector('#hour').textContent = 0 + 'h'
        document.querySelector('#minute').textContent = 0 + 'm'
        document.querySelector('#seconds').textContent = 0 + 's'

        document.querySelector('#memories').classList.add('active')

    } else {
        initCountDown(distance)
    }

}

// button event
document.querySelector('#btn-loggon').addEventListener('click', () => {
    if(name_input.value.trim().length > 0 && pass_input.value.trim().length > 0) {
        users.forEach(user => {
            if(name_input.value.trim() === user.name && pass_input.value.trim() === user.password) {
                startParty(user)
            } else {
                name_input.classList.add('input-err')
                pass_input.classList.add('input-err')
    
                setTimeout(() => {
                    name_input.classList.remove('input-err')
                    pass_input.classList.remove('input-err')
    
                    name_input.focus()
                }, 500)
            }
        })
        
    }else {
        name_input.classList.add('input-err')
        pass_input.classList.add('input-err')

        setTimeout(() => {
            name_input.classList.remove('input-err')
            pass_input.classList.remove('input-err')

            name_input.focus()
        }, 500)
    }
})

document.querySelector('#btn-play').addEventListener('click', () => {
    if(!audio.paused) {
        audio.pause()
        document.querySelector('#btn-play').classList.remove('isPlaying')
    }else {
        audio.play()
        document.querySelector('#btn-play').classList.add('isPlaying')
    }
})

audio.addEventListener('ended', () => {
    document.querySelector('#btn-play').classList.remove('isPlaying')
})

// dark mode switch
document.querySelector('#darkmode-switch').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('#darkmode-switch').classList.toggle('dark')

})

const init = () => {

}

init()
