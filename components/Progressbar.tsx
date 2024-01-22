type ProgressBarProps = {
  valuePercentage: number;
  vertical: boolean;
};

const ProgressBar = (props: ProgressBarProps) => {
  console.log("percentage", props.valuePercentage);
  
  let percentage = props.valuePercentage;
  if (percentage>100) {
    percentage = 100;
  }
  return (
    <div className={`${props.vertical?`h-[164px] w-[8px]`:`w-4/5 h-[8px]`}   bg-[#aaa]/[0.15] rounded-full relative`}>
      <div className={`pink-gradiant rounded-full absolute bottom-0`} style={{ height: `${props.vertical? percentage: 100}%`, width: `${ !props.vertical? percentage: 100 }%` }}></div>
    </div>
  );
};    

export default ProgressBar