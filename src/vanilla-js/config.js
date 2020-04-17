var config = {
    style: 'mapbox://styles/kerfy/ck8sadhtn0uip1inskm9tqsa1',
    accessToken: 'pk.eyJ1Ijoia2VyZnkiLCJhIjoiY2szOTE0dG43MDE4dDNqbzZ4ajdld3A1eCJ9.IYIY3O7YU3fZvR2izUZUGQ',
    showMarkers: false,
    theme: 'red',
    alignment: 'left',
    title: 'How COVID-19 Could Overload Healthcare Workers in Kenya',
    subtitle: 'Six Week Projections',
    footer: 'Source: PEPFAR',
    chapters: [{
            // Outstanding: 1) Need new picture.  
            id: 'Intro',
            title: 'Visualing the Strain on Healthcare Workers in Kenya',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/COVIDCases.png',
            description: 'This story map is based off an impact simulation developed by PEPFAR to capture the potential effects of COVID-19 on healthcare workers in Kenya.  While the model is susceptible to change, the hope is to inform our partners of the possible impact a COVID-19 outbreak will have on PEPFAR programming nationwide.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            }]
    },
        
        {
            // Outstanding: 1) needs a small legend (doctors= blue; nurses=red) added to call out box.  2) Maps added as outlined in description.
            id: 'Aspect-1',
            title: 'An Expected Decrease in Available Healthcare Workers',
            image: 'img/WeekOne.png',
            description: 'RED = Nurse Capacity <br> BLUE = Doctor Capacity <br><br> If current trends continue, COVID-19 will likely significantly reduce the number of available healthcare workers in Kenya. As infections increase, more and more healthcare workers will become affected and be unable to provide healthcare services. The map in this box shows the number of available doctors and nurses currently, and the large map shows the projected number of available doctors and nurses in six weeks.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc Week5-6',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse Week5-6',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc Week5-6',
                opacity: 0.
            },
            {
                layer: 'April 8th - Nurse Week5-6',
                opacity: 0
            }]
        },

        {
            id: 'Lamu',
            description: 'By week 1, total staff capacity in Isiolo and Lamu will be critically low to non-existent.',
            location: {
                center: [37.40658, -0.17094],
                zoom: 6.70,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'Lamu-isiolo',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'Lamu-isiolo',
                opacity: 0.
            }]
        },
        {
            //Outstanding: 1) add the graph "number of COVID visits: HIV population" from the impact model 2) add the map as outlined in description
            id: 'Aspect3-HIVgraph',
            title: 'An Expected Increase in Health Visits by People Living with HIV',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/kenyahos.jpg',
            description: 'While the number of nurses and doctors will decrease, the number of health visits will dramatically increase as shown by projected number of COVID visits just by people living with HIV in the graph.  The map shows the number of health visits by the total population in week one.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            {
                layer: 'April 8th - Nurse Week1',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Doc Week1',
                opacity: 0.45
            }
        ],
            onChapterExit: [
            {
                layer: 'April 8th - Nurse Week1',
                opacity: 0
            },
            {
                layer: 'April 8th - Doc Week1',
                opacity: 0
            }]
        },

        {
            //Outstanding: 1) add map as outlined in description 2)picture/graphs needs to be replaced with something
            id: 'Aspect3-Week-2',
            title: 'Week Two Health Visits',
            // image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/week1combo.png',
            description: 'By week two, the increase in health visit demand by the total population will begin to strain the limited number of available healthcare workers as the number of visits shift sharply upward.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
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
            //Outstanding: 1) add map as outlined in description 2)picture/graphs needs to be replaced with something
            id: 'Aspect3-Week-Two',
            title: 'Week Two Health Visits',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/week3chart.png',
            description: 'By week two, the increase in health visit demand by the total population will begin to strain the limited number of available healthcare workers as the number of visits shift sharply upward.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
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
            //Outstanding: map needs to be updated to reflect week three of aspect 3 2)new image neededid: 'Week4',
            id: 'Aspect3-Week-Three',
            title: 'Week Three Health Visits',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/week3chart.png',
            description: 'By week three, the demand is already far outpacing capacity.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc Week3',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse Week3',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc Week3',
                opacity: 0.
            },
            {
                layer: 'April 8th - Nurse Week3',
                opacity: 0
            }]
        },

        {
            //Outstanding: Needs updated map based on aspect3 week4
            id: 'Aspect3-Week-Four',
            title: 'Week Four Health Visits',
            // image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/COVIDVisitsHIV.png',
            description: 'By week 4, both doctor and nurse capacity are projected to be just a fraction of current status.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc Week4',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse Week4',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc Week4',
                opacity: 0.
            },
            {
                layer: 'April 8th - Nurse Week4',
                opacity: 0
            }]
        },

        {
            //Outstanding: 1)needs updated map (aspect3 week5) and 2) updated image
            id: 'Aspect3-Week-Five',
            title: 'Health Visits Week 5 & 6',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/COVIDVisitsHIV.png',
            description: 'By week 5, the outbreak has caused an unsustainable strain on exisiting healthcare worker capacity. By week 6, the healthcare system will be so overloaded, irreparable damage will likely have occurred.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc Week5-6',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse Week5-6',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc Week5-6',
                opacity: 0.
            },
            {
                layer: 'April 8th - Nurse Week5-6',
                opacity: 0
            }]
        },
    ]
};


// location: {
//     center: [35.70804, 0.01256],
//     zoom: 6.26,
//     pitch: 0.00,
//     bearing: 0.00
// },