export default interface Usuario {
  uuid: string ;
  email: string | null;
  nome: string | null;
  token: string | null;
  provedor: string | null;
  imagemUrl: string | null;
}