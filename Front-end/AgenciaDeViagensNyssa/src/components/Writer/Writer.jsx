import React from 'react'
import Typewriter from 'typewriter-effect'
import './Writer.css'

function Writer() {
	return (
    <div className="writer">
		<Typewriter 
			options={{
				strings: ['TOP DESTINOS MAIS BUSCADOS HOJE NO BRASIL', 'NO PLANETA TERRA E NO ESPAÇO SIDERAL', 'OFERTAS QUE NÃO PODEM ESPERAR'],
				autoStart: true,
				loop: true,
				deleteSpeed: 120,
			}}
		/>
    <div className="writerJapanese"> 
    <Typewriter 
			options={{
				strings: ['Plej serĉitaj cellokoj en Brazilo hodiaŭ', 'sur la Tero kaj en la kosma spaco', 'Ofertoj, kiuj ne povas atendi'],
				autoStart: true,
				loop: true,
				deleteSpeed: 30,
        delay: 230,
        
			}}
		/>
    </div>
    </div>
	)
}

export default Writer
