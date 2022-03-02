import React, { Fragment } from "react";
import Mode from "./mode";
import './calculatorligth.css';
import './calculator.css';

export default class Calculator extends React.Component {
    
    constructor() {
    super()
       

    this.state={
        result:0,
        tela:'',
    }
    }

    adigito(num){
        this.setState(
            ()=>({tela:this.state.tela+num})
        )
    }

    clear(){
        this.setState(
            ()=>({
                tela:'',
                result:0,
            })
        )
    }
    
    removeOne(){
        let vtela=this.state.tela
        vtela=vtela.substring(0,(vtela.length-1))
        this.setState(
            ()=>({tela:vtela})
        )
    }

    calc (){
        this.setState(
            ()=>({result:eval(this.state.tela)})
        )
    }

    

    render() {
       
       return(
       <Fragment>
                <h1>calculator</h1>
                
                <div className="calculator"> 
                <div className="input">
                    <p className="tela">{this.state.tela}</p>
                    <p className="result">{this.state.result}</p>
                </div>
                    <button onClick={()=>this.clear()} className="btnGreen">AC</button>
                    <button onClick={()=>this.adigito('(')} className="btnBlue">(</button>
                    <button onClick={()=>this.adigito(')')} className="btnBlue">)</button>
                    <button onClick={()=>this.adigito('/')} className="btnBlue">&divide;</button>

                    <button onClick={()=>this.adigito('7')} className="btn1">7</button>
                    <button onClick={()=>this.adigito('8')} className="btn1">8</button>
                    <button onClick={()=>this.adigito('9')} className="btn1">9</button>
                    <button onClick={()=>this.adigito('*')} className="btnBlue">&times;</button>

                    <button onClick={()=>this.adigito('4')} className="btn1">4</button>
                    <button onClick={()=>this.adigito('5')} className="btn1">5</button>
                    <button onClick={()=>this.adigito('6')} className="btn1">6</button>
                    <button onClick={()=>this.adigito('-')} className="btnBlue">&ndash;</button>

                    <button onClick={()=>this.adigito('1')} className="btn1">1</button>
                    <button onClick={()=>this.adigito('2')} className="btn1">2</button>
                    <button onClick={()=>this.adigito('3')} className="btn1">3</button>
                    <button onClick={()=>this.adigito('+')} className="btnBlue">+</button>

                    <button onClick={()=>this.adigito('0')} className="btn1">0</button>
                    <button onClick={()=>this.adigito(',')} className="btn1">,</button>
                    <button onClick={()=>this.removeOne()} className="btn1">c</button>
                    <button onClick={()=>this.calc()} className="btnRes">=</button>
             </div>            
             </Fragment>
       );
    }
};
