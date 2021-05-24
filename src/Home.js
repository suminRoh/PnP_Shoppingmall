import React, { Component } from "react";
import "./design.css";
import Type from "./Type";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            mode:'post',
            selected_category: "전체",
            selected_type_id:0,//카테고리 id
            type:[
                {id:0,title:"best",desc:'전체'},
                {id:1,title:"outer",desc:"아우터"},
                {id:2,title:"education",desc:"상의"},
                {id:3,title:"facility",desc:"니트"},
                {id:4,title:"human",desc:"블라우스/남방"},
                {id:5,title:"student",desc:"스커트/원피스"},
                {id:6,title:"welfare",desc:"바지"},
                {id:7,title:"etc",desc:"신발/가방"},
                {id:7,title:"etc",desc:"악세서리"},
            ],
            contents:[ // 보여지는 게시글 리스트 
               
            ],
            total_contents:[ // 전체글 리스트 
            ]
        }
    }
    render(){
        var _type=
        <Type onchangePage={function(category){
            var _category = category;
            var _contents = Array.from(this.state.total_contents);
            var category_contents = [];
            var i = 0;

            if(_category === "전체") {
                category_contents = _contents;
            } else {
                while(i < _contents.length) {
                    if(_contents[i].category === _category){
                        category_contents.push(_contents[i]);
                    }
                    i = i + 1;
                }
            }
                

            this.setState({
            mode:'post',
            //selected_type_id:Number(id),
            selected_category: category,
            contents: category_contents
            });
            }.bind(this)}
            data={this.state.type}/>

        
        return(
            <div className="category">
               
                <div className="main-title">GiRLS RECIPE</div>
                
                {_type} 
                
             

            </div>            

        );
    }
};

export default Home;