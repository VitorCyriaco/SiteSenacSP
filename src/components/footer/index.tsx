import ThemeChage from "../themeChange";

export function Footer() {
    return (
        <>
            <div className="flex flex-col text-center bg-[#0c2f52] p-5 h-48">
                <ul className="flex flex-wrap justify-center gap-5 mb-5 text-white text-sm">
                    <li className="hover:underline"><a href="#">Nossos cursos</a></li>
                    <li className="hover:underline"><a href="#">Serviços</a></li>
                    <li className="hover:underline"><a href="#">Bolsas e descontos</a></li>
                    <li className="hover:underline"><a href="#">Sobre o Senac</a></li>
                    <li className="hover:underline"><a href="#">Para empresas</a></li>
                    <li className="hover:underline"><a href="#">Atendimento</a></li>
                    <li className="hover:underline"><a href="#">Nossas políticas</a></li>
                </ul>

                <div className="flex flex-col justify-center self-center">
                    <div className="flex justify-center">
                        <p className="text-xl text-white text-left font-bold">Senac</p>
                        <p className="text-sm text-white text-left">Sesc<br/>FecomercioSP</p>
                    </div>
                    <p className="text-sm text-white text-left mt-2">Serviço Nacional de Aprendizagem Comercial - SP</p>
                    <p className="text-sm text-white text-left">CNPJ: 03.709.814/0001-98</p>
                </div>
                <ThemeChage />
            </div>

            <div className="flex items-center justify-between bg-[#09263e] py-4 px-8 text-xs h-24">
                <div className="text-white w-60">
                    <p className="uppercase"><strong>35 ANOS</strong><br />ENSINO SUPERIOR</p>
                </div>

                <div className="text-white">
                    <p>Copyright © 2025. Todos os direitos reservados</p>
                </div>

                <div className="flex items-center justify-center h-16 w-60">
                    <a href="#"><img src="#" alt="Instagram" /></a>
                    <a href="#"><img src="#" alt="Facebook" /></a>
                    <a href="#"><img src="#" alt="WhatsApp" /></a>
                </div>
            </div>
        </>
    )
}