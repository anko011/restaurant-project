import {type Meal, type MealCategory} from "../types";

export const mealCategories: MealCategory[] = [
    {id: 1, name: 'Основные блюда'},
    {id: 2, name: 'Закуски'},
    {id: 3, name: 'Напитки'},
    {id: 4, name: 'Десерты'},
]

export const meals: Meal[] = [
    {
        id: 1,
        title: 'Nullam tempus porttitor',
        description: 'Nullam tempus porttitor pellentesque. Cras et velit vitae nulla rhoncus maximus. Etiam sodales libero a sollicitudin aliquam. Maecenas quis volutpat quam. Maecenas nec orci vel elit finibus tincidunt vel a lacus. Sed imperdiet orci quis laoreet malesuada. Sed rhoncus libero tortor, a aliquam enim egestas sit amet. Aenean consequat mauris id commodo mollis. Morbi purus enim, blandit sed ligula eu, pretium blandit neque. Suspendisse potenti.',
        image: {src: 'https://primefaces.org/cdn/primereact/images/usercard.png', alt: 'meat'},
        cost: 235,
        category: {
            id: 1,
            name: 'Основные блюда'
        },
    },
    {
        id: 2,
        title: 'Donec consequat',
        description: 'Morbi lacinia consectetur placerat. Donec consequat, odio quis dictum ullamcorper, mauris est pretium massa, ut tristique nibh lectus quis lectus. Nulla facilisi. Aliquam et ipsum vitae ipsum suscipit sollicitudin. Morbi vehicula ullamcorper rhoncus. Quisque ornare feugiat massa, vel efficitur sem. In ornare, massa et faucibus facilisis, diam leo semper nisl, ut condimentum erat nibh nec elit. Morbi bibendum mauris arcu, dignissim dignissim elit facilisis dictum. Etiam dapibus leo vitae turpis commodo, vitae vestibulum enim gravida. Sed ornare volutpat facilisis. Vestibulum fringilla sem tempor efficitur lacinia. Vivamus at nisl quis sem sagittis dapibus.',
        image: {src: 'https://primefaces.org/cdn/primereact/images/usercard.png', alt: 'meat'},
        cost: 150,
        category: {
            id: 2,
            name: 'Закуски',
        }
    },
    {
        id: 3,
        title: 'Fusce iaculis',
        description: 'Fusce iaculis nunc a lacinia laoreet. Curabitur dolor arcu, sollicitudin vel accumsan vitae, aliquet ut lacus. Nulla dui justo, luctus eu pellentesque eget, consequat sed massa. In vitae faucibus felis, et sodales est. Fusce elementum risus ipsum, vitae rhoncus erat condimentum sed. Cras lobortis hendrerit nisl, a molestie metus gravida eget. Maecenas gravida metus felis, sagittis posuere neque scelerisque a. Nam blandit dui a mauris tincidunt sodales. Praesent sodales felis orci, sit amet semper dolor viverra ac. Proin laoreet blandit diam sodales convallis.',
        image: {src: 'https://primefaces.org/cdn/primereact/images/usercard.png', alt: 'meat'},
        cost: 145,
        category: {
            id: 3,
            name: 'Напитки'
        }
    },
    {
        id: 4,
        title: 'Donec nunc magna',
        description: 'Donec nunc magna, sodales quis viverra et, vehicula sed orci. Donec varius tellus convallis ante rutrum aliquam. Duis pretium, tellus nec aliquet sodales, ipsum justo posuere risus, et sodales dui felis ut nulla. Vivamus aliquam scelerisque mauris, non faucibus elit auctor eu. Quisque quis congue ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam magna arcu, pulvinar sed tincidunt et, rhoncus id massa. Vestibulum pretium a mauris sit amet malesuada.',
        image: {src: 'https://primefaces.org/cdn/primereact/images/usercard.png', alt: 'meat'},
        cost: 324,
        category: {
            id: 4,
            name: 'Десерты'
        }
    },
    {
        id: 5,
        title: 'Nunc molestie porta',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie porta euismod. Suspendisse ac ex efficitur, sagittis purus aliquet, cursus nunc. In justo tortor, fringilla at pretium in, vestibulum a nulla. Quisque cursus dictum nisi, eu congue dui pulvinar vitae. Maecenas fermentum finibus justo, eget malesuada ligula luctus vel. Sed vitae lacus ut ligula pulvinar pellentesque. Praesent accumsan accumsan lectus at vulputate. Fusce hendrerit ex nisi, sit amet egestas neque laoreet id. Donec convallis maximus ullamcorper. Phasellus cursus porttitor sem eget blandit. Cras urna mauris, aliquam eget venenatis quis, interdum at est. Quisque id sagittis enim. In maximus diam turpis, vel iaculis quam volutpat eu. Donec sit amet nunc magna.',
        image: {src: 'https://primefaces.org/cdn/primereact/images/usercard.png', alt: 'meat'},
        cost: 156,
        category: {
            id: 1,
            name: 'Основные блюда'
        }
    },
    {
        id: 6,
        title: 'Maecenas elit',
        description: 'Maecenas elit sapien, tempor nec mauris vitae, auctor suscipit sapien. Nam ac dui at eros sollicitudin convallis. Cras convallis, tellus sit amet sodales fermentum, turpis sapien pellentesque odio, commodo dictum quam nunc vel felis. Suspendisse et semper dui. Cras sed blandit odio. Ut odio risus, ultrices id pretium eu, euismod nec elit. Praesent ullamcorper ante orci, vel cursus nulla aliquet eu. Vestibulum tempus porta diam vitae molestie.',
        image: {src: 'https://primefaces.org/cdn/primereact/images/usercard.png', alt: 'meat'},
        cost: 287,
        category: {
            id: 2,
            name: 'Закуски'
        }
    },

]

