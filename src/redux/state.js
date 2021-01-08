let store = {
    _callSubscriber () {
        console.log("Changed");
    },
    _state: {
        mainPage : {
            productsData: [
                {title: "Смартфоны", first: "Acer", second: "Lenovo", third: "Asus", fourth: "Samsung", fifth: "Apple"},
                {title: "Ноутбуки", first: "Meizu", second: "Redmi", third: "Asus", fourth: "Famous", fifth: "Rich"},
                {title: "Телевизоры", first: "LG", second: "PHILIPS", third: "Old", fourth: "Very old", fifth: "Nice"},
                {title: "Скидки", first: "LG", second: "PHILIPS", third: "Old", fourth: "Very old", fifth: "Nice"}
            ]
        },

        notePage: {
            noteData: [
                {title: "Диагональ 15,5", first: "Acer", second: "Lenovo", third: "Asus", fourth: "Samsung", fifth: "Apple"},
                {title: "Диагональ 17,7", first: "Meizu", second: "Redmi", third: "Asus", fourth: "Famous", fifth: "Rich"},
                {title: "Макбуки", first: "LG", second: "PHILIPS", third: "Old", fourth: "Very old", fifth: "Nice"}
            ]
        },

        footerPage : {
            posts : [
                {id: "1", message: "Nice site"},
                {id: "2", message: "Bad view"},
                {id: "3", message: "Lenovo is the best"},
                {id: "4", message: "Nice computer"},
                {id: "5", message: "Nice day"}
            ],
            newPostText : "new-text"
        }
    },

    getState(){
        return this._state;
    },

    subscriber (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 6,
                message: this._state.footerPage.newPostText
            };
            this._state.footerPage.posts.push(newPost)
            this._state.footerPage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST'){
            this._state.footerPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

window.store = store;
export default store;