
// initial value

// screen
const loggon_screen = document.querySelector('#loggon-screen')
const main_screen = document.querySelector('#main-screen')

const name_input = document.querySelector('#input-name')
const pass_input = document.querySelector('#input-password')

const users = [
    {
        name: "Ngọc Quang",
        password: "13102001",
        birthday: "13 Oct 2001",
        paths: ['./images/1 (2).jpg', './images/1 (1).jpg',
         './images/1 (3).jpg', './images/1 (4).jpg'],
        bd_greetings: "lời chúc mừng sinh nhật",
    },

    {
        name: "Kiều Linh",
        password: "17122001",
        birthday: "17 Dec 2001",
        paths: ['https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/12/8/v-bts-1-1638898969121515788442.jpg', 'https://scontent.fdad3-2.fna.fbcdn.net/v/t1.18169-9/c0.53.480.480a/s851x315/19260501_125463468037230_6485443371079209673_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=da31f3&_nc_ohc=soYF5zU9tyQAX_SUzlJ&tn=A-vkNrbUt3hg3VdY&_nc_ht=scontent.fdad3-2.fna&oh=00_AT-AZWXdoYr_d_rhCHkWdj_bFtUrzbPSkUDF8vzKaUUCwA&oe=61DF225D',
         'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1603095343/uj1ekhsjb7nqvfhfmzho.jpg', 'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/8/21/829816/Ji-Chang-Wook.jpg'],
        bd_greetings: "lời chúc mừng sinh nhật",
    }
]

const startParty = () => {
    loggon_screen.classList.remove('active')
    main_screen.classList.add('active')
}

loadInfo = (user) => {
    document.querySelector('#info-name').textContent = user.name
    document.querySelector('#info-birthday').textContent = user.birthday
    document.querySelector('#birthday-greetings').textContent = user.bd_greetings
    document.querySelector('#collection').innerHTML = ''

    user.paths.forEach((e, i) => {
        let row =  `
            <div class="item item-${i + 1}">
                <img src="${e}" alt="">
            </div>
        `
        document.querySelector('#collection').innerHTML += row

    })

}

// button event
document.querySelector('#btn-loggon').addEventListener('click', () => {
    if(name_input.value.trim().length > 0 && pass_input.value.trim().length > 0) {
        users.map(user => {
            if(name_input.value === user.name && pass_input.value === user.password) {
                loadInfo(user)
                startParty()
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

// dark mode switch
document.querySelector('#darkmode-switch').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('#darkmode-switch').classList.toggle('dark')
})