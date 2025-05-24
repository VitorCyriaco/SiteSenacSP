import { Carousel } from '@/components/home/carrossel';
import { Courses } from '@/components/home/courses';

export default function Home() {

  return (
    <>
      <div className="mt-20">
        <div className="z-0 w-full h-[449px] flex bg-black items-center justify-center">
          <img className="w-full absolute z-0 h-[449px]" src="img/banner1.gif" alt="" />
          <input className="relative z-[1] w-[685px] h-[52px] px-4 text-white mt-14 rounded-lg border-2 border-white bg-transparent" type="text" placeholder="O que você procura?" />
        </div>
      </div>

      <Courses />

      <div className="flex flex-col items-center mt-12 bg-[#e4e8f0] pb-12 dark:bg-white/10 dark:backdrop-blur-xl">
        <div>
          <h2 className="mt-12 mb-7 text-[#78849e] font-[500] text-3xl dark:text-white">Acesso rápido</h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-40 h-40 bg-white m-2 rounded-lg items-start pb-3 justify-end shadow-xl dark:bg-white/10 dark:backdrop-blur-xl">
            <p className="text-[#1c4a87] font-[500] text-md ml-4">Atendimento</p><p className="text-[#1c4a87] font-[500] text-md ml-4">Corporativo</p>
          </div>
          <div className="flex flex-col w-40 h-40 bg-white m-2 rounded-lg items-start pb-3 justify-end shadow-xl dark:bg-white/10 dark:backdrop-blur-xl">
            <p className="text-[#1c4a87] font-[500] text-md ml-4">Bolsas de</p><p className="text-[#1c4a87] font-[500] text-md ml-4">estudo</p>
          </div>
          <div className="flex flex-col w-40 h-40 bg-white m-2 rounded-lg items-start pb-3 justify-end shadow-xl dark:bg-white/10 dark:backdrop-blur-xl">
            <p className="text-[#1c4a87] font-[500] text-md ml-4">Cursos por área</p>
          </div>
          <div className="flex flex-col w-40 h-40 bg-white m-2 rounded-lg items-start pb-3 justify-end shadow-xl dark:bg-white/10 dark:backdrop-blur-xl">
            <p className="text-[#1c4a87] font-[500] text-md ml-4">Descontos e</p><p className="text-[#1c4a87] font-[500] text-md ml-4">Parcelamento</p>
          </div>
          <div className="flex flex-col w-40 h-40 bg-white m-2 rounded-lg items-start pb-3 justify-end shadow-xl dark:bg-white/10 dark:backdrop-blur-xl">
            <p className="text-[#1c4a87] font-[500] text-md ml-4">Fale com a</p><p className="text-[#1c4a87] font-[500] text-md ml-4">gente</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-16 pb-12">
        <div>
          <img className="rounded-lg" src="img/senac-minha-historia.png" alt="" />
        </div>
      </div>

      <Carousel />
    </>
  );
}
