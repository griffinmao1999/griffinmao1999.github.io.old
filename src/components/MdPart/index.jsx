import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import './index.css';


const MdPart = (props) => {
  
  const [md, handleMD] = useState('loading... ...');

  useEffect(() => {
      fetch('/doc/' + props.mdherf + '.md')
      // fetch('/doc/work1.md')url('work1-top.jpg')
      .then((resp) => resp.text())
      .then((txt) => handleMD(txt));
  }, [md]);

  return (
    <div>

      <div className="mdtitle" style={{backgroundImage:"url("+require("./"+props.mdherf+"-top.jpg").default+")"}}>
        <div className="vertical">


          <h1>
            {props.mdherf}
          </h1>
          
        </div>
      </div>


      <div className="nav-container">
        <MarkNav className="article-menu" source={md} headingTopOffset={80} ordered={false} />
      </div>
      <div className="article-container">
        <ReactMarkdown plugins={[[gfm, { singleTilde: false }]]} >
          {md}
        </ReactMarkdown>
      </div>

    </div>
  );
};
export default MdPart;



//   export default class MdPart extends Component {
//     const { mdherf } = this.props;
//     const [md, handleMD] = useState('loading... ...');

//     useEffect(() => {
//       fetch('/doc/' + { mdherf } + '.md')
//         .then((resp) => resp.text())
//         .then((txt) => handleMD(txt));
//     }, [md]);


//     render(){
//       return (
//         <div>

//           <div className="mdtitle">
//             <div className="vertical">


//               <h1>
//                 缔造
//               </h1>
//               <h2>于千万人之中遇见你所遇见的人</h2>
//             </div>
//           </div>


//           <div className="nav-container">
//             <MarkNav className="article-menu" source={md} headingTopOffset={80} ordered={false} />
//           </div>
//           <div className="article-container">
//             <ReactMarkdown plugins={[[gfm, { singleTilde: false }]]} allowDangerousHtml>
//               {md}
//             </ReactMarkdown>
//           </div>

//         </div>
//       )

//     }


// }