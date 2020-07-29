class Show {
    constructor() {
        const tab = [500];
        tab.fill(0);
        this.divBoardLeft = document.querySelector('div.boardLeft');
        this.divBoardRight = document.querySelector('div.boardRight');
        this.logic = new Logic(tab);
        this.tableRight = new TableRight();
        this.tabCreate = () => {
            let a = 0;
            for (let i = 0; i < 100; i++) {
                const divB = document.createElement('div');
                divB.className = 'grill';
                divB.dataset.id = "a" + a++;
                divB.addEventListener('click', this.lookRight);
                divB.addEventListener('mouseover', this.mouseOverRight);
                divB.addEventListener('mouseout', this.mouseOutRight);
                this.divBoardRight.appendChild(divB);
            };
            this.doR();
            this.logic.tab.fill(0);
            a = 0;
            for (let i = 0; i < 100; i++) {
                const divB = document.createElement('div');
                divB.className = 'grill';
                divB.dataset.id = a++;
                divB.addEventListener('click', this.createS);
                divB.addEventListener('mouseover', this.mouseover);
                divB.addEventListener('mouseout', this.mouseout);
                this.divBoardLeft.appendChild(divB);
            };
        }

        this.doR = () => {
            while (this.logic.getR() < 10) {
                let rand = Math.floor(Math.random() * 100);
                this.logic.randomShip(rand);
            }
        }
        this.createS = (e) => {
            let center = Number(e.target.dataset.id);
            this.logic.createShip(center);
        }
        this.mouseover = (e) => {
            let center = Number(e.target.dataset.id);
            this.logic.mouseover(center);
        }
        this.mouseout = (e) => {
            let center = Number(e.target.dataset.id);
            this.logic.mouseout(center);
        }
        this.lookRight = (e) => {

            this.tableRight.showIe(e);
        }
        this.mouseOverRight = (e) => {

            this.tableRight.mouseOverPlayer(e);
        }
        this.mouseOutRight = (e) => {
            this.tableRight.mouseOutPlayer(e);
        }
    }
};


