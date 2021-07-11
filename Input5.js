class Input5{
    constructor(){
        this.space = createInput("").attribute("placeholder", "Answer");
        this.ques = createElement('h3')
        this.answer = "isStatic"
       }
    hide(){
        this.ques.hide();
        this.space.hide();
    }
    display(){
        this.ques.show();
        this.space.show();
       this.space.position(565, 225) 
       
       this.ques.html("Which option is use to make </br> a object static in matter.js")
       this.ques.position(565, 140)
    }
    check(){
        if(this.space.value() === this.answer){
            score+=1;
            this.space.attribute("placeholder", "isStatic")
        }
    }
}