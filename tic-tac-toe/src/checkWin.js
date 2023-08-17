export default class checkWin {
    constructor(data) {
        this.data = data;
        this.win =false
    }

    checkRow() {
        for (let i=0;i<9;i+=3) {
            this.win |= (this.data[i] === this.data[i+1] && 
                this.data[i] === this.data[i+2] && 
                this.data[i] !== null)
        }
        return this.win;
    }

    checkColumn() {
        for (let i =0; i < 3; i++){
            this.win |= (this.data[i] === this.data[i + 3] &&
                this.data[i] === this.data[i+6] && 
                this.data[i] !== null)
        }

        return this.win;

    }

    checkDiagonal() {
        return ((this.data[0] === this.data[4] &&
            this.data[0] === this.data[8] && this.data[0] !==null) ||
            (this.data[2] === this.data[4] && this.data[2] === this.data[6] &&
                this.data[2] !== null));
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
        if (count===9 && !this.checkWin()) {
            return true
        } else {
            return false
        }
    }
    
}