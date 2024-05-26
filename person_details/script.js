class Person{
    constructor(name,height,weight,age,colour,qualification,city, state){
        this.name=name;
        this.height=height;
        this.weight=weight;
        this.age=age;
        this.colour=colour;
        this.qualification=qualification;
        this.city=city;
        this.state=state;
    }
    details(){
        console.log(`
        name:${this.name}
        height:${this.height}
        weight:${this.weight}
        age:${this.age}
        color:${this.colour}
        qualification:${this.qualification}
        city:${this.city}
        state:${this.state}`)
    }
}
let Person1=new Person("Bharathi","5.2","60","28","Asian","B.Tech","Chennai","Tamilnadu")
Person1.details()
