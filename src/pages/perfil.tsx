import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";

export default function Perfil() {
  const {alternarTema } = useAppData()
  return (
    <Layout titulo="Perfil do Usuário" subtitulo="Ajuste suas informações">
      <h1>Perfil do usuário</h1>
    </Layout>
  );
}
