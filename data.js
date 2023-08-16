import four_frame from './public/projects/four_frame.png'
import four_frame_2 from './public/projects/four_frame_2.png'

import nuko_ai from './public/projects/nuko_ai.png'
import nuko_ai_2 from './public/projects/nuko_ai_2.png'
import nuko_ai_3 from './public/projects/nuko_ai_3.png'

import spotify_clon from './public/projects/spotify_clon.png'
import spotify_clon_2 from './public/projects/spotify_clon_2.png'
import spotify_clon_3 from './public/projects/spotify_clon_3.png'

import solid_camper from './public/projects/solid_camper.png'

export const data = [
    {
        id: 1,
        title: 'Nuko AI',
        description: 'Aplicación Web que conecta con el API de open ai para generar textos, código, imágenes incluso música.',
        img: nuko_ai,
        urlDeploy: 'https://nuk-ai.vercel.app/',
        urlRepo: 'https://github.com/danielmateu/ai-sass',
        sliderImages: [
            {
                id: 1,
                img: nuko_ai,
            },
            {
                id: 2,
                img: nuko_ai_2,
            },
            {
                id: 3,
                img: nuko_ai_3,
            },

        ],
    },
    {
        id: 2,
        title: 'Spotify Clone',
        description: 'Clon de Spotify, primer contacto con NextJs 13, ya tocaba actualizarse. Siguiendo las indicaciones de Code With Antonio para comprobar las nuevas features!',
        img: spotify_clon,
        urlDeploy: 'https://spotify-clone-dmp.vercel.app/',
        urlRepo: 'https://github.com/danielmateu/spotify-clone',
        sliderImages: [
            {
                id: 1,
                img: spotify_clon,
            },
            {
                id: 2,
                img: spotify_clon_2,
            },
            {
                id: 3,
                img: spotify_clon_3,
            },
        ],
    },
    {
        id: 3,
        title: 'Solid Camper Store',
        description: 'Ecommerce completo, con carrito de la compra, pasarela de pago, y panel de administración.',
        img: solid_camper,
        urlDeploy: 'https://solidcamper.herokuapp.com/',
        urlRepo: 'https://github.com/danielmateu/05-teslo-shop',
        sliderImages: [
            {
                id: 1,
                img: solid_camper,
            },
            // {
            //     id: 2,
            //     img: four_frame_2,
            // },
        ],
    },
    {
        id: 4,
        title: 'Four Frame',
        description: 'Clon de Netflix, en el que se puede ver el trailer de las películas, y filtrar por categorías. Creado con React, Nextjs, Tailwindcss, y la API de themoviedb.org',
        img: four_frame,
        urlDeploy: 'https://four-frame.vercel.app/',
        urlRepo: 'https://github.com/danielmateu/four-frame',
        sliderImages: [
            {
                id: 1,
                img: four_frame,
            },
            {
                id: 2,
                img: four_frame_2,
            },
        ],
    },

    // {
    //     id: 2,
    //     img: solid_camper,
    //     info: 'ecommerce completa, creada con nextjs',
    //     src: 'https://solidcamper.herokuapp.com/'
    // },
    // {
    //     id: 3,
    //     img: guitarla,
    //     info: 'Tienda de guitarras',
    //     src: 'https://guitarla-next-black-mu.vercel.app/'
    // },
    // {
    //     id: 4,
    //     img: tictactoe,
    //     info: 'Clásico juego del 3 en raya',
    //     src: 'https://tic-tac-toe-ecru-two.vercel.app/'
    // },
    // {
    //     id: 5,
    //     img: freshCoffee,
    //     info: 'Quiosco enfocado a la típica cafetería',
    //     src: 'https://nukiosco-app.vercel.app/'
    // },
    // {
    //     id: 6,
    //     img: calendar,
    //     info: 'Full Mern Calendar',
    //     src: 'https://mern-calendar-dmateu.herokuapp.com/auth/login'
    // },
    // {
    //     id: 7,
    //     img: control_gastos,
    //     info: 'Planificador de gastos',
    //     src: 'https://control-de-gastos-nine.vercel.app/'
    // },
    // {
    //     id: 8,
    //     img: crypto,
    //     info: 'Aplicación para convertir el valor de las monedas más usadas a las Crypto más demandadas',
    //     src: 'https://cryptos-psi.vercel.app/'
    // },



];