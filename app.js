Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
            this.enteredValue = '';
        }
    }
}).mount('#app');


// const inputEL = document.querySelector('input')
// const buttonEl = document.querySelector('button')
// const listEl = document.querySelector('ul')

// function addGoal() {
//     const enteredValue = inputEL.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEL.value = '';
// }

// buttonEl.addEventListener('click', addGoal);