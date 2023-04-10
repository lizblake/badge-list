import{s as i,i as n,y as r}from"./ab6369d8.js";var s=Object.defineProperty,d=(o,e,t)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,p=(o,e,t)=>(d(o,typeof e!="symbol"?e+"":e,t),t);class a extends i{static get styles(){return n`

      .col-lg-12 { 
        position: relative; 
        min-height: 1px; 
        padding-left: 15px; 
        padding-right: 15px;
      } 
    }     
      .page-content { 
        margin-top: 0px; 
        padding: 0px;
      } 
    }     
      .page-container { 
        margin: 0px; 
        padding: 20px 20px 0 20px; 
        position: relative;
      } 
      main.page-container { 
        max-width: 1310px; 
        margin: 0 auto;
      } 
      .page-header-fixed .page-container { 
        margin-top: 75px;
      } 
      body { 
        margin:    0px !important; 
        font-family:    "effra", sans-serif; 
        font-size:    14px; 
        line-height:    1.428571429; 
        color:    #333333; 
        background-color:    #fff;
        padding:   0px !important; 
        direction:   ltr;
        -webkit-font-smoothing:  antialiased;
        background: #e9ecf3;
      } 
      html { 
        font-family:  sans-serif; 
        -ms-text-size-adjust:  100%; 
        -webkit-text-size-adjust:  100%;
        font-size: 10px; 
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      } 
      .form-control { 
        width: 100%; 
        height: 32px; 
        padding: 6px 12px; 
        font-size: 14px; 
        line-height: 1.428571429; 
        color: #555555; 
        background-color: #fff; 
        background-image: none; 
        border: 1px solid #ccc; 
        border-radius: 4px; 
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); 
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); 
        -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; 
        -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; 
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

        font-size: 14px; 
        font-weight: normal; 
        color: #555555; 
        background-color: #fff; 
        border: 1px solid #ccc; 
        box-shadow: none; 
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; 
        -webkit-border-radius: 4px; 
        -moz-border-radius: 4px; 
        -ms-border-radius: 4px; 
        -o-border-radius: 4px; 
        border-radius: 4px;
      } 
      .searchbutton {
        border-width: 0; 
        padding: 7px 14px; 
        font-size: 14px; 
        outline: none !important; 
        background-image: none !important; 
        filter: none; 
        -webkit-box-shadow: none; 
        -moz-box-shadow: none; 
        box-shadow: none; 
        text-shadow: none;
      }
      .search-container { 
        background-color: white;
        margin-top: 30px; 
        margin-right: 5px; 
        margin-left: 5px; 
        padding: 6px; 
        box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.3);
        padding-left: 20px;
      } 
      .search-content-table {
        display: table;
      }
      .search-content {
        display: table-row;
      }
      .search-table-element {
        display: table-cell;
      }
      .searchicon {
        margin-left: 30px;
        margin-right: 30px;
      }
      .input-box {
        margin-left: 14px;
        width: 400%;
        outline: none;
        border-style: hidden;
        display: block;
      }
    `}constructor(){super(),this.value=""}searchInput(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value}}))}render(){return r` <div class="search-container"> <div class="search-content-table"> <div class="search-content"> <div class="searchicon search-table-element"> <simple-icon accent-color="grey" icon="search"> </simple-icon> </div> <div> <input type="text" class="form-control input-box search-table-element" value="${this.value}" @input="${this.searchInput}" placeholder="Search Content, Topics, and People"> </div> </div> </div> </div> `}}p(a,"properties",{header:{type:String},value:{type:String}}),customElements.define("search-bar",a);
