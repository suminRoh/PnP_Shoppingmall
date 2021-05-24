import React, { Component } from "react";
import "./design.css";
class Type extends Component{
  
    render(){
        var lists=[];
        var data=this.props.data;
        var i=0;
        while(i<data.length){
            lists.push(
                <li className='category_link' key={data[i].id}>
                <a 
                href={"/content/"+data[i].id}
                data-id={data[i].id}
                onClick={function(e){
           
                    e.preventDefault();
                    this.props.onchangePage(e.target.text);
                }.bind(this)}
                >
                {data[i].desc}
                </a>
                </li>
            )
            i=i+1;
        }
        return(
            <div class="category_div">
                <ul class="category_area">
                    {
                        lists
                    }
                </ul>
            </div>
        );
    }
};

export default Type;