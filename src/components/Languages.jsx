import { Link } from 'react-router-dom';

import MongoDB from './MongoDB.js';
import MySQL from "./MySQL.js";

function Languages() {
  return (
    <section id="lang" className="wrapper mb-8">
      <div className="orbit relative">
        <ul className="orbit-wrap relative">
          
          <li className="orbit-center bg-indigo-400 tooltip tooltip-info" data-tip="Click on me to know more about my knowledge">
            <Link to="languages"><i className="orbit-center__icon text-indigo-800 fa fa-code"></i></Link>
          </li>

          <li>
            <ul className="ring-1 tooltip tooltip-open tooltip-bottom tooltip-secondary" data-tip="Learning sites">
              <li className='tooltip' data-tip="w3schools.com"><i className="bg-green-600 text-white orbit-icon text-lg "><strong>w3</strong></i></li>
              <li><i className="icon brands bg-green-600 text-white orbit-icon fa fa-free-code-camp"></i></li>
              <li className='tooltip' data-tip="developer.mozilla.org"><i className="icon brands bg-[#1565c0] text-[#ff8f00] orbit-icon fa fa-firefox"></i></li>
            </ul>
          </li>
          <li>
            <ul className="ring-2 tooltip tooltip-top tooltip-info" data-tip="Back-End">
              <li><MongoDB className="orbit-icon bg-white rounded-full"/></li>
              <li><MySQL className="orbit-icon bg-white rounded-full"/></li>
              <li><i className="icon brands orbit-icon bg-black text-[#8ec84b] fa fa-node-js"></i></li>
              <li><i className="icon brands orbit-icon text-white bg-stone-700 fa fa-git-alt"></i></li>
            </ul>
          </li>
          <li>
            <ul className="ring-3 tooltip tooltip-top tooltip-warning" data-tip="Front-End">
              {/* <li><i className="orbit-icon fa fa-coffee">Web3 | EtherJS</i></li> */}
              <li><i className="icon brands orbit-icon bg-white text-[#2196f3] fa fa-react"></i></li>
              <li><i className="icon brands orbit-icon bg-white text-[#2196f3] fa fa-css3-alt"></i></li>
              <li><i className="icon brands orbit-icon bg-white text-[#e65100] fa fa-html5"></i></li>
              <li><i className="icon brands orbit-icon bg-stone-700 text-yellow-500 fa fa-js-square"></i></li>
            </ul>
          </li>

        </ul>
        
      </div>
    </section>
  );
}

export default Languages;