export default function ProfilePage() {
    return (
        <div className="flex flex-col justify-center items-center gap-6 py-10 px-5 max-w-[1200px] min-h-screen mx-auto">
            <div className="rounded-xl shadow-lg border-l-4 border-[#304ffe] p-5 w-full transition-transform hover:translate-y-[-3px] dark:bg-white/10 dark:backdrop-blur-lg">
                <div className="text-lg font-[600] text-[#304ffe] mb-3">🔔 Avisos Gerais</div>
                <div className="text-sm">
                    <p className="mb-2"><strong>Atualize seu cadastro para o Censo da Educação Básica:</strong></p>
                    <p className="mb-2">Identificamos cadastros incompletos (ex: local de nascimento e endereço residencial).</p>
                    <ul className="list-disc list-inside mb-2 ml-5">
                        <li>Acesse <strong>Meu Cadastro {">"} Alterar Meus Dados</strong></li>
                        <li>Preencha local de nascimento e endereço</li>
                        <li>Clique em “Alterar” e salve</li>
                    </ul>
                    <p className="mb-2">Pronto! Agora você está em dia com o Censo.</p>
                    <a className="text-[#304ffe] font-[500]" href="#editProfile">Alterar dados agora mesmo</a>
                </div>
            </div>

            <div className="rounded-xl shadow-lg border-l-4 border-[#304ffe] p-5 w-full transition-transform hover:translate-y-[-3px] dark:bg-white/10 dark:backdrop-blur-lg">
                <div className="text-lg font-[600] text-[#304ffe] mb-3">🔔 Rede Educacional</div>
                <div className="text-sm">
                    <p className="mb-2">Use a plataforma <strong>Microsoft Teams</strong> para aulas virtuais.</p>
                    <ul className="list-disc list-inside mb-2 ml-5">
                        <li>Entre: <a className="text-[#304ffe] font-[500]" href="https://teams.microsoft.com" target="_blank">teams.microsoft.com</a></li>
                        <li>Email: <strong>Seu email</strong></li>
                        <li>Senha: a mesma da Área Exclusiva</li>
                        <li>Entre em “Equipes” para acessar sua turma</li>
                    </ul>
                    <p className="mb-2">Ajuda? Acesse <strong>Serviços ao aluno {">"} Formulário de Solicitações</strong> {">"} Suporte Técnico
                    </p>
                </div>
            </div>
        </div>
    )
}