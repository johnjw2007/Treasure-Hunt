class Input4{
    constructor(){
        this.space = createInput("").attribute("placeholder", "Answer");
        this.ques = createElement('h3')
        this.answer = "createSprite"
       }
    hide(){
        this.ques.hide();
        this.space.hide();
    }
    display(){
        this.ques.show();
        this.space.show();
       this.space.position(565, 50) 
       
       this.ques.html("What is used to create a sprite")
       this.ques.position(565, 0)
    }
    check(){
        if(this.space.value() === this.answer){
            score+=1;
            this.space.attribute("placeholder", "createSprite")
            this.submit.hide();
        }
    }
}