export function Header() {
    return (
        <div className="header w-full flex items-center justify-center h-20 bg-white top-0 fixed z-20 border-b-2 border-b-orange-400">
            <div className="mr-4">
                <a href="/"><img className="w-20" src="img/logoSenac.png" alt="logo" /></a>
            </div>
            <div className="flex justify-around">
                <a className="p-4 text-[#034c8c] items-center ml-4 font-[600] text-sm" href="https://www.sp.senac.br/cursos-tecnicos?_gl=1*qfiw9c*_gcl_aw*R0NMLjE3NDgwMTk5MTIuQ2owS0NRand1Y0RCQmhEeEFSSXNBTnFGZHIwOFp2SXBvUTFKZnpuTFZNM1E3WW9obVdSMHAxRC1MZDNiSERUSGJvQTVBbjk3M2MyQXU2NGFBcmtDRUFMd193Y0I.*_gcl_au*NDA1NTQ3MDI2LjE3NDc5MzQ0NzcuMTAwNjY5NDA0NS4xNzQ4MDI0NDMyLjE3NDgwMjQ0NDA.*_ga*MTk0MzgxMjA3OS4xNzE3MTA4MzQ4*_ga_Z1SEVXH7G0*czE3NDgwMjQzODQkbzYkZzEkdDE3NDgwMjQ5NzEkajU4JGwwJGgwJGRVUnczbHBxMkpZWDdXLURIQUtYX2RLSWNPMTdxM2tpZG9B">CURSOS</a>
                <a className="p-4 text-[#034c8c] items-center ml-4 font-[600] text-sm" href="https://www.sp.senac.br/bolsas-de-estudo">BOLSAS DE ESTUDOS</a>
                <a className="p-4 text-[#034c8c] items-center ml-4 font-[600] text-sm" href="https://www.sp.senac.br/descontos-e-parcelamentos/livres">DESCONTOS</a>
                <a className="p-4 text-[#034c8c] items-center ml-4 font-[600] text-sm" href="https://eventos.sp.senac.br/?ad=sitesenac&_gl=1%2A1fetzrn%2A_gcl_aw%2AR0NMLjE3NDgwMTk5MTIuQ2owS0NRand1Y0RCQmhEeEFSSXNBTnFGZHIwOFp2SXBvUTFKZnpuTFZNM1E3WW9obVdSMHAxRC1MZDNiSERUSGJvQTVBbjk3M2MyQXU2NGFBcmtDRUFMd193Y0I.%2A_gcl_au%2ANDA1NTQ3MDI2LjE3NDc5MzQ0NzcuMTAwNjY5NDA0NS4xNzQ4MDI0NDMyLjE3NDgwMjQ0NDA.%2A_ga%2AMTk0MzgxMjA3OS4xNzE3MTA4MzQ4%2A_ga_Z1SEVXH7G0%2AczE3NDgwMjQzODQkbzYkZzEkdDE3NDgwMjQ4MjQkajYwJGwwJGgwJGRVUnczbHBxMkpZWDdXLURIQUtYX2RLSWNPMTdxM2tpZG9B">EVENTOS</a>
                <a className="p-4 text-[#034c8c] items-center ml-4 font-[600] text-sm" href="https://www.sp.senac.br/senac-sorocaba">UNIDADES</a>
                <a className="p-4 text-[#034c8c] items-center ml-4 font-[600] text-sm" href="https://www.sp.senac.br/anuncio-de-vagas">PARA EMPRESAS</a>
                <a className="p-4 text-[#034c8c] items-center ml-4 font-[600] text-sm" href="https://campanhas.sp.senac.br/quer-saber-senac/index.html?_gl=1*wjtsht*_gcl_aw*R0NMLjE3NDgwMTk5MTIuQ2owS0NRand1Y0RCQmhEeEFSSXNBTnFGZHIwOFp2SXBvUTFKZnpuTFZNM1E3WW9obVdSMHAxRC1MZDNiSERUSGJvQTVBbjk3M2MyQXU2NGFBcmtDRUFMd193Y0I.*_gcl_au*NDA1NTQ3MDI2LjE3NDc5MzQ0NzcuMTAwNjY5NDA0NS4xNzQ4MDI0NDMyLjE3NDgwMjQ0NDA.*_ga*MTk0MzgxMjA3OS4xNzE3MTA4MzQ4*_ga_Z1SEVXH7G0*czE3NDgwMjQzODQkbzYkZzEkdDE3NDgwMjQ4ODUkajYwJGwwJGgwJGRVUnczbHBxMkpZWDdXLURIQUtYX2RLSWNPMTdxM2tpZG9B">O SENAC</a>
                <a className="p-4 text-[#034c8c] items-center ml-4 font-[600] text-sm" href="https://www.sp.senac.br/anuncio-de-vagas">SERVIÇOS</a>
            </div>
            <div className="flex flex-col items-center ml-30">
                <a className="flex bg-[#034c8c] w-40 h-10 justify-center items-center text-white hover:bg-[#035ba8] rounded-md ml-10" href="/login">
                    <img src="#" alt="" style={{ width: 30, marginRight: 2 }} />
                    Área Exclusiva
                </a>
            </div>
        </div>
    )
}