import Link from "next/link";

interface MenuItemProps {
  texto: string;
  icone: any;
  url?: string;
  className?: string;
  onClick?: (ev: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  function renderizarLink() {
    return (
      <a
        href={props.url}
        className={`
      flex flex-col justify-center items-center
      h-20 w-20   dark:text-gray-200
      ${props.className}
      `}
      >
        {props.icone}
        <span className="text-xs font-light ">{props.texto}</span>
      </a>
    );
  }
  
  return (
    <li onClick={props.onClick} 
    className={`
    hover:bg-gray-100 
    dark:hover:bg-gray-700 
    cursor-pointer  dark:text-gray-200`}>
      {props.url ? (
        renderizarLink()
      ) : (
        renderizarLink()
      )}
    </li>
  );
}
