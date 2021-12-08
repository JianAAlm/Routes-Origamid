import React from 'react';


const Head = (props)=> {
   React.useEffect(()=>{
    document.title='Teste | '+props.title;
    //document.querySelector('meta[name="decription"]').setAttribute('content',props.description);
    console.log(props);
   },[props]);
  return <></>;
};

export default Head;