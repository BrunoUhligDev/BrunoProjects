const monthNames = ['Jan','Fev','Mar','Abr','Jun','Ago','Set','Out','Nov','Dez'];
const weekNames = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];

export function CalendarioComponent(){
    return(
       <>
       <h1>Março</h1>
       <h2>2023</h2>

       <ul className="list">
        <li className="list_item">
            <spam>Dom</spam>
        </li>
        <li className="list_item">
            <spam>Seg</spam>
        </li>
        <li className="list_item">
            <spam>Ter</spam>
        </li>
        <li className="list_item">
            <spam>Qua</spam>
        </li>
        <li className="list_item">
            <spam>Qui</spam>
        </li>
        <li className="list_item">
            <spam>Sex</spam>
        </li>
        <li className="list_item">
            <span>Sab</span>
        </li>
       </ul>

       
       <ul className="list">
        <li className="list_item">
            <spam>1</spam>
        </li>
        <li className="list_item">
            <spam>2</spam>
        </li>
        <li className="list_item">
            <spam>3</spam>
        </li>
        <li className="list_item">
            <spam>4</spam>
        </li>
        <li className="list_item">
            <spam>5</spam>
        </li>
        <li className="list_item">
            <spam>6</spam>
        </li>
        <li className="list_item">
            <span>7</span>
        </li>
       </ul>
       
       </>
    )
}