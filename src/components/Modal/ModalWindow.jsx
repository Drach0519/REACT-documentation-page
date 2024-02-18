import './ModalWindow.css';



export default function ModalWindow({call,onDestroy}){

    if(!call){
        return null;
    }
    // const closeWindow =(event)=>{
    //     if(event.target.className ==='modal'){
    //         onDestroy();
    //     }
    // }
    // stopPropagation() Прекращает дальнейшую передачу текущего события onDestroy
    return(
        <div onClick={onDestroy} className='modal'>
            <div onClick={(e)=>e.stopPropagation()} className="modal-content">
                <i className='close'onClick={onDestroy}>X</i>
                <h1>Видалити запис?</h1>
                <div className="btns">
                    <button className='accept'>Tak</button>
                    <button onClick={onDestroy}className='reject'>Hi</button>
                </div>
            </div>
        </div>
    )
}