import { IconeAjustes, IconeCasa, IconeSino } from "../icons/Icones";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" texto="Home" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
    </aside>
  );
}
