import './Stylles.scss';
import img from '../../Assets/folder.png'
interface data {
  Title: string;
  url: string;
  Paragrafo?: string;
}


export function Projeto(props: data) {

 

  return(
    <a href={props.url} target={'_blank'} className='projeto'>
      <strong>{props.Title}</strong>
      <img src={img} alt="" />
      <p>{props.Paragrafo}</p>
    </a>
  )
}