import Head from "next/head";
import Image from "next/image";
import spin from "../../../public/spin.gif";
import useAuth from "@/data/hook/useAuth";
import route from "next/router";

export default function ForcarAutenticacao(props: any) {
  const { usuario, carregando } = useAuth();
  function renderizarConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        if(!document.cookie?.includes("admin-template-logado")) {
                            window.location.href = "/autenticacao"
                        }
                    `,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }

  function renderizarCarregando() {
    return (
      <div
        className={`
                flex justify-center items-center h-screen
            `}
      >
        <Image src={spin} alt="loading" />
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    route.push("/autenticacao");
    return null;
  }
}
