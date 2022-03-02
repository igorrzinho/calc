import React from 'react';
import Sun from "./img/sun.svg"
import Moon from "./img/moon.svg"
/* mode */
import "./mode.css"

export default class Mode extends React.Component {
    constructor() {
        super()
        this.state={
        dark:false,
        mode:'claro',
    }
    }

    modo(){
        const body = document.querySelector("body");
        if(body.className === ""){
            body.className="ligth"
            this.setState(
                ()=>({
                    mode:'escuro',
                    dark:true
            })
            )
        }else{
            body.className=""
            this.setState(
                ()=>({
                    mode:'claro',
                    dark: false
                })
            )
        }
    }
    render() {
        return (
            <div className='container'>
                <label className='label'>

                        <input onChange={()=> this.modo()} id="modos" type="checkbox"/>
                        <img className='icon' src={this.state.dark?Moon:Sun} alt="" />
                </label>
            </div>
             
        );
    }
};