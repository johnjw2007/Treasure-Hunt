class Input6{
    constructor(){
        this.space = createInput("").attribute("placeholder", "Answer");
        this.ques = createElement('h3')
        this.answer = "val"
       }
    hide(){
        this.ques.hide();
        this.space.hide();
    }
    display(){
        this.ques.show();
        this.space.show();
       this.space.position(565, 400) 
       
       this.ques.html("Which keyword is used to get </br> value from realtime database")
       this.ques.position(565, 315)
    }
    check(){
        if(this.space.value() === this.answer){
            score+=1;
            this.space.attribute("placeholder", "val")
        }
    }
}