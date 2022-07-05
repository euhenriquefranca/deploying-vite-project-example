import './Stylles.scss';

interface lessonProps {
  text: string;
  posição: 'vertical-lr' | 'vertical-rl' | 'horizontal-tb';
  height: '150px' | '48px';
  width: '150px' | '48px';
}

export function BotaoLink(props: lessonProps) {
  return(
    <div className='divLink' style={{
      writingMode: `${props.posição}`,
      height: `${props.height}`,
      width: `${props.width}`
    }}>
      {props.text}
    </div>
  )
}