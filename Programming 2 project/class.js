
class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(num) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }


    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));

        if (newCell && this.multiply >= 2) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Grass(newX, newY, 1);
            this.multiply = 0;

        }


    }

}
class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 7;
        this.index = index;
        this.acted = false;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(num) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    move() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();

                }

            }
            this.acted = true;
        }



    }
    eat() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell(1));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 9) {
                    this.mul();
                    this.energy = 7;
                }
                this.acted = true;

            }
            else {
                this.move();
            }
        }
    }

    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new GrassEater(newX, newY, 2)

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }

}



class Gishatic {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 6;
        this.index = index;
        this.acted = false;
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(num) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    move() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();

                }

            }
            this.acted = true;
        }



    }
    eat() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell(2));
            console.log(newCell)
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 1) {
                    this.mul();
                    this.energy = 6;
                }
                this.acted = true;

            }
            else {
                this.move();
            }
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Gishatic(newX, newY, 3)

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }

}



class Vampire {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.acted = false;
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(num) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    move() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(0));
            var newCell1 = random(this.chooseCell(1));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();

                }

            }
            
        
        
            this.acted = true;
        }



    }
    eat() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell(3));
             console.log(newCell)
            var newCell1 = random(this.chooseCell(2));
            console.log(newCell1)
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 11) {
                    this.mul();
                    this.energy = 8;
                }
                this.acted = true;

            }
            else if (newCell1) {
                var X = newCell1[0];
                var Y = newCell1[1];
                matrix[Y][X] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 11) {
                    this.mul();
                    this.energy = 7;
                }
                this.acted = true;


            }
            else {
                this.move();
            }
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Vampire(newX, newY, 4)

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }

}



class Werewolf {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy =9;
        this.index = index;
        this.acted = false;
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2]
        ];
    }
    chooseCell(num) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    move() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(0));
            var newCell1 = random(this.chooseCell(1))
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();

                }

            }
        
                
                

            }




        }
    
    eat() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell(4));
            console.log(newCell)
            var newCell2 = random(this.chooseCell(3));
            console.log(newCell2)
            var newCell3 = random(this.chooseCell(2));
            console.log(newCell3)
            if (newCell) {
                console.log(newCell)
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 15) {
                    this.mul();
                    this.energy = 9;
                }
                this.acted = true;

            }

            else if (newCell2) {
                var X = newCell2[0];
                var Y = newCell2[1];
                matrix[Y][X] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = X;
                this.y = Y;
                this.energy++;
                if (this.energy >= 15) {
                    this.mul();
                    this.energy = 9;
                }
                this.acted = true;

            }
            else if (newCell3) {
                var Z = newCell3[0];
                var Q = newCell3[1];
                matrix[Q][Z] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = Z;
                this.y = Q;
                this.energy++;
                if (this.energy >= 15) {
                    this.mul();
                    this.energy = 9;
                }
                this.acted = true;

            }
        }


        else {
            this.move();
        }

    }






    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Werewolf(newX, newY, 5)

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }


}




