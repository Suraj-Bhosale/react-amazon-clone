import React from 'react'
import '/Users/surajbhosale/Desktop/FrontEnd/Reac-Practice/Projects/website/src/Components/Navigation/Navigation.css'

function Navigation() {
    return (
      <div >

          <div className = "flex-container">
            <div className = "flex-items" >
               <img id = "logo" src="https://www.ref=nav_logo" alt = "logo"/>
            </div>   

            <div className = "flex-items">
               <div className = "flex-container-searchbox">
                  <div className = "flex-items-searchbox" >
                    <input type="text" id = "searchInput" placeholder="Enter anything" />
                  </div>

                  <div className = "flex-items-searchbox">
                    <button className = "searchBtn"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </button>
                  </div>
                </div>
            </div>     
          </div>

      </div>
    );
  }
  
  export default Navigation;
