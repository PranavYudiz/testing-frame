class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(this.name, this.age);
    }

    home(type) {
        let data = this.getInfo(type, 1);
        //    let data1= this.getInfo(type,1);
        return data + 5
    }

    userId() {
        return 12
    }

    getInfo() {
        return 10
    }

    finalMarks(total) {
        const externalMarks = this.getExternalMarks(total);
        console.log(externalMarks);
        const internalMarks = this.getInternalMarks(total);
        console.log(internalMarks);
        return externalMarks + internalMarks + 10;
    }

    getInternalMarks(total) {
        console.log(total, "faf");
        return total + 1
    }
    getExternalMarks(total) {
        console.log(total, "faf");
        return total - 1
    }
}


module.exports = Student;