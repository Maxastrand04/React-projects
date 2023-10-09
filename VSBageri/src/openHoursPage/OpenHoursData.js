const bakeryOpenHours = [
    "08:00 - 20:00",
    "07:00 - 20:00",
    "07:00 - 20:00",
    "07:00 - 20:00",
    "07:00 - 20:00",
    "07:00 - 21:00",
    "08:00 - 21:00",
]

const bakerySpecialHours = []

const scOpenHours = [
    "10:00 - 17:00",
    "08:00 - 19:00",
    "08:00 - 19:00",
    "08:00 - 19:00",
    "08:00 - 19:00",
    "08:00 - 19:00",
    "09:00 - 17:00",
]
const fsOpenHours = [
    "09:00 - 16:00",
    "08:00 - 18:00",
    "08:00 - 18:00",
    "08:00 - 18:00",
    "08:00 - 18:00",
    "08:00 - 18:00",
    "09:00 - 16:00",
]

export const storesInfo = [
    {
        storeName: "Bageriet",
        storeID: "c",
        img: "https://www.panea.se/wp-content/uploads/2021/04/Vallentuna-Stenungsbageri2.jpg", // Lägg in en bildlänk här 
        link: "section--bageriet",
        adress: "AlléVägen 6A",
        storesOpenHours: bakeryOpenHours,
    },
    {
        storeName: "SportsClub",
        storeID: "sc",
        img: "https://lisuna.se/onewebstatic/ae2d179b50-DSC_0254.jpg", 
        link: "section--sc",
        adress: "Tellusvägen 21",
        storesOpenHours: scOpenHours,
    },
    {
        storeName: "Färgskrapan",
        storeID: "fs",
        img: "https://mb.cision.com/Public/10372/3454975/b7ad29ab6b6198e1_800x800ar.jpg", 
        link: "section--fs",
        adress: "Tusbystråket 1C",
        storesOpenHours: fsOpenHours,
    }
]

export const weekDays = [
    'måndag',
    'tisdag',
    'onsdag',
    'torsdag',
    'fredag',
    'lördag',
    'söndag'
]