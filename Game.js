
class Game {
    constructor() {
        this.show = new Show();
    }
    start() {
        this.show.tabCreate();
    }
};
const gam = new Game();
gam.start();


