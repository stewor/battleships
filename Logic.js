class Logic {
    constructor(tab) {
        this.tab = tab;
        this.as = 0;
        this.getA = () => this.as;
        this.setA = () => this.as++;
        this.ar = 0;
        this.getR = () => this.ar;
        this.setR = () => this.ar++;
        this.push = true;
        const tabRandom = [1, 0, 0, 0];
        this.getTabRandom = () => tabRandom;
        this.setTabRandom = (a, b) => {
            tabRandom[a] = b;
        }

        const tabTemp = [1, 0, 0, 0];
        this.getTabTemp = () => tabTemp;
        this.setTabTemp = (a, b) => {
            tabTemp[a] = b;
        }
        this.getTab = () => this.tab;
        this.setTab = (a, b) => {
            this.tab[a] = b;
        }
        this.convertTab = (e) => {
            let as1 = e + 10;
            let g = Math.floor(e / 10);
            return as1 + (g * 20) + 90;
        }

        this.putShipOnBoard = (center) => {
            if (this.push) {
                if (this.getA() >= 10) {
                    this.push = false;
                    for (let i = 0; i < 100; i++) {
                        document.querySelector(`[data-id="${i}"]`).classList.add('notclickable');
                    }
                    return;
                }

                let cente = this.convertTab(center);
                this.iconShip();
                this.setTabTemp(0, 0);
                this.setTabTemp(1, 1);
                if (this.getA() === 2) {
                    this.setTabTemp(1, 0);
                    this.setTabTemp(2, 1);
                }
                if (this.getA() === 5) {
                    this.setTabTemp(3, 1);
                    this.setTabTemp(2, 0);
                }

                if (this.getA() === 0) {

                    document.querySelector(`[data-id="${center + 1}"]`).classList.add('notclickable');
                    document.querySelector(`[data-id="${center + 2}"]`).classList.add('notclickable');
                    document.querySelector(`[data-id="${center + 3}"]`).classList.add('notclickable');
                    document.querySelector(`[data-id="${center}"]`).classList.add('notclickable');
                    document.querySelector(`[data-id="${center + 1}"]`).classList.add('ong');
                    document.querySelector(`[data-id="${center + 2}"]`).classList.add('ong');
                    document.querySelector(`[data-id="${center + 3}"]`).classList.add('ong');
                    document.querySelector(`[data-id="${center}"]`).classList.add('ong');
                    this.tabSetFour(cente);
                    this.setA();
                    return;
                }

                if (this.getA() > 0 && this.getA() < 3) {

                    document.querySelector(`[data-id="${center + 1}"]`).classList.add('notclickable');
                    document.querySelector(`[data-id="${center + 2}"]`).classList.add('notclickable');
                    document.querySelector(`[data-id="${center}"]`).classList.add('notclickable');
                    document.querySelector(`[data-id="${center + 1}"]`).classList.add('ong');
                    document.querySelector(`[data-id="${center + 2}"]`).classList.add('ong');
                    document.querySelector(`[data-id="${center}"]`).classList.add('ong');
                    this.tabSetThree(cente);
                    this.setA();
                    return;
                }

                if (this.getA() >= 3 && this.getA() < 6) {
                    document.querySelector(`[data-id="${center + 1}"]`).classList.add('notclickable');
                    document.querySelector(`[data-id="${center}"]`).classList.add('notclickable');
                    document.querySelector(`[data-id="${center + 1}"]`).classList.add('ong');
                    document.querySelector(`[data-id="${center}"]`).classList.add('ong');
                    this.tabSetTwo(cente);
                    this.setA();
                    return;
                }
                if (this.getA() >= 6 && this.getA() < 10) {
                    document.querySelector(`[data-id="${center}"]`).classList.add('notclickable');
                    document.querySelector(`[data-id="${center}"]`).classList.add('ong');
                    this.tabSetOne(cente);
                    this.setA();
                    return;
                }
            }
        }
        this.mouseover = (center) => {
            let cente = this.convertTab(center);

            if (this.getA() === 0 && center % 10 < 7) {
                document.querySelector(`[data-id="${center}"]`).classList.add('on');
                document.querySelector(`[data-id="${center + 1}"]`).classList.add('on');
                document.querySelector(`[data-id="${center + 2}"]`).classList.add('on');
                document.querySelector(`[data-id="${center + 3}"]`).classList.add('on');
            }
            if (this.getA() > 0 && this.getA() < 3 && center % 10 < 8 && this.getTab()[cente] !== 10 && this.getTab()[cente + 1] !== 10 && this.getTab()[cente + 2] !== 10) {
                document.querySelector(`[data-id="${center}"]`).classList.add('on');
                document.querySelector(`[data-id="${center + 1}"]`).classList.add('on');
                document.querySelector(`[data-id="${center + 2}"]`).classList.add('on');

            }
            if (this.getA() >= 3 && this.getA() < 6 && center % 10 < 9 && this.getTab()[cente] !== 10 && this.getTab()[cente + 1] !== 10) {
                document.querySelector(`[data-id="${center}"]`).classList.add('on');
                document.querySelector(`[data-id="${center + 1}"]`).classList.add('on');
            }
            if (this.getA() >= 6 && this.getA() < 10 && this.getTab()[cente] !== 10) {
                document.querySelector(`[data-id="${center}"]`).classList.add('on');
            }
        }

        this.mouseout = (center) => {

            if (this.getA() === 0 && center % 10 < 7) {
                document.querySelector(`[data-id="${center}"]`).classList.remove('on');
                document.querySelector(`[data-id="${center + 1}"]`).classList.remove('on');
                document.querySelector(`[data-id="${center + 2}"]`).classList.remove('on');
                document.querySelector(`[data-id="${center + 3}"]`).classList.remove('on');
            }
            if (this.getA() > 0 && this.getA() < 3 && center % 10 < 8) {
                document.querySelector(`[data-id="${center}"]`).classList.remove('on');
                document.querySelector(`[data-id="${center + 1}"]`).classList.remove('on');
                document.querySelector(`[data-id="${center + 2}"]`).classList.remove('on');

            }
            if (this.getA() >= 3 && this.getA() < 6 && center % 10 < 9) {
                document.querySelector(`[data-id="${center}"]`).classList.remove('on');
                document.querySelector(`[data-id="${center + 1}"]`).classList.remove('on');
            }
            if (this.getA() >= 6 && this.getA() < 10) {
                document.querySelector(`[data-id="${center}"]`).classList.remove('on');

            }

        }


        this.createShip = (center) => {

            let cente = this.convertTab(center);
            let freeGrill1 = !(this.getTab()[cente] === 10 || this.getTab()[cente + 1] === 10 || this.getTab()[cente + 2] === 10);
            let freeGrill2 = !(this.getTab()[cente] === 10 || this.getTab()[cente + 1] === 10);
            let freeGrill3 = !(this.getTab()[cente] === 10);

            if (this.getTabTemp()[0] && center % 10 < 7) {
                this.putShipOnBoard(center);

                return;
            }

            if (this.getTabTemp()[1] && center % 10 < 8 && freeGrill1) {
                this.putShipOnBoard(center);

                return;
            }
            if (this.getTabTemp()[2] && center % 10 < 9 && freeGrill2) {
                this.putShipOnBoard(center);
                return;
            }
            if (this.getTabTemp()[3] && freeGrill3) {
                this.putShipOnBoard(center);
                return;
            }
        }
        this.iconShip = () => {

            if (this.getA() === 0) {
                document.querySelector('.ships div.fourShip').classList.remove('opacity');
            }
            if (this.getA() === 1) {
                document.querySelector('.ships div.threeShip1').classList.remove('opacity');
            }
            if (this.getA() === 2) {
                document.querySelector('.ships div.threeShip2').classList.remove('opacity');
            }
            if (this.getA() === 3) {
                document.querySelector('.ships div.twoShip1').classList.remove('opacity');
            }
            if (this.getA() === 4) {
                document.querySelector('.ships div.twoShip2').classList.remove('opacity');
            }
            if (this.getA() === 5) {
                document.querySelector('.ships div.twoShip3').classList.remove('opacity');
            }
            if (this.getA() === 6) {
                document.querySelector('.ships div.oneShip1').classList.remove('opacity');
            }
            if (this.getA() === 7) {
                document.querySelector('.ships div.oneShip2').classList.remove('opacity');
            }
            if (this.getA() === 8) {
                document.querySelector('.ships div.oneShip3').classList.remove('opacity');
            }
            if (this.getA() === 9) {
                document.querySelector('.ships div.oneShip4').classList.remove('opacity');
                document.querySelector('.onePaperRight h3').classList.add('animation');
                document.querySelector('.onePaperRight h3').innerText = "Your three shots";
                document.querySelector('.onePaper h3').classList.remove('animation');
                document.querySelector('.onePaper h3').innerText = "Play";
            }

            return;
        }

        /--------------------RIGHT-----------------------------/


        this.randomShip = (center) => {

            let cente = this.convertTab(center);
            let freeGrill1 = !(this.getTab()[cente] === 10 || this.getTab()[cente + 1] === 10 || this.getTab()[cente + 2] === 10);
            let freeGrill2 = !(this.getTab()[cente] === 10 || this.getTab()[cente + 1] === 10);
            let freeGrill3 = !(this.getTab()[cente] === 10);

            let freeG1 = !(this.getTab()[cente] === 1 || this.getTab()[cente + 1] === 1 || this.getTab()[cente + 2] === 1);
            let freeG2 = !(this.getTab()[cente] === 1 || this.getTab()[cente + 1] === 1);
            let freeG3 = !(this.getTab()[cente] === 1);

            if (this.getTabRandom()[0] && center % 10 < 7) {
                this.putShipRandom(center);
                return;
            }

            if (this.getTabRandom()[1] && center % 10 < 8 && freeGrill1 && freeG1) {
                this.putShipRandom(center);

                return;
            }
            if (this.getTabRandom()[2] && center % 10 < 9 && freeGrill2 && freeG2) {
                this.putShipRandom(center);
                return;
            }
            if (this.getTabRandom()[3] && freeGrill3 && freeG3) {
                this.putShipRandom(center);
                return;
            }
        }

        this.putShipRandom = (center) => {
            let cente = this.convertTab(center);

            this.setTabRandom(0, 0);
            this.setTabRandom(1, 1);
            if (this.getR() === 2) {
                this.setTabRandom(1, 0);
                this.setTabRandom(2, 1);
            }
            if (this.getR() === 5) {
                this.setTabRandom(3, 1);
                this.setTabRandom(2, 0);
            }

            if (this.getR() === 0) {
                document.querySelector(`[data-id="a${center + 1}"]`).classList.add('ong1');
                document.querySelector(`[data-id="a${center + 2}"]`).classList.add('ong1');
                document.querySelector(`[data-id="a${center + 3}"]`).classList.add('ong1');
                document.querySelector(`[data-id="a${center}"]`).classList.add('ong1');
                this.tabSetFour(cente);
                this.setR();
                return;
            }

            if (this.getR() > 0 && this.getR() < 3) {
                document.querySelector(`[data-id="a${center + 1}"]`).classList.add('ong1');
                document.querySelector(`[data-id="a${center + 2}"]`).classList.add('ong1');
                document.querySelector(`[data-id="a${center}"]`).classList.add('ong1');

                this.tabSetThree(cente);
                this.setR();
                return;
            }

            if (this.getR() >= 3 && this.getR() < 6) {
                document.querySelector(`[data-id="a${center + 1}"]`).classList.add('ong1');
                document.querySelector(`[data-id="a${center}"]`).classList.add('ong1');
                this.tabSetTwo(cente);
                this.setR();
                return;
            }
            if (this.getR() >= 6 && this.getR() < 10) {
                document.querySelector(`[data-id="a${center}"]`).classList.add('ong1');
                this.tabSetOne(cente);
                this.setR();
                return;
            }
        }
        this.tabSetFour = (cente) => {
            this.setTab(cente - 31, 10);
            this.setTab(cente - 1, 10);
            this.setTab(cente + 29, 10);

            this.setTab(cente - 30, 10);

            this.setTab(cente - (30 - 1), 10);
            this.setTab(cente - (30 - 2), 10);
            this.setTab(cente - (30 - 3), 10);

            this.setTab(cente + 30, 10);
            this.setTab(cente + 1 + 30, 10);
            this.setTab(cente + 2 + 30, 10);
            this.setTab(cente + 3 + 30, 10);

            this.setTab(cente - (29 - 3), 10);
            this.setTab(cente + 3 + 1, 10);
            this.setTab(cente + 3 + 31, 10);

            this.setTab(cente, 1);
            this.setTab(cente + 1, 1);
            this.setTab(cente + 2, 1);
            this.setTab(cente + 3, 1);
        }

        this.tabSetThree = (cente) => {
            this.setTab(cente - 31, 10);
            this.setTab(cente - 1, 10);
            this.setTab(cente + 29, 10);

            this.setTab(cente - 30, 10);
            this.setTab(cente - (30 - 1), 10);
            this.setTab(cente - (30 - 2), 10);

            this.setTab(cente + 30, 10);
            this.setTab(cente + 1 + 30, 10);
            this.setTab(cente + 2 + 30, 10);

            this.setTab(cente - (29 - 2), 10);
            this.setTab(cente + 2 + 1, 10);
            this.setTab(cente + 2 + 31, 10);

            this.setTab(cente, 1);
            this.setTab(cente + 1, 1);
            this.setTab(cente + 2, 1);
        }
        this.tabSetTwo = (cente) => {

            this.setTab(cente - 31, 10);
            this.setTab(cente - 1, 10);
            this.setTab(cente + 29, 10);

            this.setTab(cente - 30, 10);
            this.setTab(cente - (30 - 1), 10);

            this.setTab(cente + 30, 10);
            this.setTab(cente + 1 + 30, 10);

            this.setTab(cente - (29 - 1), 10);
            this.setTab(cente + 1 + 1, 10);
            this.setTab(cente + 1 + 31, 10);

            this.setTab(cente, 1);
            this.setTab(cente + 1, 1);
        }
        this.tabSetOne = (cente) => {

            this.setTab(cente - 31, 10);
            this.setTab(cente - 1, 10);
            this.setTab(cente + 29, 10);

            this.setTab(cente - 30, 10);

            this.setTab(cente + 30, 10);
            this.setTab(cente - 29, 10);
            this.setTab(cente + 1, 10);
            this.setTab(cente + 31, 10);

            this.setTab(cente, 1);
        }
    }
}
