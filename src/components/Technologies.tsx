import TechnologyCard from "./TechnologyCard";
import NextJsIcon from "./icons/NextJsIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import TailwindIcon from "./icons/TailwindIcon";
import SpringbootIcon from "./icons/SpringbootIcon";
import MySqlIcon from "./icons/MySqlIcon";
import AwsIcon from "./icons/AwsIcon";



const Technologies = () => {
  return (
  
  <div className='flex flex-col p-2'>
    <span className='text-white text-5xl font-bold font-sans text-center'>
        <h1>Technologies</h1>
    </span>

<div className='flex mt-10 gap-2 shrink-0 justify-center flex-wrap lg:gap-10 sm:gap-6'>
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
