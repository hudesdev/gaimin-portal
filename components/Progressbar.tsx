type ProgressBarProps = {
    valuePercentage: number;
  };
  
  const ProgressBar = (props: ProgressBarProps) => {
    return (
      <div className="h-[164px] w-[8px] bg-[#aaa]/[0.15] rounded-full relative">
        <div className={`w-full pink-gradiant rounded-full absolute bottom-0`} style={{ height: `${props.valuePercentage}%` }}></div>
      </div>
    );
  };

  export default ProgressBar