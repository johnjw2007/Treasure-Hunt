class Input2{
    constructor(){
        this.space = createInput("").attribute("placeholder", "Answer");
        this.ques = createElement('h3')
        this.answer = "Function Preload"
        this.answer1 = "Preload"
       }
    hide(){
        this.ques.hide();
        this.space.hide();
    }
    display(){
        this.ques.show();
        this.space.show();
       this.space.position(25, 225) 
       
       this.ques.html("This function is used in loading </br> Images and Animations")
       this.ques.position(25, 140)
    }
    check(){
        if(this.space.value() === this.answer || this.space.value() === this.answer1){
            score+=1;
            this.space.attribute("placeholder", "Function Preload")
        }
    }
}