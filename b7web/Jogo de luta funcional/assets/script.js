const char = createKnight('Bonieky');
const monster = createLittleMonster();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
)