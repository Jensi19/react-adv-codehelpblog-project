import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function Footer(){
  const {page , handlepagechange , totalpages} = useContext(AppContext);
  return(
    <div>
      {page > 1 &&
        (<button onClick={() => handlepagechange(page-1)}>
          previous
        </button>)
      }
      <br/>
      {page < totalpages &&
        (<button onClick={() => handlepagechange(page+1)}>
         next
        </button>)
      }

      <p>
        pagge {page} of {totalpages}
      </p>
    </div>
  )
}
export default Footer;