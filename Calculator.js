var input=document.getElementById("display1");
        var btn=document.getElementsByClassName("btn");
        var zero=true;
        var key;
        var n1,n2,i;
        
        function btnc() {
            zero=true;
            location.reload();
        }
        function btnpm() {
            this.input.innerHTML=-Math.abs(this.input.innerHTML);
        }
        function btnp() {
            on();
            this.input.innerHTML*=0.01;
        }
        function on() {
            if (zero) {
                if (Number(this.input.innerHTML)===0) {
                this.input.innerHTML=" ";
                btn[0].innerHTML="C";
            }
            }
            
        }
        function btndown(i) {
            btn[i].style.backgroundColor="white";
            btn[i].style.color="#505050";
            btn[i].style.transitionDuration=".5s";
        }
        function btnmove(i) {
            btn[i].style.backgroundColor="#505050";
            btn[i].style.color="white";
            btn[i].style.transitionDuration="1s"
        }
        function btndown1(i) {
            btn[i].style.backgroundColor="white";
            btn[i].style.transitionDuration=".5s";
        }
        function btnmove1(i) {
            btn[i].style.backgroundColor="#d4d4d2c7";
            btn[i].style.transitionDuration=".5s"
        }
        function btn1() {
            on();
            if ((this.input.innerHTML).length<10) {
                this.input.innerHTML+=1;
            }
        }
        function btn2() {
            on();
            if ((this.input.innerHTML).length<10) {
                this.input.innerHTML+=2;
            }
        }
        function btn3() {
            on();
            if ((this.input.innerHTML).length<10) {
                this.input.innerHTML+=3;
            }
        }
        function btn4() {
            on();
            if ((this.input.innerHTML).length<10) {
                this.input.innerHTML+=4;
            }
        }
        function btn5() {
            on();
            if ((this.input.innerHTML).length<10) {
                this.input.innerHTML+=5;
            }
        }
        function btn6() {
            on();
            if ((this.input.innerHTML).length<10) {
                this.input.innerHTML+=6;
            }
        }
        function btn7() {
            on();
            if ((this.input.innerHTML).length<10) {
                this.input.innerHTML+=7;
            }
        }
        function btn8() {
            on();
            if ((this.input.innerHTML).length<10) {
                this.input.innerHTML+=8;
            }
        }
        function btn9() {
            on();
            if ((this.input.innerHTML).length<10) {
                this.input.innerHTML+=9;
            }
        }
        function btn0() {
            on();
            if ((this.input.innerHTML).length<10) {
                this.input.innerHTML+=0;
            }
        }
        function btndot() {
            zero=false;
            this.input.innerHTML+=".";
        }
        function add() {
            btn[15].style.backgroundColor="white";
            btn[15].style.color="#FF9500";
            btn[11].style.backgroundColor="#FF9500";
            btn[11].style.color="white";
            btn[7].style.backgroundColor="#FF9500";
            btn[7].style.color="white";
            btn[3].style.backgroundColor="#FF9500";
            btn[3].style.color="white";
            n1=Number(this.input.innerHTML);
            this.input.innerHTML="0";
            key=1;
        }
        function sub() {
            btn[11].style.backgroundColor="white";
            btn[11].style.color="#FF9500";
            btn[15].style.backgroundColor="#FF9500";
            btn[15].style.color="white";
            btn[7].style.backgroundColor="#FF9500";
            btn[7].style.color="white";
            btn[3].style.backgroundColor="#FF9500";
            btn[3].style.color="white";
            n1=Number(this.input.innerHTML);
            this.input.innerHTML="0";
            key=2;
        }
        function mul() {
            btn[7].style.backgroundColor="white";
            btn[7].style.color="#FF9500";
            btn[15].style.backgroundColor="#FF9500";
            btn[15].style.color="white";
            btn[11].style.backgroundColor="#FF9500";
            btn[11].style.color="white";
            btn[3].style.backgroundColor="#FF9500";
            btn[3].style.color="white";
            n1=Number(this.input.innerHTML);
            this.input.innerHTML="0";
            key=3;
        }
        function div() {
            btn[3].style.backgroundColor="white";
            btn[3].style.color="#FF9500";
            btn[15].style.backgroundColor="#FF9500";
            btn[15].style.color="white";
            btn[11].style.backgroundColor="#FF9500";
            btn[11].style.color="white";
            btn[7].style.backgroundColor="#FF9500";
            btn[7].style.color="white";
            n1=Number(this.input.innerHTML);
            this.input.innerHTML="0";
            key=4;
        }
        function equal1() {
            btn[18].style.backgroundColor="white";
            btn[18].style.color="#FF9500";
        }
        function equal2() {
            btn[18].style.backgroundColor="#FF9500";
            btn[18].style.color="white";
        }
        function equal() {
            switch (key) {
                case 1:{    
                    n2=Number(this.input.innerHTML);
                    let r=n1+n2;
                    if (r>10000000000) {
                        this.input.innerHTML=(n1+n2).toExponential(4);
                    }
                    else{
                        this.input.innerHTML=(n1+n2);
                    }
                    btn[15].style.transitionDuration=".5s";
                    btn[15].style.backgroundColor="#FF9500";
                    btn[15].style.color="white";
                } 
                    break;
                case 2:{
                    n2=Number(this.input.innerHTML);
                    let r=n1-n2
                    if (r<-100000000) {
                        this.input.innerHTML=(n1-n2).toExponential(4);
                    }
                    else{
                        this.input.innerHTML=(n1-n2);
                    } 
                    btn[11].style.transitionDuration=".5s";
                    btn[11].style.backgroundColor="#FF9500";
                    btn[11].style.color="white";
                } 
                    break;
                case 3:{
                    n2=Number(this.input.innerHTML);
                    let r=n1*n2;
                    if (r>10000000000) {
                        this.input.innerHTML=(n1*n2).toExponential(4);
                    }
                    else{
                        this.input.innerHTML=(n1*n2);
                    }
                    btn[7].style.transitionDuration=".5s";
                    btn[7].style.backgroundColor="#FF9500";
                    btn[7].style.color="white";
                } 
                    break;
                case 4:{
                    n2=Number(this.input.innerHTML);
                    if (n2===0) {
                        this.input.innerHTML="Error";
                    } else {
                        this.input.innerHTML=n1/n2;
                    }
                    btn[3].style.transitionDuration=".5s";
                    btn[3].style.backgroundColor="#FF9500";
                    btn[3].style.color="white";
                } 
                    break;
            
                default:
                    break;
            }
        }