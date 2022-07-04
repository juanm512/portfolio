import MongoDB from './MongoDB.js';
import MySQL from "./MySQL.js";

function Languages() {
  return (
    <>
    <section id="lang" className="wrapper mb-8">
      <div className="orbit relative">
        <ul className="orbit-wrap relative">
          
          <li className="orbit-center bg-indigo-400">
            <i className="orbit-center__icon text-indigo-800 fa fa-code"></i>
          </li>

          <li>
            <ul className="ring-1">
              <li><i className="bg-green-600 text-white orbit-icon text-lg "><strong>w3</strong></i></li>
              <li><i className="icon brands bg-green-600 text-white orbit-icon fa fa-free-code-camp"></i></li>
              <li><i className="icon brands bg-[#1565c0] text-[#ff8f00] orbit-icon fa fa-firefox"></i></li>
            </ul>
          </li>
          <li>
            <ul className="ring-2">
              <li><MongoDB className="orbit-icon bg-white rounded-full"/></li>
              <li><MySQL className="orbit-icon bg-white rounded-full"/></li>
              <li><i className="icon brands orbit-icon bg-black text-[#8ec84b] fa fa-node-js"></i></li>
              <li><i className="icon brands orbit-icon text-white bg-stone-700 fa fa-git-alt"></i></li>
            </ul>
          </li>
          <li>
            <ul className="ring-3">
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
    <section className="wrapper mb-8">
      <div className="flex flex-wrap w-12/12 mx-auto p-8">
        <div className="w-full md:w-10/12 mx-auto">
            <div className='mockup-code bg-indigo-800 text-white p-4 rounded-lg '>
              <pre data-prefix=">"><code>import knowledge from "Brain"</code></pre>
              <br />
              <pre data-prefix=">"><code className=" whitespace-pre-line break-all">const myLanguages =  await knowledge.getFrontEndKnowledge();</code></pre>
              <pre data-prefix=">"><code>let firstRing =  {`{name: "front-end", langs: [] };`}</code></pre>
              <pre data-prefix=">">const frontEndLanguages = [<code className="avatar-group inline-flex -space-x-2">
              <div><i className="icon brands orbit-icon bg-stone-800 text-green-600 fa fa-vuejs"></i></div>
              <div><i className="icon brands orbit-icon bg-stone-600 text-yellow-500 fa fa-js-square"></i></div>
              <div><i className="icon brands orbit-icon bg-stone-800 text-red-600 fa fa-angular"></i></div>
              <div><i className="icon brands orbit-icon bg-stone-300 text-[#2196f3] fa fa-css3-alt"></i></div>
              <div><i className="icon brands orbit-icon bg-stone-800 text-[#2196f3] fa fa-react"></i></div>
              <div><i className="icon brands orbit-icon bg-stone-100 text-[#e65100] fa fa-html5"></i></div>
               ]</code></pre>
              <br/>
              <pre data-prefix=">"><code>frontEndLanguages.forEach( language {"=>"} {"{"} </code></pre>
              <pre data-prefix=">"><code className=" whitespace-pre-line break-all"> if(language === myLanguages) firstRing.langs.push(language); </code></pre>
              <pre data-prefix=">"><code>{"}"});</code></pre>
              <br />
              <pre data-prefix=">" className="text-success"><code>Render(firsRing);</code></pre>
            </div>
        </div>
      </div>
      <div className="flex flex-wrap w-12/12 mx-auto p-8">
        <div className="w-full md:w-10/12 mx-auto">
            <div className='mockup-code bg-success-content text-white p-4 rounded-lg '>
              <pre data-prefix=">"><code>import knowledge from "Brain"</code></pre>
              <br />
              <pre data-prefix=">"><code className=" whitespace-pre-line break-all">const myLanguages =  await knowledge.getBackEndKnowledge();</code></pre>
              <pre data-prefix=">"><code>let secondRing =  {`{name: "back-end", langs_DBs: [] };`}</code></pre>
              <pre data-prefix=">">const frontEndLanguages = [<code className="avatar-group inline-flex -space-x-2">
              <div><MongoDB className="orbit-icon bg-white rounded-full"/></div>
              <div><MySQL className="orbit-icon bg-white rounded-full"/></div>
              <div><i className="icon brands orbit-icon bg-black text-[#8ec84b] fa fa-node-js"></i></div>
              <div><i className="icon brands orbit-icon text-white bg-stone-700 fa fa-git-alt"></i></div>
              <div><i className="icon brands orbit-icon text-white bg-blue-900 fa fa-python"></i></div>
              <div><i className="icon brands orbit-icon text-white bg-blue-900 fa fa-java"></i></div>
               ]</code></pre>
              <br/>
              <pre data-prefix=">"><code>frontEndLanguages.forEach( language {"=>"} {"{"} </code></pre>
              <pre data-prefix=">"><code className=" whitespace-pre-line break-all"> if(language === myLanguages) secondRing.langs_DBs.push(language); </code></pre>
              <pre data-prefix=">"><code>{"}"});</code></pre>
              <br />
              <pre data-prefix=">" className="text-success"><code>Render(secondRing);</code></pre>
            </div>
        </div>
      </div>
      <div className="flex flex-wrap w-12/12 mx-auto p-8">
        <div className="w-full md:w-10/12 mx-auto">
        <div className='mockup-code bg-amber-700 text-white p-4 rounded-lg '>
              <pre data-prefix="//"><code className=" whitespace-pre-line break-all">The last ring has too many pages from which i learned that it didn't render well and it only shows 3 of them. Youtube, Udemy, dev.to are some of the many that are missing</code></pre>
        </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Languages;