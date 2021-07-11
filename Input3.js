class Input3{
    constructor(){
        this.space = createInput("").attribute("placeholder", "Answer");
        this.ques = createElement('h3')
        this.answer = "var"
       }
    hide(){
        this.ques.hide();
        this.space.hide();
    }
    display(){
        this.ques.show();
        this.space.show();
       this.space.position(25, 400) 
       
       this.ques.html("Which keyword is use </br> to create a variable")
       this.ques.position(25, 315)

    }
    check(){
        if(this.space.value() === this.answer){
            score+=1;
            this.space.attribute("placeholder", "var")
        }
    }
}