
const ProductsData = [
    {
        img:'./img/img-card1.png',
        title: '3D Soft Curves',
        user: '😀 Esther Howard',
        price: '0.85'
    },

    {
        img: "./img/img-card2.png",
        title: 'The mystery of the black square',
        user: '🤡 Jenny Wilson',
        price: '0.24 ETH'
    },

    {
        img: "./img/img-card3.png",
        title: 'Pink Cloud 🌥',
        user: '😧 Floyd Miles',
        price: '0.3 ETH'
    },

    {
        img: "./img/img-card4.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },
]


const ProductsData2 = [
    {
        img: "./img/img-live1.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live2.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live3.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live4.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live5.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live6.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live7.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live8.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live9.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live10.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live11.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },

    {
        img: "./img/img-live12.png",
        title: '3D Ethereum',
        user: '💀 Jane Cooper',
        price: '0.12 ETH'
    },
]

const ProductsData3 = [
    {
        first:'./img/futured-card-img1.png',
        img:'img/futured-ava1.png',
        name:'Tung Tran ☑️',
        about:'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator Supporting #bitcoin since <br>  2012.',
        folowers:'3K Followers',
        button:'',
    },
    {
        first:'./img/futured-card-img2.png',
        img:'img/futured-ava2.png',
        name:'Wade Warren ☑️',
        about:'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator Supporting #bitcoin since <br>  2012.',
        folowers:'34K Followers',
        button:'',
    },

    {
        first:'./img/futured-card-img3.png',
        img:'img/futured-ava3.png',
        name:'Arlene McCoy ☑️',
        about:'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator Supporting #bitcoin since <br>  2012.',
        folowers:'52K Followers',
        button:'',
    },

    {
        first:'./img/futured-card-img4.png',
        img:'img/futured-ava4.png',
        name:'TDianne Russell ☑️',
        about:'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator Supporting #bitcoin since <br>  2012.',
        folowers:'33541324K Followers',
        button:'',
    },

    {
        first:'./img/futured-card-img1.png',
        img:'img/futured-ava5.png',
        name:'Savannah Nguyen ☑️',
        about:'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator Supporting #bitcoin since <br>  2012.',
        folowers:'69K Followers',
        button:'',
    },

    {
        first:'./img/futured-card-img2.png',
        img:'img/futured-ava6.png',
        name:'Jenny Wilson ☑️',
        about:'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator Supporting #bitcoin since <br>  2012.',
        folowers:'2K Followers',
        button:'',
    },

    {
        first:'./img/futured-card-img3.png',
        img:'img/futured-ava7.png',
        name:'Brooklyn Simmons ☑️',
        about:'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator Supporting #bitcoin since <br>  2012.',
        folowers:'2052K Followers',
        button:'',
    },

    {
        first:'./img/futured-card-img4.png',
        img:'img/futured-ava8.png',
        name:'Theresa Webb ☑️',
        about:'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator Supporting #bitcoin since <br>  2012.',
        folowers:'123K Followers',
        button:'',
    },

]


const wrapper3 = document.querySelector('.futured__wrapper')
const FuturedCards = ProductsData3.map(FuturedCard => {
    return `
         <div class="futured__card">
                <img src=${FuturedCard.first} alt="">
                <div class="card__wrap">
                    <div class="futured__about">
                        <img src=${FuturedCard.img} alt="" class="futured__ava">
                        <div class="futured__texty">
                            <b>${FuturedCard.name}</b>
                        <p>${FuturedCard.about}</p>
                        </div>
                    </div>
                    <div class="futured__btn">
                        <p>${FuturedCard.folowers}</p>
                        <button>Follow</button>
                    </div>
                </div>
            </div>
    `
}).join('')
wrapper3.innerHTML = FuturedCards




const wrapper = document.querySelector('.live__wrapper1')
const cards = ProductsData.map(card => {
    return `
         <div class="live__card">
                    <img src=${card.img} alt="" class="live-card-img">
                    <div class="live__card-box">
                        <h3>${card.title}</h3>

                        <div>
                            <p>${card.user}</p>
                            <p>
                                Current Bid <br>
                                <b>${card.price} ETH</b>

                            </p>
                        </div>
                    </div>
                </div>
    `
}).join('')
wrapper.innerHTML = cards






const wrapper2 = document.querySelector('.live__wrapper2')
const cards2 = ProductsData2.map(card => {
    return `
         <div class="live__card">
                    <img src=${card.img} alt="" class="live-card-img">
                    <div class="live__card-box">
                        <h3>${card.title}</h3>

                        <div>
                            <p>${card.user}</p>
                            <p>
                                Current Bid <br>
                                <b>${card.price} ETH</b>

                            </p>
                        </div>
                    </div>
                </div>
    `
}).join('')
wrapper2.innerHTML = cards2




const modal = document.querySelector('.modal')
const openModal = document.querySelector('#open-btn')
const closeModal = document.querySelector('.close')

openModal.onclick = () => {
    modal.classList.add('active')
}

closeModal.onclick = () => {
    modal.classList.remove('active')
}


document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();
 
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '6880452962:AAFtzPSvDWDuVRQ2KloHBt2Rv6yt4bauuUc';  // Замените на ваш токен
    const chat_id = '-4595320926';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
 
    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;
 
    const data = {
      chat_id: chat_id,
      text: message
    };
 
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("Message sent!");
        location.reload()
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });


  const theme = document.querySelector('#theme')
  const body = document.querySelector('body')

  theme .onclick = () => {
    body.classList.toggle('dark')
    
  }