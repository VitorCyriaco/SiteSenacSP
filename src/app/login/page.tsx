'use client'
import { useRouter } from "next/navigation"
export default function LoginPage() {

    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center bg-[#F2F2F2] w-full max-w-[500px] rounded-lg px-5 py-10 mb-4 shadow-lg dark:bg-black/50 dark:backdrop-blur-xl">
                <h2 className="my-10 text-[#0256a0] text-3xl font-[800]">Login</h2>

                <form className="flex flex-col items-center gap-5 w-full px-5">
                    <input className="w-full max-w-[350px] h-10 px-3 rounded-lg text-sm border-[1px] border-[#e2e1e1] focus:shadow-lg focus:outline-none dark:bg-white/10 dark:backdrop-blur-xl dark:border-black/50" type="email" placeholder="Email" />
                    <input className="w-full max-w-[350px] h-10 px-3 rounded-lg text-sm border-[1px] border-[#e2e1e1] focus:shadow-lg focus:outline-none dark:bg-white/10 dark:backdrop-blur-xl dark:border-black/50" type="password" placeholder="Senha" />
                    <div className="flex flex-col items-end w-full max-w-[350px]">
                        <a className="text-black font-[500] text-sm mb-8 hover:text-[#0256a0] dark:text-white dark:hover:text-[#0256a0]" href="#">Esqueci minha senha</a>
                        <button onClick={() => router.push('/profile')} className="bg-[#0246a0] h-10 w-full max-w-[350px] text-white rounded-lg font-[500] text-lg hover:bg-[#0256a0]" type="submit">Entrar</button>
                    </div>
                </form>

            </div>
            <div className="flex justify-center items-center bg-[#F2F2F2] w-full max-w-[500px] rounded-lg p-2 gap-2 shadow-lg dark:bg-black/50 dark:backdrop-blur-xl">
                <p className="text-lg font-[500]">Não possui uma Conta? </p>
                <div>
                    <a className="text-lg font-[700] hover:text-[#0256a0]" href="register.html">Cadastre-se</a>
                </div>
            </div>
        </div>
    )
}