const shopData = [
    {
        id: 1,
        category: 'albums',
        routeName: '/albums',
        items: [
            {
                id: 1000,
                title: "Taste of Love",
                price: 24.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/1T5n49K/album-17.jpg',
                detail: "Twice's 10th Mini Album. There're version A, B and C. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1001,
                title: "Eyes Wide Open",
                price: 22.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/G0VVLGg/album-1.jpg',
                detail: "Twice's 2nd Full Album. There're version A, B and C. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1002,
                title: "More & More",
                price: 19.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/Lk5Mb6v/album-2.jpg',
                detail: "Twice's 9th Mini Album. There're version A, B and C. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1003,
                title: "Feel Special",
                price: 17.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/gZXQ3dq/album-3.jpg',
                detail: "Twice's 8th Mini Album. There're version A, B and C. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1004,
                title: "Fancy You",
                price: 18.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/4dFphRh/album-4.jpg',
                detail: "Twice's 7th Mini Album. There're version A, B and C. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1005,
                title: "The Year of YES",
                price: 26.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/DLm6tZf/album-5.jpg',
                detail: "Twice's 3rd Special Album. There're version A, B and C. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1006,
                title: "Yes or Yes",
                price: 16.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/Y70k2Yk/album-6.jpg',
                detail: "Twice's 6th Mini Album. There're version A, B and C. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1007,
                title: "Summer Nights",
                price: 24.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/Qk70JDF/album-7.jpg',
                detail: "Twice's 2nd Special Album. There're version A, B and C. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1008,
                title: "What is Love?",
                price: 18.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/W6kL21x/album-8.jpg',
                detail: "Twice's 5th Mini Album. There're version A, B and C. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1009,
                title: "Merry & Happy",
                price: 21.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/WpkwnXY/album-9.jpg',
                detail: "Twice's 1st Repackaged Album. There're version A and B. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1010,
                title: "Twicetagram",
                price: 24.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/k8rFn8k/album-10.jpg',
                detail: "Twice's 1st Studio Album. There're version A, B and C. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1011,
                title: "Signal",
                price: 19.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/NjqYwZR/album-11.jpg',
                detail: "Twice's 4th Mini Album. There're version A, B and C. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1012,
                title: "TwiceCoaster: Lane-2",
                price: 22.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/Tm7xJMG/album-12.jpg',
                detail: "Twice's 1st Special Album. There're version A and B. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1013,
                title: "TwiceCoaster: Lane-1",
                price: 20.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/rprGDrg/album-13.jpg',
                detail: "Twice's 3rd Mini Album. There're version A and B. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1014,
                title: "Page Two",
                price: 16.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/gdQfT7y/album-14.jpg',
                detail: "Twice's 2nd Mini Album. There're version A and B. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            },
            {
                id: 1015,
                title: "The Story Begins",
                price: 15.99,
                type: 'album',
                imgUrl: 'https://i.ibb.co/Tk99bfw/album-15.jpg',
                detail: "Twice's 1st Mini Album. There're version A, B and C. Randomly send version when purchasing one album. When purchasing 3 or more albums on an order, versions can be selected."
            }
        ]
    },
    {
        id: 2,
        category: 'photobooks',
        routeName: '/photobooks',
        items: [
            {
                id: 2000,
                title: "Yes I'm Sana Photobook White Version",
                price: 34.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/qB2ZzVQ/photobook-1.jpg',
                detail: "This is Sana's first solo photobook. Photobook and accordion postcard set are included. Two photocards and special photocard are included as pre-order gifts."
            },
            {
                id: 2001,
                title: "Yes I'm Sana Photobook Black Version",
                price: 34.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/xg4r4JS/photobook-2.jpg',
                detail: "This is Sana's first solo photobook. Photobook and accordion postcard set are included. Two photocards and special photocard are included as pre-order gifts."
            },
            {
                id: 2002,
                title: "TWICE World In a Day Photobook",
                price: 33.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/m82DDqT/photobook-3.jpg',
                detail: "This is the photobook released for TWICE World in a Day online concert. Photobook, photocards and poster(first press only) are included."
            },
            {
                id: 2003,
                title: "TWICE More & More Monograph",
                price: 29.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/xqrZ9MZ/photobook-4.jpg',
                detail: "TWICE's limited edition Monograph. Photobook and 9 photocards are included."
            },
            {
                id: 2004,
                title: "Yes I'm Mina Photobook Grey Version",
                price: 33.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/ZYCzf0c/photobook-5.jpg',
                detail: "This is Mina's first solo photobook. Photobook and accordion postcard set are included. Two photocards and special photocard are included as pre-order gifts."
            },
            {
                id: 2005,
                title: "Yes I'm Mina Photobook Pink Version",
                price: 33.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/0ZFjpj4/photobook-6.jpg',
                detail: "This is Mina's first solo photobook. Photobook and accordion postcard set are included. Two photocards and special photocard are included as pre-order gifts."
            },
            {
                id: 2006,
                title: "Feel Special Monograph",
                price: 34.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/0qq99b5/photobook-7.jpg',
                detail: "TWICE's limited edition Monograph. Photobook and 9 photocards are included."
            },
            {
                id: 2007,
                title: "The Year of Yes Monograph",
                price: 34.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/D4XcB5F/photobook-8.jpg',
                detail: "TWICE's limited edition Monograph. Photobook and 9 photocards are included."
            },
            {
                id: 2008,
                title: "Yes or Yes Monograph",
                price: 33.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/xqsw1jq/photobook-9.jpg',
                detail: "TWICE's limited edition Monograph. Photobook and 9 photocards are included."
            },
            {
                id: 2009,
                title: "Yes I'm Tzuyu Photobook Peach Version",
                price: 29.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/y5SsYJ0/photobook-10.jpg',
                detail: "This is Tzuyu's first solo photobook. Photobook and accordion postcard set are included. Two photocards and special photocard are included as pre-order gifts."
            },
            {
                id: 2010,
                title: "Yes I'm Tuzyu Photobook Blue Version",
                price: 33.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/S7bydTw/photobook-11.jpg',
                detail: "This is Tzuyu's first solo photobook. Photobook and accordion postcard set are included. Two photocards and special photocard are included as pre-order gifts."
            },
            {
                id: 2011,
                title: "Summer Nights Monograph",
                price: 33.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/Gspcmtb/photobook-12.jpg',
                detail: "TWICE's limited edition Monograph. Photobook and 9 photocards are included."
            },
            {
                id: 2012,
                title: "Eyes Wide Open Monograph",
                price: 29.99,
                type: 'photobook',
                imgUrl: 'https://i.ibb.co/z53QKSv/photobook-13.jpg',
                detail: "TWICE's limited edition Monograph. Photobook and 9 photocards are included."
            }
        ]
    },
    {
        id: 3,
        category: 'merch',
        routeName: '/merch',
        items: [
            {
                id: 3001,
                title: "TWICE Season's Greeting 2021",
                price: 45.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/yQ59BCZ/merch-1.jpg',
                detail: "The Moment Forever. TWICE Season's Greeting 2021. Standing calender, diary, message book, paper perfume, photocards, keyring and making DVD included."
            },
            {
                id: 3002,
                title: "TWICELIGHTS Twice World Tour 2019 Bluray Set",
                price: 46.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/cyGKBr1/merch-2.jpg',
                detail: "Limited Edition Bluray Set for TWICELIGHTS Concert in 2019"
            },
            {
                id: 3003,
                title: "TWICE TV-6 TWICE in Singapore",
                price: 47.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/jbXVccK/merch-3.jpg',
                detail: "Special Merch for TWICE TV-6 TWICE in Singapore Variety Show. Out sleeve, photobook, postcards and DVDs included."
            },
            {
                id: 3004,
                title: "TWICE Official Light Stick (Candy Bong Z)",
                price: 29.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/YtPvKjB/merch-4.jpg',
                detail: "TWICE official light stick. Candy Bong Z features RGB LED light ring and bluetooth. One random acrylic photocard included."
            },
            {
                id: 3005,
                title: "ONCE Begins Bluray Set",
                price: 45.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/txzhNzr/merch-5.jpg',
                detail: "Special Merch for Twice Fanmeeting ONCE Begins. Photobook, bluray(2-disc set) and sticker included."
            },
            {
                id: 3006,
                title: "TWICE Season's Greeting 2020",
                price: 39.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/YXZPZ9y/merch-6.jpg',
                detail: "TWICE Season's Greeting 2020. Standing calender, diary, Twicezine, mini-poster and photocards included."
            },
            {
                id: 3007,
                title: "TwiceTV-4 DVD Set Limited Edition",
                price: 45.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/4dzKLnj/merch-7.jpg',
                detail: "Limited Edition DVD set for TWICE TV-4 variety show. DVDs and photocards included."
            },
            {
                id: 3008,
                title: "More & More Sweater",
                price: 26.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/1J4hBnn/merch-8.png',
                detail: "More & More Sweater"
            },
            {
                id: 3009,
                title: "TWICE Keychain",
                price: 11.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/xjHv4g4/merch-9.png',
                detail: "TWICE Keychain"
            },
            {
                id: 3010,
                title: "TWICE Pink T-shirt",
                price: 22.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/ZYzXfBf/merch-12.png',
                detail: "TWICE Pink T-shirt"
            },
            {
                id: 3011,
                title: "TWICE Unicorn Sweater",
                price: 27.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/6PHNzQt/merch-13.png',
                detail: "TWICE Unicorn Sweater"
            },
            {
                id: 3012,
                title: "Eyes Wide Open T-shirt",
                price: 24.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/T89W9mb/merch-14.png',
                detail: "Eyes Wide Open T-shirt"
            },
            {
                id: 3013,
                title: "More & More T-shirt",
                price: 23.99,
                type: 'merch',
                imgUrl: 'https://i.ibb.co/n1jMZML/merch-15.png',
                detail: "More & More T-shirt"
            }
        ]
    }



];

export default shopData;