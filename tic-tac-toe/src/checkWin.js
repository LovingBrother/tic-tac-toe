export default class checkWin {
    constructor(data) {
        this.boardData = data;
    }

    checkRow() {
        let win = false;
        for (let i=0;i<9;i+=3) {
            win |= (this.data[i] === this.data[i+1] && 
                this.data[i] === this.data[i+2] && 
                this.data[i] !== '')
        }
        return win;
    }

    checkColumn() {
        let win = false;
        for (let i =0; i < 3; i++){
            win |= (this.data[i] === this.data[i + 3] &&
                this.data[i] === this.data[i+6] && 
                this.data[i] !== '')
        }

        return win;

    }

    checkDiagonal() {
        return ((this.data[0] === this.data[4] &&
            this.data[0] === this.data[8] && this.data[0] !=='') ||
            (this.data[2] === this.data[4] && this.data[2] === this.data[6] &&
                this.data[2] !== ''));
    }

    checkWin() {
        return ( this.checkRow() || this.checkColumn() || this.checkDiagonal());
    }

    checkTie () {
        let count = 0;
        this.data.forEach(cell => {
            if(cell !== ''){
                count ++;
            }
            
        });

        return count === 9;
    }
    
}