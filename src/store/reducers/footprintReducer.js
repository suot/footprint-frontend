const initState = {
    footprints: [
        {
            id: 1,
            startDate: '2016-09-26',
            endDate: '2016-10-04',
            country: 'Korea',
            city: 'Seoul',
            cost: 2500,
            rating: 4,
            // attractions: [
            //     {
            //         name: 'Lihua University',
            //         location: '',
            //         recommendation: false
            //     },
            //     {
            //         name: 'Nanyi Island',
            //         location: '',
            //         recommendation: true
            //     },
            // ]
        },
        {
            id: 2,
            startDate: '2017-06-11',
            endDate: '2017-06-18',
            country: 'Japan',
            city: 'Kyoto',
            cost: 3500,
            rating: 5,
            // attractions: [
            //     {
            //         name: 'Mountain Lan',
            //         location: '',
            //         recommendation: true
            //     }
            // ]
        },
    ]
}

const footprintReducer = (state = initState, action) => {
    return state;
}

export default footprintReducer