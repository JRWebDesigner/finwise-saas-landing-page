export default function CardContac(){
    return(
        <div className="bg-red-700 p-10 w-full flex justify-around items-center text-red-100 font-bold text-2xl">
            <span>
                Contacte ahora mismo <br /> para tener mas imformacion
            </span>
            <a className="bg-white text-primary justify-center items-center flex px-5 py-2 rounded-3xl" href="">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#DB060C"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                +591 77777777
            </a>
        </div>
    )
}