let log = new Log(document.querySelector('.log'));
let char = new Knight('Bonieky');
let monster = new littleMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start()