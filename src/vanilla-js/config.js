var config = {
    style: 'mapbox://styles/kerfy/ck8sadhtn0uip1inskm9tqsa1',
    accessToken: 'pk.eyJ1Ijoia2VyZnkiLCJhIjoiY2szOTE0dG43MDE4dDNqbzZ4ajdld3A1eCJ9.IYIY3O7YU3fZvR2izUZUGQ',
    showMarkers: false,
    theme: 'red',
    alignment: 'left',
    title: 'THE EFFECTS OF COVID ON HIV PROGRAMMING IN KENYA',
    subtitle: '[6 Week Projections Based on PEPFAR Modelling]',
    // byline: 'By PEPFAR',
    footer: 'Source: PEPFAR.',
    chapters: [{
            id: 'Countrywide-1',
            title: 'The Waiting Game',
            // video: 'https://www.youtube.com/watch?v=7s5WrI3bZ8o',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/COVIDCases.png',
            description: 'Based on current models, COVID-19 is expected to have a significant affect on existing available healthcare staff within Kenya. The following information is a projection of the strain a possible outbreak will have on exisiting healthcare capacities. While these models are susceptible to change, the hope is to inform our partners of the possible impact a COVID-19 outbreak will have on PEPFAR programming nationwide. ',
            location: {
                center: [36.53520, 1.31810],
                zoom: 5.71,
                pitch: 2.50,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0.45
            }]
    },

        {
            id: 'Countrywide-2',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/kenyahos.jpg',
            description: 'Please note that in the following maps, the BLUE circles represent doctor capacity by county. The RED circles represent nurse capacity by county.',
            location: {
                center: [36.53520, 1.31810],
                zoom: 5.71,
                pitch: 2.50,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0
            }]
        },

        {
            id: 'Week-1',
            title: 'WEEK 1 PROJECTION',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/week1combo.png',
            description: 'In week one into an outbreak, our capacity will be already be stressed but still generally manageable.',
            location: {
                center: [36.53520, 1.31810],
                zoom: 5.71,
                pitch: 2.50,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc Week1',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse Week1',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc Week1',
                opacity: 0.
            },
            {
                layer: 'April 8th - Nurse Week1',
                opacity: 0
            }]
        },

        {
            id: 'Week-1N',
            image: 
            description: 'By week 1, total staff capacity in Isiolo and Lamu will likely be non-existent.',
            location: {
                center: [39.21280, -0.23952],
                zoom: 7.66,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'Kenya-NONE',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'Kenya-NONE',
                opacity: 0.
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0
            }]
        },

        {
            id: 'Week-2',
            title: 'WEEK 2 PROJECTION',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/week2chart.png',
            description: 'The health facility compared to fake neighborhoods',
            location: {
                center: [36.53520, 1.31810],
                zoom: 5.71,
                pitch: 2.50,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc Week2',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse Week2',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc Week2',
                opacity: 0.
            },
            {
                layer: 'April 8th - Nurse Week2',
                opacity: 0
            }]
        },

        {
            id: 'HOS-Province',
            title: 'Hospital Provincial Lunda Sul',
            image: 'http://s2.reutersmedia.net/resources/r/?m=02&d=20181025&t=2&i=1318543827&r=LYNXNPEE9O16B&w=1200',
            description: 'The main hospital within Saurimo, this location also includes the Centro Materno Infantil de Saurimo.',
            location: {
                center: [20.39212, -9.66001],
                zoom: 17.00,
                pitch: 51.00,
                bearing: -56.80
            },
            onChapterEnter: [{
                    layer: 'Saurimo Color Health',
                    opacity: 0.65
                },
                { 
                    layer: 'Saurimo Buildings',
                    opacity: 0.45
                },
                {
                    layer: 'S Health Labels',
                    opacity: 0  
                },
                {
                    layer: 'Saurimo Fake Treatment',
                    opacity: 0.65
                }
            ],
            onChapterExit: [{
                    layer: 'Saurimo Color Health',
                    opacity: 0
                },
                {
                    layer: 'Saurimo Fake Treatment',
                    opacity: 0
                },
                { 
                    layer: 'Saurimo Buildings',
                    opacity: 0
                },
            ]
        },

        {
            id: 'HOS-Province-2',
            title: 'Hospital Provincial Lunda Sul',
            image: 'http://s2.reutersmedia.net/resources/r/?m=02&d=20181025&t=2&i=1318543827&r=LYNXNPEE9O16B&w=1200',
            description: 'The main hospital within Saurimo, this location also includes the Centro Materno Infantil de Saurimo.',
            location: {
                center: [20.39212, -9.66001],
                zoom: 17.00,
                pitch: 51.00,
                bearing: -56.80
            },
            onChapterEnter: [{
                layer: 'Saurimo Color Health',
                opacity: 0.65
            }],
            onChapterExit: [{
                layer: 'Saurimo Color Health',
                opacity: 0
            }],
        },

        {
            id: 'HOS-Mulombe',
            title: 'Centro de Saude Mulombe',
            image: 'https://live.staticflickr.com/1943/31203198868_01b23c0821_b.jpg',
            description: 'A health facility on the outside of the city. This center services a KP population.',
            location: {
                center: [20.39629, -9.69189],
                zoom: 16.68,
                pitch: 30.00,
                bearing: -16.32
            },
            onChapterEnter: [{
                layer: 'Saurimo Color Health',
                opacity: 0.65
            }, ],
            onChapterExit: [{
                layer: 'Saurimo Color Health',
                opacity: 0
            }, ]
        }
    ]
};
