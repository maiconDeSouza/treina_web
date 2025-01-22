const table = {
    x: 0,
    y: 0,
    field: [
        ["|   |", "|   |", "|   |"],
        ["|   |", "|   |", "|   |"],
        ["|   |", "|   |", "|   |"]
    ],

    print(){
        this.field[this.x][this.y] = "| x |"
        return this.field
    },

    up(){
        this.field[this.x][this.y] = "|   |"
        if(this.x <= 0){
            this.x = 2
        } else {
            this.x -= 1
        }
        return this.print()
    },

    down(){
         this.field[this.x][this.y] = "|   |"
        if(this.x >= 2){
            this.x = 0
        } else {
            this.x +=1
        }
        return this.print()
    },

    left(){
        this.field[this.x][this.y] = "|   |"
        if(this.y <= 0){
            this.y = 2
        } else {
            this.y -= 1
        }
        return this.print()
    },

    right(){
        this.field[this.x][this.y] = "|   |"
        if(this.y >= 2){
            this.y = 0
        } else {
            this.y += 1
        }
        return this.print()
    }

}

table.print()
