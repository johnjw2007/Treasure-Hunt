class Input1{
    constructor(){
        this.space = createInput("").attribute("placeholder", "Answer");
        this.ques = createElement('h3')
        this.answer = "Array"
       }
    hide(){
        this.ques.hide();
        this.space.hide();
    }
    display(){
        this.ques.show();
        this.space.show();
       this.space.position(25, 50) 
       
       this.ques.html("It is a list of data")
       this.ques.position(25, 0)
    }
    check(){
        if(this.space.value() === this.answer){
            score+=1;
            this.space.attribute("placeholder", "Array")
        }
    }
}