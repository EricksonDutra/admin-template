import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons/Icones";
import MenuItem from "./MenuItem";
import Image from "next/image";

export default function MenuLateral() {
  return (
    <aside className={
      `flex flex-col
      bg-gray-200 dark:text-gray-700
       dark:bg-gray-900
       `
       }>
      <div
        className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        w-20 h-20
      `}
      >
        <Image
          className="rounded-sm"
          src={"/pib.png"}
          alt="logo"
          width={70}
          height={70}
        />
        {/* <img src="/pib.png" alt="logo" /> */}
      </div>
      <ul className="flex-grow " >
        <MenuItem url="/" texto="Home" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem
          texto="Sair"
          icone={IconeSair}
          onClick={() => console.log("logout")}
          className={`
          text-red-600 dark:text-red-400
         hover:bg-red-400 hover:text-white
         dark:hover:text-white
         `}
        />
      </ul>
    </aside>
  );
}
