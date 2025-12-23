//차량 모델 종류
export const modelMap = {
    levante: {
        modalPath: 'levante-lower-meshopt.glb',
        position: [0,-0.75,0],
        scale: [100,100,100],
        rotation: [0,(-Math.PI / 2) + 1.45, 0],
        lightpower: 5,
        defaultColor: '#DDDDDD'
    },
    cielo: {
        modalPath: 'cielo.glb',
        position: [0,-0.75,0],
        scale: [108,108,108],
        rotation: [0,(-Math.PI / 2) + 1.45, 0],
        lightpower: 1,
        defaultColor: '#a1a8af'
    }
}

//차량 모델별 컬러
export const ColorChart = {
    levante: [
        {
            state:'#DDDDDD',
            des:'Bianco',
            default:true
        },
        {
            state:'#898384',
            des:'Grigio',
            default:false
        },
        {
            state:'#010102',
            des:'Nero',
            default:false
        },
        {
            state:'#433837',
            des:'Rame',
            default:false
        },
        {
            state:'#021850',
            des:'Blu Nobile',
            default:false
        },
        {
            state:'#a81710',
            des:'ROSSO Potente',
            default:false
        },
    ],
    cielo: [
        {
            state:'#a1a8af',
            des:'Grigio lncognito',
            default:true
        },
        {
            state:'#4e5359',
            des:'Grigio Mistero',
            default:false
        },
        {
            state:'#94020f',
            des:'Rosso Vincente',
            default:false
        },
        {
            state:'#00049b',
            des:'Blu Infinito',
            default:false
        },
        {
            state:'#d0a733',
            des:'Giallo Genio',
            default:false
        },
    ]
}

//풍경
export const windowImg = [
    {
        id:1,
        title: '배경1',
        state: '/image/tree-background.jpg',
        des: '단풍으로 물든 숲 속',
        default: true
    },
    {
        id:2,
        title: '배경2',
        state: '/image/tree-background2.jpg',
        des: '푸른 녹음이 가득한 여름날',
        default: false
    },
    {
        id:3,
        title: '배경3',
        state: '/image/city.jpg',
        des: '야경 속 강변 드라이브',
        default: false
    },
    {
        id:4,
        title: '배경4',
        state: '/image/city2.jpg',
        des: '도시의 불빛',
        default: false
    },
]

//캘리퍼
export const calliper = [
    {
        id:1,
        title: '캘리퍼블루',
        state: '#314aad',
        des: 'Blue',
        default: true
    },
    {
        id:2,
        title: '캘리퍼그레이',
        state: '#888d93',
        des: 'Gray',
        default: false
    },
    {
        id:3,
        title: '캘리퍼네로',
        state: '#13161b',
        des: 'Nero',
        default: false
    },
    {
        id:4,
        title: '캘리퍼로소',
        state: '#e90708',
        des: 'Rosso',
        default: false
    },
    {
        id:5,
        title: '캘리퍼라임',
        state: '#d4fb15',
        des: 'Lime',
        default: false
    },
]