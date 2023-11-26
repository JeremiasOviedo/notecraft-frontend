import TechnologyCard from "./TechnologyCard";
import NextJsIcon from "./icons/NextJsIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import TailwindIcon from "./icons/TailwindIcon";
import SpringbootIcon from "./icons/SpringbootIcon";
import MySqlIcon from "./icons/MySqlIcon";
import AwsIcon from "./icons/AwsIcon";



const Technologies = () => {
  return (
  
  <div className='flex flex-col m-16 snap-center'>
    <span className='text-white text-6xl font-bold font-sans text-center'>
        <h1>Technologies</h1>
    </span>

<div className='flex flex-1 ml-28 mr-28 mt-16 place-space-around gap-12 shrink-0 flex-wrap justify-center'>
    <TechnologyCard icon= {<NextJsIcon/>} text='NextJs'/>
    <TechnologyCard icon= {<TypescriptIcon/>} text='Typescript'/>
    <TechnologyCard icon= {<TailwindIcon/>} text='Tailwind'/>
    <TechnologyCard icon= {<SpringbootIcon/>} text='Springboot'/>
    <TechnologyCard icon= {<MySqlIcon/>} text='MySQL'/>
    <TechnologyCard icon= {<AwsIcon/>} text='AWS'/>



</div>
  </div>);
};

export default Technologies;
