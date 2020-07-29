class TableRight {
    constructor() {
        this.tabPlayer = new Array();
        this.shots = document.querySelector('.ionePaperRight h3');
        let maxShots = 0;
        let maxShotsIA = 0;
        let tabSplice = [];
        this.tabS = [];
        let wait = true;
        let tabShots = [];
        let hitAI = 0;
        let hitPlayer = 0;
        for (let i = 0; i < 100; i++) {
            tabShots[i] = i;
        };

        this.checkShots = () => {

            if (hitPlayer > 19 || hitAI > 19) {
                document.querySelector('.onePaperRight h3').classList.remove('animation');
                if (hitPlayer > hitAI) {
                    document.querySelector('.onePaperRight h3').innerText = "Your win. Congratulations";
                } else {
                    document.querySelector('.onePaperRight h3').innerText = "Your lost";
                }
                document.querySelector('.onePaper h3').classList.add('animation');
                document.querySelector('.onePaper h3').innerText = "Play again";

                for (let i = 0; i < 100; i++) {
                    document.querySelector(`[data-id="a${i}"]`).classList.add('notclickable');
                    if (document.querySelector(`[data-id="a${i}"]`).classList.contains('ong1')) {
                        document.querySelector(`[data-id="a${i}"]`).classList.remove('ong1');
                        document.querySelector(`[data-id="a${i}"]`).classList.add('white');
                        document.querySelector(`[data-id="a${i}"]`).classList.add('ong');
                    }

                };
                document.querySelector('.onePaper h3').addEventListener('click', function () {
                    location.reload();
                })
                return;
            };
        }
        this.IAshots = () => {
            if (tabShots.length >= 3) {

                while (maxShotsIA < 3) {
                    let rand = Math.floor(Math.random() * tabShots.length);
                    maxShotsIA++;
                    if (document.querySelector(`[data-id="${tabShots[rand]}"]`).classList.contains('ong')) {
                        document.querySelector(`[data-id="${tabShots[rand]}"]`).classList.add('white');
                        document.querySelector(`[data-id="${tabShots[rand]}"]`).innerText = "X";

                        if (tabShots.includes(tabShots[rand] + 10)) {
                            tabSplice.push(tabShots[rand] + 10);
                        }
                        if (tabShots.includes(tabShots[rand] - 10)) {
                            tabSplice.push(tabShots[rand] - 10);

                        }
                        if (tabShots.includes(tabShots[rand] - 11) && tabShots[rand] % 10 > 0) {
                            tabSplice.push(tabShots[rand] - 11);
                        }
                        if (tabShots.includes(tabShots[rand] + 9) && tabShots[rand] % 10 > 0) {
                            tabSplice.push(tabShots[rand] + 9);
                        }
                        if (tabShots.includes(tabShots[rand] - 9) && tabShots[rand] % 10 < 9) {
                            tabSplice.push(tabShots[rand] - 9);
                        }
                        if (tabShots.includes(tabShots[rand] + 11) && tabShots[rand] % 10 < 9) {

                            tabSplice.push(tabShots[rand] + 11);
                        }
                        hitAI++;
                        this.checkShots();
                    } else {
                        document.querySelector(`[data-id="${tabShots[rand]}"]`).innerText = "o";
                    }
                    tabShots.splice(rand, 1);
                    for (let i = 0; i < tabSplice.length; i++) {
                        tabShots.splice(tabShots.indexOf(tabSplice[i]), 1);
                    }
                    tabSplice.length = 0;
                }
                maxShotsIA = 0;
                this.checkShots();
            } else {
                for (let i = 0; i < tabShots.length; i++) {
                    if (document.querySelector(`[data-id="${tabShots[i]}"]`).classList.contains('ong')) {
                        document.querySelector(`[data-id="${tabShots[i]}"]`).classList.add('white');
                        document.querySelector(`[data-id="${tabShots[i]}"]`).innerText = "X";
                        hitAI++;
                    } else {
                        document.querySelector(`[data-id="${tabShots[i]}"]`).innerText = "o";
                    }
                }
                this.checkShots();
            }

        }
        this.showIe = (e) => {

            if (document.querySelector('.onePaper h3').innerText === "Play") {
                if (wait) {

                    if (maxShots <= 2) {
                        maxShots++;
                        e.target.innerText = "o"
                        e.target.classList.add('notclickable')
                        this.tabS.push(e.target);
                    }

                    if (maxShots > 2) {
                        wait = !wait;
                        document.querySelector('.onePaperRight h3').classList.remove('animation');
                        document.querySelector('.onePaperRight h3').innerText = "Wait"
                        setTimeout(function () {
                            this.tabS.forEach(tab => {
                                if (tab.classList.contains('ong1')) {
                                    tab.innerText = "X";
                                    hitPlayer++;
                                    this.checkShots();
                                }
                            });
                            this.tabS.length = 0;
                            maxShots = 0;
                            wait = !wait;
                            document.querySelector('.onePaperRight h3').classList.add('animation');
                            document.querySelector('.onePaperRight h3').innerText = "Your three shots";
                            this.checkShots();
                            this.IAshots();
                        }.bind(this), 500);
                    }
                }
            };
        };

        this.mouseOverPlayer = (e) => {
            if (document.querySelector('.onePaper h3').innerText === "Play" && maxShots <= 2) {
                e.target.classList.add('red');
            }
        }

        this.mouseOutPlayer = (e) => {
            e.target.classList.remove('red');

        }
    }

}

