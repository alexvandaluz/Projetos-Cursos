const defaultCharecter = {
    name: '',
    life : 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) =>{
    return {
        ...defaultCharecter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSocerer = (name) =>{
    return{
        ...defaultCharecter,
        name,
        life:50,
        maxLife:50,
        attack:14,
        defense:4
    }
}

const createLittleMonster = () => {
    return{
        ...defaultCharecter,
        name: 'Little Monster',
        life:40,
        maxLife:40,
        attack:4,
        defense:4
    }
}

const createBigMonster = () => {
    return{
        ...defaultCharecter,
        name: 'Big Monster',
        life:120,
        maxLife:120,
        attack:16,
        defense:6
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1,fighter2,fighter1El,fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))

        this.update();
    },

    update(){
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} tem ${this.fighter1.life.toFixed(1)}HP`;

        let f1Pct =(this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width =`${f1Pct}%`

        //Fighter 1
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} tem ${this.fighter2.life.toFixed(1)}HP`;

        let f2Pct =(this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width =`${f2Pct}%`
        //Fighter 2
    },
    doAttack(attacking, attacked){

        if(attacking.life <= 0 || attacked.life <= 0){
            log.addMessage('Alguem está morto, nao pode atacar.')
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;

        const actualDefense = attacked.defense * defenseFactor;
        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano no ${attacked.name}`)
        }else{
            log.addMessage(`${attacked.name} conseguiu defender.`)
        }

        this.update();
    }
}

const log = {
    list: [],
    addMessage(msg){
        this.list.push(msg);
        this.render()
    },
    render(){
        const logEl = document.querySelector('.log');
        logEl.innerHTML ='';

        for (let i in this.list){
            logEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}