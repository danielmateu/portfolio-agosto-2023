import {
    four_frame,
    four_frame_2
} from './public/projects/four_frame'

import {
    nuko_ai,
    nuko_ai_2,
    nuko_ai_3,
    nuko_ai_4
} from './public/projects/nuko_ai'

import {
    spotify_clon,
    spotify_clon_2,
    spotify_clon_3
} from './public/projects/spotify_clone'

import {
    solid_camper,
    solid_camper_2,
    solid_camper_3,
    solid_camper_4
} from './public/projects/solid_camper'

import {
    dudes_ai,
    dudes_ai_2,
    dudes_ai_3
} from './public/projects/dudes_ai'

import {
    my_places,
    my_places_2,
    my_places_3,
    my_places_4,
    my_places_5
} from './public/projects/my_places'

import {
    discord,
    discor_2
} from './public/projects/discord'

import {
    nukotion,
    nukotion_3
} from './public/projects/nukotion'



import { crm_clientes, crm_clientes_2, crm_clientes_3 } from './public/projects/crm_clientes';
import { tic_tac_toe } from './public/projects/tic_tac_toe';
import { cripto_app } from './public/projects/crypto';
import { gastos } from './public/projects/control_gastos';
import { guitarla } from './public/projects/guitarla';
import { calendar } from './public/projects/mern_calendar';

export const data = [
    {
        id: 13,
        title: 'Discord Clone',
        description: 'Clon de Discord, en el que se puede chatear con los usuarios que estén conectados.',
        img: discord,
        urlDeploy: 'https://nukitord-8fcd1b4a9158.herokuapp.com/',
        urlRepo: 'https://github.com/danielmateu/discord_clone',
        sliderImages: [
            {
                id: 1,
                img: discord,
            },
            {
                id: 2,
                img: discor_2,
            },
        ]
    },
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
        title: 'Dudes AI',
        description: 'Aplicación que consume los recursos de la IA para hablar con nuestros colegas más top.',
        img: dudes_ai,
        urlDeploy: 'https://ai-dudes.vercel.app/',
        urlRepo: 'https://github.com/danielmateu/ai-dudes',
        sliderImages: [
            {
                id: 1,
                img: dudes_ai,
            },
            {
                id: 2,
                img: dudes_ai_2,
            },
            {
                id: 3,
                img: dudes_ai_3,
            }
        ]
    },
    {
        id: 3,
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
        id: 12,
        title: 'My Places',
        description: 'Clon de la web de Airbnb, en el que se puede ver los alojamientos disponibles, y filtrar por categorías. Creado con React, Nextjs, Tailwindcss.',
        img: my_places,
        urlDeploy: 'https://my-places-chi.vercel.app/',
        urlRepo: 'https://github.com/danielmateu/airbnb',
        sliderImages: [
            {
                id: 1,
                img: my_places,
            },
            {
                id: 2,
                img: my_places_2,
            },
            {
                id: 3,
                img: my_places_3,
            },
            {
                id: 4,
                img: my_places_4,
            },
            {
                id: 5,
                img: my_places_5,
            }
        ]
    },
    {
        id: 14,
        title: 'Notion Clone',
        description: 'Clon de Notion, en el que se puede crear notas, y editarlas. Creado con React, Nextjs 13, Tailwindcss, Convex para la gestión del backend y Clerk para la autenticación',
        img: nukotion,
        urlDeploy: 'https://nukotion-owlh0l4w7-danielmateu.vercel.app/',
        urlRepo: 'https://github.com/danielmateu/nukotion',
        sliderImages: [
            {
                id: 1,
                img: nukotion,
            },
            {
                id: 2,
                img: nukotion_3,
            }
        ]
    }
    ,
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
    {
        id: 5,
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
            {
                id: 2,
                img: solid_camper_2,
            },
            {
                id: 3,
                img: solid_camper_3,
            },
            {
                id: 4,
                img: solid_camper_4,
            }
        ],
    },
    {
        id: 6,
        title: 'CRM de Clientes',
        description: ' CRM (Customer Relationship Management) que permite la gestión de clientes, pedidos y productos.',
        img: crm_clientes,
        urlDeploy: 'https://crm-cliente-next.vercel.app',
        urlRepo: 'https://github.com/danielmateu/crm-cliente-next',
        sliderImages: [
            {
                id: 1,
                img: crm_clientes,
            },
            {
                id: 2,
                img: crm_clientes_2,
            },
            {
                id: 3,
                img: crm_clientes_3,
            }
        ]
    },
    {
        id: 7,
        title: 'Tic Tac Toe',
        description: 'Clásico juego del 3 en raya realizado integramente con JavaScript y Tailwindcss para el diseño.',
        img: tic_tac_toe,
        urlDeploy: 'https://tic-tac-toe-ecru-two.vercel.app/',
        urlRepo: 'https://github.com/danielmateu/tic-tac-toe',
        sliderImages: []
    },
    {
        id: 8,
        title: 'Crypto App',
        description: 'Aplicación para convertir el valor de las monedas más usadas a las Crypto más demandadas',
        img: cripto_app,
        urlDeploy: 'https://cryptos-psi.vercel.app/',
        urlRepo: 'https://github.com/danielmateu/cryptos',
    },
    {
        id: 9,
        title: 'Control de Gastos',
        description: 'Aplicación para controlar los gastos mensuales, y poder ver en que se gasta más dinero.',
        img: gastos,
        urlDeploy: 'https://control-de-gastos-nine.vercel.app/',
        urlRepo: 'https://github.com/danielmateu/control-de-gastos',
    },
    {
        id: 10,
        title: 'Guitar LA',
        description: 'Tienda y un blog con artículos de interés para los guitarristas.',
        img: guitarla,
        urlDeploy: 'https://guitarla-next-black-mu.vercel.app/',
        urlRepo: ''
    },
    {
        id: 11,
        title: 'Mern Calendar',
        description: 'Calendario con eventos, creado con MERN stack.',
        img: calendar,
        urlDeploy: 'https://mern-calendar-dmateu.herokuapp.com/',
        urlRepo: 'https://github.com/danielmateu/calendar-mern-revisited',
    },



];